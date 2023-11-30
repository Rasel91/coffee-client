

const Added = () => {
    const handleCoffeeAdded = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const test = form.test.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, test, category, details,photo }
        form.reset();
        console.log(newCoffee);
        
    // Data Send Client to Server
    fetch(`http://localhost:5000/`,{
         method:'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(newCoffee)
    })
    .then(res =>res.json())
    .then (data=>console.log(data))


    }

    return (
        <div>
            <h1 className="text-center md:text-5xl md:font-semibold text-red-800 ">Add New Coffee</h1>
            <form onSubmit={handleCoffeeAdded}>
                <div className="md:flex gap-4 px-8 mt-5">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name"  placeholder="write name here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="chef"  placeholder="chef name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4 px-8 mt-5">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier"  placeholder="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Tests</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="test"  placeholder="test" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4 px-8 mt-5">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                        {/* defaultValue */}
                            <input type="text" name="category"  placeholder="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4 px-8 mt-5">
                    <div className="form-control w-full ">

                    <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex gap-4 px-8 mt-5">
                    <div className="form-control w-full ">

                            <input type="Submit" value="Submit"  className="btn btn-block"/>
                    </div>

                </div>



            </form>
        </div>
    );
};

export default Added;