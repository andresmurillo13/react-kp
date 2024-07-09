import { useContext } from 'react';
import { ChatSelect } from '../components/ChatSelect';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';
import { ChatContext } from '../context/chat/ChatContext';
import { ButtonSettings } from '../components/ButtonSettings';

export const ChatPage = () => {
    const { chatState } = useContext(ChatContext);

    return (
        <div className="flex h-[calc(100vh-4.5rem)] overflow-hidden">
            <div className="flex flex-col w-2/5 border-r border-gray-300">
                <InboxPeople />
            </div>

            <div className="flex flex-col w-3/5">
                {chatState.chatActivo ? <Messages /> : <ChatSelect />}
            </div>
            <ButtonSettings />
        </div>
    );
}

export default ChatPage;
