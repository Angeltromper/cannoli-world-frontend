/*
import {useEffect, useState} from "react";
import {getDownloadURL,ref} from "firebase/storage";
import {storage} from '../../firebase-config';
import { ButtonInfo } from "../button/ButtonInfo";
import 'CannoliCardInfo.css';


export function CannoliCardWrapper({children}) {
    return (
        <section className="cannoliInfo">
            <div className="container">
                <div className="columns">
                    {children}
                </div>
            </div>
        </section>
    )
}

export function CannoliCardInfo({image, cannoliName, cannoliType, cannoliDescription, id}) {

    const [cannoliImage, setCannoliImage] = useState (null);

    useEffect (() => {
        getDownloadURL (ref (storage, image)).then ((url) => {
            setCannoliImage (url);
        })
    }, []);

    return (
        <div className="col-4 col-lg-6 col-md-9 col-sm-9">
            <div className="cannolicard-Info shadow">
                <div className="image-wrapper">
                    <img src={ cannoliImage } alt={ cannoliName }/>
                </div>
                <div className="content">
                    <h2>{ cannoliName }</h2>
                    <div className="cardInfo">
                        <table>
                            <tbody>
                            <tr>
                                <td>Cannoli smaak</td>
                                <td>{ cannoliType }</td>
                                <td>{ cannoliDescription }</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <ButtonInfo url={`/cannolis/${ id }` } variation"secondary" size="small">Meer info</ButtonInfo>
                </div>
            </div>
        </div>

    );

}


 */
