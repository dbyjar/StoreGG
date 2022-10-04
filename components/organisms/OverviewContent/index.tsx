import { useCallback, useEffect, useState } from 'react'
import { getMemberOverview } from '../../../services/service/player'

import Category from './category'
import TableRow from './tableRow'

interface CategoryTypes {
    _id: string
    name: string
    value: number
}

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

export default function OverviewContent() {
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])

  const fetchData = useCallback(async () => {
    const response = await getMemberOverview()

    setData(response?.data?.data)
    setCategory(response?.data?.count)
  }, [getMemberOverview])

  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
              <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
              <div className="main-content">
                  <div className="row">
                      {
                        category.map((cat: CategoryTypes) => {
                          return (
                            <Category
                                icon={cat.name === 'Mobile' ? 'category-2' : 'category-1'}
                                nominal={cat.value}
                                key={cat._id}
                            >
                                Game <br /> {cat.name}
                            </Category>
                          )
                        })
                      }
                  </div>
              </div>
          </div>
          <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
              <div className="main-content main-content-table overflow-auto">
                  <table className="table table-borderless">
                      <thead>
                          <tr className="color-palette-1">
                              <th className="text-start" scope="col">Game</th>
                              <th scope="col">Item</th>
                              <th scope="col">Price</th>
                              <th scope="col">Status</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                            data.map((row: dataTypes) => {
                              return (
                                <TableRow
                                    key={row._id}
                                    image={row.historyVoucherTopup.thumbnail}
                                    title={row.historyVoucherTopup.gameName}
                                    category={row.historyVoucherTopup.category}
                                    value={row.historyVoucherTopup.coinQuantity}
                                    nominal={row.value}
                                    status={row.status}
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
