import productModel from '../models/productModels.js'

const addProduct = async (req, res) => {

  try {
    const { name, price, description, category } = req.body

    if (!name || !price || !description || !category || !req.file) {
      return res.json({ success: false, message: "All fields are required" })
    }

    const newProduct = new productModel({
      name,
      price,
      description,
      image: req.file.filename,
      category,
      date: Date.now()
    })

    await newProduct.save()

    res.json({ success: true, message: "Product added successfully" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Cannot add product" })
  }
}

const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json({success:true, products})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
    
}

const removeProduct = async (req, res) => {
  try {
      await productModel.findByIdAndDelete(req.body._id)
      res.json({success:true, message: "Product removed"})
  } catch (error) {
      console.log(error);
      res.json({success:false, message: error.message})
  }
}

const singleProduct = async(req, res) => {

}

export {addProduct, listProducts, removeProduct, singleProduct}