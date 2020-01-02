import { message } from '../../molecules/models/message';

export type inboxState = {
  messages: message[]; 
}

type inboxAction = 
  | { type: "ADD_MESSAGE", message: message }
  | { type: "REMOVE_MESSAGE", id: string };


export default (state: inboxState, action: inboxAction): inboxState => {
  switch(action.type) {
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.message]};
    case "REMOVE_MESSAGE": {
      const filteredMessages = state.messages.filter(message => message.id !== action.id);
      return { ...state, messages: filteredMessages };
    }
    default: 
      return state;
  }
}
