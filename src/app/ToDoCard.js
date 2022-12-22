import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CustomFormDialog from '../components/CustomFormDialog'
import CustomMenu, { CustomMenuItem } from '../components/CustomMenu'
import { formActions } from '../reducers/ToDoFormSlice'
import { editTask, toDosActions } from '../reducers/ToDoSlice'
import '../styles/card.scss'
export const ToDoCard = React.memo(({ item, index }) => {
    const dispatch = useDispatch()
    const date = new Date(item?.date)
    const [open, setOpen] = useState(false)
    const [deleteTask, setDeleteTask] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [edit, setEdit] = useState(false)
    const handleDeleteTask = () => {
        // setOpen(true)
        dispatch(toDosActions.removeTask(index))
        setDeleteTask(false)
    }
    const handleEditTask = () => {
        dispatch(editTask(index))
        setEdit(false)
    }
    const handleSubmit = () => {
        if (edit) {
            handleEditTask()
        }
        else if (deleteTask) {
            handleDeleteTask()
        }
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
        setOpen(false)
    }

    return (
        <div className='body' key={index} >
            <div className='card-header'>
            <h1>{item.task}</h1>
            <CustomMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
                        <CustomMenuItem onClick={() => { dispatch(formActions.setEditForm(item)); setEdit(true); setOpen(true) }}>Edit</CustomMenuItem>
                        <CustomMenuItem onClick={() => { setDeleteTask(true); setOpen(true) }}>Delete</CustomMenuItem>
                    </CustomMenu>
            </div>
            <p>{item.assign_to}</p>
            <p className='label'>{date.toLocaleTimeString('en-US', {
                    hour12: true,
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                })}</p>
            <CustomFormDialog open={open} handleClose={handleCloseMenu} setDeleteTask={setDeleteTask} deleteTask={deleteTask} setEdit={setEdit} edit={edit} handleSubmit={handleSubmit} />

        </div>
    )
})
