// add React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// add components
import ImageList from './components/image_list';

// create App component (similar to a class / constructor function)
// const App = () =>
// refactor as ES6 class
// render() method renders everytime this component needs to be rendered to the screen
class App extends Component
{	
	// "constructor" is a special method for JS classes
	// "constructor" is automatically called when we created a new object from class "App"
	// "props" is the data object we pass down to child components / we pass between components
	// NEED THIS CONSTRUCTOR METHOD TO ACCESS STATE
	constructor(props)
	{
		// call the "parent constructor" of the Component class (written in the React module)
		// don't worry about this line... just "administrative boilerplate" for constructor functions in React components
		super(props);
		// initialize the state object
		this.state = { images: [] };
	}

	// great place to load data!
	// images received from AXIOS AJAX request are stored on "response" variable
	// only called once right before component is mounted / rendered to the screen (WHY NOT CALL IT componentWillRender()?)
	componentWillMount() 
	{
		console.log("App is about to render!");
		// wait for AXIOS AJAX request to "resolve", .then use React Component's setState() method to set the current state of the "images" prop to the array of 60 images returned by the Imgur API in the response() method (.then(response => this.setState({ images: response.data.data }));)
		// NEVER DO THIS: this.state.images = [ {}, {}, ... ];
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
	    	.then(response => this.setState({ images: response.data.data }));
	}

	// render the view
	// the console.log is run as many times as this component gets rendered... currently 2x:
		// 1. once for constructor function's initialization of the "images" prop
		// 2. then once when state of "images" prop gets updated with images from Imgur API
	// pass "images" prop into ImageList child component
	render()
	{
		console.log(this.state.images);
		return(
			<div>
				<ImageList images={this.state.images}/>
			</div>
		);
	}
};

// wait for DOM to load before rendering components
// render component to the screen
// ReactDOM.render(); takes 2 arguments
	// 1. which component to render
	// 2. where to render it in the HTML structure
// add an instance of App component
Meteor.startup( () => {
	ReactDOM.render(<App />, document.querySelector(".container"));
});