import React, { useState } from 'react'
import explorer from '../data/folderData';
import Folder from './folder';
import useTraverseTree from '../hooks/use-traverse-tree';

const Explorer = () => {

    const [explorerData, setExplorerData] = useState(explorer);
    const { insertNode } = useTraverseTree();

    const handleInsertNode =(folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData , folderId, item, isFolder );

        setExplorerData(finalTree);
    }

  return (
    <div className='container'>
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
    </div>
  )
}

export default Explorer