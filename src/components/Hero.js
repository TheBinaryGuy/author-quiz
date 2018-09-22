import React from 'react';

export function Hero(props) {
  return (<header>
    <div className="title">
      <div className="main">{props.appName}</div>
      <div className="desc">Select the book writter by the author shown!</div>
    </div>
    <div className="score">Score - {props.score} / {props.questions}</div>
  </header>);
}