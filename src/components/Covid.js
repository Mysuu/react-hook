/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import './Covid.css'
import axios from 'axios'
import moment from 'moment'

function Covid() {

    const [covid, setCovid] = useState()

    //lấy data về
    useEffect(async () => {
        let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2022-02-25T00%3A00%3A00Z&to=2022-03-25T00%3A00%3A00Z')
        let data = res && res.data ? res.data : []
        //đặt tên biến là data, và nếu nó có phản hồi về và phản hồi có biến data và có dữ liệu của cục res.data
        //thì sẽ lấy dữ liệu cục ấy còn nếu lỗi thì sẽ gán gtri bằng 1 mảng rỗng
        if (data && data.length > 0) {
            data.map(item => {
                item.Date = moment(item.Date).format('DD-MM-YYYY')
                return item
            })
        }
        setCovid(data) //sau khi có biến data gán ngược giá trị vào cái covid thông qua setCovid(ứng dụng useState)
    }, []) //để cho hàm này chỉ chạy 1 lần truyền vào 1 cái dependence []

    return (
        <div style={{ width: '90%' }}>
            <h3>Check Covid Việt Nam</h3>
            <table>
                <thead>
                    <tr>
                        <th>Ngày</th>
                        <th>Số ca</th>
                        <th>Chết</th>
                        <th>Khỏi bệnh</th>
                    </tr>
                </thead>
                <tbody>
                    {covid && covid.length > 0 && covid.map(item => {
                        return (
                            <tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Covid