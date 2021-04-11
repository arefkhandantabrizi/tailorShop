import { gql } from "@apollo/client";

export default gql`
  mutation logOut {
    logout {
      id
      username
    }
  }
`;
