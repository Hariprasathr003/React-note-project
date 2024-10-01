import{ MdDeleteForever } from 'react-icons/md';

const Note =({id , text , date, handledelenote})=>{
    return <dev className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick={()=>handledelenote(id)} className='delete-icon' size='1.4em' />
        </div>
    </dev>;
};
export default Note;