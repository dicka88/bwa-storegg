import React from 'react';
import { GameItemTypes } from '../../../services/dataTypes';

interface CheckoutItemProps {
  voucher: GameItemTypes
}

export default function CheckoutItem(props: CheckoutItemProps) {
  const { voucher } = props;

  const { thumbnail, name, category } = voucher;

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img src={thumbnail.secure_url} className="img-fluid" alt={name} />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          {name}
        </p>
        <p className="color-palette-2 m-0">
          Category:
          {' '}
          {category.name}
        </p>
      </div>
    </div>
  );
}
