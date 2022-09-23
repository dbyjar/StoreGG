import { useEffect, useState } from 'react'
import baseURL from '../../../services/index'

export default function CheckoutItem() {
  const [checkoutItem, setCheckoutItem] = useState({
    name: '',
    thumbnail: '1.png',
    category: {
      name: '',
    },
  })

  useEffect(() => {
    const voucher = JSON.parse(localStorage.getItem('voucherDetail')!)

    setCheckoutItem(voucher)
  }, [])

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
        <div className="pe-4">
            <div className="cropped">
                <img
                  src={`${baseURL}/uploads/${checkoutItem.thumbnail}`}
                  className="img-fluid"
                  alt="voucher-thumbnail"
                />
            </div>
        </div>
        <div>
            <p className="fw-bold text-xl color-palette-1 mb-10">
              {checkoutItem.name}
            </p>
            <p className="color-palette-2 m-0">
              Category: {checkoutItem.category.name}
            </p>
        </div>
    </div>
  )
}
