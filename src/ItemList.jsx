const ItemList = ({items}) => {
    console.log(items);
    return(
        <div>
        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 border-gray-300 border-b-2 text-left flex justify-between items-center">
                <div className="w-[80%]">
                 <span className="py-2 font-semibold">{item.card.info.name}</span>
                 <span className="font-semibold"> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                 <p className="text-sm leading-1 text-wrap">{item.card.info.description}</p>
                </div>
                <div className="w-[20%] relative rounded-md bg-green-100 bg-cover bg-center">
                 <img className='w-[100%] h-auto object-cover object-center rounded-lg' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}/>
                 <button className="bg-black text-white absolute shadow-md ml-6 bottom-0 px-2 py-1 rounded-md">Add +</button>
                </div>
            </div>
        ))}
    </div>
    ) 
}
export default ItemList;