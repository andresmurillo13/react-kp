/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {
    const { chatState } = useContext(ChatContext);
    const { auth } = useContext(AuthContext);

    return (
        <div className="flex flex-col h-full">
         
            <div id="mensajes" className="flex-1 overflow-y-auto p-4">
                {chatState.mensajes.map(msg => (
                    msg.para === auth.uid
                        ? <IncomingMessage key={msg._id} msg={msg} />
                        : <OutgoingMessage key={msg._id} msg={msg} />
                ))}
            </div>
          

            <SendMessage />
        </div>
    );
}

export default Messages;
