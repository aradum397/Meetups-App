import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { FavouritesProvider } from './store/favourites-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<FavouritesProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</FavouritesProvider>
	</React.StrictMode>
)
