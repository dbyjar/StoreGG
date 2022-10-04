import { useCallback, useEffect, useState } from 'react';
import { getTransactionOverview } from '../../../services/service/player'

import ButtonTab from './buttonTab';
import TableRow from './tableRow';

interface historyVoucherTopupTypes {
    category: string
    coinName: string
    coinQuantity: string
    gameName: string
    price: number
    thumbnail: string
}

interface dataTypes {
    _id: string
    value: number
    status: any
    historyVoucherTopup: historyVoucherTopupTypes
}

export default function TransactionContent() {
  const [tab, setTab] = useState('all')
  const [data, setData] = useState([])
  const [spent, setSpent] = useState('0')

  const fetchData = useCallback(async (params: string) => {
    const response = await getTransactionOverview(params)

    const spentValue = response.data.total.toLocaleString('id-ID')

    setSpent(spentValue)
    setData(response.data.data)
  }, [getTransactionOverview])

  const onTabChange = (val: string) => {
    setTab(val)
    fetchData(val)
  }

  useEffect(() => {
    fetchData(tab)
  }, [fetchData])

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
          <div className="mb-30">
              <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
              <h3 className="text-5xl fw-medium color-palette-1">Rp. {spent},-</h3>
          </div>
          <div className="row mt-30 mb-20">
              <div className="col-lg-12 col-12 main-content">
                  <div id="list_status_title">
                    <ButtonTab onClick={() => { onTabChange('all') }} title="All Trx" active={tab === 'all'} />
                    <ButtonTab onClick={() => { onTabChange('success') }} title="Success" active={tab === 'success'} />
                    <ButtonTab onClick={() => { onTabChange('pending') }} title="Pending" active={tab === 'pending'} />
                    <ButtonTab onClick={() => { onTabChange('failed') }} title="Failed" active={tab === 'failed'} />
                  </div>
              </div>
          </div>
          <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
              <div className="main-content main-content-table overflow-auto">
                  <table className="table table-borderless">
                      <thead>
                          <tr className="color-palette-1">
                              <th className="" scope="col">Game</th>
                              <th scope="col">Item</th>
                              <th scope="col">Price</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tbody id="list_status_item">
                        {
                            data.map((row: dataTypes) => {
                              return (
                                <TableRow
                                    id={row._id}
                                    key={row._id}
                                    price={row.value}
                                    status={row.status}
                                    title={row.historyVoucherTopup.gameName}
                                    image={row.historyVoucherTopup.thumbnail}
                                    category={row.historyVoucherTopup.category}
                                    item={`${row.historyVoucherTopup.coinQuantity} ${row.historyVoucherTopup.coinName}`}
                                />
                              )
                            })
                        }
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </main>
  )
}
