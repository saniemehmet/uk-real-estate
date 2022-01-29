import { Row } from "react-bootstrap";
import HighlightedContent from "../components/content/HighlightedContent";
import Filters from "../components/filters/Filters";
import PropertiesList from "../properties/PropertiesList";

function Home(){
    return (
        <Row>
            <HighlightedContent/>
            <Filters/>
            <PropertiesList/>
        </Row>
    );
}
export default Home;