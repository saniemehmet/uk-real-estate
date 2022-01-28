import { Alert } from "react-bootstrap";

function NoResults() {
    return (
        <Alert variant="warning">
            <Alert.Heading>No properties were found for the selected area</Alert.Heading>
            <p>
                Please choose another location or try again later.
            </p>
        </Alert>
    );

}
export default NoResults;