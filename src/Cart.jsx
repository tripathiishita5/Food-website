import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 text-white bg-black rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && (
                    <h3>Your cart is empty! Add items to cart.</h3>
                )}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;