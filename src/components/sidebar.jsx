import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom'
import logo from '../assets/svgs/logo.svg'
import { links } from '../config/sidebar.jsx';
import supportImage from '../assets/images/support.png';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const LinkComponent = ({ title, icon, link }) => {
  const styles = {
    width: 172, pl: '8px', py: '10px', borderRadius: '10px',
    '&:hover': {
      background: '#EBF3FF'
    }
  }

  return (
    <Box sx={styles}>
      <Link style={{ color: '#3F8CFF', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }} to={link}>
        {icon}
        {title}
      </Link>
    </Box>
  )
}

const stylesSidebar = {
  paddingLeft: '16px',
  paddingRight: '12px',
  backgroundColor: '#fff',
  paddingTop: '20px',
  paddingBottom: '40px',
  borderRadius: '16px',
}

const stylesSupport = {
  marginTop: '100px',
}

const stylesLogout = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginTop: '50px',
  textTransform: 'capitalize',
  width: '100%',
  justifyContent: 'left',
  width: 172, pl: '8px', borderRadius: '10px',
  '&:hover': {
    background: '#EBF3FF'
  }
}

const Sidebar = () => {
  return (
    <Box width={200} height='100%' sx={stylesSidebar}>
      <Link to='/' style={{ padding: '', display: 'block' }}>
        <img src={logo} />
      </Link>
      <Stack sx={{ marginTop: '10px' }} direction="column" spacing={2}>
        {links.map((item) => (
          <LinkComponent
            key={item.id}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </Stack>

      <Box sx={stylesSupport}>
        <Link to='/support'>
          <img src={supportImage} />
        </Link>
        <Button sx={stylesLogout}> <LogoutOutlinedIcon /> Logout</Button>
      </Box>
    </Box>
  )
}

export default Sidebar