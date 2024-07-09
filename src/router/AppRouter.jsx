import { Suspense, useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "../components/Loader";
import { routesPrev, routesNext } from "./routes";
import { AuthContext } from "../auth/AuthContext";
import { useStateContext } from '../context/ContextProvider';
import { Navbar, Menu, ThemeSettings } from "../components";

export const AppRouter = () => {
    const { auth, verificaToken } = useContext(AuthContext);
    const { activeMenu, themeSettings, currentMode } = useStateContext();

    useEffect(() => {
        verificaToken();
    }, [verificaToken]);

    if (auth.checking) {
        return <Loader />;
    }

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <Suspense fallback={<Loader />}>
                <BrowserRouter>
                    {auth.logged ? (
                        <div className="flex relative dark:bg-main-dark-bg">
                            {activeMenu ? (
                                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                                    <Menu />
                                </div>
                            ) : (
                                <div className="w-0 dark:bg-secondary-dark-bg">
                                    <Menu />
                                </div>
                            )}
                            <div className={activeMenu ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'}>
                                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                                    <Navbar />
                                </div>

                                <div>
                                    {themeSettings && <ThemeSettings />}
                                    <Routes>
                                        {routesNext.map(({ path, component: Component }) => (
                                            <Route key={path} path={path} element={<Component />} />
                                        ))}
                                        <Route path="/*" element={<Navigate to={routesNext[0].to} replace />} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Routes>
                            {routesPrev.map(({ path, component: Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))}
                            <Route path="/*" element={<Navigate to={routesPrev[0].to} replace />} />
                        </Routes>
                    )}
                </BrowserRouter>
            </Suspense>
        </div>
    );
};
