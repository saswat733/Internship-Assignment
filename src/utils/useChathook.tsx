import { startTransition, useState } from "react"
import { useDispatch } from "react-redux"
import { receiveMessage, sendMessage, startLoading, stopLoading } from "../feature/ChatSlice";

export const useChat=()=>{
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleSend = () => {
        // Prevent empty submissions
        if (!text.trim()) return;
    
        // startTransition is used to prioritize rendering
        startTransition(() => {
          dispatch(sendMessage(text));
          dispatch(startLoading());
        });
    
        // Clear the input field
        setText('');
    
        // receiving a message after a 2-second delay
        setTimeout(() => {
          dispatch(receiveMessage());
          dispatch(stopLoading())
        }, 2000);
      };
    
      return { text, setText, handleSend };
    };