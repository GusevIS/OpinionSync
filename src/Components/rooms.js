import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";

const Rooms = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={20}>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button>
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>




            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Room1"
                    aria-label="Room1"
                    aria-describedby="basic-addon1"
                    readonly="true"

                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Room2"
                    aria-label="Room2"
                    aria-describedby="basic-addon1"
                    readonly="true"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Room3"
                    aria-label="Room3"
                    aria-describedby="basic-addon1"
                    readonly="true"

                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Room4"
                    aria-label="Room4"
                    aria-describedby="basic-addon1"
                    readonly="true"

                />
            </InputGroup>

            <InputGroup>
                <Form.Control
                    placeholder="Room5"
                    aria-label="Room5"
                    aria-describedby="basic-addon1"
                    readonly="true"

                />
            </InputGroup>



    <Container className="mt-5">
        <Row>
            <Col md={20}>
                <Form className="d-flex">
                    <Form.Control
                        type="insert link"
                        placeholder="insert link..."
                        className="me-2"
                        aria-label="insert link"
                    />
                    <Button>
                        Go!
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
        </>
    );
}
export default Rooms;