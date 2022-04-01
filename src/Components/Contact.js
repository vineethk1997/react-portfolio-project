import React from 'react'
import "../ModuleCss/Style.css";

export default function Contact() {
  return (
    <>
    <div className='form_background'>
      <div className='form'>
        <form>
          <label style={{color:"darkolivegreen"}}>Name</label>
          <input type="text" name='name' value="" onChange=""/> <br/>
          <label style={{color:"darkolivegreen"}}>email</label>
          <input type="text" name='email' value="" onChange=""/>  <br/>
          <label style={{color:"darkolivegreen"}}>Message</label>
          <textarea rows="5" cols="15"/> <br/>
       

          <button className='button'>Submit</button>
        </form>
      </div>
    </div>
    <div className='footer'>

    </div>
    </>
  )
}
