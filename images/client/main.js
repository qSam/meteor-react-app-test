// Any JS in here is automatically run by Meteor


// Import React Library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// Create a Component
const App = () => {
  return (
    <div>
      <h1>Image List</h1>
      <ImageList />
    </div>
  );
};


// Render the component to the screen
// Render inside Meteor startup so the DOM is rendered first
Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));
})
