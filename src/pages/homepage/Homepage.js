import React, {useEffect, useRef, useState} from 'react';
import HeaderImage from "../../components/pageLayout/headerImage/HeaderImage";
import cannoliSnack from "./../../assets/img.menu-background/cannoliSnack.png";
import cannoliGlutenFree from "../../assets/img.menu-background/cannoliGlutenFree.png";
import cannoliVegan from "./../../assets/img.menu-background/cannoliVegan.png";
import goUp from "../../assets/navIcon/goUp.png";
import Button from "../../components/button/Button";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import HandleRef from "../../helpers/HandleRef";
import './Homepage.css'

function Homepage ({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler();
        pageTitleHandler();
        }, [headerImageHandler,pageTitleHandler]);

    const [cannoliQuery, setCannoliQuery] = useState("");
    const refSearch = useRef(null);

    return (
        <div className="outer-content-container">
            <HeaderImage
                className= "inner-container__reusable"
                text1="Heerlijk"
                text2="Momentje"
                text3="Genieten">
            </HeaderImage>


            <main className="inner-container__reusable homepage-container">
                <div className="search-query__section" ref={refSearch}>


                        <TextContainer>
                            <h1>Welkom op de site van Cannoli-world</h1>

                            <br/>
                            <h5>Graag willen wij de liefde voor Italië en de overheerlijke lekkernijen met u delen. We nemen u mee op reis.</h5>
                            <h3><strong>De reis begint hier:<em>"hoe de liefde voor cannoli is ontstaan"</em></strong></h3>
                            <h5><strong><em>Italië</em></strong>een land vol prachtige dorpjes en <strong><em>"heerlijke"</em></strong> gerechten. Het prachtige gardameer, helderblauw water,</h5>
                            <h5>vrolijke huisje, bergen en wijnheuvels. <strong><em>Italië</em></strong>een land met een geschiedenis.</h5>
                            <h5>De liefde voor Italië is ontstaan door het velen reizen door mooie gebieden van het land. In de tijd van de</h5>
                            <br/>
                            <h5>coronapandemie, waarin ons bedrijf voor de souvenirs het zwaar te verduren heeft gekregen zijn we niet bij de pakken neer gaan zitten.</h5>
                            <h5>Door de liefde die we hebben voor Italië en ervaringen en de connecties die we al die jaren hebben opgebouwd</h5>
                            <h5>kwamen die in de tijd van de pandemie goed van pas. De herinneringen van de prachtige dorpjes en heerlijke gerechten zijn ons altijd bijgebleven.</h5>
                            <h5>Zo is de</h5><h4><strong><em>"liefde voor cannoli ontstaan."</em></strong></h4>
                            <br/>
                            <h5>Banketbakkerijen met de overheerlijke cannoli's. De bekende cannoli met ricotta. De smaakmogelijkheden zouden oneindig moeten zijn. Dit in een nieuw cannoli jasje alleen wel in de</h5>
                            <h5>goed smaak combinatie. Door de ervaringen en de Italiaanse banketbakkerij zijn wij toen begonnen met het</h5>
                            <h5>opzetten van een breed assortiment van verkoop van verse cannoli's.</h5>
                        </TextContainer>

                        <image className="inner-container__reusable">
                            <figure><img src={cannoliSnack} alt="cannoli-snack" className="cannoli-img"/></figure>
                            <figure><img src={cannoliGlutenFree} alt="cannoli-glutenFree" className="cannoli-img"/></figure>
                            <figure><img src={cannoliVegan} alt="cannoli-vegan" className="cannoli-img"/></figure>
                        </image>


                        <homepage className="product-container">
                            <fieldset>
                                <label htmlFor="search-by-cannoli">
                                    <select
                                        className="input-field__reusable input-field__select-information"
                                        id="search-by-information"
                                        value={cannoliQuery}
                                        onChange={(e ) => setCannoliQuery(e.target.value)}
                                    >
                                        <option value="Cannoli Snack" >Cannoli snack</option>
                                        <option value="Cannoli Snack ingredient">Cannoli snack ingredient</option>
                                        <option value="Cannoli Snack prijslijst">Cannoli snack prijslijst</option>
                                    </select>
                                </label>
                            </fieldset>


                            <fieldset>
                                <label htmlFor="search-by-cannoli">
                                    <select
                                        className="input-field__reusable input-field__select-information"
                                        id="search-by-information"
                                        value={cannoliQuery}
                                        onChange={(e) => setCannoliQuery(e.target.value)}
                                    >
                                        <option value="Cannoli GlutenFree">Cannoli glutenvrij</option>
                                        <option value="Cannoli GlutenFree ingredient">Cannoli glutenvrij ingredient</option>
                                        <option value="Cannoli GlutenFree prijslijst">Cannoli glutenvrij prijslijst</option>
                                    </select>
                                </label>
                            </fieldset>

                            <fieldset>
                                <label htmlFor="search-by-cannoli">
                                    <select
                                        className="input-field__reusable input-field__select-information"
                                        id="search-by-information"
                                        value={cannoliQuery}
                                        onChange={(e) => setCannoliQuery(e.target.value)}
                                    >
                                        <option value="Cannoli Vegan">Cannoli vegan</option>
                                        <option value="Cannoli Vegan ingredient">Cannoli vegan ingredient</option>
                                        <option value="Cannoli Vegan prijslijst">Cannoli vegan prijslijst</option>
                                    </select>
                                </label>
                            </fieldset>
                        </homepage>

                        <Button
                            onClick={() => HandleRef(refSearch)}
                            type="submit"
                            text="zoeken"
                        />
                </div>

                <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}
                     className="search-result__go-up-icon"/>
            </main>
        </div>
    );
}

export default Homepage;










