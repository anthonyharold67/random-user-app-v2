import React,{useState} from 'react'
import mailSvg from "../assets/mail.svg";
import phoneSvg from "../assets/phone.svg";
import womanSvg from "../assets/woman.svg";
import manSvg from "../assets/man.svg";
import mapSvg from "../assets/map.svg";
import padLockSvg from "../assets/padlock.svg";
import growingUpManSvg from "../assets/growing-up-man.svg";
import growingUpWomanSvg from "../assets/growing-up-woman.svg"

const RandomUser = ({user,axiosUser}) => {
  console.log(user)
  const [header,setHeader] = useState()
  const [text,setText]=useState()
  const [table,setTable] = useState([])
  const [userAdd,setUserAdd] = useState([])
  const handleClick = ()=> {
    axiosUser();
    setHeader("")
    setText("")
  }
  const addClick = (item)=> {
    setUserAdd([...userAdd,item.phone])

    if(!userAdd.includes(item.phone)){
      setTable([...table,[`${item.name.first} ${item.name.last}`,
      `${item.email}`,
      `${item.phone}`,
      `${item.dob.age}`]  
      ])
    }
    

  }
  return (
    <div className="random">
        {user?.map((item, index) => (
        <div key={index} className="card-wrapper">
          <div className="header-container">
            <img src={item.picture.large} alt="user" />
            
          </div>
          <p className="header">
              <span className="titleHeader">{header}</span> <br/>
              {text}
          </p>
          <div>
          
          <img src={item.gender === "male" ? manSvg : womanSvg} alt="" className="icon" 
          onMouseOver={()=>{
              setHeader("My name is")
              setText(`${item.name.first} ${item.name.last}`)   
            }}/>
          <img src={mailSvg} alt="" className="icon" onMouseOver={()=>{
              setHeader("My email is")
              setText(`${item.email}`)   
            }}/>
          <img src={item.gender === "male" ? growingUpManSvg : growingUpWomanSvg} alt="" className="icon" onMouseOver={()=>{
              setHeader("My age is")
              setText(`${item.dob.age}`)   
            }} />
          <img src={mapSvg} alt="" className="icon" onMouseOver={()=>{
              setHeader("My street is")
              setText(`${item.location.street.number} - ${item.location.street.name}`)   
            }}/>
          <img src={phoneSvg} alt="" className="icon"
          onMouseOver={()=>{
              setHeader("My phone is")
              setText(`${item.phone}`)   
            }}
           />
          <img src={padLockSvg} alt="" className="icon"
          onMouseOver={()=>{
              setHeader("My password is")
              setText(`${item.login.password}`)   
            }}
          />
          </div>
          <button onClick={handleClick}>NEW USER</button>
          <button onClick={()=>addClick(item)}>ADD USER</button> 
        </div>
      ))}
      
      {table.length>0 ?<table className="table">
        <tr>
          <th>First Name</th>
  
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
        {table?.map((item,index)=>(
          <tr key={index}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
            <td>{item[3]}</td>
          </tr>
        ))} 
      </table> : null}    
    </div>
  )
}

export default RandomUser