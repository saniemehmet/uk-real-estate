import { faBath, faBed, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Row, Col, Badge } from "react-bootstrap";

function PropertyListItem({ property }) {
    return (
        <Card className="mt-md-2">
            <Row>
                <Col className="col-md-4">
                    <Card.Img src={`${property.image_645_430_url}`} />
                    <Col className="text-muted text-center small"> Published: {property.last_published_date} </Col>
                </Col>
                <Col>
                    <Row>
                        <Col className="col-md-6">
                            <Card.Title>{property.title}
                                <Badge className="badge text-white ms-2">{property.property_badge}</Badge>
                            </Card.Title>
                            <Col className="col-md-8 text-muted small">{property.property_type} | {property.displayable_address}</Col>
                            <Col className="col-md-8 text-muted small">{property.available_from_display}</Col>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <Card.Title>
                                        £{property.rental_prices.per_month} pcm
                                    </Card.Title>
                                </Col>
                                <Col className="col-md-3">
                                    <Row>
                                        <Col className="d-flex justify-content-end align-items-center">
                                            <FontAwesomeIcon icon={faEye} className="eye-icon" />
                                        </Col>
                                        <Col>{property.view_count_30day}</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Row>
                            <Col className="col-md-1">
                                <FontAwesomeIcon icon={faBed} />{property.num_bedrooms}
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faBath} /> {property.num_bathrooms}
                            </Col>
                        </Row>
                        <Row className="text-success">
                            <span>{property.furnished_state != null ? <strong>State:</strong> : ''}
                                {property.furnished_state}
                            </span>

                        </Row><hr className="my-1" />
                    </Row>
                    <Row>
                        <Card.Text
                            className="col-md-10 property-description small"
                            dangerouslySetInnerHTML={{ __html: property.short_description }}>
                        </Card.Text>
                        <Col className="d-flex justify-content-end align-items-end mb-2">
                            <Button variant="outline-warning" href={`${property.details_url}`}>Details</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}
export default PropertyListItem;