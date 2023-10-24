import { useLoaderData } from "react-router-dom";

const Update = () => {
    const oldProduct = useLoaderData()
    const {_id, name, brandName, type, price, image, rating} = oldProduct;

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const updatedProduct = {name, brandName, type, price, image, rating}

        // send data to the server
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                alert('updated successfully')
            }
        })
    }

    return (
        <div>
            <div className='max-w-5xl mx-auto py-16'>
                <div className="px-8 md:px-28 py-16 bg-[#ff523b0d]">
                <h2 className="text-3xl text-center mb-6 font-rancho text-[#374151]">Update Product</h2>
                <div>
                <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        defaultValue={name}
                        className="input input-bordered"
                    />
                    </div>
                    {/* Brand Name */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input
                        type="text"
                        name="brandName"
                        placeholder="Enter brand name"
                        defaultValue={brandName}
                        className="input input-bordered"
                    />
                    </div>
                    {/* Type */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <input
                        type="text"
                        name="type"
                        placeholder="Enter product type"
                        defaultValue={type}
                        className="input input-bordered"
                    />
                    </div>
                    {/* Price */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter product price"
                        defaultValue={price}
                        className="input input-bordered"
                    />
                    </div>
                    {/* Image */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Enter product image URL"
                        defaultValue={image}
                        className="input input-bordered"
                    />
                    </div>
                    {/* Rating */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input
                        type="text"
                        name="rating"
                        placeholder="Enter product rating"
                        defaultValue={rating}
                        className="input input-bordered"
                    />
                    </div>
                    {/* Form Button */}
                    <div className="form-control mt-6 md:col-span-2">
                    <button className="btn btn-neutral bg-primary border-2 border-primary  text-white hover:bg-white hover:border-primary hover:text-primary text-base">Update Product</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Update;