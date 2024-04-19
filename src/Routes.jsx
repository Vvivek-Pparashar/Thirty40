import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactUs from "./Components/Contact/ContactUs";
import BlogGrid from "./Components/Blog/BlogGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  // {
  //   path: "/About",
  //   element: <ContactUs />,
  // },
  {
    path: "/Blog",
    element: <BlogGrid/>,
  },
]);

export default router;
