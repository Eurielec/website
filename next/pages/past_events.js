import Head from "next/head";

import { Layout, Footer } from "/components";

import { useQuery, gql } from "@apollo/client";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;


const GET_EVENTS = gql`
query {
  events(sort: "from:desc") {
    data {
     	id
      attributes {
        name
        event_type {
          data {
            attributes {
              type
            }
          }
        }
        description
        from
        to
        location
        logo {
          data {
            attributes {
              url
            }
          }
        }
        photos {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;

export default function Events() {

  const { data, loading, error } = useQuery(GET_EVENTS);
  if (loading) {
    console.log("Loading");
  }

  console.log(data?.events?.data);


  return (
    <>
      <Head>
        <title>Eurielec | Últimos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="past-events-container">
          <div className="past-events">
              {
                data?.events?.data ? ([...data?.events?.data] || [])
                .map((event) => {
                  return (
                    <a className="event" key={event.id} href={`event/${event.id}`}>
                      <div className="image-container">
                        <img 
                        src={`${NEXT_PUBLIC_STRAPI_URL}${event?.attributes?.logo?.data?.attributes?.url}`}
                        className="image"
                        />
                      </div>
                      <div className="event-info">
                        <div className="title">
                          {event.attributes.name}
                        </div>
                        <div className="subtitle">
                          {event.attributes.event_type.data.attributes.type}
                        </div>
                        <p className="description">
                          {event.attributes.description}
                        </p>

                        <div className="other-info">
                          <div className="dates">
                            <b>from</b> {event.attributes.from} <b>to</b> {event.attributes.to}
                          </div>
                          <div className="location">
                            <b>at</b> {event.attributes.location}
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                })
                : null
              }
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  );
}
