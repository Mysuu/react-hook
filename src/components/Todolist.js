import React, { useState } from 'react'
import Todo from './Todo'

function Todolist() {
    //////* useState dạng string
    //name là khởi tạo giá trị
    //useState là 1 hàm sẽ trả ra 1 array 2 phần tử [giá trị của biến, func xử lý khi biến có sự thay đổi]
    //setName khi đc sử dụng sẽ cập nhật biến name vì đc khai báo cùng 1 dòng và sử dụng useState,
    //nó sẽ cập nhật và re - render giao diện
    //destructuring giúp useState lấy phần tử thứ 1 và thứ 2
    // const [name, setName] = useState()
    const [changename, setChangename] = useState()
    //////* useState dạng array
    const [todo, setTodo] = useState([
        { id: '1', title: 'Lau nhà', type: 'việc nhà' },
        { id: '2', title: 'Rửa bát', type: 'việc nhà' },
        { id: '3', title: 'Đánh lol', type: 'vui chơi' }
    ])
    const handleClick = () => {
        // //bản chất của setName khi sử dụng hook useState, mỗi 1 lần gọi đến hàm thực thi của hook, 
        // //react sẽ thực thi re-render
        // setName(changename)
        // //khi gọi đến hàm setChangename, changename sẽ đc cập nhật giá trị, 
        // //khi ấn nút nó sẽ cập nhật giá trị đc nhập vào ở input

        if (!changename) {
            alert('không được đâu sói ạ')
            return//để nó thoát ra khỏi hàm này, bắt buộc phải có
        }
        const newTodo = { id: Math.floor(Math.random() * 1000), title: changename }
        setTodo([...todo, newTodo]) //sử dụng toán tử ...spread syntax array để coppy lại dữ liệu, sau đó newTodo thêm mới vào
        setChangename('') //clear dữ liệu ở ô input đi
    }

    const handleChange = (e) => {
        setChangename(e.target.value)// target.value lấy gtri thẻ input
        //gọi đến hàm này giúp cập nhật biến changename => bắt react re-render
    }
    //gọi func từ bố sang con
    const deleteItemTodo = (id) => {
        // phải gọi biến gián tiếp để truyền vì biến todo là const
        let deleteTodo = todo
        deleteTodo = deleteTodo.filter(item => item.id !== id)
        setTodo(deleteTodo)

    }
    return (
        <div>
            <input value={changename} onChange={(e) => handleChange(e)}></input>
            <br />
            <button onClick={() => handleClick()}>Bấm em đi</button>
            <br />
            <br />
            {/* { } của onClick sẽ tham chiếu đến func trùng tên(handleClick) ở trên */}
            <Todo
                // vế trái là tên của props muốn truyền(đặt là gì cũng đc), vế phải là giá trị phải nhét trong {}
                myProps={todo}
                depen='All todo'
                deleteItemTodo={deleteItemTodo}
            />
            <Todo
                myProps={todo.filter(item => item.type === 'việc nhà')}
                depen='Homework todo'
                deleteItemTodo={deleteItemTodo}
            />
            {/* <h1>Hello im {name}</h1> */}
        </div>
    )
}

export default Todolist