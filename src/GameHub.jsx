import { useEffect } from "react";

export default function GameHub() {
  useEffect(() => {
    document.title = "Game Hub";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center">🎮 Welcome to the Game Hub</h1>

      <div className="flex flex-col space-y-6 w-full max-w-xs">
        <a
          href="https://rock-paper-scissors-psi-dun.vercel.app"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          ✂️ Rock Paper Scissors
        </a>
        <a
          href="https://slot-machine-lake.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🎰 Slot Machine
        </a>
        <a
          href="https://dice-game-ruby-psi.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🎲 Dice Game
        </a>
      </div>
    </div>
  );
}

