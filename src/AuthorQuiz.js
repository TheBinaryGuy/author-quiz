import React from 'react';
import PropTypes from 'prop-types';
import './AuthorQuiz.css';

function Hero(props) {
  return (
    <header>
      <div className="title">
        <div className="main">{props.appName}</div>
        <div className="desc">Select the book writter by the author shown!</div>
      </div>
      <div className="score">Score - {props.score} / {props.questions}</div>
    </header>
  ); 
}

function Book({title, onClick}) {
  return (
    <div onClick={() => {onClick(title);}}>{title}</div>
  ); 
}

function Turn(props) {
  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '#3E3E3E',
      'correct': 'forestgreen',
      'wrong': '#CC3333'
    };
    return mapping[highlight];
  }

  return (
    <main style={{ backgroundColor: highlightToBgColor(props.highlight) }}>
      <div className="fig" style={{ backgroundImage: `url(${props.author.imageUrl})` }}></div>
      <div className="opts">
        {props.books.map((title) => <Book title={title} key={title} onClick={props.onAnswerSelected} />)}
      </div>
    </main>
  );
}

Turn.prototype = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

function Continue() { return null; }

function Footer() {
  return (
    <footer>
      <p>All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in the public domain.</p>
    </footer>
  ); 
}

function AuthorQuiz(props) {
  return (
    <div className="mainContainer">
      <Hero {...props.scoreData} appName={props.appName} />
      <Turn {...props.turnData} highlight={props.highlight}
      onAnswerSelected={props.onAnswerSelected} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;