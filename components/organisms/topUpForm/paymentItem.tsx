/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
interface PaymentItemTypes {
  bankID: string;
  type: string;
  name: string;
  onChange: () => void
}

export default function PaymentItem(props: PaymentItemTypes) {
  const {
    bankID, type, name, onChange,
  } = props;

  return (
    <label 
      htmlFor={`transfer${bankID}`}
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      key={bankID}
      onChange={onChange}
    >
      <input
        type="radio"
        value="transfer"
        className="d-none"
        name="paymentMethod"
        id={`transfer${bankID}`}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{ type }</p>
          <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <p className="text-lg color-palette-1 m-0" key={bankID}>{ name }</p>
      </div>
    </label>
  )
}
