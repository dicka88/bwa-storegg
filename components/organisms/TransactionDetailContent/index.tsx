import Link from 'next/link';
import React from 'react';
import NumberFormat from 'react-number-format';
import Row from './Row';

interface TransactionDetailContentTypes {
  transaction: {
    _id: string,
    name: string;
    value: number,
    tax: number,
    status: 'Pending' | 'Success' | 'Failed',
    createdAt: string,
    verifyId: string,
    history: {
      voucher: {
        gameName: string,
        thumbnail: {
          secure_url: string
        }
      },
      nominal: {
        coinName: string,
        coinQuantity: number,
        price: number
      },
      category: {
        name: 'Desktop' | 'Mobile' | 'All'
      },
      payment: {
        paymentType: string,
        bankName: string,
        bankAccountNumber: string
      },
      user: {
        name: string
      }
    }
  }
}

export default function TransactionDetailContent({ transaction }: TransactionDetailContentTypes) {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <div className="mb-4">
          <Link href="/member/transactions">
            <a className="text-decoration-none fw-bold color-palette-1">
              {'< Back'}
            </a>
          </Link>
        </div>
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #
          {transaction._id}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <img
                        src={transaction.history.voucher.thumbnail.secure_url}
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt={transaction.history.voucher.gameName}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {transaction.history.voucher.gameName}
                    </p>
                    <p className="color-palette-2 m-0">
                      Category:
                      {' '}
                      {transaction.history.category.name}
                    </p>
                  </div>
                </div>
                <div>
                  <p className={`fw-medium text-center label ${transaction.status} m-0 rounded-pill`}>{transaction.status}</p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                <Row title="Your Game ID" value={transaction.verifyId} />
                <Row title="Order ID" value={`#${transaction._id}`} />
                <Row title="Item" value={`${transaction.history.nominal.coinQuantity} ${transaction.history.nominal.coinName}`} />
                <Row
                  title="Price"
                  value={(
                    <NumberFormat
                      value={transaction.history.nominal.price}
                      prefix="Rp. "
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                    />
                )}
                />
                <Row
                  title="Tax (10%)"
                  value={(
                    <NumberFormat
                      value={transaction.tax}
                      prefix="Rp. "
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                    />
                  )}
                />
                <Row
                  title="Total"
                  value={(
                    <NumberFormat
                      value={transaction.value}
                      prefix="Rp. "
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                    />
                )}
                  classNameValue="color-palette-4"
                />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                <Row title="Your Account Name" value={transaction.history.user.name} />
                <Row title="Type" value={transaction.history.payment.paymentType} />
                <Row title="Bank Name" value={transaction.history.payment.bankName} />
                <Row title="Bank Account Name" value={transaction.name} />
                <Row title="Bank Number" value={transaction.history.payment.bankAccountNumber} />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="/#"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
