import React from 'react'
import "../ModuleCss/Style.css";

export default function Contact() {
  return (
    <>
    <div>
      <div>
        <form>
          <label>Name</label>
          <input type="text" name='name' value="" onChange=""/> <br/>
          <label>email</label>
          <input type="text" name='email' value="" onChange=""/>  <br/>
          <label>Message</label>
          <textarea rows="5" cols="15"/>
       

          <button className='button'>Submit</button>
        </form>
      </div>
    </div>
    <div className='footer'>

    </div>
    </>
  )
}
