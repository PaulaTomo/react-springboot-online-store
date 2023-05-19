import MyCard from "../Components/MyCard";
import NewCollectionOne from "../Images/aqua.webp";
import NewCollectionTwo from "../Images/NewCollection/newCollection1.webp";
import NewCollectionThree from "../Images/NewCollection/newCollection3.webp";
import NewCollection4 from "../Images/NewCollection/newCollection4.webp";
import NewCollection5 from "../Images/NewCollection/newCollection5.webp";
import NewCollection6 from "../Images/NewCollection/newCollection6.jpg";
import NewCollection7 from "../Images/NewCollection/NewCollection7.webp";
import NewCollection8 from "../Images/NewCollection/NewCollection8.jpg";
import NewCollection9 from "../Images/NewCollection/newCollection9.jpg";
import NewCollection10 from "../Images/NewCollection/newCollection10.jpg";
import SortByPrice from "../Components/SortByPrice";



function NewCollection(props) {

    return (
        <>
            <SortByPrice/>

            <div className="container-fluid pt-5">
                <div className="row justify-content-around">

                    <MyCard
                        imageSrc={NewCollectionOne}
                        nameDress={"LoveDress"}
                        price={339}
                        id={1}

                    />


                    <MyCard
                        imageSrc={NewCollectionTwo}
                        nameDress={"Purple Belle "}
                        price={229}
                        id={2}
                    />
                    <MyCard
                        imageSrc={NewCollectionThree}
                        nameDress={"Diamond Belle"}
                        price={199}
                        id={3}
                    />
                    <MyCard
                        imageSrc={NewCollection4}
                        nameDress={"BlackMoon Belle "}
                        price={189}
                        id={4}
                    />
                    <MyCard
                        imageSrc={NewCollection5}
                        nameDress={"Elegance Night belle "}
                        price={199}
                        id={5}

                    />
                    <MyCard
                        imageSrc={NewCollection6}
                        nameDress={"Crina Belle "}
                        price={179}
                        id={6}

                    />
                    <MyCard
                        imageSrc={NewCollection7}
                        nameDress={"Cherie Belle"}
                        price={219}
                        id={7}

                    />
                    <MyCard
                        imageSrc={NewCollection8}
                        nameDress={"Blue Belle"}
                        price={199}
                        id={8}

                    />
                    <MyCard
                        imageSrc={NewCollection9}
                        nameDress={"LoveDress Belle "}
                        price={199}
                        id={9}

                    /> <MyCard
                    imageSrc={NewCollection10}
                    nameDress={"Red&Black Belle "}
                    price={199}
                    id={10}

                />

                </div>
            </div>

        </>
    )
}

export default NewCollection;