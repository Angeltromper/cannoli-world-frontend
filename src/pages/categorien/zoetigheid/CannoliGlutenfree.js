import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './CannoliGlutenfree.css';
import AllCannoli from "../../../components/allCannoli/AllCannoli";


function CannoliGlutenfree() {

    const [glutenfreeCannolis, setGlutenfreeCannolis] = useState([]);

    useEffect(() => {
        async function fetchGlutenfreeCannolis(e) {
            try {
                const response = await axios.get ('https://localhost:8080/cannolis/');

                setGlutenfreeCannolis (response.data);

            } catch (e) {
                console.error (e);
            }
        }

        fetchGlutenfreeCannolis();
    }, []);

    return (
        <>
            <section className="cannoliGlutenfree-container">

                <h2> Cannoli Glutenfree </h2>

                <div className="allCannoli-container">

                    {glutenfreeCannolis.map((cannoli) => {
                        if (cannoli.cannoliType === 'Glutenfree')

                            return (
                                cannoli.image !== null ?

                                    <AllCannoli key={cannolis.id}

                                                url={canoli.image.url}
                                                cannoli_id={cannoli.id}
                                                cannoliName={cannoli.cannoliName}
                                                cannoliPrice={cannoli.price}
                                    />
                                    :

                                    <AllCannoli key={cannolis.id}
                                                cannoli_id={cannoli.id}
                                                cannoliName={cannoli.cannoliName}
                                                cannoliPrice={cannoli.price}

                                    />

                            )
                    })}
                </div>
            </section>
        </>
    );
}

export default CannoliGlutenfree;
