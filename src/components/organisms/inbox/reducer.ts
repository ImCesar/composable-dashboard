import { Message } from '../../../models/message';

export type InboxState = {
  messages: Message[]; 
}

type InboxAction = 
  | { type: "ADD_MESSAGE", message: Message }
  | { type: "REMOVE_MESSAGE", id: string };


export default (state: InboxState, action: InboxAction): InboxState => {
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
