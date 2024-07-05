import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Master from "./layout/Master";
import Error from "./pages/Error";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Form from "./pages/form/Form";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Master />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "blogs",
                    element: <Blogs />,
                },
                {
                    path: "blogs/:id",
                    element: <Detail />,
                },
                {
                    path: "form",
                    element: <Form />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
