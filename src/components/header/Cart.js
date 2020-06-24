import React from "react";
import {deleteitem} from '../../actions/addToCart'


import {useSelector,useDispatch} from 'react-redux'

const Cart = (props) => {
  var price=0;
  const dispatch = useDispatch()


let course=useSelector(state=>state.addToCart);

   const deleteitem1=(id)=>{
        dispatch(deleteitem(id))

   }
course.map(x=>{
  price+=x.price;
})


  const renderCart=(course)=>{
  return  course.map(x=>{
      return(
        <div class="card" style={{width: "14rem"}}>
      <img class="card-img-top" src={x.image} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{x.title}</h5>
        <h3 class="card-footer">&#8377; {x.price}</h3>
        </div>
        <div onClick={e=>deleteitem1(x.id)} class="btn btn-danger">Delete</div>
      </div>
      )
    })
  }




  return (

        <div className="row lg-4">
          {renderCart(course)}
          <div className="container">
          <b>  total price= &#8377; {price}</b>
          </div>
        </div>

  )
}

export default Cart
