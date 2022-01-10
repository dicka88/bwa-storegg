import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Profile from './Profile';
import Footer from './Footer';
import MenuItem from './MenuItem';

export default function Sidebar() {
  const router = useRouter();

  const path = router.asPath;

  const handleLogout = (e: any) => {
    e.preventDefault();

    // eslint-disable-next-line no-alert
    window.alert('Logout');
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" link="/member" icon="/icon/ic-menu-overview.svg" active={path === '/member'} />
          <MenuItem title="Transactions" link="/member/transactions" icon="/icon/ic-menu-transaction.svg" active={path === '/member/transactions'} />
          <MenuItem title="Messages" link="/member/messages" icon="/icon/ic-menu-message.svg" active={path === '/member/messages'} />
          <MenuItem title="Card" link="/member/card" icon="/icon/ic-menu-card.svg" active={path === '/member/card'} />
          <MenuItem title="Rewards" link="/member/rewards" icon="/icon/ic-menu-reward.svg" active={path === '/member/rewards'} />
          <MenuItem title="Settings" link="/member/settings" icon="/icon/ic-menu-setting.svg" active={path === '/member/settings'} />
          <MenuItem title="Log out" link="/member/logout" icon="/icon/ic-menu-logout.svg" active={path === '/member/logout'} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
