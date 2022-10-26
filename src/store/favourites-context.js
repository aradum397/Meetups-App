import { createContext } from 'react'

const FavouritesContext = createContext({
	favourites: [],
	totalFavourites: 0,
	addFavourite: favouritedMeetup => {},
	removeFavourite: meetupId => {},
	isFavourite: meetupId => {}
})

export function FavouritesProvider(props) {
	const [favouriteMeetups, setFavouriteMeetups] = []
	function addFavouriteHandler(favouritedMeetup) {
		setFavouriteMeetups(prevFavourites => {
			prevFavourites.push(favouritedMeetup)
		})
	}
	function removeFavouriteHandler(meetupId) {
		setFavouriteMeetups(prevFavourites => {
			prevFavourites.filter(meetup => meetup.id !== meetupId)
		})
	}
	function isFavouriteHandler(meetupId) {
		favouriteMeetups.some(meetup => meetup.id === meetupId)
	}
	const context = {
		favourites: favouriteMeetups,
		totalFavourites: favouriteMeetups.length(),
		addFavourite: addFavouriteHandler,
		removeFavourite: removeFavouriteHandler,
		isFavourite: isFavouriteHandler
	}
	return (
		<FavouritesContext.Provider value={context}>
			{props.children}
		</FavouritesContext.Provider>
	)
}

export default FavouritesContext
