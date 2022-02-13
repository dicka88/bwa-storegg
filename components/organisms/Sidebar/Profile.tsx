import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getUserCookie } from '../../../helpers/session';

export default function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: {
      secure_url: '/img/avatar-1.png',
    },
  });

  useEffect(() => {
    const userCookie = getUserCookie();

    setUser(userCookie!);
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <Image src={user.avatar.secure_url} width="90" height="90" className="img-fluid mb-20 rounded-full" alt="avatar" />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
