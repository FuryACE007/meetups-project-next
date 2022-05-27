import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <>
      <MeetupDetail
        image={props.image}
        title= {props.title}
        address={props.address}
        description={props.description}
      />
    </>
  );
};  

export async function getStaticPaths(){ //we are pre-generating the paths for the meetups
  return {
    fallback: false,
    paths: [
      {params: {meetupId: 'm1'}},
      {params: {meetupId: 'm2'}},
      {params: {meetupId: 'm3'}},
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      title: "Meetup Details",
      description: "Meetup Details Page",
      image: "https://images.unsplash.com/photo-1653143399868-6057edb4f0d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      address: "123 Main St, New York, NY",
    },
  };
}

export default MeetupDetails;
