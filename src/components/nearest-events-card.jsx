import BusinessIcon from '@mui/icons-material/Business';
import { Box, Typography } from '@mui/material';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '24px',
  borderRadius: '16px',
  backgroundColor: '#fff'
}

const titleStyle = {
  fontSize: '16px',
  fontWeight: 700
}

const timeStyle = {
  fontWeight: 400,
  fontSize: '14px',
  color: '#91929E',
  marginTop: '25px'
}

const NearestEventsCard = () => {
  return (
    <Box sx={cardStyle}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '4px', height: '81px', backgroundColor: '#3F8CFF', borderRadius: '4px' }}></Box>
        <Box sx={{ marginLeft: '18px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BusinessIcon color='info' />
            <Typography sx={titleStyle} variant='h6'>Presentation of the new department</Typography>
          </Box>
          <Typography sx={timeStyle} variant='h6'>Today | 6:00 PM</Typography>
        </Box>
      </Box>
      <Box>
        <div>
          <CallMergeIcon color='warning' />
        </div>
        <Box sx={{ backgroundColor: '#F4F9FD', display: 'flex', padding: '10px', borderRadius: '8px', alignItems: 'center', gap: '6px' }}>
          <AccessTimeIcon />
          <span>4h</span>
        </Box>
      </Box>
    </Box>
  )
}

export default NearestEventsCard