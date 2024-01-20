import './App.css'
import { useState, useEffect } from 'react';

const Header = () =>{
  const [btnName, setBtnName] = useState("Login");
  return(
    <div className="header">
      <div className="logo">
        <img className='logo-img' src="https://images-platform.99static.com//s_-2qgRrPZnWUpWIh4NeIu95UCE=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/118/118612/attachment_118612943"/>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About us</li>
          <li>Contact</li>
          <button className='login-btn' onClick={() =>{
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>

    </div>
  )
}

const Body = () =>{
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);   // local state variable
    const [filteredRest, setFilteredRest] = useState([]);
    const [allresturent, setAllresturent] =useState(null);
    const [searchText, setSearchText] = useState('');

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

  return ListOfRestaurants.length === 0 ? (<Shimmer/>) : (      // conditional rendering using ternary operator
    <div className='body'>
      <div className="filter">

        <div className='search'>
          <input type='text' className='search-box' value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>

          <button className='filter-btn' onClick={() =>{
            console.log(searchText);
            const filterRes = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRest(filterRes);
          }}>Search</button>
        </div>

        <button className='filter-btn' onClick={() =>{
            const filteredResObj = ListOfRestaurants.filter((res) => res.info.avgRating>4);
            setFilteredRest(filteredResObj);
        }}>Top Rated Restaurants</button>


         <button className='filter-btn' onClick={() =>{
            setFilteredRest(allresturent);
        }}>All Resturents</button>  

       </div>
      <div className='res-cont'>
        {
          filteredRest.map((restaurant) => (<ResturantCard key={restaurant.info.id} resData={restaurant}/>))
        }
      </div>
    </div>
  )
}


const ResturantCard = (props) =>{
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
  return(
      <div className="res-card">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
      </div>
  )
}

const Shimmer = () =>{
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
      <Body/>
    </div>
  )
}

export default App