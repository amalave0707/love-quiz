import { useState } from "react";
import "./App.css"; // Make sure you have this file in src folder

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    puzzle: "",
    finalCode: "",
  });

  // Handler for text inputs & select
  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  // Move to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="game-container">
      <h1 className="title">💕 Love Quiz 💕</h1>

      {/* STEP 0 - FIRST QUIZ */}
      {step === 0 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
          className="quiz-form"
        >
          <p>1. Where did we first meet? (Multiple Choice)</p>
          <select
            name="question1"
            onChange={handleChange}
            required
            style={{ marginBottom: "15px" }}
          >
            <option value="">Choose an answer</option>
            <option value="At the beach">At the beach</option>
            <option value="At a cafe">At a cafe</option>
            <option value="At a party">At a party</option>
          </select>

          <p>2. Where was your favorite date with me?</p>
          <input
            type="text"
            name="question2"
            onChange={handleChange}
            required
            placeholder="Type your answer"
          />

          <p>3. What is my favorite thing about you?</p>
          <input
            type="text"
            name="question3"
            onChange={handleChange}
            required
            placeholder="Type your answer"
          />

          <p>4. What was our funniest moment together?</p>
          <input
            type="text"
            name="question4"
            onChange={handleChange}
            required
            placeholder="Type your answer"
          />

          <p>5. Your favorite thing in Bulgaria? 😉</p>
          <input
            type="text"
            name="question5"
            onChange={handleChange}
            required
            placeholder="Type your answer"
          />

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      )}

      {/* STEP 1 - CHECK BERSHKA */}
      {step === 1 && (
        <div className="step">
          <h2>Well Done! 🎉</h2>
          {answers.question5.toLowerCase() === "bershka" ? (
            <p>I knew it! 😆 You love Bershka!</p>
          ) : (
            <p>C'mon skupa, we both know it's Bershka... 😂</p>
          )}
          <p>Now, solve the next puzzle:</p>
          <h3>How many letters are in the city we met in?</h3>
          <input
            type="number"
            name="puzzle"
            onChange={handleChange}
            placeholder="Type a number"
          />
          <button className="btn" onClick={nextStep}>
            Submit
          </button>
        </div>
      )}

      {/* STEP 2 - CHECK CITY LETTER COUNT */}
      {step === 2 && (
        <div className="step">
          {answers.puzzle === "7" ? (
            <>
              <h2>Final Challenge 🔥</h2>
              <p>
                Go to Instagram, search <b>#antoniolovesirinasosomuch1</b>. The
                code is in the caption! 😉
              </p>
              <input
                type="text"
                name="finalCode"
                onChange={handleChange}
                placeholder="Enter the final code"
              />
              <button className="btn" onClick={nextStep}>
                Submit
              </button>
            </>
          ) : (
            <>
              <h2>Oops! ❌</h2>
              <p>Try again! (Hint: It's 7 letters!)</p>
              <button className="btn" onClick={() => setStep(1)}>
                Go Back
              </button>
            </>
          )}
        </div>
      )}

      {/* STEP 3 - SHOW THE DRIVE LINK */}
      {step === 3 && (
        <div className="final-step">
          {answers.finalCode.toLowerCase() === "210824" ? (
            <>
              <h2>Congratulations! 🎉</h2>
              <p>You've completed the Love Quiz!</p>
              <a
                href="https://drive.google.com/drive/folders/1io0ho-zyrIG8S3zIf1if3Qw7gfkfSAvw?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="reward-link"
              >
                🎁 Click here to claim your surprise! 🎁
              </a>
            </>
          ) : (
            <>
              <h2>Code Not Correct 😢</h2>
              <p>
                The code doesn't match. Double-check Instagram for
                #antoniolovesirinasosomuch1, then come back!
              </p>
              <button className="btn" onClick={() => setStep(2)}>
                Try Again
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
