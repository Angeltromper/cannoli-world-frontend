import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './CannoliSnack.css';
import AllCannoli from "../../../components/allCannoli/AllCannoli";



function CannoliVegan() {

    const [veganCannolis, setVeganCannolis] = useState([]);

    useEffect(() => {
        async function fetchVeganCannolis(e) {
            try {
                const response = await axios.get ('https://localhost:8080/cannolis/');

                setVeganCannolis (response.data);

            } catch (e) {
                console.error (e);
            }
        }

        fetchVeganCannolis();
    }, []);

    return (
        <>
            <section className="cannoliVegan-container">

                <h2> Cannoli Vegan </h2>

                <div className="allCannoli-container">

                    {veganCannolis.map((cannoli) => {
                        if (cannoli.cannoliType === 'Vegan')

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

export default CannoliVegan;
