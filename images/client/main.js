// Any JS in here is automatically run by Meteor


// Import React Library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// Create a Component
class App extends Component {

  componentWillMount(){
    console.log('App is about to render');
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => console.log(response));

  }

  render() {
    return (
    <div>
      <h1>Image List</h1>
      <ImageList />
    </div>
    );
  }
};


// Render the component to the screen
// Render inside Meteor startup so the DOM is rendered first
Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));

});
