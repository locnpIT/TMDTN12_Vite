import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateBrand() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, description: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (editingProduct) {
         setEditingProduct({ ...editingProduct, [name]: value });
    }else{
        setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const addProduct = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/products', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', price: 0, description: '' }); // Reset form
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
    const startEditing = (product) => {
        setEditingProduct({...product}); // Tạo một bản sao để tránh thay đổi trực tiếp vào danh sách
    }

  const updateProduct = async () => {
    try{
        const response = await axios.put(`http://localhost:8080/api/products/${editingProduct.id}`, editingProduct);
        //Cập nhật lại danh sách
        setProducts(products.map(p => (p.id === editingProduct.id ? response.data:p)));
         setEditingProduct(null); // Kết thúc chỉnh sửa
    }catch(error){
        console.error("Error updating product: ", error)
    }
  };

  const deleteProduct = async (id) => {
      try{
            await axios.delete(`http://localhost:8080/api/products/${id}`);
            //Cách 1:
            //setProducts(products.filter((p) => p.id !== id));
            //Cách 2:
            fetchProducts(); // Tải lại danh sách
      }catch(error){
          console.error("Error deleting product: ", error);
      }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-amber-300">
        Hello world!
      </h1>

      <h1>Product Management</h1>

      <h2>Add/Edit Product</h2>
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(editingProduct){
                updateProduct();
            }else{
                addProduct();
            }
        }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={editingProduct ? editingProduct.name : newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={editingProduct ? editingProduct.price : newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={editingProduct ? editingProduct.description : newProduct.description}
          onChange={handleInputChange}
        />
        <button type="submit">{editingProduct? "Update Product" : "Add Product"}</button>
        {editingProduct && <button type='button' onClick={()=>setEditingProduct(null)}>Cancel</button>}
      </form>

      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.description}
            <button onClick={() => startEditing(product)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreateBrand;