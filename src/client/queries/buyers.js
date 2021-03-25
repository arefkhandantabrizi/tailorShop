import { gql } from "@apollo/client";

export default gql`
  {
    buyers {
      id
      name
    }
  }
`;
