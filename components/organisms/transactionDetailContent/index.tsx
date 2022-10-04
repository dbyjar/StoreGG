import DetailRow from './detailRow'
import baseURL from '../../../services/index'

export default function TransactionsDetailContent(props: any) {
  const { detail } = props

  const formatNumber = (val?: number|string) => {
    if (!val) return;
    // eslint-disable-next-line consistent-return
    return val.toLocaleString('id-ID')
  }

  const price = `Rp. ${formatNumber(detail?.historyVoucherTopup?.price)}`
  const tax = `Rp. ${formatNumber(detail?.tax)}`
  const total = `Rp. ${formatNumber(detail?.value)}`

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details</h2>
          <div className="details">
              <div className="main-content main-content-card overflow-auto">
                  <section className="checkout mx-auto">
                      <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                          <div className="game-checkout d-flex flex-row align-items-center">
                              <div className="pe-4">
                                  <div className="cropped">
                                      <img src={`${baseURL}/uploads/${detail?.historyVoucherTopup?.thumbnail}`} width="200" height="130"
                                          className="img-fluid" alt="thumbnail" />
                                  </div>
                              </div>
                              <div>
                                <p className="fw-bold text-xl color-palette-1 mb-10">
                                    {detail?.historyVoucherTopup?.gameName}
                                </p>
                                <p className="color-palette-2 m-0">
                                    Category: {detail?.historyVoucherTopup?.category}
                                </p>
                              </div>
                          </div>
                          <div>
                              <p className="fw-medium text-center label pending m-0 rounded-pill">
                                  {detail.status}
                              </p>
                          </div>
                      </div>
                      <hr />
                      <div className="purchase pt-30">
                          <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                          <DetailRow label="Your Game ID" value={detail.name} />
                          {/* <DetailRow label="Order ID" value="#GG001" /> */}
                          <DetailRow label="Item" value={`${detail?.historyVoucherTopup?.coinQuantity} ${detail?.historyVoucherTopup?.coinName}`} />
                          <DetailRow label="Price" value={price} />
                          <DetailRow label="Tax (10%)" value={tax} />
                          <DetailRow label="Total" value={total} className="color-palette-4" />
                      </div>
                      <div className="payment pt-10 pb-10">
                          <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                          <DetailRow label="Your Account Name" value={detail.name} />
                          <DetailRow label="Type" value={detail?.historyPayment?.type} />
                          <DetailRow label="Bank Name" value={detail?.historyPayment?.bankName} />
                          <DetailRow label="Bank Account Name" value={detail?.historyPayment?.name} />
                          <DetailRow label="Bank Number" value={detail?.historyPayment?.noRekening} />
                      </div>
                      <div className="d-md-block d-flex flex-column w-100">
                          <a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" href="/#"
                              role="button">WhatsApp ke Admin</a>
                      </div>
                  </section>
              </div>
          </div>
      </div>
  </main>
  )
}
