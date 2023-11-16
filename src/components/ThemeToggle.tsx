import { useGlobalContext } from "../context";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsMoonFill /> : <BsSunFill />}
      </button>
    </section>
  );
};

export default ThemeToggle;
