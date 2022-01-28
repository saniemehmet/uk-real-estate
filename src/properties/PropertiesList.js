
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PropertyListItem from "./PropertyListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faThList } from '@fortawesome/free-solid-svg-icons';
import { setListView } from "../redux/actions";
import NoResults from "./NoResults";

function PropertiesList(){
    const dispatch = useDispatch();
    const listView = useSelector((state) => state.listView);
    const properties = useSelector((state) => state.properties);

    function renderProperties(){
        if (!properties.length) {
            return <NoResults/>;
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

    function getPropertyGridItems(){

    }

    return (
        <Card>
            <Card.Body>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <Card.Title>Results</Card.Title>
                    <ButtonGroup aria-label='View switch group'>
                        <Button variant={listView ? 'success' : 'outline-success'} onClick={() => dispatch(setListView(true))}>
                            <FontAwesomeIcon icon={faThList}></FontAwesomeIcon>
                        </Button>
                        <Button variant={listView ? 'outline-success' : 'success'} onClick={() => dispatch(setListView(false))}>
                            <FontAwesomeIcon icon={faGripHorizontal}></FontAwesomeIcon>
                        </Button>
                    </ButtonGroup>
                </div>
                <hr className='my-1'></hr>
                <div className='row'>
                    {renderProperties()}
                </div>
            </Card.Body>
        </Card>
    );
}

export default PropertiesList;