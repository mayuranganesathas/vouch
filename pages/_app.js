import "tailwindcss/tailwind.css";
import initializeApollo from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider, useAuth } from "../lib/authContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const client = initializeApollo();

  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default MyApp;

function Auth({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (loading) return; // Do nothing while loading
    if (!user) router.push("/signup"); // If not authenticated, force log in
  }, [user, loading]);

  if (user) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}
