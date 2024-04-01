import React from 'react';
import AppRoutes from './components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</>

	);
}

export default App;
