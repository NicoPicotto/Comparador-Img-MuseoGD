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
import img9 from './assets/Mol.JPG';
import img9c from './assets/Molc.jpg';
import img10 from './assets/Muni.jpg';
import img10c from './assets/Munic.jpg';
import img11 from './assets/Pile.jpg';
import img11c from './assets/Pilec.jpg';
import img12 from './assets/Plaz.jpg';
import img12c from './assets/Plazc.jpg';
import img13 from './assets/Pro.jpg';
import img13c from './assets/Proc.jpg';
import img14 from './assets/Pro2.jpg';
import img14c from './assets/Pro2c.jpg';
import img15 from './assets/Pro3.jpg';
import img15c from './assets/Pro3c.jpg';
import img16 from './assets/Rur.jpg';
import img16c from './assets/Rurc.jpg';

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
		{ id: 10, bw: img10, color: img10c },
		{ id: 11, bw: img11, color: img11c },
		{ id: 12, bw: img12, color: img12c },
		{ id: 13, bw: img13, color: img13c },
		{ id: 14, bw: img14, color: img14c },
		{ id: 15, bw: img15, color: img15c },
		{ id: 16, bw: img16, color: img16c },
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
