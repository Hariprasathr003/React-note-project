import { useState ,useEffect } from "react";
import { nanoid } from 'nanoid';
import Search from "./components/Search";
import Notelist from "./components/Notelist";
import Header from "./components/Header";


const App = () => {
  const [notes, setNotes]=useState([
    {
      id:nanoid(),
    text:"my First note!",
    date:'1/10/24',
  },
  {
    id:nanoid(),
  text:"my Second note!",
  date:'1/10/24',
},
{
  id:nanoid(),
text:"my Third note!",
date:'1/10/24',
},

]);

const [searchtext,setsearchtext]=useState('');

const[darkmode,setdarkmode]=useState('');

//load Local Storage

useEffect(()=>{
  //const savenotes =JSON.parse(localStorage.getItem('react-notes-app')
  const savenotes = JSON.parse(localStorage.getItem('react-notes-app')) || [];
if (savenotes){
  setNotes(savenotes);
}
},[]);

// Save Local Storage
useEffect(()=>{
  localStorage.setItem('react-notes-app', JSON.stringify(notes)
);
}, [notes]);

 

const addnote =(text) =>{
  //console.log(text)
  const date= new Date();
  const newnote ={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  };
  const newnotes =[...notes,newnote];
  setNotes(newnotes);
};


const deleteNote =(id) =>{
  const newnotes=notes.filter((note)=>note.id !== id);
  setNotes(newnotes);
}



  return(
    <div className={`${darkmode && 'dark-mode'}`}>

       <div className="container">
    <Header handledarkmode={setdarkmode}/>
    <Search  handlesearchnote={setsearchtext}/>
    <Notelist 
    notes={notes.filter((note)=>note.text.toLowerCase().includes(searchtext))} 
    handleaddnote={addnote}
    handledelenote={deleteNote}
    /> 
  </div>

    </div>
  
  );
};

export default App;
