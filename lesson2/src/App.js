import React from 'react';
import './App.css';
import BlogCardPage from './BlogCard';
import { isArrayEmpty } from './Utility';


function App() {
const info = [{
  id: 1,
  firstName: 'My name is Bereket Fikre',
  value: 'I want to live and die for Christ, my always prayer is to know Jesus more and more, Again and Again. I want to live and die for Christ, my always prayer is to know Jesus more and more, Again and Again. I want to live and die for Christ, my always prayer is to know Jesus more and more, Again and Again'
},
  
{
  id: 2,
  firstName: 'My name is Salas Delil',
  value: 'I want to live and die for Christ, my always prayer is to know Jesus more and more, Again and Again. I want to live and die for Christ, my always prayer is to know Jesus more and more, Again and Again. I want to live and die for Christ, my always prayer is to know Jesus more and more, Again and Again'
},

{
  id: 3,
  firstName: 'My name is Biniyam Abera',
  value: 'I want to live and die for Christ, my always prayer is to know Jesus more and more, Again and Again. I want to live and die for Christ, my always prayer is to know Jesus more and more, Again and Again. I want to live and die for Christ, my always prayer is to know Jesus more and more, Again and Again'
}
]

const blogCards = isArrayEmpty(info) ? []: info.map((items)=>{

  return(
    <BlogCardPage title ={items.firstName} values={items.value} />
  )
})


  return (
    <div className='App' >
      {blogCards}
    </div>
  );
}
export default App;
