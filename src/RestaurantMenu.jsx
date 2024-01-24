import { Shimmer } from "./App";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>
    const {name, cuisines, costForTwoMessage} =resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    // console.log(name);

    return (
        <div className="menu flex justify-center bg-pink-400 p-5">
            <div>
                <h1 className="text-center font-bold text-xl py-5">{name}</h1>
                <h3 className="text-lg">{cuisines.join(", ")}</h3>
                <h3>{costForTwoMessage}</h3>
                <ul>
                    {itemCards && itemCards.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -
                        {"Rs. "}{item.card.info.price/100}
                    </li>
                    ))}
                </ul>
            </div>
            
        </div>
        
    )
}
export default RestaurantMenu;