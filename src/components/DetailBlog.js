import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import * as qs from "query-string";

function DetailBlog() {
    const { id } = useParams() //lấy giá trị của biến id bên App.js
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/blog')
    }
    return (
        <>
            <div><span style={{ cursor: 'pointer' }} onClick={handleBack}>&lt;-- Back</span></div>
            <br />
            <div>DetailBlog with id = {id}</div>
        </>

    )
}

export default DetailBlog