import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMinBedrooms } from "../../redux/actions";

function SortByBedrooms() {
    const dispatch = useDispatch();
    const minBedrooms = useSelector((state) => state.minBedrooms);

    const options = [...Array(10).keys()].map(i => i + 1);

    const getOptions = () => {
        return options.map(x => {
            return <option
                key={x}
                value={x}>
                {x}
            </option>
        })
    }

    return (
        <Form.Group className="mb-3" controlId="filterForm.ControlSelect1">
            <Row className="d-flex align-items-center">
                <Col className="d-flex justify-content-end">
                    <Form.Label>Min bedrooms:</Form.Label>
                </Col>
                <Col><Form.Select className="text-center"
                    value={minBedrooms} style={{ width: 80 }} onChange={e => dispatch(setMinBedrooms(e.target.value))}>
                    {getOptions()}
                </Form.Select>
                </Col>
            </Row>

        </Form.Group>
    )
}
export default SortByBedrooms;