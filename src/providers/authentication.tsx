import { createContext, ReactNode, useContext } from "react";
import { User } from "~pages/api/user/me";

const userContext = createContext<User | null>(null);
export const useUser = () => useContext(userContext);

export type AuthenticationProviderProps = {
  user: User | null;
  children?: ReactNode;
};

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = (
  props
) => {
  const { user, children } = props;
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};
