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
  const [newGame, setNewGame] = useState({
    title: "",
    genre: "",
    releaseDate: "",
    platform: "",
  });

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    axios.get<Game[]>("http://localhost:5000/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewGame((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddGame = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("http://localhost:5000/games", newGame)
      .then(() => {
        fetchGames();
        setNewGame({ title: "", genre: "", releaseDate: "", platform: "" });
      })
      .catch((error) => {
        console.error("Error adding game:", error);
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Game Events</h1>

      {/* Add Game Form */}
      <form onSubmit={handleAddGame} className="mb-6 space-y-4">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newGame.title}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={newGame.genre}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <input
            type="date"
            name="releaseDate"
            value={newGame.releaseDate.split("T")[0]}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="platform"
            placeholder="Platform"
            value={newGame.platform}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Game
        </button>
      </form>

      {/* Game Cards */}
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
