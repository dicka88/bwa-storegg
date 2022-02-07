interface PaymentItemProps {
  uuid: string;
  bankId: string;
  type: string;
  bankName: string;
  onChange: () => void;
}

export default function PaymentItem(props: PaymentItemProps) {
  const {
    bankId, type, bankName, onChange, uuid,
  } = props;

  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-2 pe-md-2 pt-md-2 pb-md-2 pt-2 pb-2"
      htmlFor={uuid}
      onChange={onChange}
    >
      <input className="d-none" type="radio" id={uuid} name="paymentMethod" value={bankId} />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-2xl color-palette-1 fw-medium m-0">{type}</p>
          <svg
            id="icon-check"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
            <path
              d="M5.83301 10L8.46459 12.5L14.1663 7.5"
              stroke="#00BAFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-lg color-palette-1 m-0">{bankName}</p>
      </div>
    </label>
  );
}
