import React, {useState, useEffect} from "react";
import axios from "axios";


function DressList() {
    const [dresses, setDresses] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/Shop_Dresses/dresses").then((response) => {
            setDresses(response.data)
        });
    }, []);

    return (
        <div>
            <h2>Listă Rochii</h2>
            <ul>
                {dresses.map((dresses) => (
                    <li key={dresses.id} onClick={() => setDresses(dresses)}>
                        {dresses.name}
                        {dresses.color}
                        {dresses.size}
                        {dresses.price}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default DressList;