import { Col, Form, Row } from "react-bootstrap";
import { setMinPrice } from "../../redux/actions";
import { useDispatch } from "react-redux";

function MinPriceFilter() {
    const dispatch = useDispatch();

    return (
        <Form.Group controlId="formMinPrice">
            <Row>
                <Col className="col-md-4 d-md-flex justify-content-md-end ms-md-3 ms-xl-0">
                    <Form.Label className="d-md-flex align-items-md-center">Minimum price</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        type="number" 
                        min={0}
                        placeholder="0"
                        style={{ width: 200 }}
                        onChange={(e) => dispatch(setMinPrice(e.target.value))} />
                </Col>
            </Row>
        </Form.Group>
    );
}
export default MinPriceFilter;