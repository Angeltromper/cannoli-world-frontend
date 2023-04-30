import React from "react";
import './App.css';

import {Routes, Route, useLocation} from "react-router-dom";
import {useLayoutEffect, useState} from 'react'
import {Cart} from './components/cart/Cart';
import Header from "./components/pageLayout/header/Header";
import Homepage from "./pages/homepage/Homepage";
import NavbarResp from "./components/pageLayout/navbarResp/NavbarResp";
import Footer from "./components/pageLayout/footer/Footer";
import Cannoli from "./pages/cannoli/Cannoli";
import Giftbox from "./pages/giftbox/Giftbox";
import Service from "./pages/service/Service";
import Franchise from "./pages/franchise/Franchise";
import Contact from "./pages/contact/Contact";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import SearchCannoli from "./pages/searchCannoli/SearchCannoli";
import SearchResult from "./pages/searchResult/SearchResult";
import CannoliIngredient from "./components/cannoliIngredient/CannoliIngredient";
import AllCannolis from "./pages/allCannolis/AllCannolis";
import CannoliGlutenFree from "./pages/cannoli/CannoliGlutenFree";
import CannoliSnack from "./pages/cannoli/CannoliSnack";
import CannoliVegan from './pages/cannoli/CannoliVegan';
import PrivateRoute from './components/pageLayout/route/PrivateRoute';
import Profile from './pages/profile/Profile';
import PrivacyPolicy from './pages/privacy/PrivacyPolicy';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import Elements from './pages/elements/Elements';
import FourZeroFour from './pages/404/FourZeroFour';
import OrderList from './components/orderList/OrderList';



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
                             element={<NavbarResp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/cannoli"
                             element={<Cannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/giftbox"
                             element={<Giftbox headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/service"
                             element={<Service headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/franchise"
                             element={<Franchise headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/contact"
                             element={<Contact headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/forgotPassword"
                             element={<ForgotPassword headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/searchCannoli"
                             element={<SearchCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/searchResult"
                             element={<SearchResult headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/cannoliIngredient"
                             element={<CannoliIngredient headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/allCannolis"
                             element={<AllCannolis headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/cannoliGlutenFree"
                             element={<CannoliGlutenFree headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/cannoliSnack"
                             element={<CannoliSnack headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/cannoliVegan"
                             element={<CannoliVegan headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/profile/"
                             element={<PrivateRoute><Profile headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route path="privacy-policy/"
                             element={<PrivacyPolicy headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/inloggen/"
                             element={<SignIn headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/registreren/"
                             element={<SignUp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/design elements/"
                             element={<Elements headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/404/"
                             element={<FourZeroFour headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/checkout/"
                             element={<PrivateRoute><Cart headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route path="/cart-instruction/checkout"
                             element={<PrivateRoute>Cart_DeliveryRequest headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route path="/deliveryRequests/:deliveryRequest_id"
                             element={<PrivateRoute><OrderList headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route exact path="/users/:user_id"
                             element={<PrivateRoute>UserInfo_Form headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>
                  </Routes>

                  <Footer/>
              </div>
          </main>
      </Wrapper>

  );
}

export default App;
