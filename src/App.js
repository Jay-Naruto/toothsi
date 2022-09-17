
import { useState } from 'react';
import './App.css';
import { dummy } from './dummy';
import Select from 'react-select'
import { Link, NavLink } from 'react-router-dom';

function App() {
  const [type,setType]=useState("")
  const [size,setSize]=useState("")
  const [reset,setReset]=useState(0)
  const [userCounter,setUserCounter]=useState(0)

  const options1 = [
    { value: 'Hoodie', label: 'Hoodie' },
    { value: 'Tshirt', label: 'Tshirt' },
    { value: 'Jacket', label: 'Jacket' },
    { value: 'Sweater', label: 'Sweater' }

  ]
  
  const options2= [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' }

  ]
  const [search, setSearch] = useState("");

  const filtered = dummy.filter((data) => {
    return data.name.toLowerCase().indexOf(search) !== -1;
  });
  const [counter, setCounter] = useState([])
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  const [products, setProducts] = useState(filtered);


  const onChangeProductQuantity = ( event) => {
    const value = event.target.value;
    setCounter(event.target.value)
    const valueInt = parseInt(value);
    const cloneProducts = [...products];

    // if (value === "") {
    //   cloneProducts[index].quantity = value;
    // } else if (valueInt > 0 && valueInt < 100) {
    //   cloneProducts[index].quantity = valueInt;
    // }

    setProducts(cloneProducts);
  };
  const [checked, setChecked] = useState(false);
  const [checkoutArray, setCheckoutArray] = useState([]);
  const transferData=(data,index)=>{
   
    
      setCheckoutArray(oldArray => [...oldArray, {
        image:data.image,
        name:data.name,
        price:data.price,
        counter:counter[index]
      }]);
  
     
    
   }
  const checkedData=(data,index)=>{
 
    setChecked(true)
    setCounter(old=>[...old,counter])
    transferData(data,index)
 
         
  }
  return (
    <div className="App">
      <div className='filter-row'>
        <div>
        <div>
        <Select className='drops' options={options1} onChange={(e)=>{setType(e.value)}}  />
        </div>

        <div>
          
          <Select className='drops' options={options2} onChange={(e)=>{setSize(e.value)}}  />

        </div>
        <div>
          <button className='reset' onClick={()=>{setType("");setSize("")}}>Reset</button>
        </div>
        </div>
        <div className='filter-row'>
        <div>
   <input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="searchbox"
          />
   </div>
   <div >
    <button  className='add-to-cart'>
      {/* <NavLink exact to={{
        pathname:"/checkout",
        state:"jay"
      }}> Add to cart</NavLink> */}
      <Link to={`/checkout`} state={{data:checkoutArray}} onClick={()=>{console.log(counter)}}>
      Add to cart</Link>

    {/* < a href="/checkout" >Add to cart</a> */}

    </button>
   </div>
        </div>
  
      </div>
 
     <table className="table-fill">
<thead>
<tr>
<th className="text-left">Image</th>
<th className="text-left">Name</th>
<th className="text-left">Price</th>
<th className="text-left">Color</th>
<th className="text-left">Size</th>
<th className="text-left">Gender</th>
<th className="text-left">Stock</th>
<th className="text-left">Quantity</th>
<th className="text-left">Buy</th>
</tr>
</thead>
<tbody className="table-hover">

  {
    products.map((data,index)=>
      <>
    
        {
          data.name.includes(type) && data.size.includes(size) ?


            <> <tr key={index}>
              <td className="text-left">
        <img className=' data-img' src={data.image}/></td>
<td className="text-left">{data.name}</td>
<td className="text-left">{data.price}</td>
<td className="text-left">{data.color}</td>
<td className="text-left">{data.size}</td>
<td className="text-left">{data.gender}</td>
<td className="text-left stocks"> 
<div>
{data.stock==1 ? <div className='green'></div> : <div className='red'></div>}
  </div></td>
<td className="text-left">{data.quantity}</td>
<td className="text-left">
  <div className='buy-opts'>
  <div>
    <input className='counter1' type="text" key={index}  onChange={(event) => {onChangeProductQuantity(event);setCounter(event.target.value)}} placeholder="0" />
  </div>
  <div>
  <img className='buy-cart' src='./asset/cart1.png' alt=''></img>

  </div>
  <div>   
    <button className='add-item'
    onClick={() => {
  
        checkedData(data,index)
      
     
      }}
    >Add</button>

      
  </div>
  </div>
  
  </td>
</tr>
            </>:
          
           null
          
        }
    

      </>
    )
  }


  {
    
  }


</tbody>
</table>
    </div>
  );
}

export default App;
