import { Avatar, Box, Typography } from "@mui/material";

interface MessageProps {
  message: {
    text: string;
    sender: string;
    timestamp: string;
  };
}


const Messages = ({ message }: MessageProps) => {
  console.log(message);

  const isUserMessage= message.sender==='User';

  return (
    <>
      <Box 
      sx={{
        marginBottom:1,
        display:'flex',
        justifyContent:isUserMessage?'flex-end':'flex-start',
        textAlign:"left",
        flexDirection:'column'
      }}
      >
        <Typography variant="caption" color="gray">
            {message.timestamp}
        </Typography>

       <Box sx={{display:'flex', gap:'5px',alignItems:'center'}}>
       <Avatar alt="Remy Sharp" src={isUserMessage?"https://mui.com/static/images/avatar/1.jpg":"https://mui.com/static/images/avatar/2.jpg"} sx={{ width: 24, height: 24 }} />
        <Typography variant="body1" sx={{
            border:'1px solid white',
            width:'fit-content',
            borderRadius:'5px',
            padding:'4px',
            bgcolor: isUserMessage ? 'white' : 'blue',
          color: isUserMessage ? 'black' : 'white',
        }}>
            {message.text}
        </Typography>
        </Box>

      </Box>
    </>
  );
};

export default Messages;
