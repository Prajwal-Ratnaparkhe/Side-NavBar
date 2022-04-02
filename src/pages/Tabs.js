import React from 'react'



const Tabs = () => {

 
 
   
  return (
    <div className="container">






<div class="container">
            <ul class="nav nav-tabs">
                <li>
                    <a class="nav-link active" href="#home" role="tab" data-toggle="tab">Home</a>
                </li>
                <li>
                    <a class="nav-link" href="#featured" role="tab" data-toggle="tab">Featured</a>
                </li>
                <li>
                    <a class="nav-link" href="#post" role="tab" data-toggle="tab">post</a>
                </li>
            </ul>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="home">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



                </div>
                <div role="tabpanel" class="tab-pane" id="featured">Featured Info</div>
                <div role="tabpanel" class="tab-pane" id="post">post Info</div>
            </div>
       </div>







    </div>
  )
}

export default Tabs