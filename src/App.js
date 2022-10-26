import { Switch, Route } from 'react-router-dom'
import Index from './pages/Index'
import New from './pages/New'
import Favourites from './pages/Favourites'
import Layout from './components/layout/Layout'

function App() {
	return (
		<div className='App'>
			<Layout>
				<Switch>
					<Route exact path='/'>
						<Index />
					</Route>
					<Route path='/new'>
						<New />
					</Route>
					<Route path='/fav'>
						<Favourites />
					</Route>
				</Switch>
			</Layout>
		</div>
	)
}

export default App
