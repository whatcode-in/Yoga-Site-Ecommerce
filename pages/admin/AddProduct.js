import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import React from "react";
import { useState } from "react";
  import Temp from "./Temp"
  export default function AddProduct() {

  
    let [data,setdata]=useState({name:"",desc:"",category:"",rating:"",price:0,img:"",stock:""})
  
    let handleChange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
        console.log({...data,[event.target.name]:event.target.value});
    }

    let handleSubmit=async(e)=>{
        e.preventDefault();
        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/yoga/addProduct`,{
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        let {products} = await response.json();
    }

  
    return (
        <div className="flex">
        <Temp/>
      <div className="mt-5 p-5">
        <h3>Add Product</h3>
        <input
          onChange={handleChange}
          className="border-2 py-2 px-3 w-full my-3"
          name="name"
          placeholder="Name"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          className="border-2 py-2 px-3 w-full my-3"
          name="desc"
          placeholder="Description"
        />
        <br />
       
         <FormControl sx={{ marginTop: "20px" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.category}
            label={data.category}
            onChange={handleChange}
            name="category"
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Groceries">Groceries</MenuItem>
            <MenuItem value="Home & Kitchen">Home & Kitchen</MenuItem>
            <MenuItem value="Books">Books</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
            <MenuItem value="Toys & Games">Toys & Games</MenuItem>
            <MenuItem value="Exercise/Fitness">Exercise/Fitness</MenuItem>
          </Select>
  
         
        </FormControl>
        <br />
        <input
         onChange={handleChange}
         className="border-2 py-2 px-3 w-full my-3"
          name="rating"
          placeholder="Rating"
        />{" "}
        <br />
        <input
         onChange={handleChange}
         className="border-2 py-2 px-3 w-full my-3"
          name="price"
          placeholder="Price"
        />{" "}
        <br />
       <input type="file" name="img" onChange={handleChange}/>
        <br />
        <FormControl sx={{ marginTop: "20px" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Stock</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.stock}
            label="Stock"
            onChange={handleChange}
            name="stock"
          >
            <MenuItem value="In stock">In stock</MenuItem>
            <MenuItem value="Out of stock">Sold Out</MenuItem>
          </Select>
  
         
        </FormControl>
        <Button
            onClick={handleSubmit}
            sx={{ marginTop: "20px" }}
            variant="outlined"
          >
            Submit
          </Button>
      </div>
      </div>
    );
  }
  