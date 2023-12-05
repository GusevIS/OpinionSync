import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../UI/card";
import ContainedButton from "./buttons/containedButton";
import React from "react";
import BasicTextFields from "./textFields/outlinedTextField";
import OutlinedButtonBlack from "./buttons/outlinedButtonBlack";

const Rooms = () => {
  return (
    <Card>
      <Container className=" ">
        <Row>
          <Col md={20}>
            <Form className="d-flex mt-3 mb-5">
              <BasicTextFields label="search" customWidth="416px" customHeight="56px">
                {}
              </BasicTextFields>
              <ContainedButton buttonText="Search" customWidth="178px" customHeight="56px">
                {}
              </ContainedButton>
            </Form>
          </Col>
        </Row>
      </Container>

      <div
        style={{ height: "400px", overflowY: "auto" }}
        className="w-full px-1 grid gap-1"
      >
        <OutlinedButtonBlack buttonText="Room 1" to="/questions" customWidth="616px" customHeight="54px">
          {}
        </OutlinedButtonBlack>
        <OutlinedButtonBlack buttonText="Room 2" to="/questions" customWidth="616px" customHeight="54px">
          {}
        </OutlinedButtonBlack>
        <OutlinedButtonBlack buttonText="Room 3" to="/questions" customWidth="616px" customHeight="54px">
          {}
        </OutlinedButtonBlack>
        <OutlinedButtonBlack buttonText="Room 4" to="/questions" customWidth="616px" customHeight="54px">
          {}
        </OutlinedButtonBlack>
        <OutlinedButtonBlack buttonText="Room 5" to="/questions" customWidth="616px" customHeight="54px">
          {}
        </OutlinedButtonBlack>
        <OutlinedButtonBlack buttonText="Room 6" to="/questions" customWidth="616px" customHeight="54px">
          {}
        </OutlinedButtonBlack>
        <OutlinedButtonBlack buttonText="Room 7" to="/questions" customWidth="616px" customHeight="54px">
          {}
        </OutlinedButtonBlack>
        <OutlinedButtonBlack buttonText="Room 8" to="/questions" customWidth="616px" customHeight="54px">
          {}
        </OutlinedButtonBlack>
        <OutlinedButtonBlack buttonText="Room 9" to="/questions" customWidth="616px" customHeight="54px">
          {}
        </OutlinedButtonBlack>

      </div>
      <Container className="mt-5">
        <Row>
          <Col md={20}>
            <Form className="d-flex">
              {/*<Form.Control*/}
              {/*  type="insert link"*/}
              {/*  placeholder="insert link..."*/}
              {/*  className="me-2"*/}
              {/*  aria-label="insert link"*/}
              {/*/>*/}
              <BasicTextFields label="insert link..." customWidth="596px" customHeight="56px">
                {}
              </BasicTextFields>
              <ContainedButton buttonText="Go!" to="/questions" customWidth="56px" customHeight="56px">
                {}
              </ContainedButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};
export default Rooms;
