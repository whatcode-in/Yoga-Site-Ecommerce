
import React from 'react'
// import styles from './Myaccount.module.css'



const USER_STRING = "https://blushing-plum-belt.cyclic.app/api/admin"

function Login(){

  const [data,setData] = React.useState({
    email: "",
    password: ""
  })

  function handleChange(event){
    setData({...data,[event.target.name]:event.target.value})
  }

  const login = async () =>  {

    let userPresent = await fetch(`${USER_STRING}/user/${data.email}`, {
      method: 'GET'
    })
    let userRes = await userPresent.json()
    if(userRes.user.length > 0){
      console.log('user: ',userRes.user[0].email,userRes.user[0].password)
      sessionStorage.setItem('Token',userRes.user[0].email)
      alert('login successfull')
      data.email = ""
      data.password = ""
    }else{
      alert('invalid email or password')
    }
  }

  return(<div className='flex flex-col items-center justify-center'>
   <input className='mt-8 w-72 border-2 border-solid border-black' placeholder='email' name="email" value={data.email} onChange={handleChange}/> 
    <input  className='mt-8 w-72 border-2 border-solid border-black' placeholder='password' name="password" value={data.password} onChange={handleChange} />
    <button onClick={login} className="mt-8 bg-[#7A923E] p-2 text-white mb-8">Login</button>
  </div>
  )
}


function SignUp(){

  const [data,setData] = React.useState({
    email: "",
    password: ""
  })

  function handleChange(event){
    setData({...data,[event.target.name]:event.target.value})
  }

  const signUp = async () =>  {

    let userPresent = await fetch(`${USER_STRING}/user/${data.email}`, {
      method: 'GET'
    })
    let userRes = await userPresent.json()
    if(userRes.user.length > 0){
      alert('user already exsists')
      data.email = ""
      data.password = ""
    }

    else{

    let response = await fetch(`${USER_STRING}/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
    let res = await response.json()
    if(res){
      data.email = ""
      data.password = ""
      alert('user added')
      console.log(res.user)
    }if (!response.ok) {
      alert('error in creating user')
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }


  }
  
  return(<div className='flex flex-col items-center justify-center'>
    <input className='mt-8 w-72 border-2 border-solid border-black' placeholder='email' name="email" value={data.email} onChange={handleChange}/> 
    <input className='mt-8 w-72 border-2 border-solid border-black' placeholder='password' name="password" value={data.password} onChange={handleChange} />
    <button onClick={signUp} className="mt-8 bg-[#7A923E] p-2 text-white mb-8">SignUp</button>
    
  </div>)
}


const MyAccount = () => {

  const [showLogin,setShowLogin] = React.useState()

  return (
    <div className='flex flex-col items-center justify-center p-20'>
        
        <div className='flex mt-8'>
          <button className='bg-[#7A923E] p-2 text-white'  onClick={() => setShowLogin(true)}>Login</button> 
          <button className='ml-8 bg-[#7A923E] p-2 text-white' onClick={() => setShowLogin(false)}>Sign Up</button> 
        </div>

        {
          showLogin ? <Login/> : <SignUp/>
        }

    </div>
  )
}

export default MyAccount
