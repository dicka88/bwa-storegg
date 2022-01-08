import React from 'react';

interface TransactionStepItemProps {
  title: string;
  desc1: string;
  desc2: string;
  icon: string;
}

export default function TransactionStepItem(props: TransactionStepItemProps) {
  const {
    title, desc1, desc2, icon,
  } = props;

  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img src={icon} width="80" height="80" className="mb-30" alt={title} />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          {' '}
          <br />
          {' '}
          {desc2}
        </p>
      </div>
    </div>
  );
}
