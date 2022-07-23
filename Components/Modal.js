import { motion } from "framer-motion"
import Backdrop from '../pages/admin/Backdrop'
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  
  import Filebase from "react-file-base64";
import { useDispatch } from "react-redux";
import { updateProduct } from "../State/actioncreators/mavaproduct";
import { useEffect } from "react";
const dropin = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

const Modal = ({handleClose,data,setdata}) => {
  useEffect(()=>{
    console.log("data in modal",data);
  })
    let handleChange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    let dispstach=useDispatch();

    let handleSubmit=(e)=>{
        e.preventDefault()
        if(data.name=="" || data.desc=="" || data.category=="" || data.rating=="" || data.price<=0 || data.img==null || data.stock==""){
          alert("improper values")
        }else{
        dispstach(updateProduct(data))
        }
        handleClose()
    }
  return (
    <Backdrop
            onClick={handleClose}
        >

<motion.div
                    onClick={(e) => e.stopPropagation()}
                    variants={dropin}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                     className="motion-modal"
                >
                    
                    <div className="mt-5 p-5">
        <h3>Add Product</h3>
        <input
          onChange={handleChange}
          className="border-2 py-2 px-3 w-full my-3"
          name="name"
          placeholder="Name"
          value={data.name}
        />{" "}
        <br />
        <input
          onChange={handleChange}
          className="border-2 py-2 px-3 w-full my-3"
          name="desc"
          placeholder="Description"
          value={data.desc}
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
          value={data.rating}
        />{" "}
        <br />
        <input
         onChange={handleChange}
         className="border-2 py-2 px-3 w-full my-3"
          name="price"
          placeholder="Price"
          value={data.price}
        />{" "}
        <br />
        <Filebase type="file" value={data.img} multiple={false} onDone={({ base64 }) => setdata({ ...data, img: base64 })} />
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
                    </motion.div>
            </Backdrop>
  )
}

export default Modal
