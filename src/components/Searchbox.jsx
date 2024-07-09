import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const Searchbox = () => {
    const { auth, logout } = useContext(AuthContext);

    return (
        <div className="flex justify-between items-center p-3 border-b border-gray-300">
            <div className="flex items-center">
                <h4 className="text-xl text-indigo-600">{auth.name}</h4>
            </div>
            <div className="flex items-center">
                <button
                    className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700"
                    onClick={logout}
                >
                    Salir
                </button>
            </div>
        </div>
    )
}

export default Searchbox;
