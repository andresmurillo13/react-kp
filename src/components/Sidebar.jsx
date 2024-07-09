import { useContext } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

import { SidebarChatItem } from './SidebarChatItem';

export const Sidebar = () => {

    const { chatState } = useContext(ChatContext);
    const { auth } = useContext(AuthContext);

    const { uid } = auth;
    

    return (
        <div className="h-full overflow-y-auto bg-gray-100 border-r border-gray-300">

            {
                chatState.usuarios
                    .filter(user => user.uid !== uid)
                    .map((usuario) => (
                        <SidebarChatItem
                            key={usuario.uid}
                            usuario={usuario}
                        />
                    ))
            }

         
            <div className="h-40"></div>

        </div>

    )
}

export default Sidebar;
