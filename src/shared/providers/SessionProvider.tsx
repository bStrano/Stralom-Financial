import React, {createContext, useEffect, useMemo, useState} from 'react';
import StorageHelper from '../helpers/StorageHelper';

interface ISessionProviderProps {
  children: JSX.Element;
}

interface IUserSession {
  accessToken: string;
  id: string;
  name: string;
}

interface ISessionContext {
  user: IUserSession | null;
  hasSession: boolean;
  createSession: (props: IUserSession) => Promise<void>;
  restoreSession: () => Promise<void>;
  clearSession: () => void;
}

export const SessionContext = createContext<ISessionContext | null>(null);
function SessionProvider(props: ISessionProviderProps) {
  const [user, setUser] = useState<IUserSession | null>(null);

  const hasSession = useMemo(() => {
    return user != null;
  }, [user]);

  useEffect(() => {
    restoreSession().catch((err) => console.log(err));
  }, []);

  async function clearSession() {
    setUser(null);
  }

  async function createSession({accessToken, id, name}: IUserSession) {
    await StorageHelper.createSession(accessToken, String(id), name);
    setUser({accessToken, id, name});
  }

  async function restoreSession() {
    let {accessToken, id, name}: IUserSession = await StorageHelper.restoreSession();
    setUser({accessToken, id, name});
  }

  return <SessionContext.Provider value={{user, createSession, restoreSession, clearSession, hasSession}}>{props.children}</SessionContext.Provider>;
}

export default SessionProvider;
