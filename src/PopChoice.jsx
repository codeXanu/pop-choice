import React from "react";
import PopChoiceicon from "../public/PopChoice Icon.png"

function PopChoice(){
  const [favoriteMovie, setFavoriteMovie] = React.useState("");
  const [newOrClassic, setNewOrClassic] = React.useState("");
  const [funOrSerious, setFunOrSerious] = React.useState("");

  const handleSubmit = () => {
    const userInputs = {
      favoriteMovie,
      newOrClassic,
      funOrSerious,
    };
    console.log("User Inputs:", userInputs);
    console.log(favoriteMovie)

    setFavoriteMovie("");
    setNewOrClassic("");
    setFunOrSerious("");
    // You can send `userInputs` to your backend API here
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-[#0c1445] text-white p-6 w-[440px] shadow-lg space-y-6 h-full min-h-screen flex flex-col justify-between">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src={PopChoiceicon}
            alt="Popcorn"
            className="w-20 h-20"
          />
          <h1 className="text-3xl font-bold text-white mt-2">
            Pop<span className="text-[#b3e5fc]">Choice</span>
          </h1>
        </div>

        {/* Question 1 */}
        <div>
          <label className="text-sm font-semibold block mb-1">
            What’s your favorite movie and why?
          </label>
          <textarea
            className="w-full rounded-lg p-3 bg-[#30386c] text-white text-sm focus:outline-none"
            rows="3"
            placeholder={`The Shawshank Redemption\nBecause it taught me to never give up hope no matter how hard life gets`}
            value={favoriteMovie}
            onChange={(e) => setFavoriteMovie(e.target.value)}
          />
        </div>

        {/* Question 2 */}
        <div>
          <label className="text-sm font-semibold block mb-1">
            Are you in the mood for something new or a classic?
          </label>
          <input
            className="w-full rounded-lg p-3 bg-[#30386c] text-white text-sm focus:outline-none"
            placeholder="I want to watch movies that were released after 1990"
            value={newOrClassic}
            onChange={(e) => setNewOrClassic(e.target.value)}
          />
        </div>

        {/* Question 3 */}
        <div>
          <label className="text-sm font-semibold block mb-1">
            Do you wanna have fun or do you want something serious?
          </label>
          <input
            className="w-full rounded-lg p-3 bg-[#30386c] text-white text-sm focus:outline-none"
            placeholder="I want to watch something stupid and fun"
            value={funOrSerious}
            onChange={(e) => setFunOrSerious(e.target.value)}
          />
        </div>

        {/* Button */}
        <button 
          className="w-full mt-4 bg-[#45f28a] hover:bg-[#2ae172] text-[#0c1445] font-bold py-3 rounded-lg transition cursor-pointer"
          onClick={handleSubmit}
        >
          Let’s Go
        </button>
      </div>
    </div>
  );
};

export default PopChoice;
