import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface TableRowProps {
  title: string;
  image: string;
  platform: 'Desktop' | 'Mobile' | 'All';
  item: string;
  price: number;
  status: 'Pending' | 'Success' | 'Failed';
}

export default function TableRow(props: TableRowProps) {
  const {
    title, image, platform, item, price, status,
  } = props;

  const statusClassnames = classNames({
    'float-start': true,
    'icon-status': true,
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image
            src={image}
            width="80"
            height="60"
            alt={title}
          />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{platform}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClassnames} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
