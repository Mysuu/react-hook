import React, { useState } from 'react'
import './Blog.scss'

function Addnewblog() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleClick = () => {
        console.log('check data state', title, content);
    }
    return (
        <div className='add-new-container'>
            <div className='text-add-new'>---Add new blog---</div>
            <div className='input-data'>
                <label>Title: </label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='input-data'>
                <label>Content: </label>
                <input type='text' value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button style={{ marginLeft: '10px' }} className='btn-addnew' onClick={handleClick}>Add</button>
        </div>
    )
}

export default Addnewblog