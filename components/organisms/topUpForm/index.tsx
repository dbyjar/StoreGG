/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify'
import { Nominal, Payment } from '../../../services/data-types/index'

import PaymentItem from './paymentItem';
import 'react-toastify/dist/ReactToastify.css'

interface TopUpFormProps {
    nominal: Nominal[];
    payment: Payment[];
}

export default function TopUpForm(props: TopUpFormProps) {
  const { nominal, payment } = props;

  const [verifyId, setVerifyId] = useState('')
  const [bankAccountName, setBankAccountName] = useState('')
  const [nominalItem, setnominalItem] = useState({ _id: '' })
  const [paymentItem, setpaymentItem] = useState({
    bank: {},
    payment: { 
      _id: '',
    },
  })

  const router = useRouter()
  const onSubmit = async () => {
    if (
      !verifyId
        || !paymentItem.payment._id.length
        || !nominalItem._id.length
        || !bankAccountName
    ) {
      return toast.error('complete the form to proceed with payment')
    }

    const data = {
      verifyId,
      paymentItem,
      nominalItem,
      bankAccountName,
    }

    await localStorage.setItem('detailItem', JSON.stringify(data))
    router.push('/checkout')

    return null;
  }

  return (
    <>
        <form>
            <div className="pt-md-50 pt-30">
                <div className="">
                    <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">
                        Verify ID
                    </label>
                    <input
                        type="text"
                        className="form-control rounded-pill text-lg"
                        placeholder="Enter your ID"
                        value={verifyId}
                        onChange={(e) => { setVerifyId(e.target.value) }}
                    />
                </div>
            </div>
            <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                <div className="row justify-content-between">

                    {
                        nominal.map((item) => {
                          const price = item.price.toLocaleString('id-ID')

                          return (
                                <label 
                                    className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
                                    htmlFor={`topup${item._id}`}
                                    key={item._id}
                                    onChange={() => { setnominalItem(item) }}
                                >
                                    <input className="d-none" type="radio" id={`topup${item._id}`} name="topup" value={`topup${item._id}`} />
                                    <div className="detail-card">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-3xl color-palette-1 m-0">
                                                <span className="fw-medium">{ item.coinQuantity }</span> { ' ' }
                                                { item.coinName }
                                            </p>
                                            <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                                                <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-lg color-palette-1 m-0">Rp { price }</p>
                                    </div>
                                </label>
                          );
                        })
                    }

                    <div className="col-lg-4 col-sm-6" />
                </div>
            </div>
            <div className="pb-md-50 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                <fieldset id="paymentMethod">
                    <div className="row justify-content-between">

                        {
                            // eslint-disable-next-line array-callback-return
                            // eslint-disable-next-line arrow-body-style
                            payment.map((row) => row.banks.map((bank) => {
                              return (
                                <PaymentItem
                                    key={bank._id}
                                    bankID={bank._id}
                                    type={row.type}
                                    name={bank.bankName}
                                    onChange={() => { setpaymentItem({ payment: row, bank }) }}
                                />
                              )
                            }))
                        }

                        <div className="col-lg-4 col-sm-6" />
                    </div>
                </fieldset>
            </div>
            <div className="pb-50">
                <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Bank Account Name
                </label>
                <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    placeholder="Enter your Bank Account Name"
                    value={bankAccountName}
                    onChange={(e) => { setBankAccountName(e.target.value) }}
                />
            </div>
            <div className="d-sm-block d-flex flex-column w-100">
                <button
                    type="button"
                    className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
                    onClick={onSubmit}
                >
                    Continue
                </button>
            </div>
        </form>
        <ToastContainer />
    </>
  )
}
