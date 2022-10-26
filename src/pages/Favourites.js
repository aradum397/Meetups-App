import { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import FavouritesContext from '../store/favourites-context'

function Favourites() {
	const favouritesCtx = useContext(FavouritesContext)
	if (favouritesCtx.totalFavourites === 0) {
		return (
			<section>
				<p>No favourite meetups</p>
			</section>
		)
	}
	return <MeetupList meetups={favouritesCtx.meetups} />
}

export default Favourites
