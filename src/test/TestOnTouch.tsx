import {useState}from 'react'

export default function TestOnTouch() {
    const [first, setfirst] = useState(1)
    const handleTouchStart = () => {
      setfirst(p => p+1);
    };
  return (
    <div>
      TestOnTouch


        <div
        style={{
            backgroundColor:'white'
        }}
        >
         <button
         style={{
          width:300,
          height:300,

         }}
         onTouchStart= {handleTouchStart}
         >
            {first}
         </button>
        </div>
    </div>
  )
}
