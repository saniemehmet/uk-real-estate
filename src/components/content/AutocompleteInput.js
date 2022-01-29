import { Row, Col } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { setArea, getSuggestions, getProperties, setListingsVisibility } from "../../redux/actions";

function AutocompleteInput() {

    const dispatch = useDispatch();
    const area = useSelector((state) => state.area);
    const suggestions = useSelector((state) => state.suggestions);

    const onKeyUpHandler = (inputText) => {
        if (inputText.length > 0) {
            dispatch(setArea(inputText));
        }

        if (area.length > 4) {
            dispatch(getSuggestions('auto-complete', area));
        }
    }

    function fetchProperties() {
        const params = {
            area: area,
            category: 'residential',
            page_number: '1',
            page_size: '40'
        }
        dispatch(getProperties('properties/list', params));
        dispatch(setListingsVisibility(true));
    }

    return (
        <Row>
            <Col className="col d-flex justify-content-center">
                <Autocomplete
                    disablePortal
                    id="area-autocomplete"
                    options={suggestions}
                    sx={{ width: 300 }}
                    style={{ borderRadius: '5rem' }}
                    renderInput={(params) =>
                        <TextField {...params}
                            label="Area"
                            onKeyUp={(e) => onKeyUpHandler(e.target.value)}
                            onSelect={(e) => dispatch(setArea(e.target.value))}
                            style={{ backgroundColor: "white", height: 40, borderRadius: '5rem' }}
                        />}
                />
                <Button variant="contained" color="success"
                    size="small"
                    startIcon={<SearchIcon />}
                    className="ms-2 search-real-estates text-white"
                    onClick={() => fetchProperties()}>
                    Search
                </Button>
            </Col>
        </Row>
    );
}
export default AutocompleteInput;