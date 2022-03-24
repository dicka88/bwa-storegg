import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { signin } from '../../../services/auth';
import Logo from '../../atoms/Logo';

export default function SigninForm() {
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFormOnSubmit = async (e: any) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    // Form validation
    if (!form.email || !form.password) {
      toast.warning('Please fill email and password first');
      setIsButtonDisabled(false);
      return false;
    }

    try {
      const result = await signin(form);
      const { token } = result;

      const tokenBase64 = window.btoa(token);

      Cookies.set('token', tokenBase64, { expires: 30 });

      toast.success('Sign in successful');
      localStorage.setItem('token', result.token);

      router.push('/');
    } catch (err: any) {
      setIsButtonDisabled(false);
      toast.error(err.response?.data?.message);
    }

    return false;
  };

  return (
    <form onSubmit={handleFormOnSubmit}>
      <div className="container mx-auto">
        <div className="pb-50 text-center">
          <Logo />
        </div>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">
          Sign In
        </h2>
        <p className="text-lg color-palette-1 m-0">
          Masuk untuk melakukan proses top up
        </p>
        <div className="pt-50">
          <label
            htmlFor="email"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Email Address
          </label>
          <input
            type="email"
            className="form-control rounded-pill text-lg"
            id="email"
            name="email"
            aria-describedby="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="pt-30">
          <label
            htmlFor="password"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-pill text-lg"
            id="password"
            name="password"
            aria-describedby="password"
            placeholder="Your password"
            value={form.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <button
            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            type="submit"
            disabled={isButtonDisabled}
          >
            Continue to Sign In
          </button>
          <Link href="/signup" passHref>
            <a
              className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
              role="button"
            >
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </form>
  );
}
