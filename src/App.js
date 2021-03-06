import React from 'react';
import './styles/App.scss';
import Collapsable from './components/Collapsable';
import { TOPIC_VICE_QUESTIONS } from './constants/questions'
import DownArrow from './images/down-arrow.svg'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const topicList = TOPIC_VICE_QUESTIONS.map(topic => <Collapsable topic={topic} />)

  return (
    <div>

    
      <div className="container">
        <Navbar />
        <header className="App-header">
          <h1>Hi I'm Raghav Budhiraja</h1>
          <p>I have created this page to share my Coding Solutions.</p>
          <div className="scroll-down">
            <a href="#question-list">
              <img src={DownArrow} alt="down-arrow" className="scroll-down-icon" />
            </a>
          </div>
        </header>
        <section id="question-list">
          { topicList }
        </section>
      </div>
      <section id="subscription">
        <Footer />
      </section>
    </div>
  );
}

export default App;
