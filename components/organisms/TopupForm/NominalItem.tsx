import NumberFormat from 'react-number-format';

interface NominalItemProps {
    _id: string;
    coinName: string;
    coinQuantity: number;
    price: number;
    onChange: () => void;
}

export default function NominalItem(props: NominalItemProps) {
  const {
    coinName, coinQuantity, price, _id, onChange,
  } = props;

  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-2 pe-md-2 pt-md-2 pb-md-2 pt-2 pb-2"
      htmlFor={_id}
      onChange={onChange}
    >
      <input className="d-none" type="radio" id={_id} name="topup" value={_id} />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-2xl color-palette-1 m-0">
            <span className="fw-semibold">{coinQuantity}</span>
            {' '}
            {coinName}
          </p>
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
        <p className="text-lg color-palette-1 m-0">
          <NumberFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </div>
    </label>
  );
}
