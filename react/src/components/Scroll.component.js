import React,{useState, useEffect} from 'react'
import $ from 'jquery'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Scroll (props) {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const image_style={
         width: '18rem'
      }
    
      const image={
       
        height:'100%',
        width:'100%'
      }


    var i = 0; //to control useEffect
    const [product, setproduct] = useState([]); //data that comes from api

    const url="http://localhost/ecom_tast/php/api/product.php?id="+props.srno;
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
    var source='../images/';


      return (
        <>
            <Carousel 
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                      >

                      {product.map((userObj, index) => (

                        <div class="card" style={image_style}><Link to="/menu" state={{data: userObj.srno}}><img className='card-img-top'  src={(Array.isArray(userObj.image)) ? source+userObj.image[0] : source+userObj.image}/></Link></div>
                      ))}
                     

                
            </Carousel>
                    
        </>
      )
    }
  
  
export default Scroll;
