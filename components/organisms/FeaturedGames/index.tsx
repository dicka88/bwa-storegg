/* eslint-disable import/extensions */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import 'swiper/css';

import GameItem from '../../molecules/GameItem';
import { getFeatureGame } from '../../../services/player';
import { GameItemTypes } from '../../../services/dataTypes';
import GameCardPlaceholder from '../../atoms/GameCardPlaceholder';
import uuid from '../../../utils/uuid';

export default function FeaturedGames() {
  const {
    isLoading, error, data: games, isFetching,
  } = useQuery('games', getFeatureGame);

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
            {isLoading && (
              <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4">
                {Array.from({ length: 3 }).map((item) => <GameCardPlaceholder key={uuid()} />)}
              </div>
            )}

            {games?.map(({
              _id, name, category, thumbnail, slug,
            }: GameItemTypes) => (
              <SwiperSlide key={_id}>
                <GameItem
                  title={name}
                  platform={category.name}
                  link={`/games/${slug}`}
                  image={thumbnail?.secure_url || '/img/Thumbnail-1.png'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
