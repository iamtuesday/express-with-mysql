import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import {
  getTokenFromLocalCookie,
  getUserFromLocalCookie,
  setToken,
} from "../lib/auth";

import { baseApi, fetcher } from "../lib/baseApi";

interface ControllerUserState {
  jwt: string;
  username: string;
  id: number;
}

interface ControllerState {
  jwt: string;
  setJwt: Dispatch<SetStateAction<string>>;
  user: {};
  setUser: Dispatch<SetStateAction<ControllerUserState>>;
  login: (email: string, password: string) => void;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  success: number | null;
  setSuccess: Dispatch<SetStateAction<number | null>>;
  // Logout: (user: ControllerUserState) => void;
}

const initialUserState: ControllerUserState = {
  jwt: "",
  username: "",
  id: 0,
};

const AuthContext = createContext<ControllerState>({
  jwt: "",
  setJwt: () => {},
  user: initialUserState,
  setUser: () => {},
  login: () => {},
  message: "",
  setMessage: () => {},
  success: null,
  setSuccess: () => {},
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [jwt, setJwt] = useState<string>("");
  const [user, setUser] = useState<ControllerUserState>(initialUserState);
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<number | null>(null);

  const login = async (identifier: string, password: string) => {
    try {
      const { data } = await baseApi.post("/auth/local", {
        identifier,
        password,
      });
      const { jwt, user } = data;
      setMessage(message);
      setSuccess(success);

      setTimeout(() => {
        setMessage("");
      }, 2000);

      if (jwt) {
        setToken(user.username, jwt, user.id);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    const tkn = getTokenFromLocalCookie();
    if (tkn) {
      setJwt(tkn);
    }
  }, [jwt]);

  useEffect(() => {
    const getUser = async() => {
      let currentUser = await getUserFromLocalCookie();
      if(currentUser){
        setUser(currentUser);
      }
    }
    getUser();
    
  }, [])
  

  return (
    <AuthContext.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
        login,
        message,
        setMessage,
        success,
        setSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
