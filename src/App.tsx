
import './App.css'
import { Box, Container, Typography } from '@mui/material'
import ChatSection from './component/ChatSection'
import MessageInput from './component/MessageInput'

function App() {

  return (
    <>
     <Container maxWidth="sm" sx={{ marginTop:4 }}>
        <Typography variant='h4' align='center' textTransform={'uppercase'} gutterBottom>
          Chat Application
        </Typography>
        <Box sx={{border:'1px solid #ddd',borderRadius:'8px',padding:2}}>
          <ChatSection/>
          <MessageInput/>
        </Box>
      </Container>
    </>
  )
}

export default App
