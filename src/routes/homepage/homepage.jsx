import { Outlet } from "react-router-dom";
import DirectoryMenu from "../../components/directory-menu/directory-menu";

const HomePage = () => {
  return (
    <div>
      <DirectoryMenu />
      <Outlet />
    </div>
  );
};

export default HomePage;
