import Image from 'next/image';
import { useRouter } from 'next/router';
import Menu from './Menu';
import Auth from './Auth';
import ToggleMenu from './ToggleMenu';

export default function Navbar() {
  const { asPath } = useRouter();
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image src="/icon/icon.svg" alt="logo" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active={asPath === '/'} />
              <Menu title="Games" href="/games" active={asPath === '/games'} />
              <Menu title="Rewards" href="/rewards" active={asPath === '/rewards'} />
              <Menu title="Discover" href="/discover" active={asPath === '/discover'} />
              <Menu title="Global Rank" href="/global-rank" active={asPath === '/global-rank'} />
              <Auth isLogin={false} />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
