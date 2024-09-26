import  { useState } from "react";

const QZone = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const questions = {
    question: "What is the most important quality for a journalist?",
    options: ["Accuracy", "Speed", "Creativity", "Integrity"],
  };

  const handleVote = (option) => {
    setSelectedOption(option);
    setShowResults(true);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Q-Zone</h2>
      
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-lg font-bold text-gray-700">{questions.question}</h3>
        
        {!showResults ? (
          <ul className="mt-4 space-y-3">
            {questions.options.map((option, index) => (
              <li key={index}>
                <button
                  className={`w-full text-left p-2 rounded-md border ${
                    selectedOption === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleVote(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 text-center">
            <p className="text-gray-800 font-bold">You voted for: {selectedOption}</p>
            <p className="text-gray-600 mt-2">Thank you for participating!</p>
          </div>
        )}
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-bold text-gray-700">Other Interactive Features</h4>
        <ul className="mt-2 space-y-2">
          <li className="bg-gray-200 p-2 rounded-md text-gray-700">
            <a href="#" className="hover:text-blue-500">Daily Poll</a>
          </li>
          <li className="bg-gray-200 p-2 rounded-md text-gray-700">
            <a href="#" className="hover:text-blue-500">Weekly Quiz</a>
          </li>
          <li className="bg-gray-200 p-2 rounded-md text-gray-700">
            <a href="#" className="hover:text-blue-500">Reader Survey</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QZone;
