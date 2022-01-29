import { Col, Form, Row } from "react-bootstrap";
import { setMaxPrice } from "../../redux/actions";
import { useDispatch } from "react-redux";

function MaxPriceFilter() {
    const dispatch = useDispatch();

    return (
        <Form.Group controlId="formMaxPrice">
            <Row>
                <Col className="col-md-4 d-md-flex">
                    <Form.Label className="align-self-md-center">Maximum price</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        className="text-center"
                        type="number"
                        min={0}
                        placeholder="0"
                        style={{ width: 200 }}
                        onChange={(e) => dispatch(setMaxPrice(e.target.value))} />
                </Col>
            </Row>
        </Form.Group>
    );
}
export default MaxPriceFilter;