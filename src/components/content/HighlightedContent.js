import { Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AutocompleteInput from "../content/AutocompleteInput";
import backgroundImage from "../navbar/background-image.jfif";

function HighlightedContent() {

    const listingsVisible = useSelector((state) => state.listingsVisible);

    function showTips() {
        return (
            <div className="mt-3 mb-3 p-2 filters-part" style={{ maxWidth: '100%' }}>
                <Row>
                    <Card className="col ms-2">
                        <a href="https://time.com/4217610/renting-first-apartment/">
                            <Card.Img
                                className="mt-2"
                                variant="top"
                                style={{ height: '15rem' }}
                                src="https://media.istockphoto.com/photos/red-for-rent-real-estate-sign-in-front-house-picture-id960624848?k=20&m=960624848&s=612x612&w=0&h=An1VNo1dJ-5QI_J-4bOdrYpyidvhSs-YUqwOaGNzR_g=" />
                        </a>
                        <Card.Body>
                            <Card.Title className="mark text-center">12 Things Everyone Should Know Before Renting an Apartment</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="col ms-2">
                        <a href="https://www.mymovingreviews.com/move/moving-to-a-new-city-alone/">
                            <Card.Img
                                className="mt-2"
                                variant="top"
                                style={{ height: '15rem' }}
                                src="https://amendo.com/wp-content/uploads/2017/06/bigstock-Young-Woman-Traveler-Looking-T-173379065-1024x683.jpg" />
                        </a>
                        <Card.Body>
                            <Card.Title className="mark text-center">Moving to a New City Alone: Challenges and Solutions</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="col ms-2 me-2">
                        <a href="https://www.thetimes.co.uk/money-mentor/article/own-home-successful-investment/">
                            <Card.Img
                                variant="top"
                                className="mt-2"
                                style={{ height: '15rem' }}
                                src="https://www.investopedia.com/thmb/dLi4N69Vqe63ziQ4M7TFvA0G6VQ=/3864x2577/filters:fill(auto,1)/businessman-as-a-property-agent-or-investor-calculating-growth-of-return-on-investment-in-real-estate-before-signing-contract-at-the-office-931801836-5c04a8a046e0fb0001c4a37f.jpg" />
                        </a>
                        <Card.Body>
                            <Card.Title className="mark text-center">How to turn your own home into a successful investment</Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        );
    }

    return (
        <>
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
                    <AutocompleteInput />
                </Row>
            </div>
            {listingsVisible?"":showTips()}
        </>
    );

}
export default HighlightedContent;