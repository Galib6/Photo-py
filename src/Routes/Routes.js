import { createBrowserRouter } from "react-router-dom"
import AddAService from "../Components/AddAService/AddAService"
import ErrorPage from "../Components/ErrorPage"
import Login from "../Components/Login/Login"
import Myreview from "../Components/myReview/Myreview"
import Servicedetails from "../Components/ServiceDetails/Servicedetails"
import AllServicePage from "../Components/Services/AllServicePage/AllServicePage"
import Services from "../Components/Services/Services"
import SignUP from "../Components/SignUp/SignUP"
import Main from "../Layout/Main"
import PrivateRoute from "../PrivetRoutes/PrivetRoute"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:5000/threeServices"),
                element: <Services></Services>
            },
            {
                path: "/services",
                loader: () => fetch("http://localhost:5000/services"),
                element: <AllServicePage></AllServicePage>
            },
            {
                path: "/services/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Servicedetails></Servicedetails>
            },
            {
                path: "/myreview",
                element: <PrivateRoute><Myreview></Myreview></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUP></SignUP>
            },
            {
                path: "/addnewservice",
                element: <AddAService></AddAService>
            },

        ]
    }
])

export default router