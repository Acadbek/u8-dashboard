import { Avatar, Box, Chip, Typography } from "@mui/material"

const StaffCard = ({ name, email, role, avatar }) => {
  const staffCardStyles = {
    backgroundColor: '#F4F9FD',
    height: '180px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const nameStyle = {
    fontFamily: 'Nunito Sans',
    fontWeight: '700',
    fontSize: '16px',
    textAlign: 'center'
  }

  const jobStyle = {
    fontFamily: 'Nunito Sans',
    fontWeight: '400',
    fontSize: '14px',
    textAlign: 'center'
  }

  const avatarStyle = {
    width: 58,
    height: 58,
    border: 'solid 2px #3F8CFF',
    padding: '4px',
    objectFit: 'cover',
    borderRadius: '50%',
    '&>img': {
      objectFit: 'cover',
      borderRadius: '50%'
    }
  }

  return (
    <Box sx={staffCardStyles}>
      <Avatar sx={avatarStyle} src={avatar} alt={name} />
      <Typography sx={nameStyle} variant="h6">{name}</Typography>
      <Typography sx={jobStyle} variant="h6">{role}</Typography>
      <Chip label={email} variant="outlined" />
    </Box>
  )
}

export default StaffCard