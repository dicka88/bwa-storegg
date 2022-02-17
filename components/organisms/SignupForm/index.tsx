import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name } = e.target;
    const { value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    localStorage.setItem('user', JSON.stringify(form));

    router.push('/signup-photo');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="pb-50">
        <Link href="/" passHref>
          <a className="navbar-brand">
            <Image src="/icon/icon.svg" height={60} width={60} alt="logo" />
          </a>
        </Link>
      </div>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
      <div className="pt-50">
        <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">Full Name</label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email
          Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          type="submit"
        >
          Continue
        </button>
        <Link href="/signin" passHref>
          <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" role="button">
            Sign In
          </a>
        </Link>
      </div>
    </form>
  );
}
