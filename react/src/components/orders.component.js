import React,{useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom'
import $ from "jquery";
const Orders = () => {
    const navigate = useNavigate();
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('payment')){
        var payment=searchParams.has('payment');
    }
    var i=0;
    const [users, setUsers] = useState([]);
    const fetchData = () => {
        fetch("http://localhost/ecom_tast/php/api/order.php?userid="+localStorage.getItem('userid'))
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data[0].products);
            setUsers(data.data);
          });
        }
        var source="../images/";
        
  useEffect(() => {
    fetchData();
  }, [i]);
  const style1={
    maxHeight: '200px',
    maxWidth: '250px',
  }
  const style2={
    maxHeight: '200px',
    width: 'auto',
  }
  if(payment){
$(document).ready(function() {
    setTimeout(function () {
        $("#successMessages").fadeOut("fast");
        navigate("/orders")
      }, 1200);
      
})
}
  return (
    <div className='container'>
{(payment)?<div className="alert alert-success alert-dismissible fade show " id='successMessages' role="alert">
          <strong>Payment</strong> success
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>:<></>}

      <h3 className="text-center">Orders</h3>
     
      {users.map((userObj, index) => (
      <div class="card flex-row">
      <div className='card-img' style={style1}>
        <Carousel >
        {JSON.parse(userObj.products).map((productObj, index) => (
            <Carousel.Item key={index}>
            <img
            style={style2}
            class="card-img-left img-fluid"
            src={source+productObj.image}
            />
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
        <div class="card-body">
          <h4 class="card-title h5 h4-sm">Your Order</h4>
          <p class="card-text">{'order: '+userObj.customer_strip_id }</p>
          <p class="card-text">{'transaction id: '+userObj.Transaction_id }</p>
          <p class="card-text">{'order on: '+userObj.date}</p>
        </div>
      </div>
      ))}



    </div>

   
 
  );
};

export default Orders;
