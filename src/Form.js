import React from "react";
import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook} from 'react-icons/ai';
import {ImTwitter} from 'react-icons/im';
import {TiSocialVimeoCircular} from 'react-icons/ti';

export default function Form() {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        doesAgree: false,
    })

    function handleChange(event) {
        
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
           return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
            
           }
        })
    }
return (

   <div className="form-wrapper">
   
   <h1>Create Account</h1>

   <div className="social-media">
   <FcGoogle className='google'/>
   <AiFillFacebook className='facebook'/>
   <ImTwitter className='twitter'/>
   <TiSocialVimeoCircular className='vimeo'/>
   </div>


   <small>Or use your email for registration:</small>
   

   <form className="form">

  <input 
  type="text"
  placeholder="Name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  
  />
<br/>

<input 
  type="email"
  placeholder="Email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  />

<br/>

<input 
  type="password"
  placeholder="Password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  className='password'
  />
<br/>


<input 
  type="checkbox"
  id="doesAgree"
  placeholder="Name"
  name="doesAgree"
  checked={formData.doesAgree}
  onChange={handleChange}
  />
<label htmlFor="doesAgree">I agree to the <span>Terms</span> and <span>Privacy Policy</span>.</label>

<br></br>
<button className="signin">Signin</button>
<button className="signup">Signup</button>
   </form>
   </div>
    

)

}