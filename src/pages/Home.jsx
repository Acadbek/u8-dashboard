import React from 'react'
import Sidebar from '../components/sidebar'
import { Box, Fade, Grid, Typography } from '@mui/material'
import StaffCard from '../components/home/staff-card'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Home = () => {
  const [users, setUsers] = React.useState([])
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const getUsers = async () => {
    try {
      const users = await axios('https://api.escuelajs.co/api/v1/users?limit=8&offset=1');
      setUsers(users.data)
    } catch (error) {
      handleClick(SlideTransition)
    }
  }

  React.useEffect(() => {
    getUsers()
  }, [])

  const staffCardsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '16px'
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={7} spacing={10}>
        <Grid size={1}>
          <Sidebar />
        </Grid>
        <Grid size={4}>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            slots={{ transition: state.Transition }}
            message="I love snacks"
            key={state.Transition.name}
            autoHideDuration={1200}
          />
          <Box sx={{ padding: '16px', paddingTop: '28px', backgroundColor: '#fff', borderRadius: '16px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 600 }} variant='h6'>Workload</Typography>
              <Link
                style={{
                  color: '#3F8CFF',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}
                to='/'>
                View all
                <KeyboardArrowRightIcon fontSize='small' />
              </Link>
            </Box>
            <Box sx={staffCardsStyle}>
              {users?.map((user) => (
                <StaffCard avatar={user.avatar} name={user.name} role={user.role} email={user.email} />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid size={2}>
          <Box>Main</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home