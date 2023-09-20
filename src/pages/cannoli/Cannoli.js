import React, { useEffect } from 'react';
import pageImg from './../../assets/img.background/background cannoli-snack.jpg';
import cannoliSnack from './../../assets/img.menu-background/cannoliSnack.png';
import cannoliGlutenFree from "./../../assets/img.menu-background/cannoliGlutenFree.png";
import cannoliVegan from "./../../assets/img.menu-background/cannoliVegan.png";
import AllCannolis from "../allCannolis/AllCannolis";


function Cannoli ({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
        }, [headerImageHandler, pageTitleHandler]);

    return (
        <>
            <div className="cannolis">
                <AllCannolis
                    image={cannoliSnack}
                    description="Cannoli-Snack(niet glutenvrij) is een koekje(la scorza) wat wordt gebakken in de oven en krijg zo zijn vorm
                    door het deeg om de omhulsel te wikkelen wat lijkt op een tunnel. Het woord cannoli betekend letterlijk lange tunnel.
                    Als het koekjes oven klaar is wordt het gevuld met een overheerlijke romige vulling."
                />

                <AllCannolis
                    image={cannoliGlutenFree}
                    description="Cannoil-Glutenvrij is een koekje(la scorza) wat wordt gefrituurd. Het wordt gemaakt van amandelmeel.
                    door het deeg om de omhulsel te wikkelen wat lijkt op een tunnel. Het woord cannoli betekend letterlijk lange tunnel.
                    Als het koekjes oven klaar is wordt het gevuld met een overheerlijke romige vulling."
                />

                <AllCannolis
                    image={cannoliVegan}
                />
            </div>
        </>
    );
}


export default Cannoli;


