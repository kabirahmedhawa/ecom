import React,{useState, useEffect} from 'react'
import Scroll from './Scroll.component'
import { Link } from "react-router-dom";
import { Navigate, useLocation  } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Carousel from 'react-bootstrap/Carousel';
import $ from "jquery";
// When the user scrolls the page, execute myFunction



// Get the navbar


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

const Home = () => {
localStorage.setItem('home',true);
localStorage.setItem('product_quantity',1);
      let searchParams = new URLSearchParams(window.location.search);
      const location = useLocation();
      if(searchParams.has('login')){
        var e_mail=searchParams.get('login');
        var fname=searchParams.get('fname');
        if(searchParams.has('id'))
        {
        var id=searchParams.get('id');
        localStorage.setItem("userid", id);
      }
        localStorage.setItem("MyEmail", e_mail);
        localStorage.setItem("fname", fname);
        console.log(e_mail);
      }
      else if(searchParams.has('enquire')){
        var enquire=searchParams.get('enquire');
        localStorage.setItem("enquire", enquire);
      }
      else{
        e_mail=null;
        var email =location.state?.e_mail;
        console.log(email);
      }
      setTimeout(function () {
        $("#successMessage").fadeOut("fast");
      }, 900);
      


    var i = 0; //to control useEffect
    const [user, setUser] = useState([]);//data that comes from api
    const [content,setcontent] = useState([]);
    const url="http://localhost/ecom_tast/php/api/subcat.php?id=";
    console.log(url);
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUser(data.data);
        });
        fetch("http://localhost/ecom_tast/php/api/content.php")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setcontent(data.data);
        });
    };

    useEffect(() => {
        fetchData();
      }, [i]);

      const card_big={
        backgroundColor:'rgb(232, 233, 235)',
       
        border:'none',
        height:'auto',
        width:'auto'
      }
const image={width:'40vw',height:'auto', marginLeft:'30vw'}



// function handleClick() {
//   localStorage.setItem('logout',false);
// }

    return (
      <>
      {(e_mail !=null || enquire==='true') ? <Navigate to="/home" state={{ e_mail: e_mail}}/>: 
      <div className='container-fluid'>
      {(localStorage.getItem('enquire')==='true') ? 
        
        <div className="alert alert-success alert-dismissible fade show " id='successMessage' role="alert">
          <strong>enquire</strong> Success 
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          {localStorage.setItem('enquire','false')}
        </div>:<></>}
      <Carousel style={{width:'100vw',height:'12ev'}}>
        <Carousel.Item >
            <img
            style={image}
            className="image-fluid"
              src="./images/Electronics.jpg"
              alt="image1"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
            style={image}
            className="image-fluid"
              src="./images/grocery.jpg"
              alt="image2"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
          style={image}
              className="image-fluid"
              src="./images/clothes1.jpg"
              alt="image3"
            />
          </Carousel.Item>
      </Carousel>
<section class="nav_section" id='navbar'>
    <div class="container">
      <div class="custom_nav2">
        <nav class="navbar navbar-expand custom_nav-container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex  flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <Link class="nav-link" to={'/'}>Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Our products</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Testimonial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={'/addtocart'}  >Check Out</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={'/orders'}  >Orders</Link>
                </li>
                
                
              </ul>
              <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>



        <div >
        {content.map((userObj, index) => (
        <div className='home mb-4 pt-5 pb-5'>
          <div className='row'>
            <div className='col-lg-6'>
            <div className='banner-left-info'>
              <h1>{userObj.banner_Title} <span className='text-white'><br/>{userObj.banner_white_text}</span></h1>
              <Link to='#' className='btn btn-danger'>Shop Now</Link>
            </div>
            </div>
            <div className='col-lg-6 '>
              <img src={'/images/'+userObj.image} className='img-fluid' />
            </div>
          </div>
        </div>
        ))}
         <h1 className='text-center text-success pb-5 display-3'>Our products</h1>
         

             {user.map((userObj, index) => (
                    <div key={index} className='container mb-5 ' style={card_big}>
                    <div>
                        <h5 className="text-center p-2 display-5">{userObj.Name}</h5>
                    </div>
                    <div>
                            <Scroll srno={userObj.srno}/>
                            </div>
                    </div>
                ))
            }
        </div>
        </div>
        }
       
        </>
    );
}

export default Home;
