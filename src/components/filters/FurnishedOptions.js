// import { useState } from "react";
import { Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setFurnishedValue } from "../../redux/actions";

function FurnishedOptions() {

    const dispatch = useDispatch();
    const furnishedValue = useSelector((state) => state.furnishedValue);

    const radios = [
        { name: 'Furnished', value: 'furnished' },
        { name: 'Partially furnished', value: 'part_furnished' },
        { name: 'Unfurnished', value: 'unfurnished' },
    ];

    const getRadioButtons = () => {
        return radios.map((radio, index) => {
            return <ToggleButton
                key={index}
                id={`radio-${index}`}
                type="radio"
                variant={ radio.value === 'furnished' || radio.value === 'part_furnished' ? 'outline-success' : 'outline-danger'}
                name="radio"
                value={radio.value}
                checked={furnishedValue === radio.value}
                onChange={(e) => dispatch(setFurnishedValue(e.currentTarget.value))}
            >
                {radio.name}
            </ToggleButton>
        })
    }

    return (
        <>
        <Form.Label>Type: </Form.Label>
        <ButtonGroup className="ms-1">
            {getRadioButtons()}
        </ButtonGroup>
        </>
    );
}
export default FurnishedOptions;