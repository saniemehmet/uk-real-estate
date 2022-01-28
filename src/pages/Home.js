import { Row } from "react-bootstrap";
import Filters from "../components/filters/Filters";
import PropertiesList from "../properties/PropertiesList";

function Home(){
    return (
        <Row>
            <Filters/>
            <PropertiesList/>
        </Row>
    );
}
export default Home;