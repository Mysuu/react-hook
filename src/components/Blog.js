import React, { useState, useEffect } from 'react'
import useFetch from '../custom/Fetch'
import './Blog.scss'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Addnewblog from './Addnewblog'
import Button from 'react-bootstrap/Button'

function Blog() {

    const [show, setShow] = useState(false)
    const [newData, setNewData] = useState([])
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { data: dataBlog, loading }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)

    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let newDataSimple = dataBlog.slice(0, 12)
            // console.log('check data', newData);
            setNewData(newDataSimple)
        }
    }, [dataBlog])

    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);

        setShow(false);
        setNewData(data);
    }

    const deletePost = (id) => {
        let data = newData
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }

    return (
        <>
            <Button variant="primary my-3" onClick={handleShow}>
                + Add new blog
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Addnewblog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>

            <div className='blog-container'>
                {loading === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className='single-blog' key={item.id}>
                            <div className='title'>
                                <span>{item.title}</span>
                                <span
                                    style={{ cursor: 'pointer', float: 'right' }}
                                    onClick={() => deletePost(item.id)}
                                >X</span>
                            </div>
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
        </>
    )
}

export default Blog