import { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList'

function Index() {
	const [isLoading, setIsLoading] = useState(true)
	const [meetups, setMeetups] = useState()
	useEffect(() => {
		fetch(
			'https://movie-app-73c44-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
		)
			.then(res => res.json())
			.then(data => {
				const meetups = []
				for (let key in data) {
					const meetup = {
						id: key,
						...data[key]
					}
					meetups.push(meetup)
				}
				setMeetups(meetups)
				setIsLoading(false)
			})
	})
	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		)
	}
	return (
		<section>
			<ul>
				<h1>All meetups</h1>
				<MeetupList meetups={meetups} />
			</ul>
		</section>
	)
}

export default Index
