import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux"
import Messages from "./Messages";

interface Message {
    id: string;
    text: string;
    sender: string;
    timestamp: string;
  }
  
interface RootState {
    chat: {
      messages: Message[];
    };
}
  
const ChatSection=()=>{
    const messages = useSelector((state: RootState) => state.chat.messages);
    const loading = useSelector((state:any)=>state.chat.loading);

    const chatRef=useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatRef.current?.scrollIntoView({behavior:'smooth'});
    }, [messages])

    if(messages.length===0){
        return(
            <>
            <Box
            sx={{
                height:'400px',
                overflow:'auto',
                padding:2,
                border:'3px solid lightgray',
                borderRadius:'12px',
            }}
        >
           
                Type a message to start the chat
            <div ref={chatRef}/>
        </Box>
            </>
        )
    }

    return (
        <Box
            sx={{
                height:'400px',
                overflow:'auto',
                padding:2,
                border:'3px solid lightgray',
                borderRadius:'12px',
            }}   
        >
           {
                messages.map((message: any) => (
                    <Messages key={message.id} message={message} />
                ))
            }
            {loading && (
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
                    {/* <CircularProgress /> */}
                    <span style={{ marginLeft: '8px' }}>Saswat is typing...</span>
                </Box>
            )}
            <div ref={chatRef}/>
        </Box>
    )
    
}

export default ChatSection;