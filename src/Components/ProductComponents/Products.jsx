import ProductsData from "./ProductsData"
const Shop=()=>{
    return(
        <>
         <hr />
        {
            ProductsData.map((product,index)=>{
                return(
                    <>
                    {/* <h1>{}</h1> */}
                    <div key={index}>
                    <h1>{product.id}</h1>
                    <a href={"#" + product.id}>
                    <img src={product.image} alt={product.title} />
                    </a>
                    
                    <h1>{product.title}</h1>
                    <h1>{product.description}</h1>
                    <h1>{product.price}</h1>
                    <h1>{product.SKU}</h1>
                    <h1>{product.Tag}</h1>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}
export default Shop