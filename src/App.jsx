import './App.css'
import { useState, useEffect } from 'react';
const Header = () =>{
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
        </ul>
      </div>

    </div>
  )
}

const Body = () =>{
    let [ListOfRestaurants, setListOfRestaurants] = useState(resObj);   // local state variable

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3270644&lng=82.9862236&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setListOfRestaurants = (json.data.cards[2].imageGridCards);
    }

  return(
    <div className='body'>
      <div className="filter">
        <button className='filter-btn' onClick={() =>{
            const filteredResObj = ListOfRestaurants.filter((res) => res.info.avgRating>4);
            setListOfRestaurants(filteredResObj);
        }}>Top Rated Restaurants</button>
       </div>
      <div className='res-cont'>
        {
          resObj.map((restaurant) => (<ResturantCard key={restaurant.info.id} resData={restaurant}/>))
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
// const styleCard = {
//   backgroundColor: "#f0f0f0",
// }

let resObj = [{
  "info": {
      "id": "253772",
      "name": "McDonald's",
      "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
      "locality": "Shastri Nagar",
      "areaName": "Sigra",
      "costForTwo": "₹400 for two",
      "cuisines": [
          "American"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2024-01-14 23:50:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-shastri-nagar-sigra-varanasi-253772",
      "type": "WEBLINK"
  }
},{    
  "info": {
  "id": "94756",
  "name": "Tandoor Villa",
  "cloudinaryImageId": "1770c3aa3eecdc44f5f480f07f09c186",
  "locality": "Chaukaghat",
  "areaName": "Nadesar",
  "costForTwo": "₹400 for two",
  "cuisines": [
      "Mughlai",
      "Indian",
      "Biryani"
  ],
  "avgRating": 4.3,
  "parentId": "200636",
  "avgRatingString": "4.3",
  "totalRatingsString": "1K+",
  "sla": {
      "deliveryTime": 24,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "24 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
      "nextCloseTime": "2024-01-14 23:30:00",
      "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
      "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
      }
  },
  "aggregatedDiscountInfoV3": {
      "header": "₹120 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
      }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
  "link": "https://www.swiggy.com/restaurants/tandoor-villa-chaukaghat-nadesar-varanasi-94756",
  "type": "WEBLINK"
}
},{    
  "info": {
  "id": "433786",
  "name": "The Good Bowl",
  "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
  "locality": "Raja Moti Chand Road",
  "areaName": "Mahmoorganj",
  "costForTwo": "₹400 for two",
  "cuisines": [
      "Biryani",
      "North Indian",
      "Pastas",
      "Punjabi",
      "Desserts",
      "Beverages"
  ],
  "avgRating": 4.2,
  "parentId": "7918",
  "avgRatingString": "4.2",
  "totalRatingsString": "500+",
  "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 3.5,
      "serviceability": "SERVICEABLE",
      "slaString": "26 mins",
      "lastMileTravelString": "3.5 km",
      "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
      "nextCloseTime": "2024-01-14 23:59:00",
      "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
      "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
      }
  },
  "aggregatedDiscountInfoV3": {
      "header": "₹120 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
      }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
  "link": "https://www.swiggy.com/restaurants/the-good-bowl-raja-moti-chand-road-mahmoorganj-varanasi-433786",
  "type": "WEBLINK"
}
}];


function App() {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

export default App