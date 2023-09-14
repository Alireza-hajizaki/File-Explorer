import React, { useState } from 'react'
import explorer from '../../data/folderData';
import Folder from '../folder';

const Explorer = () => {

    const [explorerData, setExplorerData] = useState(explorer)

  return (
    <div className='container'>
        <Folder explorer={explorerData}/>
    </div>
  )
}

export default Explorer