import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Paper, MenuItem, MenuList, Popper, Grow, ClickAwayListener } from '@mui/material';
import { Person, Settings, ExitToApp } from '@mui/icons-material';

export function ProfileDropdown({ open, anchorEl, handleClose }) {
  const theme = useTheme();

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      placement="right-start"
      transition
      style={{ 
        zIndex: 1300,
        position: 'fixed',
        left: '240px',
        top: 'auto',
        bottom: '20px'
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: 'left bottom',
          }}
        >
          <Paper elevation={3}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                style={{
                  minWidth: '200px',
                  padding: theme.spacing(1),
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Person style={{ marginRight: theme.spacing(1) }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Settings style={{ marginRight: theme.spacing(1) }} />
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ExitToApp style={{ marginRight: theme.spacing(1) }} />
                  Logout
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
