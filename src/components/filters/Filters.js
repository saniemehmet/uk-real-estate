import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import FurnishedOptions from "./FurnishedOptions";
import SortBy from "./SortBy";
import SortByBedrooms from "./SortByBedrooms";
import { getProperties } from "../../redux/actions";
import MinPriceFilter from "./MinPriceFilter";
import MaxPriceFilter from "./MaxPriceFilter";

function Filters() {
    const dispatch = useDispatch();
    const area = useSelector((state) => state.area);
    const selectedSortBy = useSelector((state) => state.selectedSortBy);
    const furnishedValue = useSelector((state) => state.furnishedValue);
    const minBedrooms = useSelector((state) => state.minBedrooms);
    const minimumPrice = useSelector((state) => state.minimumPrice);
    const maximumPrice = useSelector((state) => state.maximumPrice);
    const filtersVisible = useSelector((state) => state.isFiltersVisible);

    function fetchProperties() {
        const sortBy = selectedSortBy.split(',');
        const params = {
            area: area,
            category: 'residential',
            order_by: sortBy[0],
            ordering: sortBy[1],
            furnished: furnishedValue,
            minimum_beds: minBedrooms,
            minimum_price: minimumPrice,
            maximum_price: maximumPrice,
            page_number: '1',
            page_size: '40'
        }

        dispatch(getProperties('properties/list', params));
    }

    function showFilters() {
        return <div className="filters-part" style={{ maxWidth: '100%' }}>
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
                        <Row>
                            <Col>
                                <MinPriceFilter />
                            </Col>
                            <Col>
                                <MaxPriceFilter />
                            </Col>
                            <Col className="d-flex justify-content-center mt-2 mt-lg-0">
                                <Button variant="outline-dark" type="button" onClick={() => fetchProperties()}>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    }

    return (
        <>
            {filtersVisible?showFilters():""}
        </>
    );
}
export default Filters;