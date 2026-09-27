import React, { useState, useEffect ,lazy, Suspense, useCallback } from "react";
import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() => import('../../components/githubProfileCard/GithubProfileCard'));
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }
  const getProfileData = useCallback(() => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: "https://api.github.com/graphql",
        headers: {
          authorization: `Bearer ${openSource.githubConvertedToken}`,
        },
      }),
    });

    client
      .query({
        query: gql`
      {
        user(login:"${openSource.githubUserName}") { 
          name
          bio
          isHireable
          avatarUrl
          location
        }
    }
      `,
      })
      .then((result) => {
        setProfileFunction(result.data.user);
      })
      .catch(function (error) {
          console.warn("GitHub profile unavailable, showing Contact section:", error.message);
          setProfileFunction("Error");
          openSource.showGithubProfile = "false";
      });
  }, []);
  useEffect(() => {
    // Without a token GitHub returns 401, so skip the call and show Contact instead.
    if (!openSource.githubConvertedToken) {
      openSource.showGithubProfile = "false";
      setProfileFunction("Error");
      return;
    }
    if (openSource.showGithubProfile === "true") {
      getProfileData();
    }
  }, [getProfileData]);
if (openSource.showGithubProfile === "true" && !(typeof prof === 'string' || prof instanceof String)){  
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} /> 
      </Suspense>
       );
  } else {
    return <Contact />;
  }
}
