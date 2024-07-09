/* eslint-disable react/prop-types */

import { horaMes } from '../helpers/horaMes'

export const IncomingMessage = ({ msg }) => {

    return (
        <div className="flex items-start mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="ml-3 max-w-xs bg-gray-200 rounded-lg px-3 py-2">
                <p className="text-gray-700">{msg.mensaje}</p>
                <span className="text-gray-500 text-xs">{horaMes(msg.createdAt)}</span>
            </div>
        </div>
    )
}

export default IncomingMessage;
