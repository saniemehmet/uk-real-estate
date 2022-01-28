import { Card, Form, Row, Col } from "react-bootstrap";
import AutocompleteInput from "./AutocompleteInput";
import backgroundImage from "../navbar/background-image.jfif";
import FurnishedOptions from "./FurnishedOptions";
import SortBy from "./SortBy";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SortByBedrooms from "./SortByBedrooms";

function Filters() {
    const selectedSortBy = useSelector((state) => state.selectedSortBy);
    const furnishedValue = useSelector((state) => state.furnishedValue);
    const minBedrooms = useSelector((state) => state.minBedrooms);

    // function log() {
    //     console.log(selectedSortBy);
    //     console.log("bedr", minBedrooms)
    //     console.log(furnishedValue);
    // }

    return (
        <>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '30em'
            }} className="d-flex justify-content-center align-items-center">
                <Row className="d-flex justify-content-center text-center">
                    <Row className="bg-light w-50">
                        <Row>
                            <h1>
                                Find Your
                            </h1>
                        </Row>
                        <Row className="moto">
                            <h2 style={{ fontSize: 3 + 'em' }}>PERFECT PLACE</h2>
                        </Row>
                    </Row>
                    <Row>
                        <h6 className="text-warning text-bold">
                            FIND YOUR DREAM HOME
                        </h6>
                    </Row>
                    <AutocompleteInput />
                </Row>
            </div>
            <div className="filters-part" style={{ maxWidth: '100%' }}>
                <Card className="mt-md-2 mb-md-2">
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={faFilter} />
                            Filters</Card.Title>
                        <Form>
                            <Row>
                                <Col>
                                    <SortBy />
                                </Col>
                                <Col>
                                    <FurnishedOptions />
                                </Col>
                                <Col>
                                    <SortByBedrooms />
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
export default Filters;