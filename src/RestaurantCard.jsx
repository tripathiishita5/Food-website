const ResturantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return(
        <div className="res-card w-[15vw] h-[400px] bg-[#f0f0f0] hover:bg-gray-300 rounded-md">
            <img className='w-[100%] h-[45%] object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

//higher order component - a component which returns another component
export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-red-500 text-white rounded-md px-2 py-1">Very Fast</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}

export default ResturantCard;