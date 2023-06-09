import NoteContext from "./NoteContext";
import { useState } from "react";
// import About from "../../components/About";
import { Home } from "../../components/Home";

const NoteState = (props) => {
  const notesInitial =
  [
    {
      "_id": "647f3c3c484fdfa1051e4c45",
      "user": "647dd2d4bf580953d334d057",
      "title": "SAHIL",
      "description": "I AM A GOOD BOY",
      "tag": "personal",
      "date": "2023-06-06T14:01:32.024Z",
      "__v": 0
    },
    {
      "_id": "647f3c3c484fdfa1051e4c47",
      "user": "647dd2d4bf580953d334d057",
      "title": "SAHIL",
      "description": "I AM A GOOD BOY",
      "tag": "personal",
      "date": "2023-06-06T14:01:32.592Z",
      "__v": 0
    },
    {
      "_id": "647f3c3d484fdfa1051e4c49",
      "user": "647dd2d4bf580953d334d057",
      "title": "SAHIL",
      "description": "I AM A GOOD BOY",
      "tag": "personal",
      "date": "2023-06-06T14:01:33.138Z",
      "__v": 0
    },
    {
      "_id": "647f42ab020b991892413180",
      "user": "647dd2d4bf580953d334d057",
      "title": "SAHIL",
      "description": "I AM A GOOD BOY",
      "tag": "personal",
      "date": "2023-06-06T14:28:59.330Z",
      "__v": 0
    },
    {
      "_id": "64805b41157086b35f026502",
      "user": "647dd2d4bf580953d334d057",
      "title": "SAHIL",
      "description": "I AM A GOOD BOY123",
      "tag": "personal",
      "date": "2023-06-07T10:26:09.354Z",
      "__v": 0
    },
    {
      "_id": "64805b43157086b35f026504",
      "user": "647dd2d4bf580953d334d057",
      "title": "SAHIL",
      "description": "I AM A GOOD BOY123",
      "tag": "personal",
      "date": "2023-06-07T10:26:11.090Z",
      "__v": 0
    },
    {
      "_id": "648067766997212b8e9a0422",
      "user": "647dd2d4bf580953d334d057",
      "title": "SAHIL",
      "description": "I AM A GOOD BOY111123",
      "tag": "personal",
      "date": "2023-06-07T11:18:14.991Z",
      "__v": 0
    }
  ]
  const[notes,setNotes]=useState(notesInitial);
    
    return (
        <NoteContext.Provider value={notes}>
            {props.children}
            
            {/* <Home/> */}
        </NoteContext.Provider>
    )
}

export default NoteState;