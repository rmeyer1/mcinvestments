import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.the-odds-api.com/v4/sports/basketball_ncaab/odds?regions=us&markets=h2h,spreads,totals&oddsFormat=american&apiKey=39ca2f1865fe4901bee037da0ffa948e',
        );
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching data from API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap -m-4">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {games.map((game) => (
            <div key={game.id} className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    {game.home_team}
                  </h2>
                  <div className="flex justify-between mb-3">
                    {game.bookmakers.map((bookmaker) => {
                      const market = bookmaker.markets.find(
                        (market) => market.key === 'spreads',
                      );
                      if (market) {
                        return market.outcomes
                          .filter((outcome) => outcome.name === game.home_team)
                          .map((outcome, index) => (
                            <p key={index}>{outcome.point}</p>
                          ));
                      }
                      return null;
                    })}
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    {game.away_team}
                  </h2>
                  <div className="flex justify-between mb-3">
                    {game.bookmakers.map((bookmaker) => {
                      const market = bookmaker.markets.find(
                        (market) => market.key === 'spreads',
                      );
                      if (market) {
                        return market.outcomes
                          .filter((outcome) => outcome.name === game.away_team)
                          .map((outcome, index) => (
                            <p key={index}>{outcome.point}</p>
                          ));
                      }
                      return null;
                    })}
                  </div>
                  <p className="text-center mt-3">
                    {new Date(game.commence_time).toLocaleString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric',
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
