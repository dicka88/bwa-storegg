import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { UserTypes } from '../../../services/dataTypes';

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    username: '',
    avatar: {
      secure_url: '',
    },
    email: '',
  });

  useEffect(() => {
    try {
      const token = Cookie.get('token');

      if (!token) return;

      const jwtToken = window.atob(token);
      const payload: UserTypes = jwtDecode(jwtToken);

      setIsLogin(true);
      setUser(payload);
    } catch (err) {
      setIsLogin(false);
      toast.error('Invalid token');
    }
  }, []);

  const handleLogout = () => {
    Cookie.remove('token');
    setIsLogin(false);
    router.push('/');
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src={user.avatar.secure_url || '/img/avatar-1.png'}
              className="rounded-circle"
              width="40"
              height="40"
              alt="Avatar"
            />
          </a>
          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">My Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/member/wallet">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">Account Settings</a>
              </Link>
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="dropdown-item text-lg color-palette-2">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link href="/signin" passHref>
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>

  );
}
