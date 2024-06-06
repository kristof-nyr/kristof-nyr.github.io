import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../components/Home"));
const About = React.lazy(() => import("../components/About"));
const Blog = React.lazy(() => import("../components/Blog"));
const Contact = React.lazy(() => import("../components/Contact"));
const Work = React.lazy(() => import("../components/Work"));

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.ABOUT, element: <About /> },
  { path: PathConstants.BLOG, element: <Blog /> },
  { path: PathConstants.CONTACT, element: <Contact /> },
  { path: PathConstants.WORK, element: <Work /> },
];

export default routes;
