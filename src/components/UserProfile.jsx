/* eslint-disable react-refresh/only-export-components */
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context/ContextProvider';
import avatar from '../data/userdefault.png';
import Button from './Button';
import { AuthContext } from '../auth/AuthContext';
import { useContext } from 'react';


export const UserProfile = () => {
  const { currentColor } = useStateContext();
  const { auth: user, logout: startLogout } = useContext(AuthContext);

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-auto">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Perfil</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-xl dark:text-gray-200">{user.name}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">{'ESTUDIANTE'}</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400 " >{user.email}</p>
        </div>
      </div>
     
      <div className="mt-5" onClick={startLogout}>
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;
