import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Checkout.css"
import { dummy } from '../../dummy';
export default function Checkout() {
    const [totalCost, setTotalCost] = useState([])
   let counter=[]
    let location = useLocation();
    for(let i=0;i<location.state.data.length;i++){
      counter.push(location.state.data[i].counter)

    }
    console.log(location.state.data)
    // setCounter(location.state.data[0].counter)
    // Function is called everytime increment button is clicked
    const handleClick1 = (c,index) => {
      // Counter state is incremented
      counter[index]=counter[index] + 1
    }
    const handleClick2 = (c,index) => {
        // Counter state is incremented
        counter[index]=counter[index] - 1

      }
    

    const [products, setProducts] = React.useState(location.state.data);

    const subTotal = 6

  
    const onChangeProductQuantity = (index, event) => {
      const value = event.target.value;
      const valueInt = parseInt(value);
      const cloneProducts = [...products];
  
      console.log(cloneProducts);
    };
  
    const onRemoveProduct = (i) => {
      const filteredProduct = products.filter((product, index) => {
        return index != i;
      });
  
      setProducts(filteredProduct);
    };
  







    function Header() {
        return (
          <header className="container">
            <h1>Shopping Cart</h1>
      
          </header>
        );
      }
      
      function ProductList({ products, onChangeProductQuantity, onRemoveProduct }) {
        return (
          <section className="container container-prods">

            
            {/* <ul className="products">






              {products.map((product, index) => {
                return (
                  <li className="row" key={index}>
                    <div className="col left">
                      <div className="thumbnail">
                        <a href="#">
                          <img src={product.image} alt={product.name} />
                        </a>
                      </div>
                      <div className="detail">
                        <div className="name">
                          <a href="#">{product.name}</a>
                        </div>
                        <div className="description">{product.description}</div>
                        <div className="price">{formatCurrency(product.price)}</div>
                      </div>
                    </div>
      
                    <div className="col right">
                      <div className="quantity">
                        <input
                          type="text"
                          className="quantity"
                          step="1"
                          value={product.quantity}
                          onChange={(event) => onChangeProductQuantity(index, event)}
                        />
                      </div>
      
                      <div className="remove">
                        <svg
                          onClick={() => onRemoveProduct(index)}
                          version="1.1"
                          className="close"
                          x="0px"
                          y="0px"
                          viewBox="0 0 60 60"
                          enableBackground="new 0 0 60 60"
                        >
                          <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                        </svg>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul> */}



<table className="table-fill">
<thead>
<tr>
<th className="text-left">Image</th>
<th className="text-left">Name</th>
<th className="text-left">Price</th>
<th className="text-left">Quantity</th>
<th className="text-left">Subtotal</th>


</tr>
</thead>
<tbody className="table-hover">

  {
    
      location.state.data.map((data,index)=>
      <>
     <tr key={index}>
              <td className="text-left">
        <img className=' data-img' src={data.image}/></td>
<td className="text-left">{data.name}</td>
<td className="text-left">{data.price}</td>
<td className="text-left">
    <div className='counter-display'>
        <div onClick={()=>{handleClick1(data.counter,index)}}>+</div>
     
        <input className='counter1' type="text" key={index} value={counter ? counter[index]:null} 
        onChange={(event) =>{ onChangeProductQuantity(index,event); }} />

        <div onClick={()=>{handleClick2(data.counter,index)}}>-</div>
    </div>
    <div>

    </div>
    </td>
<td className="text-left">{data.price}</td>




</tr>
            

      </>
    )
    
  }


  {
    
  }


</tbody>
</table>


          </section>
        );
      }
      
      function Summary({
        subTotal,
        discount,
        tax,
       
      }) {

      
        return (
          <section className="container summary-cont">
           
      
            <div className="summary">
              <ul>
                <li >
                  Subtotal <span>{formatCurrency(subTotal)}</span>
                </li>
              
                <li className="total">
                  Total <span>{formatCurrency(subTotal)}</span>
                </li>
              </ul>
            </div>
            <Link to={`/thank-you`}>
            <div className="checkout">
           
              <button type="button">Check Out</button>

            </div>
            </Link>

          </section>
        );
      }
      
   
 

  return (
    <div>
            <Header />
      
            {products.length > 0 ? (
              <div className='checkout-page'>
                <ProductList
                  products={products}
                  onChangeProductQuantity={onChangeProductQuantity}
                  onRemoveProduct={onRemoveProduct}
                />
      
                <Summary
                  subTotal={subTotal}
              
                />
              </div>
            ) : (
              <div className="empty-product">
                <h3>There are no products in your cart.</h3>
                
              </div>
            )}
          </div>
  )
}

function formatCurrency(value) {
    return Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
  