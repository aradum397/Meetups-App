import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props) {
	function submitHandler(e) {
		e.preventDefault()
		const title = e.target.title.value
		const image = e.target.image.value
		const address = e.target.address.value
		const description = e.target.description.value
		const meetup = {
			title,
			image,
			address,
			description
		}
		props.onAddMeetup(meetup)
		e.target.reset()
	}
	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Title</label>
					<input type='text' id='title' required />
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Image url</label>
					<input type='url' id='image' required />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>Address</label>
					<input type='address' id='address' required />
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>Description</label>
					<textarea id='description' rows='5' required />
				</div>
				<div className={classes.actions}>
					<button type='submit'>Add meetup</button>
				</div>
			</form>
		</Card>
	)
}

export default NewMeetupForm
