import { Select } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from './CustomButton'
import { CustomMenuItem } from './CustomMenu'
import CustomTextField from './CustomTextField'

const CustomDropdown = ({ label, value, onChange, data, name, setForm, saveForm, formName }) => {
  const form = useSelector((state)=> state?.[formName])
  const dispatch = useDispatch()
  const[addNew, setAddNew] = React.useState(false)
  const renderItem = (item) => (
    <CustomMenuItem value={item}>{item}</CustomMenuItem>
  )
  const handleChange=(name, value)=>{
    console.log(name, value,'ddddddddddd')
    dispatch(setForm(value))
  }
  return (
    <div className='margin-top' >
      {addNew?<>
        <CustomTextField
                        fullWidth
                        placeholder='Enter User name'
                        label={'Add new User'}
                        autoFocus={true}
                        onChange={handleChange}
                        value={form}
                        name='user'
                    />
                    <CustomButton onClick={()=>{dispatch(saveForm()); setAddNew(false)}}>Save</CustomButton>
      </>:<>
      <div className='input-label'>{label}</div>
      <div >
        <Select
          name={name}
          value={value}
          fullWidth
          onChange={(e) => onChange(e.target.name, e.target.value)}

        >
          {data.map(renderItem)}
          <CustomMenuItem value={null} onClick={()=>setAddNew(true)}>Add new user</CustomMenuItem>
        </Select>
      </div>
      </>}
    </div>
  )
}

export default CustomDropdown