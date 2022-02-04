import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { getCategory } from '../services/player';
import { CategoryTypes } from '../services/dataTypes';
import { signup } from '../services/auth';

export default function SignupPhoto() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState('');
  const [avatar, setAvatar] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState('/icon/upload.svg');

  const getCategories = useCallback(async () => {
    const data = await getCategory();

    setCategories(data.categories);
    setFavorite(data.categories[0]._id);
  }, [getCategory]);

  const getLocalStorage = useCallback(() => {
    const data = JSON.parse(window.localStorage.getItem('user') || '');
    setUser(data);
  }, [setUser]);

  useEffect(() => {
    getCategories();
    getLocalStorage();
  }, []);

  const handleSetPhoto = (e: any) => {
    const [file] = e.target.files;

    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setAvatar('');
      setAvatarPreview('/icon/upload.svg');
    }
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    setButtonDisabled(true);

    const formData = new FormData();

    formData.append('name', user.name);
    formData.append('username', user.name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('phoneNumber', '085155158457');
    formData.append('favoriteGame', favorite);
    formData.append('avatar', avatar);

    try {
      await signup(formData);
      toast.success('Registration successful');
      localStorage.removeItem('user');
      router.push('/signup-success');
    } catch (err: any) {
      const { data: error } = err.response;
      setButtonDisabled(false);
      toast.error(error.message);
    }
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form onSubmit={handleOnSubmit}>
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image src={avatarPreview} className="img-upload" height={120} width={120} />
                  </label>
                  <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" onChange={handleSetPhoto} />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{user.name}</h2>
              <p className="text-lg text-center color-palette-1 m-0">{user.email}</p>
              <div className="pt-50 pb-50">
                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(e) => setFavorite(e.target.value)}
                >
                  <option value="" disabled>Select Category</option>
                  {categories.map(({ _id, name }: CategoryTypes) => (
                    <option key={_id} value={_id}>{name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                type="submit"
                disabled={buttonDisabled}
              >
                Create My Account
              </button>
              <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="/#" role="button">
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
