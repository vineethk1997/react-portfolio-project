import React from 'react';
import "../ModuleCss/Style.css";



export default function Projects() {

  const data =[{
    id:1,
    name:"Backtracking",
    information:"It is a pure HTML page. This assignment is to make sure that you understand the basic html tags like Heading, Paragraphs, Lists, Tables, Dic, etc. and their usage.",
    link:"https://vineethk1997.github.io/HTML-Page/backtracking.html"

  },
  {
    id:2,
    name:"Todo App",
    information:"This project contains the capabilties of HTML, CSS. During the development of this project you will understand that how do you connect the HTML pages with CSS files and style the pages, you will be developing styled static application containing HTML files and CSS files. And understand the difference between Internal CSS, External CSS and Inline CSS and CSS properties like margin, display, box property, padding etc.",
    link:"https://vineethk1997.github.io/CSS_Todo-App-UI-Web/"
  },
  {
    id:3,
    name:"Digital Clock",
    information:"While developing this project, you will get to work on multiple HTML tags, and various CSS properties. Most importantly you will get introduced with the functions required for DOM manipulation. Also how to add dynamic HTML using JS and Date function of JS.",
    link:"https://vineethk1997.github.io/Clock/"
  },
  {
    id:4,
    name:"Todo App JS",
    information:"This project contains the capabilties of JS. During the development of this project you will understand that how do you connect the HTML pages with functionality written in JS files, you will be using multiple DOM functions which will make your static application as Dynamic application where you can do multiple operations on user input and change the look and view of page based on user input, also known as adding Dynamic HTML in the website based on user's input.",
    link:"https://vineethk1997.github.io/TO-D0/"
  },
  {
    id:5,
    name:"React Blog App",
    information:"This assessment includes capabilities React.JS and React Router mainly. While developing this project you will understand that how you can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables. You will also be creating different components like Class Components and Functional Components, and can use Hooks, which is the newest concept of React16. And also you will get comfortable in developing single page application using Browser Router.",
    link:"https://tourmaline-centaur-17ac82.netlify.app"
  }
]

  return (
    <>
    
    {data.map((e)=>
   
    <div className='container'>
      <div className='container_name'>
        <h4>{e.name}</h4>
      </div>
      <div className='container_information'>
        {e.information}
      </div>
      <div className='container_link'>
        <span>{e.link}</span>
      </div>

    </div>
    )}
    
 
   
    <div className='footer'>

    </div>
    </>
  )
}
