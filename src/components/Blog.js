import React from 'react'
import useFetch from '../custom/Fetch'
import './Blog.scss'
import { Link } from 'react-router-dom'

function Blog() {

    const { data: dataBlog, loading }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)
    let newData = []

    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 12)
        console.log('check data', newData);

    }
    return (
        <div className='blog-container'>
            {loading === false && newData && newData.length > 0 && newData.map(item => {
                return (
                    <div className='single-blog' key={item.id}>
                        <div className='title'>{item.title}</div>
                        <div className='content'>{item.body}</div>
                        <br />
                        <button>
                            <Link to={`/blog/${item.id}`}>Xem chi tiết</Link>
                        </button>
                    </div>
                )
            })}
            {loading === true && <div>
                Loading data...
            </div>}
        </div>
    )
}

export default Blog