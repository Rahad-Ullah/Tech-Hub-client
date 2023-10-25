import { useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";
import { useState } from "react";

const Cart = () => {
    const cartProducts = useLoaderData()
    const [products, setProducts] = useState(cartProducts)

    return (
        <div className="bg-base-300 px-4 md:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 ">
                <div className="bg-base-100 p-10 col-span-2 rounded-l-2xl">
                    <header className="flex justify-between items-center pb-8 border-b">
                        <h1 className="text-2xl font-bold">Shopping Cart</h1>
                        <h3 className="text-lg font-semibold">{cartProducts.length} Items</h3>
                    </header>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                            {/* rows */}
                            {
                                products.length > 0
                                ?
                                products.map(item => <CartItem 
                                    key={item._id}
                                    product={item}
                                    products={products}
                                    setProducts={setProducts}
                                    ></CartItem>)
                                :
                                <h1 className="text-2xl font-semibold text-center opacity-50 py-8">No product added</h1>

                            }
                            </tbody>

                            
                        </table>
                    </div>
                </div>
                <section className="bg-base-200 p-10 rounded-r-2xl">
                    <header className="text-xl font-bold border-b border-base-300
                    pb-8 pt-4">Summary</header>
                    <h3 className="font-semibold my-4 flex justify-between">Subtotal: <p className="flex gap-2 items-center"><span className="text-sm font-extrabold">৳</span>{0}</p></h3>
                    <h3 className="font-semibold my-4 flex justify-between">Tax: <p className="flex gap-2 items-center"><span className="text-sm font-extrabold">৳</span>{0}</p></h3>
                    <h3 className="font-semibold my-4 flex justify-between">Discount: <p className="flex gap-2 items-center"><span className="text-sm font-extrabold">৳</span>{0}</p></h3>
                    <h3 className="font-semibold my-4 flex justify-between">Total: <p className="flex gap-2 items-center"><span className="text-sm font-extrabold">৳</span>{0}</p></h3>
            </section>
            </div>
        </div>
    );
};

export default Cart;