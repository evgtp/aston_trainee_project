import cn from "classnames";
import useTheme from "../Hooks/useTheme";

const Layout = ({ children }) => {
  const { isDark } = useTheme();

  return <div className={cn("layout", { dark: isDark })}>{children}</div>;
};

export default Layout;
