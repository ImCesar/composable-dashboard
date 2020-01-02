import { useReducer } from 'react';
import reducer, { inboxState } from './reducer';
import { message } from '../../molecules/models/message';

const initialState: inboxState = {
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const addMessage = (message: message) => {
    dispatch({ type: "ADD_MESSAGE", message });
  };

  const removeMessage = (id: string) => {
    dispatch({ type: "REMOVE_MESSAGE", id});
  };

  return { messages: state.messages, addMessage, removeMessage }
}
