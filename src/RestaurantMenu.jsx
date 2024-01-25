import { Shimmer } from "./App";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>
    const {name, cuisines, costForTwoMessage} =resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(itemCards);
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);
    
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);

    return (
        <div className="menu text-center p-5">
            <h1 className="text-center font-bold text-2xl py-3">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3>
            {categories.map((category) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
                {/* <ul>
                    {itemCards && itemCards.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -
                        {"Rs. "}{item.card.info.price/100}
                    </li>
                    ))}
                </ul> */}
        </div>
        
    )
}
export default RestaurantMenu;