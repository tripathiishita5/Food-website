import { Outlet } from 'react-router-dom';
import './App.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResturantCard, {withPromotedLabel} from './RestaurantCard';
import useOnlineStatus from './utils/useOnlineStatus';

const Header = () =>{
  const [btnName, setBtnName] = useState("Login");
  return(
    <div className="header flex text-gray-600 body-font">
      <div className="logo">
        <img className='logo-img w-40' src="https://images-platform.99static.com//s_-2qgRrPZnWUpWIh4NeIu95UCE=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/118/118612/attachment_118612943"/>
      </div>

      <div className="nav-items md:ml-auto flex flex-wrap items-center text-base justify-center">
        <ul className='flex'>
          <li className="mr-5 hover:text-gray-900 text-lg font-semibold"><Link to="/"> Home </Link></li>
          <li className="mr-5 hover:text-gray-900 text-lg font-semibold"><Link to="/cart"> Cart </Link></li>
          <li className="mr-5 hover:text-gray-900 text-lg font-semibold"><Link to="/about"> About Us </Link></li>
          <li className="mr-5 hover:text-gray-900 text-lg font-semibold"><Link to="/contact"> Contact Us </Link></li>

          <button className='login-btn inline-flex text-lg font-semibold bg-blue-200 border-0 px-5 mr-5 hover:bg-gray-200 rounded' onClick={() =>{
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>

    </div>
  )
}

export const Body = () =>{
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);   // local state variable
    const [filteredRest, setFilteredRest] = useState([]);
    const [allresturent, setAllresturent] =useState(null);
    const [searchText, setSearchText] = useState('');
    const ResCardPromoted = withPromotedLabel(ResturantCard);

    console.log(ListOfRestaurants);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     // optional chaining
      setAllresturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // if(ListOfRestaurants.length === 0){    // conditional rendering
    //   return <Shimmer/>;
    // }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you are offline! Please check your internet connection.</h1>

  return ListOfRestaurants.length === 0 ? (<Shimmer/>) : (      // conditional rendering using ternary operator
    <div className='body'>
      <div className="filter mb-5">

        <div className='search flex justify-center'>
          <input type='text' className='search-box rounded-md bg-gray-300 px-4 py-2 mr-2' value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>

          <button className='filter-btn inline-flex items-center text-lg font-medium bg-blue-200 border-0 px-4 py-2 mr-10 hover:bg-gray-200 rounded' onClick={() =>{
            console.log(searchText);
            const filterRes = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRest(filterRes);
          }}>Search</button>

          <button className='filter-btn inline-flex items-center text-lg font-medium bg-blue-200 border-0 px-5 mr-4 hover:bg-gray-200 rounded' onClick={() =>{
            const filteredResObj = ListOfRestaurants.filter((res) => res.info.avgRating>4);
            setFilteredRest(filteredResObj);
          }}>Top Rated Restaurants</button>

          <button className='filter-btn inline-flex items-center text-lg font-medium bg-blue-200 border-0 px-5 hover:bg-gray-200 rounded' onClick={() =>{
            setFilteredRest(allresturent);
          }}>All Resturents</button>

        </div>
       </div>
      <div className='res-cont flex flex-wrap gap-4 px-3'>
        {
          filteredRest.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {
              (restaurant.info.sla.deliveryTime < 20) ? (<ResCardPromoted resData={restaurant}/>) : (<ResturantCard resData={restaurant}/>)
            }
             
          </Link>
          ))
        }
      </div>
    </div>
  )
}

export const Shimmer = () =>{
  return(
    <div className='shimmer-cont'>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
      <div className='shimmer-card'></div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>      
    </div>
  )
}
//body, contact, about, etc. will be replaced in the place of outlet when we are on that routes.
export default App;