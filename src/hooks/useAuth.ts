import { useAuthContext } from '../context/AuthContext';

const useAuth = () => {
    const { user, token, login, logout } = useAuthContext();

    return {
        isLogged: !!user && !!token,
        user,
        token,
        login,
        logout,
    };
};

export default useAuth;