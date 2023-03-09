import React from 'react';
import $ from "jquery";
import { Link } from "react-router-dom";
var array=[];
const AddToCart = () => {
    if(localStorage.product_array){
    array=JSON.parse(localStorage.product_array);
    console.log(array);
    var source="../images/";
    var price=0;

}
else{
    $('#payment').attr('disabled',true);
}





const image_style={
    height:'auto',
     width:'10vw'
  }
    var srno=0;
    return (
        <div>
        <h2 className='text-center'>Add TO Cart</h2>
            <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>SrNo</th>
                <th>Name</th>
                <th>image</th>
                <th>Quantity</th>
                <th>price</th>
                <th>total price</th>
                
              </tr>
            </thead>
            {(array.length!=0)?
            <tbody>
            {array.map((userObj, index) => (
                    <tr key={index}>
                        <td>{++srno}</td>
                        <td>{userObj.name}</td>
                        <td><img style={image_style} src={source+userObj.image} alt="image"/></td>
                        <td>{userObj.quantity}</td>
                        <td>{userObj.price}</td>
                        {console.log(price+=userObj.price * userObj.quantity)}
                        <td>{userObj.price * userObj.quantity}</td>
                    </tr>
                ))}
                <tr>
                    <td colspan="5">Total</td>
                    <td className='text-center'>{price}</td>
                </tr>
            
            </tbody>
            :<><h2>please add some items</h2></>}
            </table>
            <Link className='btn btn-primary mr-5' id='payment' style={{float: 'right'}} to={'/payment'} state={{amount:price}} >make payment</Link>
            <div className='mt-5'>&nbsp;</div>
        </div>
    );
}

export default AddToCart;
