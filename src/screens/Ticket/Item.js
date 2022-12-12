import React from 'react'
import Sidebar from '../Dashboard/Sidebar';

const Item = ({ticket}) => {
  return (
    <div>
    <div className="antialiased bg-black w-full h-auto text-slate-300 relative py-4">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
            <Sidebar /> 
            {/* create a form autofilled  */}
            
        </div>
    </div>
</div>
  )
}

export default Item;