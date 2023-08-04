import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import CompareView from './Views/CompareView';
import Masonry from 'react-masonry-css';
import img1 from './assets/15-8.jpg';
import img1c from './assets/15-8c.jpg';
import img2 from './assets/1913.jpg';
import img2c from './assets/1913c.jpg';
import img3 from './assets/Agr.jpg';
import img3c from './assets/Agrc.jpg';
import img4 from './assets/DFC28.jpg';
import img4c from './assets/DFC28c.jpg';
import img5 from './assets/ESC.jpg';
import img5c from './assets/ESCc.jpg';
import img6 from './assets/Fog.jpg';
import img6c from './assets/Fogc.jpg';
import img7 from './assets/Igle.jpg';
import img7c from './assets/Iglec.jpg';
import img8 from './assets/Igle2.jpg';
import img8c from './assets/Igle2c.jpg';
import img9 from './assets/Mol.jpg';
import img9c from './assets/Molc.jpg';

function App() {
	const images = [
		{ id: 1, bw: img1, color: img1c },
		{ id: 2, bw: img2, color: img2c },
		{ id: 3, bw: img3, color: img3c },
		{ id: 4, bw: img4, color: img4c },
		{ id: 5, bw: img5, color: img5c },
		{ id: 6, bw: img6, color: img6c },
		{ id: 7, bw: img7, color: img7c },
		{ id: 8, bw: img8, color: img8c },
		{ id: 9, bw: img9, color: img9c },
	];

	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
	};

	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<Masonry
							breakpointCols={breakpointColumnsObj}
							className='my-masonry-grid'
							columnClassName='my-masonry-grid_column'
						>
							{images.map((image) => (
								<Link
									key={image.id}
									to={`/compare/${image.id}`}
									className='imgListLink'
								>
									<img
										className='imgListItem'
										src={image.bw}
										alt='Black and White'
									/>
								</Link>
							))}
						</Masonry>
					}
				/>

				<Route path='/compare/:id' element={<CompareView images={images} />} />
			</Routes>
		</Router>
	);
}

export default App;
