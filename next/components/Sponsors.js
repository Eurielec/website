import { useQuery, gql } from "@apollo/client";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const GET_EVENT_TYPES = gql`
query {
    sponsors {
      data {
           id
        attributes {
          name
          url
          current
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
  }
`;

function Sponsors(props) {

    const { data, loading, error } = useQuery(GET_EVENT_TYPES);
    if (loading) {
        console.log("Loading");
    }

    console.log(data?.sponsors?.data);


  return (
    <div className="sponsors-container">
        <h2 className="subtitle">Sponsors</h2>
        <div className="sponsors">
            {
            (props.sponsors ? props.sponsors : data?.sponsors?.data ?? [])
            .filter(sponsor => {
              if (props.sponsors) {
                return true;
              } else {
                return sponsor?.attributes?.current;
              }
            }
              )
            .map(sponsor => (
                <div className="sponsor">
                    <a href={sponsor?.attributes?.url}>
                        <img 
                        src={`${NEXT_PUBLIC_STRAPI_URL}${sponsor?.attributes?.logo?.data?.attributes?.url}`}
                        className="image" />
                    </a>
                </div>
            ))
            }
        </div>
    </div>
  );
}

export default Sponsors;
