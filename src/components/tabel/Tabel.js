/*
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import axios from "axios";
import './Tabel.css';

function Tabel() {
    const [cannoliBoxes, setCannoliBoxes] = useState ([]);
    const [filteredBoxes, setFilteredBoxes] = useState ([]);
    const [selectedOption, selectedOption] = useState ();
    const source = axios.CancelToken.source ();

    useEffect (() => {
        return function cleanup() {
            source.cancel ();
        }
    }, []);

    useEffect (() => {
        axios.get ("http://localhost:8080/cannolis/")
            `then` ((response) => {
                setCannoliBoxes () (response.data);
                setFilteredBoxes () (response.data);
            })`catch` (error => {
            console.error ('There was an error!', error);
        });

    }, []);


    const columns = [
        {
            name: 'afbeelding',
            selector: row => row.image,
            sortable: true,
            compact: true,
            cell: row => {
                if (row.image) {
                    return <img height="23px" width="53px" alt={row.image.fileName}
                            src={row.image.url}/>
                } else {
                    return <img height="23px" width="53px" alt="cannoli"
                            src={row.image.url}/>
                }
            }

            },
        {
            name: 'Code',
            selector: row => row.code,
            sortable: true,
            compact: false,
            wrap: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            compact: false,
            wrap: true,
            cell: (row) => <a href={row.linkToStore} target="_blank"
                          rel="noopener noreferrer">{row.name} {row.model}</a>,
        },
        {
            name: 'Inhoud',
            selector: row => row.capacity + "gr",
            sortable: true,
            compact: true,
            maxWidth: "50px",
        },
        {
            name: 'Prijs',
            selector: row => row.prijs,
            sortable: true,
            compact: true,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
            sortable: true,
            compact: true,
            hide: "md",
            maxWidth: "50px",
        },


    ];

    const data = filteredBoxes;

    useEffect(() => {
        let cannoliboxList = cannoliBoxes;


        const getSeverity = (cannolis) => {
            switch (cannolis.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        };

    });
}


export default Tabel;


*/








