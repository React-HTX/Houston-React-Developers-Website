import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Event from "../components/Event"

const nextEventQuery = graphql`
  {
    allMeetupEvent(limit: 1) {
      nodes {
        id
        name
        local_date
        description
      }
    }
  }
`

export default function Home() {
  const nextEvent = useStaticQuery(nextEventQuery)
  // const pastEvent = useStaticQuery(query)
  return (
    <Layout>
      <Hero />
      {nextEvent &&
        nextEvent.allMeetupEvent.nodes.map(
          ({ name, description, local_date }) => (
            <Event
              key={name}
              name={name}
              description={description}
              date={local_date}
            />
          )
        )}
    </Layout>
  )
}
