import React from 'react'
import './Editor.css'
export default function Editor(props) {
    const { name, handleChange } = props
    return (
        <div className='editor-wrap'>
            <h2>{name}</h2>
            <textarea name={name} className={name} id="" cols="30" rows="10" onChangeCapture={(e) => { handleChange(e, name) }}></textarea>
        </div>
    )
}
