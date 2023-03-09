import React, {useState,useEffect} from 'react';
import $ from "jquery";
import { Link } from "react-router-dom";
import { useLocation, Navigate } from "react-router-dom";
import Product_modal from './Product_modal';
import Sidenav from './sidenav';

export default function Product() {

const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const location = useLocation();
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('id')){
      var data=searchParams.get('id')
      var prams=data
    }
    else{
      var data = location.state?.data_prod;
      var category_id=location.state?.id;
      console.log("category_id: " + category_id);
      var cat_id=category_id;
      var id=data;
    }

  // if(data===""|| data===null){
    
  //   data=searchParams.get('id')
  //   console.log(data);
  //   id=data;
   
  // }

  const image_style={
    height:'auto',
     width:'20vw'
  }

  const image={
    height:'100%',
    width:'100%'
  }

  console.log("id is"+data);

  function deleteEvent(event){
    var srno=event.target.value;
    if(window.confirm("Are you sure you want to delete this product?")){
    if (srno != null || srno != "")
    {
        console.log(srno);
        $.ajax({
            url: "http://localhost/ecom_tast/php/component/product_delete.php",
            type: "post",
            data: { data: srno },
            success: function (data, status){
            console.log(data);
            fetchData();
          },
        });
        } 
        else {
        console.log("null");
        }
    }

  }



  //i am stuck here data is not showing value when entered in url
  var i = 0; //to control useEffect
  const [product, setproduct] = useState([]); //data that comes from api
  console.log(data);
  const url="http://localhost/ecom_tast/php/api/product.php?id="+data;
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

  //to call fetch function to read api


  useEffect(() => {
    fetchData();
  }, [i]);

var srno=0;
var source='../images/';

  return (
    <>
    {(prams!=null)?<Navigate to="/admin/product" state={{ data_prod: prams,id:category_id}}/>:
    (data!=null)?
    <div className='products'>
    {console.log(product)}
    <Sidenav/>
      <Product_modal id={data} category_id={cat_id} title="Products" />
      <div className="auth-inner" style={{ width: "auto" }}>
       
       <div className="container">
       
         <table className="table table-bordered table-striped" id='myTable'>
           <thead>
             <tr>
               <th>SrNo</th>
               <th>product</th>
               <th>description</th>
               <th>price</th>
               <th>image</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
             {product.map((userObj, index) => (
               <tr key={index}>
                 <td>{++srno}</td>
                 <td>{userObj.Title}</td>
                 <td>{userObj.Description}</td>
                 <td>{userObj.price}</td>
                 <td style={image_style}><img src={(Array.isArray(userObj.image)) ? source+userObj.image[0] : source+userObj.image}  style={image} className="image-fluid" alt="image"/></td>

                 <td>
                   <button
                     className="btn btn-danger col-lg-12 delete mr-3"
                     onClick={deleteEvent}
                     value={userObj.srno}
                   >
                     Delete
                   </button>
                   <Link to="/menu"
                     className="btn btn-warning col-lg-12 rename"
                     value={userObj.srno}
                     id={userObj.Name}
                     state={{data: userObj.srno}}
                   >
                     view
                   </Link>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
    </div>
    :<Navigate to="/sign-in"/>}
    </>
  )
}
