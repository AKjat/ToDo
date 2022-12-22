import React, {  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../components/CustomButton'
import CustomFormDialog from '../components/CustomFormDialog'
import {  saveForm } from '../reducers/ToDoFormSlice'
import { ToDoCard } from './ToDoCard'
import '../styles/list.scss'
import CustomCard from '../components/CustomCard'
import CustomDivider from '../components/CustomDivider'
// import * as MoreIcon from '../../public/More.svg'

const ToDoList = () => {
const[open, setOpen] = React.useState(false)
const dispatch = useDispatch()
const toDos = useSelector((state)=> state.toDos)
console.log(toDos,"PPPP")
const renderItem =  (item, index) =>(
    <>
    <ToDoCard item={item} index={index} key={index}/>
    <CustomDivider/>
    </>
)
    

  return (
    <div className='container'>
        <div className='header'>
            <div>
                <h2>Task list</h2>
            </div>
            <div>
            <CustomButton variant='outlined' onClick={()=>setOpen(true)} >New Task</CustomButton>
            </div>
        </div>
        <CustomCard elevation={20}>
            <div className='card'>
            {toDos?.length>0?
                toDos?.map(renderItem):
                // <Box flex={1} padding={10} justifyContent='center' textAlign={'center'} sx={{color:'gray', fontSize:20, fontWeight:'bold'}}>No task added</Box>
                <div className='empty-message'>No task added</div>
            }
            </div>
        </CustomCard>
        <CustomFormDialog open={open} handleClose={()=>setOpen(false)} handleSubmit={()=>dispatch(saveForm())}/>
        {/* <FormDialog open={open} handleClose={()=>setOpen(false)} handleSubmit={()=>dispatch(saveForm())}/> */}
       
    </div>
  )
}

export default ToDoList

// const styles = makeStyles()