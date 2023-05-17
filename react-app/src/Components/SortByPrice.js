import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {DropdownButton} from "react-bootstrap";

function SortByPrice(props) {


    return (
        <DropdownButton id="dropdown-basic-button" variant="transparency border" title="Sort">
            <Dropdown.Item onClick={() => ("asc")}>Asc</Dropdown.Item>
            <Dropdown.Item onClick={() => ("desc")}>Desc</Dropdown.Item>
        </DropdownButton>
    );
}


export default SortByPrice;
