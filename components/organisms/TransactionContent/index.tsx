import React, { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import TableRow from './TableRow';
import ButtonTab from './ButtonTab';
import { capitalize } from '../../../helpers/string';
import { getTransactions } from '../../../services/member';

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

export default function TransactionContent() {
  const [activeTab, setActiveTab] = useState('all');
  const [totalSpent, setTotalSpent] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const getTransactionCallback = useCallback(async (status = 'all') => {
    const data = await getTransactions(status);

    setTotalSpent(data.total);
    setTransactions(data.transactions);
  }, []);

  useEffect(() => {
    getTransactionCallback();
  }, []);

  const setTab = (status = '') => {
    getTransactionCallback(status);
    setActiveTab(status);
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat
              value={totalSpent}
              thousandSeparator="."
              decimalSeparator=","
              prefix="Rp. "
              displayType="text"
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab onClick={() => setTab('all')} title="All Trx" active={activeTab === 'all'} />
              <ButtonTab onClick={() => setTab('success')} title="Success" active={activeTab === 'success'} />
              <ButtonTab onClick={() => setTab('pending')} title="Pending" active={activeTab === 'pending'} />
              <ButtonTab onClick={() => setTab('failed')} title="Failed" active={activeTab === 'failed'} />
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
                {transactions.map((item: TransactionItemTypes) => (
                  <TableRow
                    key={item._id}
                    _id={item._id}
                    title={item.history.voucher.gameName}
                    platform={item.history.category.name}
                    image={item.history.voucher.thumbnail.secure_url}
                    item={`${item.history.nominal.coinQuantity} ${item.history.nominal.coinName}`}
                    price={item.value}
                    status={capitalize(item.status)}
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
