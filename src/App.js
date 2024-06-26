import {Route, Routes, useLocation} from "react-router-dom";
import React, {useLayoutEffect, useState} from 'react'
import headerImg from "../../cannoli-world-frontend-main/src/assets/img.header/homepage-background-2400.jpg";
import {Cart} from "./components/cart/Cart";
import NavbarLinks from "./components/pageLayout/navbar/NavbarLinks";
import Header from "./components/pageLayout/header/Header";
import Homepage from "./pages/homepage/Homepage";
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
import Admin_ProductAdded from "./components/admin/Admin_ProductAdded";
import Admin_ProductEdit from "./components/admin/Admin_ProductEdit";
import Admin_UserInfo from "./components/admin/Admin_UserInfo";
import PrivateRoute from "./components/pageLayout/route/PrivateRoute";
import Profile from "./pages/profile/Profile";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Cart_DeliveryRequest from "./components/cart_DeliveryRequest/Cart_DeliveryRequest";
import Info_Form from "./components/form/InfoForm"
import Elements from "./pages/elements/Elements";
import FourZeroFour from "./pages/404/FourZeroFour";
import OrderList from "./components/orderList/OrderList";
import OrderLists from "./pages/orderLists/OrderLists";
import './App.css';
import CannoliSnack from "./pages/cannoli/CannoliSnack";


function App () {
    const [headerImage, setHeaderImage] = useState(headerImg);
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

            <div className="container">
              <div className="inner-container__reusable default-area-padding default-text-restrict">

                  <Header headerImage={headerImage} pageTitle={pageTitle}/>


                  <Routes>
                      <Route path="/"
                             element={<Homepage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/NavbarLinks"
                             element={<NavbarLinks headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/cannoli"
                             element={<Cannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                      <Route path="/cannolisnack"
                      element={<CannoliSnack headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

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

                      <Route path="/admin-toevoegen product/"
                             element={<PrivateRoute><Admin_ProductAdded headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route path="/admin-productinfo/"
                             element={<PrivateRoute><Admin_ProductEdit headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route path="/admin-gebruikers/"
                             element={<PrivateRoute><Admin_UserInfo headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route path="/checkout/"
                             element={<PrivateRoute><Cart headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route path="/cart-instruction/checkout"
                             element={<PrivateRoute><Cart_DeliveryRequest headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route path="/deliveryRequests/:deliveryRequest_id"
                             element={<PrivateRoute><OrderList headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route path="/deliveryRequests/:deliveryRequest"
                             element={<PrivateRoute><OrderLists headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      <Route exact path="/users/:user_id"
                             element={<PrivateRoute><Info_Form headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                      </Routes>
                  <Footer/>
              </div>
            </div>
        </Wrapper>
  );
}

export default App;
