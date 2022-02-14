import React from 'react';

interface RowProps {
  title: string;
  value: string | any;
  classNameValue?: string;
}

export default function Row({ title, value, classNameValue }: Partial<RowProps>) {
  return (
    <p className="text-lg mb-20">
      {title}
      <span className={`purchase-details ${classNameValue || ''}`}>
        {value}
      </span>
    </p>
  );
}
