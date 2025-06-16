import { useEffect } from "react";

export default function GameHub() {
  useEffect(() => {
    document.title = "Game Hub";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-10 px-4 pt-10 pb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center">🎮 Welcome to the Game Hub</h1>

      <div className="flex flex-col space-y-6 w-full max-w-xs">
        <a
          href="https://chess-game-seven-chi.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          ♟️ Chess Game
        </a>
        <a
          href="https://story-game-zeta.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          📚 Story Game
        </a>
        <a
          href="https://magic-game-silk.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🔮 Magic Game
        </a>
        <a
          href="https://war-game-chi.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🌍 War Game
        </a>
        <a
          href="https://block-game-pi.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🧱 Block Game
        </a>
        <a
          href="https://knight-game-three.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🛡️ Knight Game
        </a>
        <a
          href="https://tank-game-refactor.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🪖 Tank Game
        </a>
        <a
          href="https://video-poker-weld.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🂡 Video Poker
        </a>
        <a
          href="https://dice-game-ruby-psi.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🎲 Dice Game
        </a>
        <a
          href="https://slot-machine-lake.vercel.app/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          🎰 Slot Machine
        </a>
        <a
          href="https://rock-paper-scissors-psi-dun.vercel.app"
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl py-4 px-6 rounded-2xl text-center shadow-lg transition"
        >
          ✂️ Rock Paper Scissors
        </a>
      </div>
    </div>
  );
}
