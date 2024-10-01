import { useState } from "react";

const Addnote =({handleaddnote})=>{

    const [noteText,setNoteText]=useState('');

    const characterlimit = 150;

    const handlechange =(event)=>{
       // console.log(enent.target.value);
       if(characterlimit-event.target.value.length >=0){
       setNoteText(event.target.value);
       }
    };
    const handlesave=()=>{
        if(noteText.trim().length>0){
        handleaddnote(noteText)
        setNoteText('');
        }
    }


    return (<div className="addnote">
        <textarea 
        // row='8'
        // cols='10'
        placeholder='Type to add notes...'
        value={noteText}
        onChange={handlechange}>
        </textarea>
        <div className="note-footer">
            <small>{characterlimit-noteText.length}  remaing</small>
            <button className="save" onClick={handlesave}>Save</button>
        </div>

    </div>
    );
}
export default Addnote;