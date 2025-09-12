import React from 'react'
import Sidebar from '../components/sidebar'
import { Box, Fade, Grid, Typography } from '@mui/material'
import StaffCard from '../components/home/staff-card'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import NearestEvents from '../components/home/nearest-events';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Home = () => {
  const [users, setUsers] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
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
    setIsLoading(true)
    try {
      const users = await axios('https://api.escuelajs.co/api/v1/users?limit=8&offset=1');
      setUsers(users.data)
      setIsLoading(false)
    } catch (error) {
      handleClick(SlideTransition)
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    getUsers()
  }, [])

  const staffCardsStyle = {
    position: 'relative',
    height: '402px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '16px'
  }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={3} spacing={4}>
        <Grid size={2}>
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
            <div>

              <Box sx={staffCardsStyle}>
                {isLoading &&
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}>
                    <Box>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="#004646"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#004646" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#004646" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#004646" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#004646" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#004646" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#004646" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="#004646" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>
                    </Box>
                  </div>
                }
                {users?.map((user) => (
                  <StaffCard avatar={user.avatar} name={user.name} role={user.role} email={user.email} />
                ))}
              </Box>
            </div>
          </Box>
        </Grid>
        <Grid size={1}>
          <NearestEvents />
        </Grid>
      </Grid>
    </Box>

  )
}

export default Home