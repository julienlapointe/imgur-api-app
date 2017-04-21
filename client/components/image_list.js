// image list component

// add React
import React from 'react';
import ReactDOM from 'react-dom';

// add components
import ImageDetail from './image_detail';

// dummy data
// const IMAGES = [
//   { title: 'Pen', link: 'http://dummyimage.com/600x400' },
//   { title: 'Pine Tree', link: 'http://dummyimage.com/600x400' },
//   { title: 'Mug', link: 'http://dummyimage.com/600x400' }
// ];

// create component
// "map over" IMAGES array and produce an <ImageDetail /> component for each image object in IMAGES
// in JSX, place curly brances around JS variables (ex. {RenderedImages})
// "props" parameter receives current state of "props" from App parent component
const ImageList = (props) => {
	const validImages = props.images.filter( image => !image.is_album);
	// some ES6
	// const RenderedImages = IMAGES.map(image => {
	// 	return <ImageDetail key={image.title} image={image} />
	// });
	// full ES6
	// const RenderedImages = props.images.map(image => 
	const RenderedImages = validImages.map(image => 
		<ImageDetail key={image.title} image={image} />
	);

	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

// export component
// any files that *import* the file image_list.js, will get the "ImageList" component by *default*
export default ImageList;