import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
    const DUMMY_MEETUPS = [
        {
            id: 'm1',
            title: 'Meetup in New York',
            image: 'https://source.unsplash.com/random',
            address: 'New York',
        },
        {
            id: 'm2',
            title: 'Meetup in Paris',
            image: 'https://source.unsplash.com/random',
            address: 'Paris',
        },
        {
            id: 'm3',
            title: 'Meetup in London',
            image: 'https://source.unsplash.com/random',
            address: 'London',
        },

    ];

  return (
    <MeetupList meetups={props.meetups} />
  )
};

export async function getStaticProps() {
    const client = await MongoClient.connect(
        "mongodb+srv://skale_dev:2uK7fHNWuTb9MVAH@cluster0.9ezpb.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db("meetups");
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString(),
            }))
        }
    }
}

export default HomePage;