

const AddProduct = () => {

    const handleAddProduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;
        const newProduct = {name, brandName, type, price, image, rating, shortDescription}
        console.log(newProduct)

        // send data to the server
        fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    
    return (
        <div>
            <div className='max-w-5xl mx-auto py-16'>
                <div className="px-8 md:px-28 py-16 bg-[#ff523b0d]">
                <h2 className="text-3xl text-center font-semibold mb-6 font-rancho text-[#374151]">Add New Product</h2>
                <div>
                <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        className="input input-bordered"
                        required
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
                        className="input input-bordered"
                    />
                    </div>
                    {/* Short description */}
                    <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input
                        type="text"
                        name="shortDescription"
                        placeholder="Write short description"
                        className="input input-bordered"
                    />
                    </div>
                    {/* Form Button */}
                    <div className="form-control mt-6 md:col-span-2">
                    <button className="btn btn-neutral bg-primary border-2 border-primary  text-white hover:bg-white hover:border-primary hover:text-primary text-base">Add Product</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AddProduct;