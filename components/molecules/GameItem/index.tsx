import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface GameItemProps {
  title: string;
  link?: string;
  image: string;
  platform: string;
}

export default function GameItem({
  title, link = '/', image = '', platform,
}: Partial<GameItemProps>) {
  return (
    <div className="featured-game-card position-relative">
      <Link href={link}>
        <a>
          <div className="blur-sharp">
            <Image className="thumbnail" src={image} width="205" height="270" alt={title} />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image src="/icon/console.svg" width={54} height={36} alt="Console" />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{platform}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
