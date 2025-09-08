import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={7} spacing={0}>
        <Grid size={1}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={2}>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainLayout