import React, {createContext, useState, useContext} from "react";

export const cannoliContext = createContext({});

export function useCannoliContext() {
    return useContext(cannoliContext);
}

export default function CannoliContextProvider({children}) {
    const [cannoli, setCannoli] = useState('');
    const [cannoliList, setCannoliList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);
    const [snack, setSnack] = useState([]);
    const [glutenFree, setGlutenFree] = useState([]);
    const [vegan, setVegan] = useState([]);
    const [giftbox, setGiftbox] = useState([]);
    const [priceList, setPriceList] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [pageTitle, setPageTitle] = useState('');

    const data= {
        cannoli,
        setCannoli,
        cannoliList,
        setCannoliList,
        searchResult,
        setSearchResult,
        ingredientList,
        setIngredientList,
        snack,
        setSnack,
        glutenFree,
        setGlutenFree,
        vegan,
        setVegan,
        giftbox,
        setGiftbox,
        priceList,
        setPriceList,

        errorMessage,
        setErrorMessage,
        loading,
        setLoading,
        pageTitle,
        setPageTitle
    };

    // eslint-disable-next-line react/jsx-no-undef
    return (<cannoliContext.Provider value={data}>
            {children}
    </cannoliContext.Provider>
    );
}
