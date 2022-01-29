
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faGripHorizontal, faThList } from '@fortawesome/free-solid-svg-icons';
import { setListView, setFiltersVisibility } from "../redux/actions";
import NoResults from "./NoResults";
import PropertyListItem from "./PropertyListItem";
import PropertyGridItem from "./PropertyGridItem";

function PropertiesList() {
    const dispatch = useDispatch();
    const listView = useSelector((state) => state.listView);
    const properties = useSelector((state) => state.properties);
    const filtersVisible = useSelector((state) => state.isFiltersVisible);
    const listingsVisible = useSelector((state) => state.listingsVisible);

    function renderProperties() {
        if (!properties.length) {
            return <NoResults />;
        }

        return listView ? getPropertyListItems() : getPropertyGridItems();
    }

    function getPropertyListItems() {
        return properties.map(property => {
            return <PropertyListItem
                key={property.listing_id}
                property={property}
            >
            </PropertyListItem>
        });
    }

    function getPropertyGridItems() {
        return properties.map(property => {
            return <PropertyGridItem
                key={property.listing_id}
                property={property}
            >
            </PropertyGridItem>
        });
    }

    function showListings() {
        return <Card>
            <Card.Body>
                <div className='d-flex align-items-center mb-2'>
                    <Card.Title className="ms-2">Listings</Card.Title>
                    <div className="ms-auto">
                        <Button variant='outline-dark' className="me-2"
                            onClick={() => dispatch(setFiltersVisibility(!filtersVisible))}>
                            <FontAwesomeIcon icon={faFilter} />
                        </Button>
                        <ButtonGroup aria-label='View switch group'>
                            <Button variant={listView ? 'success' : 'outline-success'} onClick={() => dispatch(setListView(true))}>
                                <FontAwesomeIcon icon={faThList}></FontAwesomeIcon>
                            </Button>
                            <Button variant={listView ? 'outline-success' : 'success'} onClick={() => dispatch(setListView(false))}>
                                <FontAwesomeIcon icon={faGripHorizontal}></FontAwesomeIcon>
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
                <hr className='my-1'></hr>
                <div className='row'>
                    {renderProperties()}
                </div>
            </Card.Body>
        </Card>
    }

    return (
        <>
            {listingsVisible ? showListings() : ""}
        </>
    );
}

export default PropertiesList;