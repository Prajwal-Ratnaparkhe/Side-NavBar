import React from 'react'
import Details from '../pages/Details'
import FileDoc from '../pages/FileDoc'
import Info from '../pages/Info'
import Notes from '../pages/Notes'
import Tabs from '../pages/Tabs'

const Display = () => {


  return (
  <div>
<main>



<div className="div2"> <Info/></div>
<div className="div3"> <Details/></div>
<div className="div4"> <Notes/></div>
<div className="div5"> <FileDoc/></div>
<div className="div6"><Tabs/></div>
 

 
</main>

  </div>
  )
}

export default Display