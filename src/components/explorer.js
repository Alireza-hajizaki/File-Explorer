import React, { useState } from "react";
import explorer from "../data/folderData";
import Folder from "./folder";
import useTraverseTree from "../hooks/use-traverse-tree";

const Explorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId, isFolder) => {
    const finalTree = deleteNode(explorerData, folderId, isFolder);

    setExplorerData(finalTree);
  };

  return (
    <div className="container">
      <Folder
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        explorer={explorerData}
      />
    </div>
  );
};

export default Explorer;
