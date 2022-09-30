import React,{useState, useEffect} from 'react'
import Products from './ProductListing';
const data = {
    "title": "",
    "gender": "",
    "price": 1,
    "category": "",
    "image": ""
}
const Form = ()=>{
    const [formData, setFormData] = useState(data);
    const [page, setpage] = useState(1);
    const [len, setLen] = useState(1);
    const [load, setLoad] = useState(true);
    const [products, setProducts] = useState([]);
    const [err, setErr] = useState(false);
    const [dltProd, setDlt] = useState(1);

    
    useEffect(()=>{
        getData(page);
    },[page,dltProd])
    
    

    const getData = async (page)=>{
        try{
            let res = await fetch(`http://localhost:3001/products?_limit=5&_page=${page}`);
            let res2 = await res.json();
            setProducts(res2);
            setLoad(false);
        }
        catch(err){
            console.log(err,"err");
            setErr(true);
        }
    }

    useEffect(()=>{
        getLength();
    })
    
    const getLength = async ()=>{
        let res = await fetch(`http://localhost:3001/products`);
        let res2 = await res.json();
        setLen(res2.length);
    }

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({...formData, [name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:3001/products`,{
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    const handleDelete = (id)=>{
        fetch(`http://localhost:3001/products/${id}`,{
            method: 'DELETE',
        })
        setDlt((prev)=>prev+1);
    }

    if(load){
        return <h1>Loading...</h1>
    }

    if(err){
        return <h1>Error...</h1>
    }

    const handleFilter = async (e, page)=>{
        let res = await fetch(`http://localhost:3001/products?_limit=5&_page=${page}&gender=${e.target.value}&price=${e.target.value}`)
        let res2 = await res.json();
        setProducts(res2);
    }

    const handleSort = async (e,page)=>{
        let res = await fetch(`http://localhost:3001/products?_limit=5&_page=${page}&_sort=price&_order=${e.target.value}`)
        let res2 = await res.json();
        setProducts(res2);
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label>Title: <input type="text" name="title" placeholder="Enter Product Title" value={formData.title} onChange={handleChange}/></label><br />
                <label>Gender: <select name="gender" onChange={handleChange} > 
                    <option value="">Gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                </select>
                </label>
                <br />
                <label>Price: <input type="number" placeholder="Enter Product Price" name="price" value={formData.price} onChange={handleChange}/></label><br />
                <label>Category: <input type="text"placeholder="Enter Product Category" name="category" value={formData.category} onChange={handleChange}/></label><br />
                <label>Image: <input type="url" placeholder="Enter Product Url" name="image" value={formData.image} onChange={handleChange}/></label><br />
                <button>Submit</button>
            </form>
            <select name="filter" onChange={handleFilter}>
                <option value="">Filter By Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>

            <select name="sort" onChange={handleSort}>
                <option value="">Sort By Price</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>

            <Products products={products} handleDelete={handleDelete}/>
            <button disabled={page===1} onClick={()=>setpage((prev)=>prev-1)}>Prev</button>
            <button>{page}</button>
            <button  disabled={page===Math.ceil(len/5)} onClick={()=>setpage((prev)=>prev+1)}>Next</button>
        </div>
    )
}
export default Form;