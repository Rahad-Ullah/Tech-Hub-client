import { useState } from "react";
import PropTypes from 'prop-types'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartItem = ({product }) => {
    const {name, image, type, price} = product;

    const [quantity, setQuantity] = useState(1)
    const handleQuantity = (operation) => {
        if(operation === 'minus' && quantity > 1){
            setQuantity(quantity - 1)
        }
        if(operation === 'add' && quantity > 0){
            setQuantity(quantity + 1)
        }
    }

    const priceInt = parseInt(price)
    const totalPrice = (priceInt * quantity)

    const handleDelete = () => {
        console.log('deleted')
    }

    return (
    <tr>
        <td>
            <div className="flex items-center gap-8">
                <div className="avatar">
                    <div className="w-20">
                        <img src={image} alt="Product image" />
                    </div>
                </div>
                <div>
                    <div className="text-lg font-bold">{name}</div>
                    <div className="text-sm font-bold opacity-50">{type}</div>
                </div>
            </div>
        </td>
        <td>
            <p className="flex gap-3">
                <span onClick={() => handleQuantity('minus')} className="text-xs font-bold btn btn-ghost btn-circle btn-sm"><FaMinus></FaMinus></span>
                <span className="text-sm font-semibold border flex justify-center items-center w-10">{quantity}</span>
                <span onClick={() => handleQuantity('add')} className="text-xs font-bold btn btn-ghost btn-circle btn-sm"><FaPlus></FaPlus></span>
                </p>
        </td>
        <td>
            <div className="flex flex-col items-center gap-3">
                <p className="font-bold"><span className="text-sm font-extrabold">৳</span> {totalPrice}</p>
                <span onClick={handleDelete} className="text-xl text-red-500 font-bold btn btn-ghost btn-circle btn-sm"><RiDeleteBin5Line></RiDeleteBin5Line></span>
            </div>
        </td>
    </tr>
    );
};


CartItem.propTypes = {
    product: PropTypes.object,
}

export default CartItem;