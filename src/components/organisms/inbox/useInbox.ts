import { useReducer } from 'react';
import inboxReducer, { InboxState } from './reducer';
import { Message } from '../../../models/message';

const initialState: InboxState = {
  messages: [
    {
      id: '0',
      text: "Hey how's it going?",
      sentFromUser: true,
      sentFrom: "Cesar Avitia",
      timeStamp: new Date()

    },
    {
      id: '2',
      text: "Good?",
      sentFromUser: false,
      sentFrom: "Dog",
      timeStamp: new Date()

    },
    {
      id: '9',
      text: "Want to watch a movie?",
      sentFromUser: true,
      sentFrom: "Cesar Avitia",
      timeStamp: new Date()

    },
  ]
} 

export const useInbox = () => {
  const [state, dispatch] = useReducer(inboxReducer, initialState);

  const addMessage = (message: Message) => {
    dispatch({ type: "ADD_MESSAGE", message });
  };

  const removeMessage = (id: string) => {
    dispatch({ type: "REMOVE_MESSAGE", id});
  };

  return { messages: state.messages, addMessage, removeMessage }
}
