import * as React from 'react';
import Menu from '@mui/material/Menu';
import { IconButton, MenuItem } from '@mui/material';

export default function CustomMenu({children, anchorEl, setAnchorEl}) {
//   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}>
            <img src={'/More.svg'} alt='more'/>
        </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {children}
        
      </Menu>
    </div>
  );
}


export const CustomMenuItem = ({children, onClick, value}) => {
  return (
    <MenuItem value={value} onClick={onClick}>{children}</MenuItem>
  )
}
