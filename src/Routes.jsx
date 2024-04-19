import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactUs from "./Components/Contact/ContactUs";
import BlogGrid from "./Components/Blog/BlogGrid";
import Blog1 from "./Components/Blog/Blog1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/contact",
  //   element: <ContactUs />,
  // },
  // {
  //   path: "/About",
  //   element: <ContactUs />,
  // },
  // {
  //   path: "/Blog",
  //   element: <BlogGrid/>,
  // },

  // {
  //   path: "/Blog1",
  //   element: <Blog1/>,
  // },
]);

export default router;
