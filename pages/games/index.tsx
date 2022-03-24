import { useQuery } from 'react-query';

import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';
import { getFeatureGame } from '../../services/player';
import { GameItemTypes } from '../../services/dataTypes';
import GameItem from '../../components/molecules/GameItem';
import uuid from '../../utils/uuid.js';
import GameCardPlaceholder from '../../components/atoms/GameCardPlaceholder';

export default function GamesPage() {
  const {
    isLoading, error, data: games, isFetching,
  } = useQuery('games', getFeatureGame);

  return (
    <>
      <Navbar />
      <div className="container">
        <section className="detail featured-game pt-lg-60 pb-50">
          <h1>Games Page</h1>

          {isLoading && (
          <div className="row">
            {Array.from({ length: 8 }).map((item) => (
              <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                <GameCardPlaceholder key={uuid()} />
              </div>
            ))}
          </div>
          )}

          <div className="row">
            {games?.map(({
              _id, name, slug, category, thumbnail,
            }: GameItemTypes) => (
              <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                <GameItem key={_id} title={name} platform={category.name} link={`/games/${slug}`} image={thumbnail?.secure_url || '/img/Thumbnail-1.png'} />
              </div>
            ))}
          </div>

        </section>
      </div>
      <Footer />
    </>
  );
}
