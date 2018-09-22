import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

Enzyme.configure({ adapter: new Adapter() });

const state = {
  appName: "Author Quiz",
  turnData: {
    books: ['The Adventures of Huckleberry Finn', 'Harry Potter and the Sorcerers Stone', 'David Copperfield', 'A Tale of Two Cities'],
    author: {
      name: "Mark Twain",
      imageUrl: "images/authors/marktwain.jpg",
      imageSource: "Wikimedia Commons",
      books: ['The Adventures of Huckleberry Finn']
    }
  },
  highlight: 'none',
  scoreData: { score: 0, questions: 0}
};

describe("Author Quiz", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App {...state} onAnswerSelected={()=>{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<App {...state} onAnswerSelected={()=>{}} />);
    })
    it("should have no bg color", () => {
      expect(wrapper.find("main").props().style.backgroundColor).toBe("#3E3E3E");
    });
  });

  describe("When wrong answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<App {...Object.assign({}, state, {highlight: 'wrong'})} onAnswerSelected={()=>{}} />);
    })
    it("should have #CC3333 bg color", () => {
      expect(wrapper.find("main").props().style.backgroundColor).toBe("#CC3333");
    });
  });

  describe("When right answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<App {...Object.assign({}, state, {highlight: 'correct'})} onAnswerSelected={()=>{}} />);
    })
    it("should have slateblue bg color", () => {
      expect(wrapper.find("main").props().style.backgroundColor).toBe("slateblue");
    });
  });

  // describe("When the first answer has been selected", () => {
  //   let wrapper;
  //   const handleAnswerSelected = jest.fn();

  //   beforeAll(() => {
  //     wrapper = mount(<App {...state} onAnswerSelected={handleAnswerSelected} />);
  //     wrapper.find('.opts').first().simulate('click');
  //   });

  //   it("onAnswerSelected is triggered", () => {
  //     expect(handleAnswerSelected).toHaveBeenCalled();
  //   });

  //   it("should receive The Adventures of Huckleberry Finn", () => {
  //     expect(handleAnswerSelected).toHaveBeenCalledWith('The Adventures of Huckleberry Finn');
  //   });
  // });
});
