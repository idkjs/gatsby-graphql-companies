import React from "react";

export default ({ data }) => {
  return (
    <div>
      <h1>LaFrenchTech</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.allSourcesJson.edges.map(({ node }) => (
            <tr>
              <td>{node.name}</td>
              <td>{node.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const query = graphql`
  query MyCoQuery {
    allSourcesJson {
      edges {
        node {
          name
          url
        }
      }
    }
  }
`;
