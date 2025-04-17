import { useEffect, useState } from "react";
import axios from "axios";

type Game = {
  _id: string;
  title: string;
  genre: string;
  releaseDate: string;
  platform: string;
  __v: number;
};

function Games() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios.get<Game[]>("http://localhost:5000/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Game Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <div
            key={game._id}
            className="bg-white shadow rounded-xl p-4 hover:scale-105 transition transform"
          >
            <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
            <p className="text-gray-600 mb-1">
              <strong>Genre:</strong> {game.genre}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Platform:</strong> {game.platform}
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Release:</strong>{" "}
              {new Date(game.releaseDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
