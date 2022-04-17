import Head from "next/head";
import { Layout, Footer, Person, Sponsors, Wave } from "/components";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const GET_EVENT = gql`
query GetEvent($id: ID!) {
  event(id: $id) {
    data {
      id
      attributes {
        name
        description
        from
        to
        location
        sponsors {
          data {
            attributes {
              name
              url
              logo {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        coordinators {
          data {
            attributes {
              name
              charge
              picture {
                data {
           				attributes {
             				url
            			}
          			}
              }
            }
          }
        }
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

function EventView(props) {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(GET_EVENT, {
    variables: { id }
  });

  if (loading) {
    console.log("Loading");
  }

  console.log(data?.event?.data);

  return (
    <div className="event-view-container">
      <Head>
        <title>Eurielec | {data?.event?.data?.attributes?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="event-view">
          <div className="event">
            <h1 className="title">{data?.event?.data?.attributes?.name}</h1>
            <div className="row">
              <img 
                src={`${NEXT_PUBLIC_STRAPI_URL}${data?.event?.data?.attributes?.logo?.data?.attributes?.url}`}
                className="image"
              />
              <p className="description">
                {data?.event?.data?.attributes?.description}
              </p>
            </div>
            <div className="details">
              <p>
                <b>from</b> {data?.event?.data?.attributes?.from} <b>to</b> {data?.event?.data?.attributes?.to}
              </p>
              <p><b>in</b> {data?.event?.data?.attributes?.location}</p>
            </div>
            
          {
            (data?.event?.data?.attributes?.sponsors?.data.length > 0) ?
            (<Sponsors sponsors={data?.event?.data?.attributes?.sponsors?.data}/>)
            : null
          }
          {
            (data?.event?.data?.attributes?.coordinators?.data.length > 0) ?
              (<div className="organizers-container">
                <h1 className="subtitle">
                  Organizers
                </h1>
                <div className="organizers">

                {(data?.event?.data?.attributes?.coordinators?.data ?? [])
                .map((person, index) => (
                  <Person
                    index={index}
                    imageURL={`${NEXT_PUBLIC_STRAPI_URL}${person?.attributes?.picture?.data?.attributes?.url}`}
                    charge={person?.attributes?.charge}
                    name={person?.attributes?.name}
                    color
                  />
                ))
                }
                </div>
              </div>) : null
          }
          </div>
        </div>

      <Footer />
      </Layout>
    </div>
  );
}

export default EventView;
