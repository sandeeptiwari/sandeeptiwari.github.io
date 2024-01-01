import React, { useState, useEffect, lazy, Suspense } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";

const projects = [
  {
    id: 1,
    name: 'Project 1',
    image: 'project1.gif',
    buyLink: 'https://example.com/project1/buy',
    demoLink: 'https://example.com/project1/demo'
  },
  {
    id: 2,
    name: 'Project 2',
    image: 'project2.gif',
    buyLink: 'https://example.com/project2/buy',
    demoLink: 'https://example.com/project2/demo'
  },
  // Add more projects as needed
];

export default function Projects() {
  const FailedLoading = () => null ;
  const renderLoader = () => <Loading />;
  if (!(typeof repo === 'string')){
  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="opensource">
        <h1 className="project-title">Projects</h1>
        <div className="repo-cards-div-main">
          <h1>Projects</h1>
          {projects.map((project) => (
              <div key={project.id}>
                <h2>{project.name}</h2>
                <img src={project.image} alt={project.name} />
                <div>
                  <a href={project.buyLink} target="_blank" rel="noopener noreferrer">Buy</a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
          ))}
        </div>
        <Button text={"More Projects"} className="project-button" href="#" newTab={true} />
      </div>
    </Suspense>
  );
} else{
    return(<FailedLoading />);
  }
}
