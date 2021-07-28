import ProductsData from "./ProductsData"
import React,{useState} from 'react'
// const allSizes = ['all', ...new Set(ProductsData.map((allSizes) => allSizes.category))];
const Filter=(props)=>{
    const [sizes,setSizes]=useState("All")
    function getData(e)
        {
            setSizes(e.target.value)
            console.log(sizes)
            
        }

    return(
        <>
       <div className="main">
        <div>
            <h1 >this is the filter components</h1>
        </div>
            <h1>{ProductsData.length} Products</h1>
            <div className="sizes">
                <h1>Sizez</h1>
                <select name="" id="" onChange={(e)=>e.target.value} >
                <option value="" disabled>All </option>
                      <option value="Small">Small </option>
                      <option value="Medium">Medium </option>
                      <option value="Large">Large </option>
                      <option value="XL">XL </option>
                      <option value="XXL">XXL </option>
                    
                </select>
            </div>
            <div className="sizes">
                <h1>Latestes Etc</h1>
                <select name="" id="">
                    <option value="Lastest">Lastest</option>
                    <option value="Highest">Highest</option>
                    <option value="Lowest">Lowest</option>
                </select>
            </div>
            </div>
        
        </>
    )
}
export default Filter