import "../App.css";
 const Products =({products , handleDelete}) =>{
    
    return (
        <div>
            <h1>Product List</h1>
            {products.map( (e) => (
                <div key={e.id} className="prod">
                    <img src = {e.image} alt="" />
                    <h1>{e.title}</h1>
                    <p>{e.price}</p>
                    <p>{e.category}</p>
                    <p>{e.gender}</p>
                    <button onClick={ () => handleDelete(e.id)}>Delete</button>
                </div>
            ))}
            
        </div>
    )
}
export default Products;