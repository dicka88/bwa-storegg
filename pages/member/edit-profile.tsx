import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../components/atoms/input';
import Sidebar from '../../components/organisms/Sidebar';
import { getUserCookie, getUserCookieNode } from '../../helpers/session';
import { UserTypes } from '../../services/dataTypes';
import { updateProfile } from '../../services/member';

export default function MemberEditProfile() {
  const router = useRouter();
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [rawAvatar, setRawAvatar] = useState();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    avatar: {
      secure_url: '',
    },
  });

  useEffect(() => {
    const userCookie = getUserCookie();

    if (userCookie) {
      setUser(userCookie);
    }
  }, []);

  const handleAvatarChange = (e: any) => {
    const [file] = e.target.files;

    if (file) {
      const img = URL.createObjectURL(file);
      setRawAvatar(file);
      setUser({
        ...user,
        avatar: {
          secure_url: img,
        },
      });
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitButtonDisabled(true);

    const data = new FormData();

    data.append('name', user.name);
    data.append('email', user.email);
    data.append('phoneNumber', user.phoneNumber);

    if (rawAvatar) {
      data.append('avatar', rawAvatar);
    }

    try {
      const result = await updateProfile(data);

      const { token } = result;

      const tokenBase64 = window.btoa(token);

      Cookies.remove('token');
      Cookies.set('token', tokenBase64, { expires: 30 });

      localStorage.setItem('token', result.token);
      toast.success('Succesful update profile');

      router.reload();
    } catch (err) {
      toast.error('Internal server error');
    } finally {
      setIsSubmitButtonDisabled(false);
    }
  };

  const handleImageClick = () => {
    setUser({
      ...user,
      avatar: {
        secure_url: '',
      },
    });
  };

  return (
    <section className="edit-profile overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="" onSubmit={handleFormSubmit}>
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <div className="img-upload">
                    <label htmlFor="avatar" style={{ cursor: 'pointer' }}>
                      <img src={user.avatar.secure_url || '/icon/ic-upload.svg'} width="90" height="90" className="avatar img-fluid rounded-full" alt="avatar" />
                    </label>
                  </div>
                  {user.avatar.secure_url && (
                  <div
                    role="button"
                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center"
                    onKeyDown={handleImageClick}
                    onClick={handleImageClick}
                  >
                    <Image src="/icon/ic-avatar.svg" width="24" height="24" alt="avatar" />
                  </div>
                  )}
                </div>
                <div className="image-upload">
                  <input id="avatar" type="file" name="avatar" onChange={handleAvatarChange} accept="image/png, image/jpeg" />
                </div>
              </div>
              <div className="pt-30">
                <Input label="Full Name" name="name" value={user.name} onChange={handleInputChange} placeholder="Enter your full name" />
              </div>
              <div className="pt-30">
                <Input label="Email Address" name="email" value={user.email} onChange={handleInputChange} placeholder="Enter Your email" />
              </div>
              <div className="pt-30">
                <Input label="Phone Number" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} placeholder="Enter Your Phone Number" />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill" disabled={isSubmitButtonDisabled}>
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
    url: string,
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
