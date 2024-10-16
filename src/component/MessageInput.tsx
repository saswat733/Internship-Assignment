import { Box, Button, TextField } from "@mui/material"
import { useChat } from "../utils/useChathook"
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {
    const {handleSend,setText,text}=useChat()

    return (
    <Box sx={{  maxWidth: '100%',display:'flex',flexDirection:'column', gap:'3px',margin:'4px',color:'white'}}>
        <TextField variant="outlined" sx={{border:'1px solid white',borderRadius:'5px'}} value={text} onInput={(e:any)=>setText(e.target.value)} fullWidth placeholder="Type your message.." id="fullWidth" inputProps={{style:{color:'white'}}} />
        <Button variant="contained" endIcon={<SendIcon/>} onClick={handleSend} color="primary" fullWidth>
            Send
        </Button>
    </Box>
    )
}

export default MessageInput