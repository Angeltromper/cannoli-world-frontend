import React, {useEffect, useRef, useState} from 'react';
import HeaderImage from "../../components/pageLayout/headerImage/HeaderImage";
import cannoliSnack from "./../../assets/img.menu-background/cannoliSnack.png";
import cannoliGlutenFree from "../../assets/img.menu-background/cannoliGlutenFree.png";
import cannoliVegan from "./../../assets/img.menu-background/cannoliVegan.png";
import cannoliGiftbox from "../../assets/img.menu-background/cannoliGiftbox.png";
import cannoliFranchise from "../../assets/img.menu-background/cannoliFranchise.png";
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
        <homepage id="homepage" className="outer-content-container">
            <div className="inner-content-container">


            <HeaderImage
                className= "inner-container__reusable"
                text1="Heerlijk"
                text2="Momentje"
                text3="Genieten">
            </HeaderImage>

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
                            <h5>Zo is de</h5><h5><strong><em>"liefde voor cannoli ontstaan."</em></strong></h5>
                            <br/>
                            <h5>Banketbakkerijen met de overheerlijke cannoli's. De bekende cannoli met ricotta. De smaakmogelijkheden zouden oneindig moeten zijn. Dit in een nieuw cannoli jasje alleen wel in de</h5>
                            <h5>goed smaak combinatie. Door de ervaringen en de Italiaanse banketbakkerij zijn wij toen begonnen met het</h5>
                            <h5>opzetten van een breed assortiment van verkoop van verse cannoli's.</h5>
                        </TextContainer>

                    <image className="cannoli-image">
                        <figure><img src={cannoliSnack} alt="cannoli-snack" className="cannoli-img"/></figure>
                        <figure><img src={cannoliGlutenFree} alt="cannoli-glutenFree" className="cannoli-img"/></figure>
                        <figure><img src={cannoliVegan} alt="cannoli-vegan" className="cannoli-img"/></figure>
                        <figure><img src={cannoliGiftbox} alt="cannoli-giftbox" className="cannoli-img"/></figure>
                        <figure><img src={cannoliFranchise} alt="cannoli-franchise" className="cannoli-img"/></figure>
                    </image>

                        <div className="product-container">
                            <fieldset>
                                <label htmlFor="search-by-cannoli">
                                    <select
                                        id="search-by-information"
                                        className="input-field__reusable input-field__select-information"
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
                                        id="search-by-information"
                                        className="input-field__reusable input-field__select-information"
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
                                        id="search-by-information"
                                        className="input-field__reusable input-field__select-information"
                                        value={cannoliQuery}
                                        onChange={(e) => setCannoliQuery(e.target.value)}
                                    >
                                        <option value="Cannoli Vegan">Cannoli vegan</option>
                                        <option value="Cannoli Vegan ingredient">Cannoli vegan ingredient</option>
                                        <option value="Cannoli Vegan prijslijst">Cannoli vegan prijslijst</option>
                                    </select>
                                </label>
                            </fieldset>


                    <fieldset>
                        <label htmlFor="search-by-giftbox">
                            <select
                                id="search-by-information"
                                className="input-field__reusable input-field__select-information"
                                value={cannoliQuery}
                                onChange={(e) => setCannoliQuery(e.target.value)}
                            >
                                <option value="Giftbox" >Giftbox</option>
                                <option value="Giftbox prijslijst">Giftbox prijslijst</option>
                            </select>
                        </label>
                    </fieldset>


                <fieldset>
                    <label htmlFor="search-by-franchise">
                        <select
                            id="search-by-information"
                            className="input-field__reusable input-field__select-information"
                            value={cannoliQuery}
                            onChange={(e) => setCannoliQuery(e.target.value)}
                        >
                            <option value="Franchise">Franchise</option>
                            <option value="Franchise informatie">Franchise informatie</option>
                        </select>
                    </label>
                </fieldset>

                        </div>
                    <Button
                            onClick={() => HandleRef(refSearch)}
                            type="submit"
                            text="zoeken"

                    />

                </div>
                <h3><strong>We nemen u verder mee op reis:<em>"geschiedenis over de oorsprong van de cannoli"</em></strong></h3>
                <h5>De geschiedenis over de oorsprong van de cannoli is waarschijnlijk een mix van alle legendes en overtuigingen verzamelden
                doorgegeven door de eeuwen heen.</h5>
                <h5><strong><em>Twee daarvan zijn de legendes</em></strong></h5> <h5>,die vertellen over de oorsprong van de cannoli.Beide van hen het eens over één ding: vrouwen zijn
                achter hun schepping die plaatsvond in of rond de stad Caltanissetta</h5>

                <h3><strong><em>Het eerste verhaal:</em></strong></h3>
                <h5>Brengt ons in de harem van een Arabische prins, tijdens de Arabische overheersing van het eiland. Men zegt dat de concubines van de emir gebak
                    bakken als afleiding, onder hen, een cilinder-vorm pastei geval gevuld met ricotta, amandelen en honing. De Arabische oorsprong van de cannoli
                    wordt ondersteund door het feit dat de stad Caltanissetta historisch verbonden is met de aanwezigheid van de Moren in Sicillie, zoals blijkt uit de
                    naam zelf, die voorkomt uit "kalf el nissa", een arabische locatie die "vrouwenkasteel"betekent. Interessant, gezien de legende is gevestigd in een
                    kasteel en de uitvinding van de cannoli, volgens het, ligt in de vaardige handen van vrouwen.</h5>

                <h3><strong><em>Volgens een ander verhaal:</em></strong></h3>
                <h5>Werden cannoli voor het eerst gemaakt in een klooster in de buurt van Caltanissetta. Om het carnaval te vieren, "verzonnen" de nonnen een
                    buisvormig gebak gevuld met ricottacrème, chocoladeschilfers en gehakte hazelnoten. Concubines of nonnen, het is zeker dat cannoli voor het eerst
                    werden gemaakt ten tijde van de Arabische overheersing van Sicillié suikerriet, rijst, amandelen, jasmijn, anijs, sesam, saffraan en kaneel gebracht, alle
                    ingrediénten sterk aanwezig in de Siciliaanse keuken nog steeds vandaag. Zoals zo vaak het geval is, de waarheid over de historische oorsprong van cannoli is
                    waarschijnlijk een mix van alle legendes en overtuigingen verzameld en doorgegeven door de eeuwen heen.</h5>

                <h3><strong><em>Het amandelkoekje:</em></strong></h3>
                <h5>Is onstaan vanuit een andere Siciliaanse zoet lekkernij, de "Frutta di Martorana" Deze traditionele lekkernij werd gemaakt
                    in de 16e eeuw door nonnen die in het klooster leefden. De aanleiding hiervan waren de voorbereidingen voor de festiviteiten die waren opgesteld voor 2 november,
                    de dag van allerzielen. Op deze dag zou de bisschop het klooster bezoeken, omdat zogezegd hij vele verhalen had gehoord over de prachtige tuin met vele fruitbomen
                    waar de nonnen het idee om van amandelspijs fruit te creeren omm zo de bomen en de tuin ermee te versieren. Vandaag de dag vind je nog in vele winkeltjes in Sicillie
                    deze frutta martorana, vaak prachtig verpakt in een rieten mandje of houten kistje. De bijnaam van het Siciliaanse amandelkoekje is 'pasta reale' dit omdat het geschikt
                    voor de koning zou zijn vanwege de zoetigheid en de goedheid van het koekje. Aan wie de eer van deze lekkernijen toe komt is nog steeds niet helemaal 100% zeker. Er gaat
                    namelijk ook het verhaal te ronde dat de Arabieren al in de 6e eeuw aan het experimenteren waren met suiker en amandelen.</h5>








                    <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}
                     className="search-result__go-up-icon"/>

                </div>
        </homepage>
    );
}



export default Homepage;










