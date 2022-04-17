import { client } from "../utils";
import { ApolloProvider } from "@apollo/client";

import "tailwindcss/tailwind.css";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  );
}

export default MyApp;
