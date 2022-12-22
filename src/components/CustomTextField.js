import { TextField } from '@mui/material'
import React from 'react'

const CustomTextField = ({label, value, onChange, rows, defaultValue,multiline, fullWidth, placeholder, name, required, applyValidation, validation }) => {
    React.useEffect(() => {
        if (required) {
          if (value) {
            applyValidation(name, true);
          } else {
            applyValidation(name, false);
          }
        }
      }, [value, required, applyValidation, name]);

      let error = required?validation?null:true:null

      const renderCaption = () => {
        return (
          <div className='errorText' >
    
            {error? (
                  "* This field is required to proceed"
              )
             : null}
    
          </div>
        );
      };
  return (
    <>  
    {/* <InputLabel sx={{color:'red'}}>{label}</InputLabel> */}
    <div className='input-label'>{label}</div>
        <TextField
            // label={label}
            multiline={multiline}
            rows={rows}
            defaultValue={defaultValue}
            value={value}
            onChange={(e)=>onChange(e.target.name, e.target.value)}
            fullWidth={fullWidth}
            placeholder={placeholder}
            name={name}
            error={error}
        />
        {renderCaption()}
    </>
  )
}

export default CustomTextField