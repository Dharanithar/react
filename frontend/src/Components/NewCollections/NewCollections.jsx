import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

const NewCollection = () => {
  const [new_collection,setNew_collection] = useState([]);

  fetch("http://localhost:4000/newcollection")
  .then((response) => response.json())
  .then((data) => setNew_collection(data))
  .catch((error) => console.error("Error fetching new collection:", error));

  
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {new_collection.map((item,i)=>{
          return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      
    </div>
  )
}

export default NewCollection
