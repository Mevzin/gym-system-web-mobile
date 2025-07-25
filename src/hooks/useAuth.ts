import { useAuthContext } from '../context/AuthContext';

const useAuth = () => {
    const { user, token, login, logout, addUserFileId } = useAuthContext();

    return {
        isLogged: !!user && !!token,
        user,
        token,
        login,
        logout,
        addUserFileId
    };
};

export default useAuth;