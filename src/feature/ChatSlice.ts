import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
}

interface ChatState {
  messages: Message[];
  currentUser: string;
  loading:boolean;
}

const initialState: ChatState = {
  messages: [],
  currentUser: "User",
  loading:false,
};

let receiverMessages = [
  "Hey, I am Saswat Singh. Would you like to hear a joke?",
  "Why don't programmers like nature? It has too many bugs!",
  "Do you want to hear another one?",
  "How do you comfort a JavaScript bug? You console it.",
  "I’ve got lots more jokes. Let me know if you want more!",
  "Thanks for chatting with me!",
];

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action: PayloadAction<string>) => {
      if (action.payload.trim() === "") return; // Prevent empty messages

      const message: Message = {
        id: uuidv4(), //it will have a unique id everytime
        text: action.payload,
        sender: state.currentUser,
        timestamp: new Date().toLocaleTimeString(),
      };
      state.messages.push(message);
    },
    receiveMessage: (state) => {
      const text = receiverMessages.shift() || "I am out of jokes for now!";
      
      const receiverMessage: Message = {
        id: uuidv4(),
        text,
        sender: "Bot",
        timestamp: new Date().toLocaleTimeString(),
      };
      state.messages.push(receiverMessage);

      if (receiverMessages.length === 0) {
        // Reset messages for reuse
        receiverMessages = [
          "Hey, I am Saswat Singh. Would you like to hear a joke?",
          "Why don't programmers like nature? It has too many bugs!",
          "Do you want to hear another one?",
          "How do you comfort a JavaScript bug? You console it.",
          "I’ve got lots more jokes. Let me know if you want more!",
          "Thanks for chatting with me!",
        ];
      }
    },
    startLoading:(state)=>{
        state.loading=true;
    },
    stopLoading:(state)=>{
        state.loading=false;
    }

  },
});

export const { sendMessage, receiveMessage,startLoading,stopLoading } = chatSlice.actions;
export default chatSlice.reducer;
