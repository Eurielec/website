import Head from "next/head";

import { Layout, Footer } from "/components";

import { useQuery, gql } from "@apollo/client";

const GET_EVENT_TYPES = gql`
query {
  eventTypes(sort: "id:asc") {
    data {
     	id
      attributes {
        name
        description
        show
      }
    }
  }
}
`;

export default function Events() {

  const { data, loading, error } = useQuery(GET_EVENT_TYPES);
  if (loading) {
    console.log("Loading");
  }

  console.log(data?.eventTypes?.data);


  return (
    <div className="events">
      <Head>
        <title>Eurielec | Eventos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="events-container">
          <div className="events">
              {
                data ? ([...data?.eventTypes?.data])
                // .sort((a, b) => a.id - b.id > 0 ? 1 : -1)
                .map((event, index) => {
                  return (
                    <div className={index % 2 === 0 ? "event" : "event reverse"} key={event.id}>
                      <div className="title">
                        {event.attributes.name}
                      </div>
                        <p className="body">
                          {event.attributes.description}
                        </p>
                    </div>
                  )
                })
                : null
              }
          </div>
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
