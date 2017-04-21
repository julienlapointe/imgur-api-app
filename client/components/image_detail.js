// image detail component

// add React
import React from 'react';

// add components
import ImageScore from './image_score';

// create component
const ImageDetail = (props) => {
	// props.image => this is the image object
	// props.image.title
	// props.image.link
	return (
		<li className="media list-group-item">
			<div className="media-left">
				<img src={props.image.link} />
			</div>
			<div className="media-body">
				<h4 className="media-heading">
					{props.image.title}
				</h4>
				<p>
					{props.image.description}
				</p>
				<ImageScore ups={props.image.ups} downs={props.image.downs} />
			</div>
		</li>
	);
};

// export component
// any files that *import* the file image_detail.js, will get the "ImageList" component by *default*
export default ImageDetail;