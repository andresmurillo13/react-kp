import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';

export const RegisterPage = () => {
    const { register } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: 'test6@test.com',
        password: '123456',
        name: 'Susana Paz',
        rol: 'ESTUDIANTE'
    });

    const onChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = async (ev) => {
        ev.preventDefault();

        const { email, password, name, rol } = form;
        const msg = await register(name, email, password, rol);

        if (msg !== true) {
            Swal.fire('Error', msg, 'error');
        }
    }

    const todoOk = () => {
        return (
            form.email.length > 0 &&
            form.password.length > 0 &&
            form.name.length > 0 &&
            form.rol.length > 0
        ) ? true : false;
    }
console.log(form)
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={onSubmit}
            >
                <h2 className="text-center text-2xl font-bold mb-4">
                    Chat - Registro
                </h2>

                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={form.name}
                        onChange={onChange}
                    />
                </div>

                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={onChange}
                    />
                </div>

                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={onChange}
                    />
                </div>

                <div className="mb-4">
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="rol"
                        value={form.rol}
                        onChange={onChange}
                    >
                        <option value="ESTUDIANTE">Estudiante</option>
                        <option value="MODERADOR">Moderador</option>
                    </select>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <Link to="/auth/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Ya tienes cuenta?
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={!todoOk()}
                    >
                        Crear cuenta
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;
