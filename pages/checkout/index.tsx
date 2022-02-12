import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import CheckoutConfirmation from '../../components/organisms/CheckoutConfirmation';
import CheckoutDetail from '../../components/organisms/CheckoutDetail';
import CheckoutItem from '../../components/organisms/CheckoutItem';
import { UserTypes } from '../../services/dataTypes';

interface CheckoutProps {
  user: UserTypes
}

export default function Checkout(props: CheckoutProps) {
  const [checkout, setCheckout] = useState({
    verifyId: '',
    bankAccountName: '',
    bankItem: {
      _id: '',
      name: '',
      bankAccountNumber: '',
      bankName: '',
    },
    nominalItem: {
      coinName: '',
      coinQuantity: 0,
      price: 0,
    },
    paymentItem: {
      _id: '',
      type: '',
      banks: [],
    },
  });

  const [voucher, setVoucher] = useState({
    _id: '',
    status: false,
    name: '',
    slug: '',
    thumbnail: {
      url: '',
      secure_url: '',
    },
    category: {
      _id: '',
      name: '',
    },
  });

  useEffect(() => {
    const checkoutData = JSON.parse(localStorage.getItem('data-checkout') || '{}');
    const voucherData = JSON.parse(localStorage.getItem('data-voucher') || '{}');

    setCheckout(checkoutData);
    setVoucher(voucherData);
  }, []);

  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link href="/">
            <a>
              <Image src="/icon/icon.svg" alt="logo" height={60} width={60} />
            </a>
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
        </div>
        <CheckoutItem
          voucher={voucher}
        />
        <hr />
        <CheckoutDetail
          checkout={checkout}
        />
        <CheckoutConfirmation />
      </div>
    </section>
  );
}

export async function getServerSideProps({ req }: any) {
  const { token } = req.cookies;

  try {
    if (!token) throw new Error('Token is missing');

    const jwtToken = Buffer.from(token, 'base64').toString('ascii');
    const payload = jwtDecode(jwtToken);

    return {
      props: {
        user: payload,
      },
    };
  } catch (err) {
    return {
      props: {
        redirect: '/signin',
        permanent: false,
      },
    };
  }
}
