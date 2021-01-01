import React, { useState } from 'react'
import "./EditSaveCancel.css";
function EditSaveCancel(props) {
  const { editField, setReadOnly } = props;
    const [ edit, setEdit ] = useState(false)
    const handleEdit = ()=> {
      setEdit(!edit)
      // editField("ok")
      setReadOnly(false)
    }
  return (
        <div className="icons">
          {!edit ? (
            <img className="iconEdit" onClick={handleEdit} src="./images/icons/pen-solid.svg" alt="editName" style={{color: "#F2805C",height: "1.8vh"}}>
            </img>
            ) : (
            <div>
              <img className="iconEdit" src="./images/icons/save-regular.svg" alt="editName" style={{color: "blue",height: "1.8vh"}}></img>{"  "}
              <img className="iconEdit" onClick={()=>{setEdit(false)
              setReadOnly(true)
            }
              } src="./images/icons/window-close-regular.svg" alt="editName" style={{color: "red",height: "1.8vh"}}></img>
            </div>
          )}
        </div>
  )
}

export default EditSaveCancel
