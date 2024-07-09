import { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/SocketContext';

export const SendMessage = () => {
    const [mensaje, setMensaje] = useState('');

    const { socket } = useContext(SocketContext);
    const { auth } = useContext(AuthContext);
    const { chatState } = useContext(ChatContext);


    const onChange = ({ target }) => {
        setMensaje(target.value);
    }


    const onSubmit = (ev) => {
        ev.preventDefault();

        if (mensaje.length === 0) { return; }
        setMensaje('');

       
        socket.emit('mensaje-personal', {
            de: auth.uid,
            para: chatState.chatActivo,
            mensaje
        });

     
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-row items-center border-t border-gray-300 p-3">
                <input
                    type="text"
                    className="flex-grow p-2 border rounded-lg mr-2"
                    placeholder="Mensaje..."
                    value={mensaje}
                    onChange={onChange}
                />
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2" type="submit">
                    Enviar
                </button>
            </div>
        </form>
    );
}

export default SendMessage;
