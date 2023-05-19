import React, { useState } from 'react'
import { Persons } from './Persons'
import Table from './Table';
function Srch() {
    const [querry, setQuery]= useState("");
    const[user,setUser] = useState("");
    const keys = ["first_name", "last_name", "email", "gender"]
    

 const search = (data) => {
    return data.filter((item)=>keys.some((key)=>{
        return item[key].toLowerCase().includes(querry);
    }));
 }


 const handleChange =(e)=>{
    console.log(e)
    let newUser = {...Persons};
    newUser[e.target.name] =e.target.value
    setUser(newUser)
    

}
const gndr = (data) => {
    
    return data.filter((item) => item.gender.includes(user));
 }
  return (
   

    <div>
        <h1>Search</h1>
        <input type="text" placeholder="search..." onChange={e=> setQuery(e.target.value)}></input>
        <h1>filter</h1>
        <input type="radio" name="gender"  checked={user.gender == "Male"} value={"Male"} onChange={(e,data)=>{handleChange(e); gndr(data);}}/> Male
                    <input type="radio" name="gender"  checked={user.gender == "Female"} value={"Female"} onChange={(e,data)=>{handleChange(e); gndr(data);}}/> Female <br />
        
    
        <Table data={search(Persons)}/>
        
    </div>

  )
}

export default Srch