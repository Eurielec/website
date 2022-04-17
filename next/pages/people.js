import Head from "next/head";

import { Layout, Wave, Footer, Person } from "/components";

import { useQuery, gql } from "@apollo/client";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const GET_PEOPLE = gql`
query {
  people {
    data {
     	id
      attributes {
        name
        charge
        team
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
}
`;

export default function People() {

  const { data, loading, error } = useQuery(GET_PEOPLE);
  if (loading) {
    console.log("Loading");
  }

  console.log(data?.people?.data);

  return (
    <div className="people-container">
      <Head>
        <title>Eurielec | Personas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Wave>
          <div className="people">
            <h1 className="title">
              Junta Directiva
            </h1>
            <div className="role">

            {(data?.people?.data ?? [])
            .filter(person => person?.attributes?.team === "directive_board")
            .map((person, index) => (
              <Person
                index={index}
                imageURL={`${NEXT_PUBLIC_STRAPI_URL}${person?.attributes?.picture?.data?.attributes?.url}`}
                charge={person?.attributes?.charge}
                name={person?.attributes?.name}
              />
            ))
            }
            </div>
          </div>
        </Wave>

        <div className="people">
          <div className="title">
            Coordinadores
          </div>
          <div className="role">
            
          {(data?.people?.data ?? [])
          .filter(person => person?.attributes?.team === "coordinators")
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
        </div>

        <div className="people">
          <div className="title">
            Vocales
          </div>
          <div className="role">
            
          {(data?.people?.data ?? [])
          .filter(person => person?.attributes?.team === "staff")
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
          <Footer />
        </div>
          
      </Layout>
    </div>
  );
}
