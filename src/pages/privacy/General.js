import React, { useEffect } from "react";
import TextContainerResp from "../../components/pageLayout/designElement/container/textContainerResp/TextContainerResp";
import './General.css';


function General({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler();
        pageTitleHandler("Algemene Voorwaarden");
    }, []);



    return (
        <div className="general">
            <div className="inner-container__reusable">

                <div className="general-title">
                    <h1>{pageTitleHandler}</h1>
                </div>

                <div className="general-container">

                    <TextContainerResp>
                        <br/>
                        <h3>Inhoudsopgave</h3>
                        <br/>
                        <ul>
                            <li>Artikel 1 – Definities</li>
                            <li>Artikel 2 – Identiteit van de ondernemer</li>
                            <li>Artikel 3 – Toepasselijkheid</li>
                            <li>Artikel 4 – Het aanbodwaZcxz</li>
                            <li>Artikel 5 – De overeenkomst</li>
                            <li>Artikel 6 – Herroepingsrecht</li>
                            <li>Artikel 7 – Kosten in geval van herroeping</li>
                            <li>Artikel 8 – Uitsluiting herroepingsrecht</li>
                            <li>Artikel 9 – De prijs</li>
                            <li>Artikel 10 – Conformiteit en garantie</li>
                            <li>Artikel 11 – Levering en uitvoering</li>
                            <li>Artikel 12 – Duurtransacties: duur, opzegging en verlenging</li>
                            <li>Artikel 13 – Betaling</li>
                            <li>Artikel 14 – Klachtenregeling</li>
                            <li>Artikel 15 – Geschillen</li>
                            <li>Artikel 16 – Aanvullende of afwijkende bepalingen</li>
                        </ul>
                        <br/>
                        <br/>

                        <h3>Artikel 1 - Definities</h3>
                        <h4>In deze voorwaarden wordt verstaan onder andere</h4>
                        <ol>
                            <li>Bedenktijd: de termijn waarbinnen de consument gebruik kan maken van zijn
                                herroepingsrecht; Lees alles over bedenktijd
                            </li>
                            <li>Consument: de natuurlijke persoon die niet handelt in de uitoefening van beroep of
                                bedrijf en een overeenkomst op afstand aangaat met de ondernemer;
                            </li>
                            <li>Dag: kalenderdag;</li>
                            <li>Duurtransactie: een overeenkomst op afstand met betrekking tot een reeks van producten
                                en/of diensten, waarvan de leverings- en/of afnameverplichting in de tijd is gespreid;
                            </li>
                            <li>Duurzame gegevensdrager: elk middel dat de consument of ondernemer in staat stelt om
                                informatie die aan hem persoonlijk is gericht, op te slaan op een manier die toekomstige
                                raadpleging en ongewijzigde reproductie van de opgeslagen informatie mogelijk maakt.
                            </li>
                            <li>Herroepingsrecht: de mogelijkheid voor de consument om binnen de bedenktijd af te zien
                                van de overeenkomst op afstand;
                            </li>
                            <li>Modelformulier: het modelformulier voor herroeping die de ondernemer ter beschikking
                                stelt die een consument kan invullen wanneer hij gebruik wil maken van zijn
                                herroepingsrecht.
                            </li>
                            <li>Ondernemer: de natuurlijke of rechtspersoon die producten en/of diensten op afstand aan
                                consumenten aanbiedt;
                            </li>
                            <li>Overeenkomst op afstand: een overeenkomst waarbij in het kader van een door de
                                ondernemer georganiseerd systeem voor verkoop op afstand van producten en/of diensten,
                                tot en met het sluiten van de overeenkomst uitsluitend gebruik gemaakt wordt van één of
                                meer technieken voor communicatie op afstand.
                            </li>
                            <li>Techniek voor communicatie op afstand: middel dat kan worden gebruikt voor het sluiten
                                van een overeenkomst, zonder dat consument en ondernemer gelijktijdig in dezelfde ruimte
                                zijn samengekomen.
                            </li>
                            <li>Algemene Voorwaarden: de onderhavige Algemene Voorwaarden van de ondernemer.</li>
                        </ol>

                        <br/>
                        <br/>

                        <h3>Artikel 2 - Indentiteit van de ondernemer</h3>
                        <br/>
                        <ul>
                            <li>Cannoli-World</li>
                            <li>mailadres: srruffino@outlook.com</li>
                            <li>phone: SR.Ruffino:(+31)620940691</li>
                            <li>phone: E.Jongh Visscher:(+31)648889093</li>

                            <li>btw.nr: Lorem ipsum dolor sit amet.</li>
                            <li>kvk: Lorem ipsum dolor sit amet.</li>
                        </ul>

                        <br/>
                        <br/>

                        <h3>Artikel 3 - Toepasselijkheid</h3>
                        <br/>
                        <ol>
                            <li>Deze algemene voorwaarden zijn van toepassing op elk aanbod van de ondernemer en op elke
                                tot stand gekomen overeenkomst op afstand en bestellingen tussen ondernemer en
                                consument.
                            </li>
                            <li>Voordat de overeenkomst op afstand wordt gesloten, wordt de tekst van deze algemene
                                voorwaarden aan de consument beschikbaar gesteld. Indien dit redelijkerwijs niet
                                mogelijk is,
                                zal voordat de overeenkomst op afstand wordt gesloten, worden aangegeven dat de algemene
                                voorwaarden bij de ondernemer in te zien en zij op verzoek van de consument zo spoedig
                                mogelijk kosteloos worden toegezonden.
                            </li>
                            <li>Indien de overeenkomst op afstand elektronisch wordt gesloten, kan in afwijking van het
                                vorige lid en voordat de overeenkomst op afstand wordt gesloten, de tekst van deze
                                algemene voorwaarden langs elektronische weg aan
                                de consument ter beschikking worden gesteld op zodanige wijze dat deze door de consument
                                op een eenvoudige manier kan worden opgeslagen op een duurzame gegevensdrager. Indien
                                dit redelijkerwijs niet mogelijk is,
                                zal voordat de overeenkomst op afstand wordt gesloten, worden aangegeven waar van de
                                algemene voorwaarden langs elektronische weg kan worden kennisgenomen en dat zij op
                                verzoek van de consument langs elektronische weg of
                                op andere wijze kosteloos zullen worden toegezonden.
                            </li>
                            <li>Voor het geval dat naast deze algemene voorwaarden tevens specifieke productof
                                dienstenvoorwaarden van toepassing zijn, is het tweede en derde lid van overeenkomstige
                                toepassing en kan de consument zich in geval van tegenstrijdige
                                algemene voorwaarden steeds beroepen op de toepasselijke bepaling die voor hem het meest
                                gunstig is.
                            </li>
                            <li>Indien één of meerdere bepalingen in deze algemene voorwaarden op enig moment geheel of
                                gedeeltelijk nietig zijn of vernietigd worden, dan blijft de overeenkomst en deze
                                voorwaarden voor het overige in stand en zal de betreffende bepaling
                                in onderling overleg onverwijld vervangen worden door een bepaling dat de strekking van
                                het oorspronkelijke zoveel mogelijk benaderd.
                            </li>
                            <li>Situaties die niet in deze algemene voorwaarden zijn geregeld, dienen te worden
                                beoordeeld ‘naar de geest’ van deze algemene voorwaarden.
                            </li>
                            <li>Onduidelijkheden over de uitleg of inhoud van één of meerdere bepalingen van onze
                                voorwaarden, dienen uitgelegd te worden ‘naar de geest’ van deze algemene voorwaarden.
                            </li>
                        </ol>

                        <br/>
                        <br/>

                        <h3>Artikel 4 - Het aanbodwaZcxz</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur enim, fugiat neque
                            obcaecati placeat, praesentium provident quasi quisquam tempore tenetur veritatis
                            voluptatibus. Ab, commodi cum enim fugit id possimus ullam?
                            Ab aliquam aliquid consequuntur impedit maiores pariatur sint unde. Debitis ea fuga illum
                            iure maiores maxime, numquam odit pariatur quos repellat sint soluta vel veniam! Alias
                            aliquid animi, aspernatur at aut, blanditiis dolorum eos ex,
                            magnam necessitatibus nesciunt nihil optio placeat provident quisquam quo sit totam ullam
                            veniam voluptates? Ab adipisci at blanditiis, eos illum, ipsa magni omnis, quis quisquam rem
                            vitae voluptatem. Aut debitis eius, fuga sed suscipit voluptatem?</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 5 - De overeenkomst</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque dolorem doloribus
                            eligendi, eveniet excepturi fugiat fugit incidunt ipsa iusto laborum minus necessitatibus
                            nihil nisi nulla odio praesentium reiciendis saepe soluta tempore veniam,
                            vitae voluptates! A aliquam consectetur culpa cumque dignissimos dolorem ea ex in ipsam
                            itaque iusto minima molestiae nam necessitatibus nemo nihil obcaecati perspiciatis possimus
                            qui quia sint, soluta sunt suscipit veniam voluptas voluptatem voluptatum.
                            Animi aut consequatur doloremque inventore ipsam magni omnis sint veritatis? Adipisci autem
                            mollitia omnis repellendus velit. Aliquid architecto commodi facilis. A, aliquam, atque
                            beatae et eveniet ex illo incidunt iure laborum magnam magni, mollitia nam
                            praesentium quia quidem quo tenetur velit voluptatem! Ab aliquam consequuntur, delectus
                            dicta dolor dolore ducimus eligendi eos error, excepturi, incidunt iste laborum maxime neque
                            nisi numquam omnis qui quibusdam quo quos reprehenderit rerum sapiente sint
                            suscipit tempore ullam voluptatum! Asperiores cum earum fugiat, impedit, maiores obcaecati
                            officiis perspiciatis, praesentium repellat tempora totam vitae? Accusantium ad animi
                            asperiores assumenda distinctio ea, ex expedita explicabo fuga laborum laudantium nisi quis
                            quo tempore ut.
                            Ab ad animi aspernatur assumenda deserunt doloribus, eos illum impedit iusto laudantium
                            maxime nemo numquam obcaecati, praesentium provident quibusdam repellendus, vel voluptas?
                            Exercitationem fugit inventore qui reprehenderit.</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 6 - Herroepingsrecht</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque eius enim eveniet
                            explicabo incidunt ipsum, perferendis perspiciatis quaerat ratione sed sit sunt voluptates.
                            Alias asperiores deleniti dolorum ex expedita explicabo facere, illo laboriosam libero modi
                            non obcaecati
                            odio officiis pariatur perspiciatis repellendus saepe totam voluptatibus. Ab alias
                            consequuntur laudantium unde. Beatae consectetur eaque et facilis hic impedit iusto, magnam
                            officia, officiis optio quam quasi reiciendis temporibus vitae, voluptate. At corporis
                            eveniet labore non nostrum porro quo! Deleniti, incidunt sit.</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 7 - Kosten in geval van herroeping</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi deserunt eius
                            minima, officiis optio pariatur, quisquam quo quod rerum sequi ullam veniam vero voluptatem,
                            voluptatibus. A consequuntur dolorum expedita harum nemo nesciunt provident repellat
                            repellendus rerum veniam? Accusantium consequatur,
                            dolorum excepturi explicabo impedit magni minima molestiae reprehenderit? Eligendi,
                            quis.</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 8 - Uitsluiting herroepingsrecht</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti dolor, harum
                            impedit, magnam neque nisi nobis nostrum officia perferendis reiciendis ut. Ab accusantium
                            aliquid molestias nisi numquam quia quibusdam saepe sapiente similique tempore. Accusamus
                            aliquam aut autem blanditiis cumque deleniti doloremque dolorum
                            earum eius eligendi, eveniet ex expedita explicabo facere fugit hic incidunt laborum natus
                            nemo obcaecati qui quos reiciendis rerum, sunt tempora ut vel veritatis? Eos, fugiat,
                            minima.</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 9 - De prijs</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus odio quibusdam
                            recusandae repudiandae sed! Ab ad consectetur deserunt enim, in ipsum iste, magnam modi
                            molestiae molestias neque non nostrum perferendis perspiciatis possimus quia quisquam totam
                            velit veritatis voluptatum! Accusamus debitis dicta dolor est fugiat natus
                            odio reprehenderit soluta ut vero. Ad aliquam amet impedit ipsa laborum natus obcaecati quam
                            quis quisquam vitae. Cum fugiat molestiae porro totam voluptatum. Deleniti illum maxime
                            quibusdam quo repudiandae unde velit veritatis. Natus, velit, voluptate.</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 10 - Conformiteit en garantie</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore, eaque et eveniet in
                            itaque mollitia nostrum reiciendis tempora vel!</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 11 - Levering en uitvoering</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda error harum magni
                            praesentium quae quod sequi, unde veritatis voluptas voluptatum?</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 12 - Duurtransacties: duur, opzegging en verlenging</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi consectetur dolorem
                            dolores facere fuga hic incidunt iusto, labore libero minus modi non omnis possimus quasi
                            recusandae sapiente soluta ullam! Amet delectus dignissimos dolorem impedit non omnis!
                            Accusamus alias assumenda, blanditiis cumque dolores eaque est facere harum id
                            illum magni minima molestias nihil officia quaerat quibusdam, repellendus! Deleniti deserunt
                            distinctio excepturi explicabo, fuga minus modi nemo nihil non possimus saepe.</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 13 - Betaling</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolore ipsa ratione
                            repellat? Cumque error nesciunt possimus vero voluptas! Distinctio dolores, doloribus ea
                            facilis in labore natus sequi tempora voluptates. Consequatur et eum fugiat impedit iste
                            iure laboriosam magni natus nostrum, perferendis quam vero vitae voluptate. Alias,
                            aperiam, dignissimos doloremque dolorum fugiat in itaque odio qui reiciendis reprehenderit
                            ut vitae!</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 14 - Klachtenregeling</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad alias aut, commodi,
                            consequatur cupiditate debitis dolor eligendi excepturi id illo in inventore ipsam nam
                            nostrum nulla numquam omnis possimus quibusdam quisquam quos recusandae, similique sunt
                            tempora. Architecto dignissimos earum error, explicabo facilis laborum magni nihil placeat
                            quod repellendus
                            suscipit temporibus. Debitis excepturi fuga illum iure nulla repellendus sit.</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 15 - Geschillen</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut deleniti exercitationem
                            labore nostrum officia pariatur, quidem. Adipisci aliquam asperiores aspernatur doloremque
                            fugit nemo odit porro. Accusantium ad blanditiis consequatur debitis fugit ipsum itaque
                            maiores natus praesentium, repellat veniam vero. Ad architecto cum cumque deleniti dolore
                            dolores esse et expedita
                            explicabo hic illum in ipsa ipsam, iusto laborum maiores minus nemo nostrum optio
                            perferendis recusandae repellendus tempore vero voluptas voluptatem!</h5>

                        <br/>
                        <br/>

                        <h3>Artikel 16 - Aanvullende of afwijkende bepalingen</h3>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis omnis quisquam voluptates.
                            Labore, nulla optio quam sequi tempore temporibus voluptatum?</h5>

                    </TextContainerResp>
                </div>
            </div>
        </div>
    );
}

export default General;
