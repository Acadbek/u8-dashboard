import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const titleStyle = {
  fontWeight: '700',
  fontSize: '22px'
}

const linkStyle = {
  fontWeight: '600',
  fontSize: '16px',
  color: '#3F8CFF'
}

const cartStyle = {
  width: '100%',
  height: '452px',
  padding: '28px',
  backgroundColor: '#fff',
  borderRadius: '16px'
}

const NearestEvents = () => {
  return (
    <Box sx={cartStyle}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={titleStyle} variant='h5'>Nearest Events</Typography>
        <Link
          style={{
            color: '#3F8CFF',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}
          to='/events'>
          View all
          <KeyboardArrowRightIcon fontSize='small' />
        </Link>
      </Box>

      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Box>
  )
}

export default NearestEvents