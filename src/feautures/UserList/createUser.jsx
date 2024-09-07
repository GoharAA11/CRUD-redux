import { useDispatch } from 'react-redux';
import { createUser } from '../../../api';
import styles from './userList.module.css'
import { useForm } from 'react-hook-form';
export const CreateUser = () => {
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()


    const handleAddUser = (user) => {
        dispatch(createUser(user))
            .then(() => {
                reset()
            })
    }
    return <>
        <div className={styles.createUserForm}>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit(handleAddUser)}>
                <input
                    type="number"
                    name="id"
                    placeholder="Please write your ID"
                    {...register("id", { required: true })}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Please write your name"
                    {...register("name", { required: true })}
                />
                <input
                    type="text"
                    name="surname"
                    placeholder="Please write your surname"
                    {...register("surname", { required: true })}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Please write your age"
                    {...register("age", { required: true })}
                />
                <input
                    type="number"
                    name="salary"
                    placeholder="Please write your salary"
                    {...register("salary", { required: true })}
                />
                <button>Create</button>
            </form>
        </div>
    </>
}