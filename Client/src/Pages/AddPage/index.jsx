import React, { useEffect, useState } from 'react'
import FormAdd from '../../Components/HomeComp/FormAdd'
import axios from 'axios'

const Add = () => {
const [data, setData] = useState([])
async function getProduct() {
  const res = await axios("http://localhost:5000/modes/")
  setData(res.data)
}

async function deleteData(id){
  const res= await axios.delete(`http://localhost:5000/modes/${id}`)
  getProduct()  
}

useEffect(() => {
  getProduct()
}, [])

  return (
    <div>
      
      <FormAdd getProduct={getProduct}/>
      <table>
        <thead>
        
            <tr>
              <th>Image</th>
              <th>Text</th>
              <th>Title</th>
              <th>Delete</th>
            </tr>
          
        </thead>
        <tbody>
          {
            data && data.map(x=>
              <tr>
                <td>{x.image}</td>
                <td>{x.text}</td>
                <td>{x.title}</td>
                <td><button onClick={()=>deleteData(x._id)}>Delete</button></td>
              </tr>
              )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Add