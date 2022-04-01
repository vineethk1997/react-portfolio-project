import React from 'react';
import "../ModuleCss/Style.css";
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <div className='content_home'> 
      <div>
      To secure a position in a dynamic and progressive organization 
      that draws on my education, knowledge, experience, skills and flexibility
      to adapt to company's needs and work towards the constitutional growth of the organization.
      </div>
      </div>

      <section>
        <Projects/>
      </section>


      <section>
        <Contact/>
      </section>

      <div className='footer'>

      </div>
      </>
    
  )
}
