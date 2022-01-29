import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSortBy } from "../../redux/actions";

function SortBy() {
    const dispatch = useDispatch();
    const selectedSortBy = useSelector((state) => state.selectedSortBy);

    const options = [
        {
            order_by: "price",
            ordering: "ascending",
            title: "Lowest price first"
        },
        {
            order_by: "price",
            ordering: "descending",
            title: "Highest price first"
        }
    ]

    const getOptions = () => {
        return options.map((x, index) => {
            return <option
                key={index}
                value={`${x.order_by},${x.ordering}`}>
                {x.title}
            </option>
        })
    }

    return (
        <Form.Group className="mb-3" controlId="filterForm.ControlSelect1">
            <Row className="d-md-flex align-items-md-center">
                <Col className="col-md-4 d-flex justify-content-md-end">
                    <Form.Label>Sort by</Form.Label>
                </Col>
                <Col><Form.Select className="text-center"
                    value={selectedSortBy} style={{ width: 200 }} onChange={e => dispatch(setSelectedSortBy(e.target.value))}>
                    {getOptions()}
                </Form.Select>
                </Col>
            </Row>

        </Form.Group>
    )
}
export default SortBy;