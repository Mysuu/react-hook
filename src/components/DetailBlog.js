import React from 'react'
import { useParams } from 'react-router-dom'
// import * as qs from "query-string";

function DetailBlog() {
    const { id } = useParams()
    return (
        <div>DetailBlog with id = {id}</div>

    )
}

export default DetailBlog