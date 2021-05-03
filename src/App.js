import "./App.scss";
import { Quiz } from "./form_steps/quiz.js";
import {Background } from './background/background.js'

function App() {
  return (
    <div className="App">
      <Quiz />
      <Background />
    </div>
  );
}

export default App;