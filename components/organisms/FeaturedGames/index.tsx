import React from 'react';
import GameItem from '../../molecules/GameItem';

export default function FeaturedGames() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem title="Super Mechs" platform="Mobile" link="/games/super-mechs" image="/img/Thumbnail-1.png" />
          <GameItem title="Call of Duty: Modern" platform="Mobile" link="/games/call-of-duty-modern" image="/img/Thumbnail-2.png" />
          <GameItem title="Mobile Legends" platform="Mobile" link="/games/mobile-legends" image="/img/Thumbnail-3.png" />
          <GameItem title="Clash of Clans" platform="Mobile" link="/games/clash-of-clans" image="/img/Thumbnail-4.png" />
          <GameItem title="Valorant" platform="Desktop" link="/games/valorant" image="/img/Thumbnail-5.png" />
        </div>
      </div>
    </section>
  );
}
