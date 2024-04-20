import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactUs from "./Components/Contact/ContactUs";
import BlogGrid from "./Components/Blog/BlogGrid";
import Blog1 from "./Components/Blog/Blog1";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/About",
  //   element: <AboutUs />,
  // },
  // {
  //   path: "/Services",
  //   element: <Services />,
  // },
  // {
  //   path: "/ContactUs",
  //   element: <ContactUs />,
  // },
  // {
  //   path: "/Blog",
  //   element: <BlogGrid />,
  // },

  //////////Blogs Pages//////////////////

  {
    path: "/Blog1",
    element: <Blog1 />,
  },
]);

export default router;
