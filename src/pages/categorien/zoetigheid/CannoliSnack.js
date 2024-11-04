import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './CannoliSnack.css';
import AllCannoli from "../../../components/allCannoli/AllCannoli";


function CannoliSnack() {

    const [snackCannolis, setSnackCannolis] = useState([]);

    useEffect(() => {
        async function fetchSnackCannolis(e) {
            try {
                const response = await axios.get ('https://localhost:8080/cannolis/');

                setSnackCannolis (response.data);

            } catch (e) {
                console.error (e);
            }
        }

        fetchSnackCannolis();
        }, []);

    return (
        <>
            <section className="cannoliSnack-container">

                <h2> Cannoli Snack </h2>

                <div className="allCannoli-container">

                    {snackCannolis.map((cannoli) => {
                        if (cannoli.cannoliType === 'Snack')

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

export default CannoliSnack;
