import { lazy } from "react";
import { FaVideo } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
const LoginPage = lazy(() => import(/* webpackChunkName: "LoginPage" */'../pages/LoginPage'));
const ChatPage = lazy(() => import(/* webpackChunkName: "ChatPage" */'../pages/ChatPage'));
const RegisterPage = lazy(() => import(/* webpackChunkName: "RegisterPage" */'../pages/RegisterPage'));
const StreamPage = lazy(() => import(/* webpackChunkName: "RegisterPage" */'../pages/StreamPage'));

export const routesPrev = [
    {
        path: '/login/*',
        to: '/login',
        component: LoginPage,
    },
    {
        path: '/register',
        to: '/register',
        component: RegisterPage,
    }
];

export const routesNext = [
    {
        path: '/chat/*',
        to: '/chat',
        component: ChatPage,
        name: 'Mensajes',
        icon: MdOutlineChat

    },
    {
        path: '/stream/*',
        to: '/stream',
        component: StreamPage,
        name: 'Streaming',
        icon: FaVideo

    }
];
