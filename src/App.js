import React, {useLayoutEffect, useState} from 'react';
import Header from "./components/pageLayout/header/Header";
import {useLocation} from "react-router-dom";

function App() {
    const [headerImage, setHeaderImage] = useState();
    const [pageTitle, setPageTitle] = useState();

    const Wrapper = ({children}) => {
        const location = useLocation();
        useLayoutEffect( () => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);

        return children
    }

  return (
      <Wrapper>
          <main>

          </main>
      </Wrapper>

  );
}

export default App;