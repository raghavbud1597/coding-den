import React from 'react';
import './styles/App.scss';
import Collapsable from './components/Collapsable';
import { TOPIC_VICE_QUESTIONS } from './constants/questions'

function App() {

  const topicList = TOPIC_VICE_QUESTIONS.map(topic => <Collapsable topic={topic} />)

  return (
    <div className="container">
      <header className="App-header">
        <h1>Hi I'm Raghav Budhiraja</h1>
        <p>I have created this page to share my Coding Solutions.</p>
      </header>
     { topicList }
    </div>
  );
}

export default App;
