import NavBar from "../components/navbar/navbar";
import BottomBar from "../components/bottombar/bottombar";
import DropdownMenu from "../components/DropDown/Dropdownmenu.jsx";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <DropdownMenu />
      <main>{children}</main>
      <BottomBar />
    </>
  );
};

export default MainLayout;
