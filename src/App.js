import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the primary goal of artificial intelligence?',
			answerOptions: [
				{ answerText: 'To make humans obsolete', isCorrect: false },
				{ answerText: 'To assist and enhance human capabilities', isCorrect: true },
				{ answerText: 'To dominate the world', isCorrect:false },
				{ answerText: 'To replace human emotions', isCorrect: false },
			],
		},
		{
			questionText: 'What is the Turing Test used for?',
			answerOptions: [
				{ answerText: 'Testing computer memory', isCorrect: false },
				{ answerText: 'Evaluating artificial intelligences ability to exhibit human-like behavior', isCorrect: true },
				{ answerText: 'Measuring processor speed', isCorrect: false },
				{ answerText: 'Assessing internet speed', isCorrect: false },
			],
		},
		{
			questionText: 'Which technology is essential for the development of autonomous vehicles?',
			answerOptions: [
				{ answerText: 'Virtual Reality', isCorrect:false },
				{ answerText: 'Blockchain', isCorrect: false },
				{ answerText: 'Artificial Intelligence', isCorrect: true},
				{ answerText: '3D Printing', isCorrect: false },
			],
		},
		{
			questionText: 'What is the Internet of Things (IoT)?',
			answerOptions: [
				{ answerText: 'A virtual reality game', isCorrect: false },
				{ answerText: 'A network of interconnected devices that can communicate and share data', isCorrect: true },
				{ answerText: 'A social media platform', isCorrect: false },
				{ answerText: 'A new programming language', isCorrect:false },
			],
		},
    {
			questionText: 'What is the purpose of natural language processing (NLP) in AI?',
			answerOptions: [
				{ answerText: 'Creating artificial emotions', isCorrect: false },
				{ answerText: 'Enabling computers to understand, interpret, and generate human-like language', isCorrect: true },
				{ answerText: 'Generating random code', isCorrect:false },
				{ answerText: 'Enhancing virtual reality experiences', isCorrect: false },
			],
		},
		{
			questionText: 'Which technology is used to identify individuals based on their unique biological characteristics?',
			answerOptions: [
				{ answerText: 'Virtual Reality', isCorrect: false },
				{ answerText: 'Augmented Reality', isCorrect:false },
				{ answerText: 'Biometrics', isCorrect:true },
				{ answerText: 'Quantum Computing', isCorrect: false },
			],
		},
		{
			questionText: 'What is deep learning?',
			answerOptions: [
				{ answerText: 'A form of meditation for computers', isCorrect: false },
				{ answerText: 'A type of artificial intelligence that mimics the workings of the human brain', isCorrect:true },
				{ answerText: 'A software for 3D modeling', isCorrect: false },
				{ answerText: ' A virtual reality headset', isCorrect: false },
			],
		},
		{
			questionText: 'What is 5G technology primarily associated with?',
			answerOptions: [
				{ answerText: 'Virtual reality gaming', isCorrect: false },
				{ answerText: 'Genetic engineering', isCorrect:false },
				{ answerText: 'Quantum computing', isCorrect: false },
				{ answerText: 'Faster and more reliable wireless communication', isCorrect: true },
			],
		},
		{
			questionText: 'What does the term "blockchain" refer to?',
			answerOptions: [
				{ answerText: 'A new programming language', isCorrect: false },
				{ answerText: 'A type of virtual reality headset', isCorrect:false },
				{ answerText: 'A decentralized and distributed ledger technology', isCorrect: true },
				{ answerText: 'A robotics technology', isCorrect: false },
			],
		},
		{
			questionText: 'What does the term "blockchain" refer to?',
			answerOptions: [
				{ answerText: 'Enhanced data security', isCorrect: true },
				{ answerText: 'Slower processing speeds', isCorrect:false },
				{ answerText: 'Improved weather forecasting', isCorrect: false },
				{ answerText: 'Advanced virtual reality experiences', isCorrect: false },
			],
		},
		
		
	];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => 
  {
    if(isCorrect === true){
      setScore(score+1);
    }

    const nextQuestion = currentQuestion+1;
    if(nextQuestion<questions.length)
    {setCurrentQuestion(nextQuestion);}
    else
  {
    setShowscore(true);
  }
  }

  const [showscore, setShowscore] = useState(false);

  const handleReattemptQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowscore(false);
    
  };

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showscore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
        <button onClick={handleReattemptQuiz}>Reattempt Quiz</button></div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=>(
              <button onClick={()=>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
            ))}
					</div>
				</>
			)}
		</div>
	);
}
