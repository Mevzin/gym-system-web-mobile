// src/context/AuthContext.tsx
import {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode,
} from 'react';

type User = {
    id?: string;
    name?: string;
    email?: string;
    role?: [];
    fileId?: string;
    interval: number;
};

type AuthContextType = {
    user: User | null;
    token: string | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
    addUserFileId: (userData: User) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('@GymSystem:authUser');
        const storedToken = localStorage.getItem('@GymSystem:authToken');

        if (storedUser && storedToken) {
            try {
                setUser(JSON.parse(storedUser));
                setToken(storedToken);
            } catch {
                localStorage.removeItem('@GymSystem:authUser');
                localStorage.removeItem('@GymSystem:authToken');
            }
        }
    }, []);

    const login = (userData: User, token: string) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem('@GymSystem:authUser', JSON.stringify(userData));
        localStorage.setItem('@GymSystem:authToken', token);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('@GymSystem:authUser');
        localStorage.removeItem('@GymSystem:authToken');
    };

    const addUserFileId = (userData: User) => {
        setUser(userData)
        localStorage.removeItem('@GymSystem:authUser');
        localStorage.setItem('@GymSystem:authUser', JSON.stringify(userData));
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, addUserFileId }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext deve ser usado dentro de um AuthProvider');
    }
    return context;
};
