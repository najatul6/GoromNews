import { createBrowserRouter } from "react-router-dom"

const Router =createBrowserRouter([
    { path: "/", component: Home },
    { path: "/news", component: News },
    { path: "/about", component: About },
    { path: "*", component: NotFound },  // catch-all route for 404 or other unmatched routes
])

export default Router