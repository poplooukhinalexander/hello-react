import React, { useState } from 'react';

function MyInput() {
    const [value, setValue] = useState("");

    return (  
        <div>          
          <input type="text" value={value} onChange={ev => setValue(ev.target.value)}/>           
        </div>    
      );
}

export default MyInput;