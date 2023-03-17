import React, {useLayoutEffect, useState} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Header from "./components/pageLayout/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/pageLayout/footer/Footer";
import './App.module.css';

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
                      <Route path="/*"
                             element={<Homepage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>
                      <Route path="/*"
                             element={<Footer headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>
                  </Routes>


              </div>
          </main>
      </Wrapper>

  );
}

export default App;
