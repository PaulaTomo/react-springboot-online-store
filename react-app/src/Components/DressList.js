import React, {useState, useEffect} from "react";
import axios from "axios";


const DressList = () => {

    const [dresses, setDresses] = useState([]);
    useEffect(() => {

        axios.get(`http://localhost:8080/store/dresses`)
            .then(response => {
                setDresses(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div>
            <h1>Dress List</h1>
            {dresses.map((dress) => (
                <div key={dress.dressId}>
                    <h2>{dress.nameDress}</h2>
                    <p>Price: {dress.price}</p>
                </div>
            ))}
        </div>
    );
}


export default DressList;