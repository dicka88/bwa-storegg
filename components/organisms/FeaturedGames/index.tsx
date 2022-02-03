/* eslint-disable import/extensions */
import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import GameItem from '../../molecules/GameItem';
import { getFeatureGame } from '../../../services/player';
import { GameItemTypes } from '../../../services/dataTypes';
import 'swiper/css';
import Link from 'next/link';

export default function FeaturedGames() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeatureGame();
    setGameList(data);
  }, [getFeatureGame, setGameList]);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br />
            {' '}
            Games This Year
          </h2>
          <Link href="/games">
            <a className="btn-learn text-lg color-palette-1 my-auto text-center">See all</a>
          </Link>
        </div>
        <div className="aos-init aos-animate" data-aos="fade-up">
          <Swiper
            spaceBetween={10}
            loop
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
              1340: {
                slidesPerView: 5,
              },
            }}
          >
            {gameList.map(({
              _id, name, category, thumbnail, slug,
            }: GameItemTypes) => (
              <SwiperSlide key={_id}>
                <GameItem title={name} platform={category.name} link={`/games/${slug}`} image={thumbnail.secure_url} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
