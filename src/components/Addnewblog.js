import React, { useState } from 'react'
import './Blog.scss'
import axios from 'axios'

function Addnewblog(props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleClick = async (e) => {
        // e.preventDefault()//k cho load lại trang khi xài form
        // if (title === '' || title === null || title === undefined) 
        if (!title) {//dùng ! trả ra giá trị là true, ngươc với 3 cái ở trên
            alert('Chưa nhập title kìa em êi')
            return
        }
        if (!content) {
            alert('Chưa nhập content kìa em êi')
            return
        }
        let data = {
            title: title,
            body: content,
            userId: 1
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        if (res && res.data) {
            let newBlog = res.data
            props.handleAddNew(newBlog)
        }

        // console.log('check res post data', res);
        // console.log('check data', title, content);
    }
    return (
        <div className='add-new-container'>
            {/* <form onSubmit={handleClick}> */}
            {/* xài from sẽ lấy được tất cả data của các input */}
            <div className='text-add-new'>---Add new blog---</div>
            <div className='input-data'>
                <label>Title: </label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='input-data'>
                <label>Content: </label>
                <input type='text' value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            {/* <button style={{ marginLeft: '10px' }} className='btn-addnew' type='submit'>Add</button> */}
            <button style={{ marginLeft: '10px' }} className='btn-addnew' onClick={handleClick}>Add</button>
            {/* </form> */}
        </div>
    )
}

export default Addnewblog