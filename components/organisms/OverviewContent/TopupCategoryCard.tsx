import Image from 'next/image';
import React, { ReactNode } from 'react';

interface TopupCategoryCardProps {
  children: ReactNode;
  icon: 'category-game-desktop' | 'category-game-mobile' | 'category-other';
  amount: number;
}

export default function TopupCategoryCard(props: TopupCategoryCardProps) {
  const {
    children, icon, amount,
  } = props;

  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);

  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/${icon}.svg`} alt="icon" width={40} height={40} />
          <p className="color-palette-1 mb-0 ms-12">
            {children}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">{formattedAmount}</p>
        </div>
      </div>
    </div>
  );
}
