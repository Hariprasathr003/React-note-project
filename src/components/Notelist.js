import Note from "./Note";
import Addnote from "./Addnote";
const Notelist =({notes,handleaddnote,handledelenote})=>{
    return (<dev className="notelist">
        {notes.map((note)=>(
                  <Note id={note.id}
                   text={note.text} 
                   date={note.date}
                   handledelenote={handledelenote}/>
        ))}
        <Addnote handleaddnote={handleaddnote}/>
    </dev>
    );
};

export default Notelist;