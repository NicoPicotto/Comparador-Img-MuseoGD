import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './imageCompare.css';
import ReactCompareImage from 'react-compare-image';
import Spinner from '../Spinner/Spinner';
import back from '../assets/back.png';

function CompareView({ images }) {
	const { id } = useParams();
	const image = images.find((image) => image.id === Number(id));

	return (
		<div className='imgCompare'>
			<Link to='/' class='imgBack'>
				<img src={back} className='arrow' />
			</Link>
			<ReactCompareImage
				leftImage={image.bw}
				rightImage={image.color}
				skeleton={<Spinner />}
			/>
		</div>
	);
}

export default CompareView;
