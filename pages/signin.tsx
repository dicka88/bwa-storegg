import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SigninForm from '../components/organisms/SigninForm';

export default function signin() {
  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <SigninForm />
        </div>
        <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
          <img
            src="/img/Header-9.png"
            width="502"
            height="391"
            className="img-fluid pb-50"
            alt="this is a"
          />
          <h2 className="text-4xl fw-bold text-white mb-30">
            Win the battle.
            <br />
            Be the Champion.
          </h2>
          <p className="text-white m-0">
            Kami menyediakan jutaan cara untuk
            <br />
            membantu players menjadi
            <br />
            pemenang sejati
          </p>
        </div>
      </div>
    </section>
  );
}
