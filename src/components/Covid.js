/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './Covid.css'
import useFetch from '../custom/Fetch'
import moment from 'moment'

function Covid() {

    const today = new Date(new Date().setHours(0, 0, 0, 0))
    const priorDate = moment().subtract(31, 'days')


    const { data: dataCovid, error, loading }
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`)
    // useFetch('https://api.covid19api.com/country/vietnam?from=2022-02-25T00%3A00%3A00Z&to=2022-03-25T00%3A00%3A00Z')
    // ${} để chèn một biến, nối chuỗi nhanh
    // `` đường dẫn có thể chèn chuỗi vào với ${}

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
                    {/* nếu có biến dataCovid và dataCovid.length > 0 có nghĩa là có tồn tại mảng */}
                    {error === false && loading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                        return (
                            <tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        )
                    })}
                    {loading === true &&
                        <tr>
                            <td colSpan='5' style={{ textAlign: 'center' }}>
                                Loading...
                            </td>
                        </tr>
                    }
                    {error === true &&
                        <tr>
                            <td colSpan='5' style={{ textAlign: 'center' }}>
                                Error...
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Covid