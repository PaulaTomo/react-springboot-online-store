import {Button, FormControl, InputGroup} from "react-bootstrap";
import {Form} from "react-bootstrap";
import Title from "./Title";
import React from "react";
import "../Styles/formPromo.css"

function FormPromo() {
    return (
        <div className="container-fluid-promo p-3 mt-4 bg-light text-center">
            <Title title={<h1>Stay connected to our campaigns and promotions</h1>}/>
            <div className="col-md-5">
                <InputGroup className="input mb-sm-0">
                    <Form.Control
                        placeholder="Enter your email address to receive our newsletter"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button className="btn-danger">
                        SUBSCRIBE
                    </Button>
                </InputGroup>
            </div>
        </div>


    )
}

export default FormPromo;
