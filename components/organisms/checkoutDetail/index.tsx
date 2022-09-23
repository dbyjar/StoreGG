import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

interface CheckoutDetailTypes {
  user: any
}

export default function CheckoutDetail(props: CheckoutDetailTypes) {
  const { user } = props
  const { isReady } = useRouter()

  const [price, setPrice] = useState('')
  const [tax, setTax] = useState('')
  const [total, setTotal] = useState('')
  const [checkoutDetail, setCheckoutDetail] = useState({
    verifyId: '',
    nominalItem: {
      price: 0,
      coinName: '',
      coinQuantity: 0,
    },
    paymentItem: {
      payment: {
        type: '',
      },
      bank: {
        name: '',
        bankName: '',
        noRekening: '',
      },
    },
  })

  const setDetailItem = useCallback(async () => {
    const detailItem = await JSON.parse(localStorage.getItem('detailItem')!)
    setCheckoutDetail(detailItem)

    const priceValue = detailItem.nominalItem.price
    setPrice(priceValue.toLocaleString('id-ID'))
    
    const taxValue = (priceValue * 10) / 100
    setTax(taxValue.toLocaleString('id-ID'))
    
    const totalValue = priceValue + taxValue
    setTotal(totalValue.toLocaleString('id-ID'))
  }, [])
  
  useEffect(() => {
    if (isReady) setDetailItem();
  }, [])

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID
          <span className="purchase-details">{checkoutDetail.verifyId}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID
          <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item
          <span className="purchase-details">
            {`${checkoutDetail.nominalItem.coinQuantity} ${checkoutDetail.nominalItem.coinName}`}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price
          <span className="purchase-details">Rp {price}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%)
          <span className="purchase-details">Rp {tax}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total
          <span className="purchase-details color-palette-4">Rp {total}</span>
        </p>
    </div>
    <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name
          <span className="purchase-details">{user.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type
          <span className="payment-details">{checkoutDetail.paymentItem.payment.type}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name
          <span className="payment-details">{checkoutDetail.paymentItem.bank.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name
          <span className="payment-details">{checkoutDetail.paymentItem.bank.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number
          <span className="payment-details">{checkoutDetail.paymentItem.bank.noRekening}</span>
        </p>
    </div>
    </>
  )
}
