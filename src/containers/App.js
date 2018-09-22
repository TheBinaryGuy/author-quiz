import React from 'react';
import './AuthorQuiz.css';
import { Hero } from '../components/Hero';
import { Turn } from "../components/Turn";
import { Footer } from '../components/Footer';
import { Continue } from '../components/Continue';

class App extends React.Component {  
  render() {
    return (
      <div className="mainContainer">
        <Hero {...this.props.scoreData} appName={this.props.appName} />
        <Turn {...this.props.turnData} highlight={this.props.highlight}
        onAnswerSelected={this.props.onAnswerSelected} />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default App;
