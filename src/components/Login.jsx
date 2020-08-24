import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div id="Login">
      <Button className="login-button" variant="danger" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Login</ModalTitle>
        </Modal.Header>
        <ModalBody>
          <Form>
            <FormGroup controlId="email">
              <FormLabel>Email</FormLabel>
              <FormControl type="email" placholder="Enter email" />
            </FormGroup>

            <FormGroup controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placholder="Enter paswword" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button as="input" variant="primary" type="submit" value="Login" />

          <Button
            as="input"
            variant="secondary"
            type="submit"
            value="Close"
            onClick={handleClose}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Login;
