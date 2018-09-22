import PropTypes from 'prop-types';
import React from 'react';
import { Book } from './Book';

export function Turn(props) {
    function highlightToBgColor(highlight) {
        const mapping = {
            'none': '#3E3E3E',
            'correct': 'forestgreen',
            'wrong': '#CC3333'
        };
        return mapping[highlight];
    }
    return (<main style={{ backgroundColor: highlightToBgColor(props.highlight) }}>
        <div className="fig" style={{ backgroundImage: `url(${props.author.imageUrl})` }}></div>
        <div className="opts">
            {props.books.map((title) => <Book title={title} key={title} onClick={props.onAnswerSelected} />)}
        </div>
    </main>);
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