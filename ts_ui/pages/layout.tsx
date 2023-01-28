import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Layout({ children }){
    return (
        <Container maxWidth="lg" disableGutters>
        <Box
          sx={{
            m: 0,
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
            {children}
        </Box>
      </Container>
    )
}