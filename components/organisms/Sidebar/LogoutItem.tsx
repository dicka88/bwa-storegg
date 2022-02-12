import Image from 'next/image';
import React from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

export default function LogoutItem() {
  const router = useRouter();

  const handleLogout = (e: any) => {
    e.preventDefault();
    Cookie.remove('token');
    router.push('/');
  };

  return (
    <div className="item mb-30">
      <div className="me-3">
        <Image src="/icon/ic-menu-logout.svg" width="24" height="24" />
      </div>
      <p className="item-title m-0">
        <button onClick={handleLogout} type="button" className="text-lg text-decoration-none">
          Logout
        </button>
      </p>
    </div>
  );
}
