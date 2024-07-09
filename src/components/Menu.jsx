
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context/ContextProvider';
import { routesNext } from '../router/routes';



export const Menu = () => {
    const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
            setActiveMenu(false);
        }
    };


    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                            <div className="">
                                <img src="../public/kuepa.png" alt="drivstoff" className='w-28'/>
                                <p className="font-medium text-lg text-gray-600 text-cente dark:text-white">Plataforma de streaming</p>
                            </div>

                        </Link>

                        <button
                            type="button"
                            onClick={() => setActiveMenu(!activeMenu)}
                            style={{ color: currentColor }}
                            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                        >
                            <MdOutlineCancel />
                        </button>

                    </div>
                    <div className="mt-10 ">
                        {routesNext.map(({ path, icon: Icon, to, name, title }) => (
                            <div key={path}>
                                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                                    {title}
                                </p>
                                <NavLink
                                    to={to}
                                    key={path}
                                    onClick={handleCloseSideBar}
                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? currentColor : '',
                                    })}
                                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                >
                                    {<Icon />}
                                    <span className="capitalize ">{name}</span>
                                </NavLink>
                            </div>

                        ))}
                    </div>

                </>
            )}
        </div>
    );
};

export default Menu;
