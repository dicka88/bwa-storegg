import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Menu from './Menu';
import Auth from './Auth';
import ToggleMenu from './ToggleMenu';
import Logo from '../../atoms/Logo';

export default function Navbar() {
  const { asPath } = useRouter();
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Logo />
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active={asPath === '/'} />
              <Menu title="Games" href="/games" active={asPath === '/games'} />
              <Menu title="Rewards" href="/rewards" active={asPath === '/rewards'} />
              <Menu title="Discover" href="/discover" active={asPath === '/discover'} />
              <Menu title="Global Rank" href="/global-rank" active={asPath === '/global-rank'} />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
