import React, { useState } from "react";
import { BsFillFolderFill } from "react-icons/bs";
import { AiFillFileText , AiFillHtml5 , AiOutlineDelete } from "react-icons/ai";
import {VscNewFile , VscNewFolder} from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";


const Folder = ({ handleInsertNode, explorer }) => {

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
    };

    const onAddFolder = (e) => {
        if(e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({...showInput, visible: false})
        }
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
            <div className="tooltip" onClick={(e) => handleNewFolder(e , true)}>
              <AiOutlineDelete/>
              <span className="tooltiptext">Delete...</span>
            </div>
          </div>
        </div>

        <div style={{display: expand? "block" : "none", paddingLeft: "1rem"}} >

            {showInput.visible && (
                <div className="inputContainer">
                    <span>{showInput.isFolder ? <VscNewFolder/> : <VscNewFile/>}</span>
                    <input type="text" className="inputContainer__input" onKeyDown={onAddFolder} onBlur={() => setShowInput({...showInput, visible:false}) } autoFocus />
                </div>
            )}

            {explorer.items.map((exp) => (
                <Folder handleInsertNode={handleInsertNode} explorer={exp} key={exp.id} />
            ))}
        </div>
      </div>
    );
  } else {
    if(explorer.name.includes(".js")){
      return (
        <div className="file" >
          <span> <DiJavascript1 /> {explorer.name}</span>
        </div>
      );
    }else if(explorer.name.includes(".css")){
      return (
        <div className="file" >
          <span> <FaCss3Alt /> {explorer.name}</span>
        </div>
      )
    }else if(explorer.name.includes(".html")){
      return (
        <div className="file" >
          <span> <AiFillHtml5 /> {explorer.name}</span>
        </div>
      )
    }else {
      return(
        <div className="file" >
          <span> <AiFillFileText /> {explorer.name}</span>
        </div>
      )
    }
  }
};

export default Folder;
