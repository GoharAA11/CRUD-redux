import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './feautures/UserList/userList'
import { CreateUser } from './feautures/UserList/createUser'
import styles from './feautures/UserList/userList.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.container}>
        <UserList />
        <CreateUser />
      </div>
    </>
  )
}

export default App
