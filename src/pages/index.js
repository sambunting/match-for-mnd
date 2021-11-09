import { graphql, useStaticQuery } from "gatsby";
import * as React from "react"
import styled from "styled-components";
import Footer from "../components/footer"
import Table from "../components/table";

// styles
const PageStyles = styled.div`
  color: "#232129";
  padding: 20px;
  width: calc(100% - 40px); 
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  font-family: -apple-system, Roboto, sans-serif, serif;

  h1 {
    text-align: center;

    @media screen and (max-width: 600px) {
      font-size: 22px;
    }
  }

  h2 {
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }

  a {
    color: #00205b;
  }

  section {
    margin: 80px 0px;
  }
`

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lastUpdated
          players {
            name
            status
            source
            role
          }
        }
      }
    }
  `)

  console.log(data);

  const confirmedPlayers = data.site.siteMetadata.players.filter((x) => x.status === "Confirmed" && x.role !== 'manager')
  const confirmedManagement = data.site.siteMetadata.players.filter((x) => x.status === "Confirmed" && x.role === 'manager')
  const unavailablePlayers = data.site.siteMetadata.players.filter((x) => x.status === "Unavailable")

  return (
    <PageStyles>
      <main>
        <title>Match For MND</title>
        <h1>Match For MND</h1>

        <section>
          <h2>Confirmed Players</h2>
          <Table data={confirmedPlayers} />
        </section>

        <section>
          <h2>Confirmed Management</h2>
          <Table data={confirmedManagement} />
        </section>

        <section>
          <h2>Unavailable Players</h2>
          <Table data={unavailablePlayers} />
        </section>
      </main>
      <Footer lastUpdated={data.site.siteMetadata.lastUpdated} />
    </PageStyles>
  )
}

export default IndexPage
