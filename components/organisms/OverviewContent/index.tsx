import React from 'react';
import TableRow from './TableRow';
import TopupCategoryCard from './TopupCategoryCard';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>

        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <TopupCategoryCard icon="category-game-desktop" amount={180000}>
                Game
                <br />
                Desktop
              </TopupCategoryCard>
              <TopupCategoryCard icon="category-game-mobile" amount={50000}>
                Game
                <br />
                Mobile
              </TopupCategoryCard>
              <TopupCategoryCard icon="category-other" amount={150000}>
                Other
                <br />
                Categories
              </TopupCategoryCard>
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
                <TableRow title="Mobile Legends" platform="Mobile" image="/img/overview-1.png" item="500 Dm" price={50000} status="Pending" />
                <TableRow title="Call of Duty: Modern" platform="Desktop" image="/img/overview-2.png" item="500 Dm" price={50000} status="Failed" />
                <TableRow title="Mobile Legends" platform="Mobile" image="/img/overview-3.png" item="500 Dm" price={50000} status="Pending" />
                <TableRow title="Mobile Legends" platform="Mobile" image="/img/overview-4.png" item="500 Dm" price={50000} status="Success" />
                <TableRow title="Mobile Legends" platform="Mobile" image="/img/overview-5.png" item="500 Dm" price={50000} status="Pending" />
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
