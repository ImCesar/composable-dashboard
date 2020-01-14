import { useReducer } from 'react';
import inboxReducer, { MessageState } from './reducer';
import { Message } from '../../../models/message';

export const useMessages = (initialMessages?: Message[]) => {
  const initialState: MessageState = {
    messages: initialMessages || [] 
  } 

  const [state, dispatch] = useReducer(inboxReducer, initialState);

  const addMessage = (message: Message) => {
    dispatch({ type: "ADD_MESSAGE", message });
  };

  const removeMessage = (id: string) => {
    dispatch({ type: "REMOVE_MESSAGE", id});
  };

  return { messages: state.messages, addMessage, removeMessage }
}
