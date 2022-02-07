import uuid from 'react-uuid';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import NominalItem from './NominalItem';
import PaymentItem from './PaymentItem';
import { BankTypes, NominalTypes, PaymentTypes } from '../../../services/dataTypes';

interface TopupFormProps {
  nominals: Array<NominalTypes>;
  payments: [{
    _id: string;
    type: string;
    banks: Array<BankTypes>
  }]
}

export default function TopupForm(props: TopupFormProps) {
  const router = useRouter();
  const { nominals, payments } = props;

  const [verifyId, setVerifyId] = useState('');
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const [bankItem, setBankItem] = useState({});
  const [bankAccountName, setBankAccountName] = useState('');

  const handleOnPaymentItemChange = (payment: PaymentTypes, bank: BankTypes) => {
    setPaymentItem(payment);
    setBankItem(bank);
  };

  // Checking form
  const onSubmit = (e: any) => {
    e.preventDefault();

    if (
      verifyId === ''
      || nominalItem === {}
      || paymentItem === {}
      || bankItem === {}
      || bankAccountName === ''
    ) return toast.warning('Please complete the form first');

    const data = {
      verifyId,
      nominalItem,
      paymentItem,
      bankItem,
      bankAccountName,
    };

    console.log(data);

    localStorage.setItem('data-checkout', JSON.stringify(data));
    router.push('/checkout');

    return false;
  };

  return (
    <form onSubmit={onSubmit} method="POST">
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
            value={verifyId}
            onChange={(e) => setVerifyId(e.target.value)}
          />
        </div>
      </div>
      {/* Nominal */}
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalItem
              key={nominal._id}
              {...nominal}
              onChange={() => setNominalItem(nominal)}
            />
          ))}
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
                <PaymentItem
                  bankId={bank._id}
                  type={payment.type}
                  bankName={bank.bankName}
                  uuid={uuid()}
                  onChange={() => handleOnPaymentItemChange(payment, bank)}
                />
              ))}
              <div className="col-lg-4 col-sm-6" />
            </div>
          ))}
        </fieldset>
      </div>
      {/* Bank Account Name */}
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
          value={bankAccountName}
          onChange={(e) => setBankAccountName(e.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
