import Card from '../ui/Card'
import { useContext } from 'react'
import FavouritesContext from '../../store/favourites-context'
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
	const favouritesCtx = useContext(FavouritesContext)
	const isFavourite = favouritesCtx.isFavourite(props.id)
	function addToFavouritesHandler() {
		if (isFavourite) {
			favouritesCtx.removeFavourite(props.id)
		} else {
			favouritesCtx.addFavourite({
				id: props.id,
				title: props.title,
				image: props.image,
				address: props.address,
				description: props.description
			})
		}
	}
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img
						src={props.image}
						alt={props.title}
					/>
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={addToFavouritesHandler}>
						{isFavourite ? 'Remove from favourites' : 'Add to favourites'}
					</button>
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem
