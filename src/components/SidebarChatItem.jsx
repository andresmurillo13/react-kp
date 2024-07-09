/* eslint-disable react/prop-types */
import { useContext } from 'react';

import { ChatContext } from '../context/chat/ChatContext';
import { fetchConToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';

import { types } from '../types/types';

export const SidebarChatItem = ({ usuario }) => {

    const { chatState, dispatch } = useContext(ChatContext);
    const { chatActivo } = chatState;

    const onClick = async () => {

        dispatch({
            type: types.activarChat,
            payload: usuario.uid
        });

      
        const resp = await fetchConToken(`mensajes/${usuario.uid}`);
      
        dispatch({
            type: types.cargarMensajes,
            payload: resp.mensajes
        });

        scrollToBottom('mensajes');
    }

    return (
        <div
            className={`cursor-pointer border-b border-gray-300 py-4 px-4 ${(usuario.uid === chatActivo) ? 'bg-gray-200' : ''}`}
            onClick={onClick}
        >
            <div className="flex items-center">
                <div className="w-12 h-12">
                    <img className="rounded-full" src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="sunil" />
                </div>
                <div className="ml-4">
                    <h5 className="text-lg font-semibold"> {usuario.nombre} </h5>
                    {
                        (usuario.online)
                            ? <span className="text-green-500">Online</span>
                            : <span className="text-red-500">Offline</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default SidebarChatItem;
