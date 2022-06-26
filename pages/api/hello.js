// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectdb from "../../Middleware/connectdb"

let  handler=async (req, res) =>{
  res.status(200).json({ name: 'John Doe' })
}

export default connectdb(handler)