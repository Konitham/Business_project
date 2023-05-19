import React, { useEffect, useState } from 'react'
import './Sign.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Users1 = () =>{
    const[user,setUser] = useState({
        name:"",
        gender:"",
        emailid:"",
        password:"",
        phoneno:""

    })
    const navigate = useNavigate();
    const [Users1, setUsers1] = useState([]);
    const [isEdit,setIsEdit] = useState(false)

    useEffect(() => {
        getDataFromServer()
    }, []);

    const getDataFromServer = () => {
        axios.get("http://localhost:3201/user").then((res) => {
            setUsers1(res.data)
            //console.log(res.data)
        })
    }

    const handleChange =(e)=>{
        //console.log(e)
        let newUser = {...user};
        newUser[e.target.name] =e.target.value
        setUser(newUser)
    }
    const addUser=()=>{
        console.log(user);
        axios.post("http://localhost:3201/user/",user).then(()=>{
            getDataFromServer();
            clearForm();
        })
    }
   
   
    const clearForm = () =>{
        setUser({
         name:"",
        gender:"",
        emailid:"",
        password:"",
        phoneno:""
        })
    }

  return (
    <div className="container1">
        <h1 className='header'>SignUp Page</h1>
        <div className="forms">
            <form action="">
            
            <label htmlFor="">Name   </label>
            <input type="text" name="name" value={user.name} onChange={(e)=>{handleChange(e)}}></input><br/>
            <br/>
            
            <label htmlFor="">Gender   </label>
            <input type="radio" name="gender"  checked={user.gender == "Male"} value={"Male"} onChange={(e)=>{handleChange(e)}}/>Male
            <input type="radio" name="gender"  checked={user.gender == "Female"} value={"Female"} onChange={(e)=>{handleChange(e)}}/>Female <br/>
            <br/>
            
            <label htmlFor="">emailid  </label>
            <input type="text" name="emailid" value={user.emailid} onChange={(e)=>{handleChange(e)}}></input><br/>
            <br/>
            <label htmlFor="">Password  </label>
            <input type="password" name="password" value={user.password} onChange={(e)=>{handleChange(e)}}></input><br/>
            <br/>
            <label htmlFor="">Phone NO  </label>
            <input type="" name="phoneno" value={user.phoneno} onChange={(e)=>{handleChange(e)}}></input><br/>
            <br/>
            
                    
                        <button type='button' className='button' onClick={()=>navigate("/home")} >Login</button>
                    
                    
                    <button type='button' className='button' onClick={()=>{addUser()}}>Add User</button>
                    
            </form>
            <h1 className='header'>Welcome abroad !!</h1>
            

        </div>
        
    </div>
  )
}

export default Users1