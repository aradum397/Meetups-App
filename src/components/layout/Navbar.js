import { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavouritesContext from '../../store/favourites-context'
import classes from './Navbar.module.css'

function Navbar() {
	const favouritesCtx = useContext(FavouritesContext)
	return (
		<header className={classes.header}>
			<div className={classes.logo}>React meetup</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>All meetups</Link>
					</li>
					<li>
						<Link to='/fav'>
							Favourites{' '}
							<span className={classes.badge}>
								{favouritesCtx.totalFavourites}
							</span>
						</Link>
					</li>
					<li>
						<Link to='/new'>Add new</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
