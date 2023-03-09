import React, {useState,useEffect} from 'react';
import '../page.module.css'
import $ from "jquery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function ProductPage(){

  const location = useLocation();
  var data = location.state?.data;
  if(localStorage.getItem('product_count')){
var count=localStorage.getItem('product_count');}
else{
  localStorage.setItem('product_count',0)
}

  function handleClick(){
    var name=localStorage.getItem('product_title');
    var price=localStorage.getItem('product_price');
    var image=localStorage.getItem('product_image');
    var quantity=localStorage.getItem('product_quantity');
    var array=[];
    $('#cart').attr("disabled",true);
    if(localStorage.getItem('product_count')!='0'){
    array=JSON.parse(localStorage.product_array);
    console.log(array);
  }
    count=localStorage.getItem('product_count')+1
    localStorage.setItem('product_count',count);
    var record={'name':name,'price':price,'quantity':quantity,'image':image}
    console.log(record);
    array.push(record);
    console.log(array);
    localStorage.setItem('product_array',JSON.stringify(array));
    console.log(localStorage.getItem('product_array'));
    localStorage.setItem('product_quantity',1);
    $("#cart").attr("disabled", true);
    
  }

function handleChange(e){
  localStorage.setItem('product_quantity',e.target.value);
  
}
  var i = 0; //to control useEffect
  const [product, setproduct] = useState([]); //data that comes from api
  console.log(data);
  const url="http://localhost/ecom_tast/php/api/product.php?srno="+data;
  console.log(url);

  const fetchData = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setproduct(data.data);
    });
    $(document).ready(function () {
      setTimeout(function(){
      $('#myTable').DataTable();
       } ,1000);
  });
};
const style={
  marginTop:'-20px',
  backgroundColor:'white',
  paddingTop:'50px'
}
const style1={
  height: '300px',
  width: '250px',
}

const style2={
  maxHeight: '350px',
  width: 'auto',
}
  //to call fetch function to read api


  useEffect(() => {
    fetchData();
  }, [i]);
  

var source="../images/";
// src={source+image}

  return (

<div className="container-fluid" style={style}>
{product.map((userObj, index) => (<h2 className='text-center mb-5'>{userObj.Title}</h2>))}
 <div className="row">
 {product.map((userObj, index) => (
<>
  <div className="col-lg-3 col-md-6 col-sm-12">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        style={style1}
      >
       {localStorage.setItem('product_image',userObj.image[0])}
       {localStorage.setItem('product_title',userObj.Title)}
       {localStorage.setItem('product_price',userObj.price)}
       
        <Carousel>
        {(Array.isArray(userObj.image)) ? userObj.image.map((image,index)=>(
          
        
          <Carousel.Item >
            <img
              style={style2}
              className="d-block w-100 "
              src={source+image}
              alt={index+"image"}
            />
            
          </Carousel.Item>
        
          
          )) : source+userObj.image}
          </Carousel>
        
      </div>
     
  </div>
 
    <div className="col-lg-6 col-md-6  col-sm-12">
      <h2 key={index} className="text1">{userObj.Title}</h2>
      <p>{userObj.Description}</p>
      <h5>Price</h5>
      <p>{userObj.price}</p>
    </div>

    <div className="col-lg-3 col-sm-12 mb-3">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{userObj.price}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">FREE delivery Thursday</Card.Subtitle>
        <Card.Text>
        <p>Or fastest delivery Tomorrow, February 8. Order within 13 hrs 19
            mins.</p>
            <br />
            <h6>In stock.</h6>
            <p>Sold by Sapphire Retail and Fulfilled by Sapphire Mart.</p>
            <label>Quantity </label>
            <select name="quantity" onChange={handleChange} id="product">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
        </Card.Text>
        <Card.Link href={"http://localhost/ecom_tast/php/mail.php?Name="+userObj.Title+"&Email="+localStorage.getItem('MyEmail')+"&fname="+localStorage.getItem('fname')} className="card-link btn btn-warning"> Enquire Now</Card.Link>
        <button onClick={handleClick} id='cart' className="card-link btn btn-primary" >Add to cart</button>
      </Card.Body>
    </Card>
    </div>
    </>
  ))}

 </div>
    </div>
  );
};


