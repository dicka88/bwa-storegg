import NumberFormat from 'react-number-format';
import {
  BankTypes, NominalTypes, PaymentTypes,
} from '../../../services/dataTypes';

interface CheckoutDetailProps {
  checkout: {
    verifyId: string,
    bankAccountName: string,
    bankItem: BankTypes,
    nominalItem: NominalTypes,
    paymentItem: PaymentTypes,
  }
}

export default function CheckoutDetail(props: CheckoutDetailProps) {
  const { checkout } = props;

  const {
    verifyId, bankAccountName, bankItem, nominalItem, paymentItem,
  } = checkout;

  const tax = (10 / 100) * Number(nominalItem.price);
  const total = Number(nominalItem.price) + tax;

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID
          {' '}
          <span className="purchase-details">
            {verifyId}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID
          {' '}
          <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item
          {' '}
          <span className="purchase-details">
            {nominalItem.coinQuantity}
            {' '}
            {nominalItem.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price
          {' '}
          <span className="purchase-details">
            <NumberFormat
              value={nominalItem.price}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%)
          {' '}
          <span className="purchase-details">
            <NumberFormat
              value={tax}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total
          {' '}
          <span className="purchase-details color-palette-4">
            <NumberFormat
              value={total}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name
          {' '}
          <span className="purchase-details">
            {bankAccountName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type
          {' '}
          <span className="payment-details">{paymentItem.type}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name
          {' '}
          <span className="payment-details">{bankItem.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name
          {' '}
          <span className="payment-details">
            {bankItem.name}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number
          {' '}
          <span className="payment-details">
            {bankItem.bankAccountNumber}
          </span>
        </p>
      </div>
    </>
  );
}
