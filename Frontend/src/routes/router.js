import Welcome from "../pages/welcome_screen/welcome.jsx";
import HomePage from "../pages/home/Homepage.jsx";
import AboutPage from "../pages/about/aboutpage.jsx";
import ContactPage from "../pages/contact/contact_page.jsx";
import ServicesPage from "../pages/services/services_page.jsx";
import MainLayout from "../utils/Layout.js";
import LoginPage from "../pages/auth/login/login.jsx";
import RegisterPage from "../pages/auth/register/register.jsx";
import ProfilePage from "../pages/ProfilePage/ProfilePage.jsx";

const routes = [
  {
    path: "/",
    component: <Welcome />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/register",
    component: <RegisterPage />,
  },
  {
    path: "/profile",
    component: (
      <MainLayout>
        <ProfilePage />
      </MainLayout>
    ),
  },
  {
    path: "/home",
    component: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    component: (
      <MainLayout>
        <AboutPage />
      </MainLayout>
    ),
  },
  {
    path: "/services",
    component: (
      <MainLayout>
        <ServicesPage />
      </MainLayout>
    ),
  },
  {
    path: "/contact",
    component: (
      <MainLayout>
        <ContactPage />
      </MainLayout>
    ),
  },
];

export default routes;
