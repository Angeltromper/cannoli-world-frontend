import React, { useEffect, useRef, useState } from "react";
import {collection, getDocs} from 'firebase/firestore';
import pageImg from './../../assets/img.background/background cannoli-snack.jpg';
import Navbar from "../../components/pageLayout/navbar/Navbar";
import {AllCannolis, CannolisWrapper} from "../allCannolis/AllCannolis";
import {db} from "../../firebase-config";
import './Cannoli.css';
import '../../css/Grid.css';


function Cannoli({headerImageHandler,pageTitleHandler}) {

    const [cannolisList, setCannolisList] = useState([]);
    const cannolisCollectionRef = collection(db, "cannolis");


    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
        }, [headerImageHandler,pageTitleHandler]);
        async function getCannolis() {
            const data = await getDocs(cannolisCollectionRef);
            setCannolisList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getCannolis();

        return (
        <>
            <Navbar/>

            <CannolisWrapper>

                {cannolisList.sort( (b, a) =>
                    a.createdAt - b.createdAt
                ).map((cannoli) => (
                    <AllCannolis
                        key={cannoli.createdAt}
                        id={cannoli.id}
                        image={cannoli.image}
                        cannoliName={cannoli.name}
                        price={cannoli.price}
                        flavour={cannoli.flavour}
                    />
                ))}

            </CannolisWrapper>
        </>
    );
}

export default Cannoli;
