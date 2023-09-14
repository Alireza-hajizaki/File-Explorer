import React, { useState } from "react";
import { BsFillFolderFill } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";
import {VscNewFile , VscNewFolder} from "react-icons/vsc";


const Folder = ({ explorer }) => {

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
    });

    const handleNewFolder = (e , isFolder) => {
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible:true,
            isFolder
        })
    }

  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <div className="main-tile">
            <BsFillFolderFill className="mr" />
            <span>{explorer.name}</span>
          </div>

          <div className="editions">
            <div className="tooltip" onClick={(e) => handleNewFolder(e , false)}>
              <VscNewFile/>
              <span className="tooltiptext">New File...</span>
            </div>
            <div className="tooltip" onClick={(e) => handleNewFolder(e , true)}>
              <VscNewFolder/>
              <span className="tooltiptext">New Folder...</span>
            </div>
          </div>
        </div>

        <div style={{display: expand? "block" : "none", paddingLeft: "1rem"}} >

            {showInput.visible && (
                <div className="inputContainer">
                    <span>{showInput.isFolder ? <VscNewFolder/> : <VscNewFile/>}</span>
                    <input type="text" className="inputContainer__input" onBlur={() => setShowInput({...showInput, visible:false}) } autoFocus />
                </div>
            )}

            {explorer.items.map((exp) => (
                <Folder explorer={exp} key={exp.id} />
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file" >
        <span> <AiFillFileText /> {explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
