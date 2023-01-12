import { graphql, commitMutation } from "react-relay";
import environment from "@/lib/relayEnvironment";

const operatorStatusMutation = graphql`
  mutation OperatorStatusMutation($input: OperatorStatusInput) {
    operatorStatus: changeOperatorStatus(input: $input)
  }
`;

export default (onCompleted, onError, variables) => {
  const vars = { input: { targetStatus: variables.status } };

  commitMutation(environment, {
    mutation: operatorStatusMutation,
    variables: vars,
    onCompleted,
    onError,
  });
};
