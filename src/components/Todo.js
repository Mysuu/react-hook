import React from 'react'

function Todo(props) {
    //#11 props = properties sinh ra để giải quyết vấn đề muốn truyền dữ liệu từ cha sang con
    // const todo = props.myProps
    const { myProps, depen, deleteItemTodo } = props

    const handleDelete = (id) => {
        deleteItemTodo(id)
    }

    return (
        <div className='todo-container'>
            {depen}
            {/* map k sửa đổi dữ liệu của biến nên dùng chứ k dùng for,...hay vòng lặp khác*/}
            {myProps.map(item => {
                return (
                    <div key={item.id}>
                        <li className='todo-child' >{item.title}
                            &nbsp; <span style={{ cursor: 'pointer' }} onClick={() => handleDelete(item.id)}>x</span></li>
                    </div>
                )
            })}
            <hr />
        </div>
    )
}

export default Todo