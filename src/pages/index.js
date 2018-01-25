import React from "react";
import styles from "./about-css-modules.module.css";
import Container from "../components/container";

const Company = props => (
  <div className={styles.company}>
    <img src={props.logo} className={styles.logo} alt="" />
    <div className={styles.description}>
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.excerpt}>{props.description}</p>
    </div>
  </div>
);

export default ({ data }) => {
  return (
    <Container>
      <h1>LaFrenchTech</h1>
      {data.allSourcesJson.edges.map(({ node }) => (
        <Company
          name={node.name}
          description={node.description}
          logo={node.logo}
        />
      ))}
    </Container>
  );
};

export const query = graphql`
  query MyCoQuery {
    allSourcesJson {
      edges {
        node {
          name
          description
          logo
          url
        }
      }
    }
  }
`;
