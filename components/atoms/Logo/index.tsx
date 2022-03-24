import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link href="/">
      <a className="navbar-brand d-flex align-items-center">
        <Image src="/icon/icon.svg" alt="logo" width={60} height={60} />
        <h2 className="px-4 my-0 d-inline fw-bold color-palette-1">Store GG</h2>
      </a>
    </Link>
  );
}
