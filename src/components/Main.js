import React,{Component} from 'react';
import Header from "./Header"
import Body from "./Body"

import Cart from './header/Cart.js'
import MyCourses from './header/MyCourses.js'
import Notification from './header/Notification.js'
import TeachForUdemy from './header/TeachForUdemy.js'
import UdemyForBusiness from './header/UdemyForBusiness.js'
import WishList from './header/WishList.js'

import Categories from './header/Categories';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Main extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <Router>
      <div>

        <Header   />
        <br/>



      </div>

      <Switch>
        <Route exact path="/">
        <Body/>
      </Route>


          <Route path="/Categories">
          <Categories/></Route>



          <Route path="/udemy-for-business">
          <UdemyForBusiness/></Route>

          <Route path="/teach-for-udemy">
          <TeachForUdemy/></Route>

          <Route path="/my-courses">
          <MyCourses/></Route>

          <Route path="/wishlist">
          <WishList/></Route>

          <Route path="/cart">
          <Cart key="2"/></Route>

          <Route path="/notification">
          <Notification/></Route>
      </Switch>
        </Router>

    )
  }
}
export default Main;
