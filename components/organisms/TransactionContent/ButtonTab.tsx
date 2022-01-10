import classNames from 'classnames';
import React from 'react';

interface ButtonTabProps {
  title: string;
  active?: boolean;
}

export default function ButtonTab({ title, active }: Partial<ButtonTabProps>) {
  const btnClass = classNames({
    'btn  btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });

  return (
    <a data-filter="*" href="/#" className={btnClass}>
      {title}
    </a>
  );
}
