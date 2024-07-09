/* eslint-disable react/prop-types */

import { horaMes } from '../helpers/horaMes'

export const OutgoingMessage = ({ msg }) => {
    return (
        <div className="flex justify-end mb-4">
            <div className="bg-indigo-500 text-white rounded-lg px-3 py-2 max-w-xs">
                <p>{msg.mensaje}</p>
                <span className="text-gray-300 text-xs">{horaMes(msg.createdAt)}</span>
            </div>
        </div>
    )
}

export default OutgoingMessage;
