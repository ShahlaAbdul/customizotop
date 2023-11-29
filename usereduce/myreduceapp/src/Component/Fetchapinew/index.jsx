import './style.css'
import React, { useEffect, useState } from 'react'



function FetchApinew() {
    const [product, setProduct] = useState([])
    const [categories, setCategories] = useState("All")

    useEffect(() => {
        FetchData();
    }, [])



    // const allcategory=(category)=>{
    //     setCategories(category)
    // }

   

    async function FetchData() {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProduct(data)
        console.log(data);
    }

    function hanldeCategory(category){
        setCategories(category)
    }
        const dataFilter = categories ==="All" ? product : product.filter(item=>item.category ===categories)


    return (
        <div >

            <div className='buttons'>
                <button onClick={()=>hanldeCategory("All")}>All</button>
                <button onClick={()=>hanldeCategory("men's clothing")}>Men</button>
                <button onClick={()=>hanldeCategory("women's clothing")}>Women</button>
                <button onClick={()=>hanldeCategory("jewelery")}>Jewellery</button>
            </div>                <button onClick={()=>hanldeCategory("electronics")}>Electronics</button>


           <div className='cards'>
           {dataFilter.map((x) =>
                <ul className='shop' key={x.id}>
                    <img src={x.image} alt="" />
                    <li >{x.id}</li>
                    <li>{x.title}</li>
                    <li>{(x.description).slice(0,35)}</li>
                    
                    <div className='category'>{x.category}</div>
                    

                </ul>
            )
            }
           </div>


        </div>
    )
}

export default FetchApinew