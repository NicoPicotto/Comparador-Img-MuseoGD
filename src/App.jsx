import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import CompareView from './Views/CompareView';
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

function App() {
	const images = [
		{ id: 1, bw: img1, color: img1c },
		{ id: 2, bw: img2, color: img2c },
		{ id: 3, bw: img3, color: img3c },
		{ id: 4, bw: img4, color: img4c },
		{ id: 5, bw: img5, color: img5c },
		{ id: 6, bw: img6, color: img6c },
		// add more images here
	];

	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<div className='imgListContainer'>
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
						</div>
					}
				/>

				<Route path='/compare/:id' element={<CompareView images={images} />} />
			</Routes>
		</Router>
	);
}

export default App;
