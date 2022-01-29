import { faBath, faBed, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";

function PropertyGridItem({ property }) {
    return (
        <Card className="col-md-4 mb-md-2 p-1">
            <Row>
                <Col>
                    <Card.Title>
                        {property.title}
                        <Badge className="badge text-white ms-2 small">{property.property_badge}</Badge>
                    </Card.Title>
                </Col>
                <Col className="col-md-3 ">
                    <Row>
                        <Col className="d-flex justify-content-end align-items-center">
                            <FontAwesomeIcon icon={faEye} className="eye-icon" />
                        </Col>
                        <Col className="d-flex justify-content-center">{property.view_count_30day}</Col></Row>
                </Col>
            </Row>

            <Card.Img variant="top" src={`${property.image_645_430_url}`} style={{ height: 268 }} />
            <Card.Title className="d-flex justify-content-center">
                £{property.rental_prices.per_month} pcm | £{property.rental_prices.per_week} pw
            </Card.Title>
            <hr className="my-1" />
            <Card.Body>
                <Col className="col-md-8 text-muted small">{property.property_type} | {property.displayable_address}</Col>
                <Col className="col-md-8 text-muted small">{property.available_from_display}</Col>
                <Row className="text-success">
                    <span>{property.furnished_state != null ? <strong>State:</strong> : ''}
                        {property.furnished_state}
                    </span>

                </Row>
                <Row className="mt-md-2">
                    <Col className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faBed} />{property.num_bedrooms}
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faBath} /> {property.num_bathrooms}
                    </Col>
                </Row>
                <hr className="my-1" />

                <Card.Text
                    className="col-md-10 property-description small"
                    dangerouslySetInnerHTML={{ __html: property.short_description }}>
                </Card.Text>
            </Card.Body>
            <Row className="d-flex justify-content-center">
                <Button variant="outline-warning" href={`${property.details_url}`} className="w-25">Details</Button>
            </Row>
        </Card>
    );
}
export default PropertyGridItem;