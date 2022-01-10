import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

interface MenuItemProps {
  title: string;
  icon: string;
  link: string;
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, icon, link, active,
  } = props;

  const classItem = classNames({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={icon || ''} width="24" height="24" />
      </div>
      <p className="item-title m-0">
        <Link href={link || '/'} passHref>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
