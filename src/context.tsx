import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext<any>({} as any);

type ChildrenProps = {
  children: ReactNode;
};

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true'
  return storedDarkMode || prefersDarkMode;
};

export const AppContextProvider = ({ children }: ChildrenProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState<string>("cat");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    console.log(newDarkTheme)
    localStorage.setItem("darkTheme", newDarkTheme.toString());
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
