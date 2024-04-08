import { useState } from "react"

export function Container ({title, children }){
const [collapsed, setCollapsed] = useState(false)

function handleToggle (){
  setCollapsed(toggle => !toggle)
}

  return (
    <div className='Container' style={{backgroundColor: 'white', border:'2px solid red', margin: '10px', padding:'20px' }}>
      <div className="title">{title}
      <button onClick={handleToggle}>Toggle</button>
      </div>

     {collapsed && <div className="children-content">{children}</div>}
    </div>
  )
}