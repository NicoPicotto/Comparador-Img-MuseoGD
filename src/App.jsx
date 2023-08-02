import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import CompareView from './Views/CompareView';
import img1 from './assets/15-8.jpg';
import img1c from './assets/15-8c.jpg';
import img2 from './assets/1913.jpg';
import img2c from './assets/1913c.jpg';

function App() {
	const images = [
		{ id: 1, bw: img1, color: img1c },
		{ id: 2, bw: img2, color: img2c },
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

				<Route path='/compare/:id' element={<CompareView />} />
			</Routes>
		</Router>
	);
}

export default App;
