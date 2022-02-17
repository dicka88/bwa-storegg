import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { postCheckout } from '../../../services/player';

export default function CheckoutConfirmation() {
  const router = useRouter();

  const [checked, setChecked] = useState(false);
  const [checkout, setCheckout] = useState({
    verifyId: '',
    bankAccountName: '',
    nominalItem: {
      _id: '',
    },
    paymentItem: {
      _id: '',
    },
    bankItem: {
      _id: '',
    },
  });
  const [voucher, setVoucher] = useState({
    _id: '',
  });

  useEffect(() => {
    const checkoutLocal = JSON.parse(localStorage.getItem('data-checkout')!);
    const voucherLocal = JSON.parse(localStorage.getItem('data-voucher')!);

    setCheckout(checkoutLocal);
    setVoucher(voucherLocal);
  }, []);

  const onSubmit = async () => {
    const data = {
      name: checkout.bankAccountName,
      verifyId: checkout.verifyId,
      voucherId: voucher._id,
      nominalId: checkout.nominalItem._id,
      paymentId: checkout.paymentItem._id,
      bankId: checkout.bankItem._id,
    };

    try {
      await postCheckout(data);

      localStorage.removeItem('data-checkout');
      localStorage.removeItem('data-voucher');

      router.push('/checkout-complete');
    } catch (err) {
      toast.error('Checkout failed');
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          type="button"
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          disabled={!checked}
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
