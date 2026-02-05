import React, { useState } from 'react'

const ChangeFontSize = () => {
    const [fSize, setFSize] = useState(26);


    return (
        <div className='container'>
            <h3>Change fontsize</h3>
            <p style={{fontSize:fSize}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, impedit?</p>
            <button className='btn btn-outline-success me-2' onClick={() => {

                setFSize(fSize + 5);
            }}>Zoom in</button>
            <button className='btn btn-outline-success' onClick={()=>{
                setFSize(fSize - 5);

            }}>Zoom out</button>

            


        </div>
    )
}

export default ChangeFontSize