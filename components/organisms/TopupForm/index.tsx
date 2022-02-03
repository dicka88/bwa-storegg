import Link from 'next/link';
import React from 'react';
import NominalItem from './NominalItem';
import PaymentItem from './PaymentItem';

interface Nominal {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}
interface TopupFormProps {
  nominals: Array<Nominal>;
  payments: [{
    _id: string;
    type: string;
    banks: [{
      _id: string;
      name: string,
      bankName: string,
      bankAccountNumber: string
    }]
  }]
}

export default function TopupForm(props: TopupFormProps) {
  const { nominals, payments } = props;

  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify
            ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      {/* Nominal */}
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => <NominalItem key={nominal._id} {...nominal} />)}
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      {/* Payment method */}
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
        <fieldset id="paymentMethod">
          {payments.map((payment) => (
            <div className="row justify-content-between">
              {payment.banks.map((bank) => (
                <PaymentItem bankId={bank._id} type={payment.type} bankName={bank.bankName} />
              ))}
              <div className="col-lg-4 col-sm-6" />
            </div>
          ))}
        </fieldset>
      </div>
      <div className="pb-50">
        <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank
          Account
          Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <Link href="/checkout">
          <a
            type="submit"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          >
            Continue
          </a>
        </Link>
      </div>
    </form>
  );
}
