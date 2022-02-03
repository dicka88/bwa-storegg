import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import TopupForm from '../../components/organisms/TopupForm';
import TopupItem from '../../components/organisms/TopupItem';
import { getVoucher } from '../../services/player';

export default function Detail() {
  const { query, isReady } = useRouter();

  const [detailVoucher, setDetailVoucher] = useState({
    name: '',
    thumbnail: {
      secure_url: '',
    },
    category: {
      name: '',
    },
    nominals: [],
  });

  const [payments, setPayments] = useState([]);

  const getVoucherDetail = useCallback(async (id) => {
    const data = await getVoucher(id);
    if (data) {
      setDetailVoucher(data.voucher);
      setPayments(data.payment);
    }
  }, [getVoucher]);

  useEffect(() => {
    if (isReady) {
      getVoucherDetail(query.id);
    }
  }, [isReady]);

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
            <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopupItem device="desktop" data={detailVoucher} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopupItem device="mobile" data={detailVoucher} />
              <hr />
              <TopupForm nominals={detailVoucher.nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
