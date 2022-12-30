import React, { useState } from 'react'
import Editor from '../editor/Editor'
import './Homepage.css'
export default function Homepage() {
    const [html, sethtml] = useState('')
    const [css, setcss] = useState('')
    const [js, setjs] = useState('')


    const handleChange = (e, name) => {
        setTimeout(() => {
            switch (name) {
                case "HTML":
                    return sethtml(e.target.value)
                case "CSS":
                    return setcss(e.target.value)
                case "JS":
                    return setjs(e.target.value)
                default:
                    return
            }
        }, 250)

    }

    let source = `<html> 
<body>${html} </body>
    <style>${css} </style>
    <script> ${js}</script>
    </html>`
    return (
        <div>
            <div className="editor-app-container">
                <Editor name={'HTML'} handleChange={handleChange} />
                <Editor name={'CSS'} handleChange={handleChange} />
                <Editor name={'JS'} handleChange={handleChange} />

            </div>
            <div className='output'>
                <iframe srcDoc={source} frameborder="0" sandbox='allow-scripts' width='100%' height='100%'></iframe>
            </div>
        </div>

    )
}
