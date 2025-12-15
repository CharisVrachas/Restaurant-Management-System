import React, { useState } from 'react'
import upload_img from '../assets/upload_img.png'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const AddMenu = ({token}) => {

  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription ]= useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("All")

  const OnSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      if(image) formData.append("image", image)
        const response = await axios.post(`${backendUrl}/api/product/add`, formData, {headers: {token}})
        
        if (response.data.success) {
          toast.success(response.data.message)
          setName("")
          setDescription("")
          setPrice("")
          setImage(null)
        } else {
          toast.error(response.data.message)
        }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <div>
      <form onSubmit={OnSubmitHandler} className='flex flex-col items-start gap-1'>
        <div>
          <p>Upload Image</p>
          <div>
            <label htmlFor="image">
              <img src={!image ? upload_img : URL.createObjectURL(image)} alt="" className='w-32 cursor-pointer'/>
              <input onChange={(e)=> setImage(e.target.files[0])} type="file" id="image" hidden />
            </label>
          </div>
        </div>

        <div className='w-full'>
          <p className='mb-2 text-[22px] '>Product Name</p>
          <input value={name} onChange={(e)=> setName(e.target.value)} className='w-full max-w-[500px] p-4 border border-gray-300 rounded' type="text" placeholder='Enter product name' required />
        </div>

        <div className='w-full'>
          <p className='mb-2 text-[22px] '>Product Description</p>
          <input value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder='Enter product description' required className='w-full max-w-[500px] p-4 border border-gray-300 rounded'/>
        </div>

        <div className='flex flex-wrap gap-4 w-full'>
          <div className='min-w-[200px]'>
            <p className='mb-2 text-[22px]'>Product Category</p>
            <select value={category} onChange={(e)=> setCategory(e.target.value)} className='w-full max-w-[500px] p-3 border border-gray-300 text-[16px] rounded'>
              <option value="All">All</option>
              <option value="Spaghetti">Spaghetti</option>
              <option value="Pizza">Pizza</option>
              <option value="Rice">Rice</option>
              <option value="Noodles">Noodles</option>
              <option value="Chicken">Chicken</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <div>
            <p className='mb-2 text-[22px]'>Product Price</p>
            <input value={price} onChange={(e)=> setPrice(e.target.value)} type="number" placeholder='40' className='w-full max-w-[120px] p-4 border border-gray-300 rounded'/>
          </div>
        </div>
        <button type="submit" className='mt-6 px-20 py-3 bg-amber-500 rounded hover:opacity-90'>Add Menu</button>
      </form>
    </div>
  )
}

export default AddMenu