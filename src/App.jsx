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
import img17 from './assets/miradas/agd.jpg';
import img17c from './assets/miradas/agdc.jpg';
import img18 from './assets/miradas/bv.jpg';
import img18c from './assets/miradas/bvc.jpg';
import img19 from './assets/miradas/comedor.jpg';
import img19c from './assets/miradas/comedorc.jpg';
import img20 from './assets/miradas/concejo.jpg';
import img20c from './assets/miradas/concejoc.jpg';
import img21 from './assets/miradas/entrada.jpg';
import img21c from './assets/miradas/entradac.jpg';
import img22 from './assets/miradas/froute.jpg';
import img22c from './assets/miradas/froutec.jpg';
import img23 from './assets/miradas/muni.jpg';
import img23c from './assets/miradas/munic.jpg';
import img24 from './assets/miradas/mutual.jpg';
import img24c from './assets/miradas/mutualc.jpg';
import img25 from './assets/miradas/naranjos.jpg';
import img25c from './assets/miradas/naranjosc.jpg';
import img26 from './assets/miradas/pintu.jpg';
import img26c from './assets/miradas/pintuc.jpg';
import img27 from './assets/miradas/pla1.jpg';
import img27c from './assets/miradas/pla1c.jpg';
import img28 from './assets/miradas/pla2.jpg';
import img28c from './assets/miradas/pla2c.jpg';
import img29 from './assets/miradas/tanque.jpg';
import img29c from './assets/miradas/tanquec.jpg';
import img30 from './assets/miradas/templo.jpg';
import img30c from './assets/miradas/temploc.jpg';
import img31 from './assets/miradas/via.jpg';
import img31c from './assets/miradas/viac.jpg';

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

	const miradasFotos = [
		{ id: 17, bw: img17, color: img17c },
		{ id: 18, bw: img18, color: img18c },
		{ id: 19, bw: img19, color: img19c },
		{ id: 20, bw: img20, color: img20c },
		{ id: 21, bw: img21, color: img21c },
		{ id: 22, bw: img22, color: img22c },
		{ id: 23, bw: img23, color: img23c },
		{ id: 24, bw: img24, color: img24c },
		{ id: 25, bw: img25, color: img25c },
		{ id: 26, bw: img26, color: img26c },
		{ id: 27, bw: img27, color: img27c },
		{ id: 28, bw: img28, color: img28c },
		{ id: 29, bw: img29, color: img29c },
		{ id: 30, bw: img30, color: img30c },
		{ id: 31, bw: img31, color: img31c },
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
				<Route
					path='/miradas'
					element={
						<Masonry
							breakpointCols={breakpointColumnsObj}
							className='my-masonry-grid'
							columnClassName='my-masonry-grid_column'
						>
							{miradasFotos.map((image) => (
								<Link
									key={image.id}
									to={`/compareMiradas/${image.id}`}
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
				<Route
					path='/compareMiradas/:id'
					element={<CompareView images={miradasFotos} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
