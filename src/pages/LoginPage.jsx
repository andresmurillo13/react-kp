import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';

export const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: 'test1@test.com',
        password: '123456',
        rememberme: false
    });

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            setForm((form) => ({
                ...form,
                email,
                rememberme: true,
            }));
        }
    }, []);

    const onChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const toggleCheck = () => {
        setForm({
            ...form,
            rememberme: !form.rememberme
        });
    }

    const onSubmit = async (ev) => {
        ev.preventDefault();

        form.rememberme
            ? localStorage.setItem('email', form.email)
            : localStorage.removeItem('email');

        const { email, password } = form;
        const ok = await login(email, password);

        if (!ok) {
            Swal.fire('Error', 'Verifique el usuario y contraseña', 'error');
        }
    }

    const todoOk = () => {
        return (form.email.length > 0 && form.password.length > 0) ? true : false;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={onSubmit}
            >
                <h2 className="text-center text-2xl font-bold mb-4">
                    Kuepa - Ingreso
                </h2>

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

                <div className="mb-6">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={onChange}
                    />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <input
                            className="mr-2 leading-tight"
                            id="rememberme"
                            type="checkbox"
                            name="rememberme"
                            checked={form.rememberme}
                            onChange={toggleCheck}
                        />
                        <label className="text-sm" htmlFor="rememberme">
                            Recordarme
                        </label>
                    </div>
                    <div>
                        <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Nueva cuenta?
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={!todoOk()}
                    >
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
