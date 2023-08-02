import React from 'react';
import { useParams } from 'react-router-dom';
import './imageCompare.css';
import ReactCompareImage from 'react-compare-image';
import Spinner from '../Spinner/Spinner';
import img1 from '../assets/15-8.jpg';
import img1c from '../assets/15-8c.jpg';
import img2 from '../assets/1913.jpg';
import img2c from '../assets/1913c.jpg';

function CompareView() {
	const images = [
		{ id: 1, bw: img1, color: img1c },
		{ id: 2, bw: img2, color: img2c },
		// add more images here
	];

	const { id } = useParams();
	const image = images.find((image) => image.id === Number(id));

	return (
		<div className='imgCompare'>
			<ReactCompareImage
				leftImage={image.bw}
				rightImage={image.color}
				skeleton={<Spinner />}
			/>
		</div>
	);
}

export default CompareView;
