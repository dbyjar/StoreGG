import { useState } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify'

import { checkout } from '../../../services/service/player'

export default function CheckoutConfirmation() {
  const [disabled, setDisabled] = useState(false)
  
  const router = useRouter()
  const onSubmit = async () => {
    const detailItem = await JSON.parse(localStorage.getItem('detailItem')!)
    const voucherDetail = await JSON.parse(localStorage.getItem('voucherDetail')!)

    const setFormData = {
      voucher: voucherDetail._id,
      nominal: detailItem.nominalItem._id,
      payment: detailItem.paymentItem.payment._id,
      bank: detailItem.paymentItem.bank._id,
      name: detailItem.bankAccountName,
      accountUser: detailItem.verifyID,
    }
    
    const response = await checkout(setFormData)
    if (response.error) {
      toast.error(response.message)
    } else {
      toast.success('Success Checkout')

      localStorage.removeItem('detailItem')
      localStorage.removeItem('voucherDetail')

      router.push('/complete-checkout')
    }
  }

  const onConfirmationCheckInputChange = (data:any) => {
    setDisabled(data.target.checked)
  }

  return (
    <>
      <label 
        className="checkbox-label text-lg color-palette-1"
        onChange={(data) => { onConfirmationCheckInputChange(data) }}
      >
        I have transferred the money
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button 
          type="button"
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          disabled={!disabled}
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  )
}
