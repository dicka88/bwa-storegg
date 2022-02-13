import Image from 'next/image';
import React from 'react';
import Input from '../../components/atoms/input';
import Sidebar from '../../components/organisms/Sidebar';
import { getUserCookieNode } from '../../helpers/session';
import { UserTypes } from '../../services/dataTypes';

export default function MemberEditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <img src="/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" alt="avatar" />
                  <div
                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center"
                  >
                    <Image src="/icon/ic-avatar.svg" width="24" height="24" alt="avatar" />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <Image src="/icon/ic-upload.svg" width="90" height="90" alt="avatar" />
                  </label>
                  <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                </div>
              </div>
              <div className="pt-30">
                <Input label="Full Name" placeholder="Enter your full name" />
              </div>
              <div className="pt-30">
                <Input label="Email Address" placeholder="Enter Your email" />
              </div>
              <div className="pt-30">
                <Input label="Phone" placeholder="Enter Your phone" />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill">
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;

  try {
    const payload: UserTypes = getUserCookieNode(token);

    return {
      props: {
        user: payload,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: `/signin?redirect=${req.url}`,
        permanent: false,
      },
    };
  }
}
