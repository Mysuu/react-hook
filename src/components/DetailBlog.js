import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../custom/Fetch'
import './Blog.scss'

function DetailBlog() {
    const { id } = useParams() //lấy giá trị của biến id bên App.js
    const navigate = useNavigate()

    const { data: dataBlogDetail, error, loading }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    const handleBack = () => {
        navigate('/blog')
    }
    return (
        <>
            <div><span style={{ cursor: 'pointer' }} onClick={handleBack}>&lt;-- Back</span></div>
            <br />
            <div className='blog-detail'>
                {dataBlogDetail &&
                    <>
                        <div className='title'>
                            Blog ID: {id} --- {loading === true ? 'Loading  data...' : dataBlogDetail.title}
                        </div>
                        <div className='content'>{dataBlogDetail.body}</div>
                    </>
                }
            </div>
        </>
    )
}

export default DetailBlog