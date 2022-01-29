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
        <Form.Group className="mb-3 mb-md-0 mt-2 mt-sm-0" controlId="filterForm.ControlSelect1">
            <Row className="d-md-flex align-items-md-center">
                <Col className="d-md-flex justify-content-md-end">
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