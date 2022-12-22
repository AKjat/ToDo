import {  Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formActions, formValidatorActions } from '../reducers/ToDoFormSlice'
import { editTask } from '../reducers/ToDoSlice'
import { saveUserForm, setUserForm } from '../reducers/usersSlice'
import CustomButton from './CustomButton'
import CustomDropdown from './CustomDropdown'
import CustomTextField from './CustomTextField'

const CustomFormDialog = ({ open, onClose, handleClose, handleSubmit, edit, deleteTask, setEdit, setDeleteTask }) => {
    const form = useSelector((state) => state.toDoForm)
    const validator = useSelector((state) => state.toDoFormValidator)
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleChange = (name, value) => {
        dispatch(formActions.setForm({ name: name, value: value }))
    }
    const [isValidated, setIsValidated] = React.useState(false)
    React.useEffect(() => {
        setIsValidated(Object.values(validator).every((v) => v === true));
    }, [validator]);

    const applyValidation = (name, value) => {
        dispatch(formValidatorActions.setValidator({ name: name, value: value }));
    };
    const close = () => {
        handleClose();
        if (deleteTask) {
            setDeleteTask(false)
        } if (editTask) {
            dispatch(formActions.clearForm())
            setEdit(false)
        }
    }
    const Submit = () => {
        if(!deleteTask&&!isValidated){
            
        }else{
            handleSubmit(); 
            handleClose();

        }
    }
    return (
        <Dialog fullWidth open={open} onClose={onClose}  >
            <DialogTitle>{edit ? "Edit Task" : deleteTask ? "Delete Task" : "New Task"}</DialogTitle>
            <DialogContent>
                <div className='margin-top'>
                    {(edit || !deleteTask) ? <>    <CustomTextField
                        multiline
                        rows={4}
                        fullWidth
                        placeholder='Enter task details'
                        label={'Task'}
                        autoFocus={true}
                        onChange={handleChange}
                        value={form?.task}
                        name='task'
                        required
                        applyValidation={applyValidation}
                        validation={validator?.task}
                    />
                        <CustomDropdown
                            label='Assign to'
                            value={form?.assign_to || ''}
                            data={users}
                            onChange={handleChange}
                            setForm={setUserForm}
                            saveForm={saveUserForm}
                            formName={'userForm'}
                            name='assign_to'
                        />
                    </> : "Do you want to delete this task?"}

                </div>
            </DialogContent>

            <DialogActions >
                <CustomButton onClick={close}>Cancel</CustomButton>
                <CustomButton variant={'contained'} onClick={Submit}>{edit ? "Edit" : deleteTask ? "Delete" : "Create"}</CustomButton>
            </DialogActions>
        </Dialog>
    )
}

export default CustomFormDialog