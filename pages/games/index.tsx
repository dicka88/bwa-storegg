import { useCallback, useEffect, useState } from 'react';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';
import { getFeatureGame } from '../../services/player';
import { GameItemTypes } from '../../services/dataTypes';
import GameItem from '../../components/molecules/GameItem';

export default function GamesPage() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeatureGame();
    setGameList(data);
  }, [getFeatureGame, setGameList]);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <section className="detail featured-game pt-lg-60 pb-50">
          <h1>Games Page</h1>
          <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4 aos-init aos-animate">
            {gameList.map(({
              _id, name, slug, category, thumbnail,
            }: GameItemTypes) => (
              <GameItem key={_id} title={name} platform={category.name} link={`/games/${slug}`} image={thumbnail.secure_url} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
