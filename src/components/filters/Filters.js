// import { useState } from "react";
import { Row } from "react-bootstrap";
import AutocompleteInput from "./AutocompleteInput";
import backgroundImage from "../navbar/background-image.jfif";

function Filters() {

    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '30em'
        }} className="d-flex justify-content-center align-items-center">
            <Row className="d-flex justify-content-center text-center">
                <Row className="bg-light w-50">
                    <Row>
                        <h1>
                            Find Your
                        </h1>
                    </Row>
                    <Row className="moto">
                        <h2 style={{ fontSize: 3 + 'em' }}>PERFECT PLACE</h2>
                    </Row>
                </Row>
                <Row>
                    <h6 className="text-warning text-bold">
                        FIND YOUR DREAM HOME
                    </h6>
                </Row>
               <AutocompleteInput/>
            </Row>
        </div>
    );
}
export default Filters;