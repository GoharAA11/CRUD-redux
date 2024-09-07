import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllUsers, deleteUser, updateUser } from "../../../api"
import styles from './userList.module.css'
import { Link } from "react-router-dom"
export const UserList = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    console.log(users)


    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return <>




        <div className={styles.table}>
            <h1>User List</h1>
            <table >
                <thead>
                    <tr>

                        <th>id</th>
                        <th>name</th>
                        <th>surname</th>
                        <th>age</th>
                        <th>salary</th>
                        <th>actions</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map(elm => <tr key={elm.id}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.age}</td>
                        <td>{elm.salary}</td>
                        <td>
                            <button onClick={() => dispatch(deleteUser(elm.id))}>delete</button>

                        </td>

                    </tr>)}
                </tbody>
            </table>
        </div>
    </>
}