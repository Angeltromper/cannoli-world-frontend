import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import {useLayoutEffect, useState} from 'react'
import Header from "./components/pageLayout/header/Header";
import Homepage from "./pages/homepage/Homepage";
import NavBarResp from "./components/pageLayout/navBarResp/navBarResp";
import './App.css';


function App () {
    const [headerImage, setHeaderImage] = useState();
    const [pageTitle, setPageTitle] = useState();
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  };

  return (
      <Wrapper>
          <main className="outer-content-container">
              <div className="inner-content-container default-area-padding default-text-restrictor">
                  <Header headerImage={headerImage} pageTitle={pageTitle}/>

                  <Routes>
                      <Route path="/"
                             element={<Homepage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/navbarResp"
                             element={<NavBarResp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>







                  </Routes>


              </div>
          </main>

      </Wrapper>
  );
}

export default App;
