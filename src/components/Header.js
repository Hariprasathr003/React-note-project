import React from "react";

const Header =({handledarkmode})=>{
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=>handledarkmode((previousdarkmode)=>!previousdarkmode)} className="save">Mode</button>
        </div>
    )
}
export default Header;