import React, { useEffect, useCallback, useState } from 'react';
import { getOverview } from '../../../services/member';
import TableRow from './TableRow';
import TopupCategoryCard from './TopupCategoryCard';
import { capitalize } from '../../../helpers/string';

interface CountItemTypes {
  _id: string,
  name: string,
  value: number
}

interface TransactionItemTypes {
  _id: string,
  value: number,
  status: 'Pending' | 'Success' | 'Failed',
  createdAt: string,
  history: {
    voucher: {
      gameName: string,
      thumbnail: {
        secure_url: string
      }
    },
    nominal: {
      coinName: string,
      coinQuantity: number
    },
    category: {
      name: 'Desktop' | 'Mobile' | 'All'
    }
  }
}

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const callOverview = useCallback(async () => {
    const overview = await getOverview();

    setCount(overview.count);
    setTransactions(overview.transactions);
  }, []);

  useEffect(() => {
    callOverview();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>

        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count.map((item: CountItemTypes) => (
                <TopupCategoryCard key={item._id} icon="category-game-desktop" amount={item.value}>
                  Game
                  <br />
                  {item.name}
                </TopupCategoryCard>
              ))}
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
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 && (
                  <tr>
                    <td colSpan={5} className="flex justify-center text-center">
                      <img
                        src="https://cdn.dribbble.com/users/44167/screenshots/4199208/media/6b915e31225bcd92bee249dc7a977dda.png"
                        alt="Empty"
                        style={{ width: '400px' }}
                      />
                      <p className="text-center">No transactions found</p>
                    </td>
                  </tr>
                )}

                {transactions.map((item: TransactionItemTypes) => (
                  <TableRow
                    key={item._id}
                    title={item.history.voucher.gameName}
                    platform={item.history.category.name}
                    image={item.history.voucher.thumbnail.secure_url}
                    item={`${item.history.nominal.coinQuantity} ${item.history.nominal.coinName}`}
                    price={item.value}
                    status={capitalize(item.status)}
                    date={item.createdAt}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
