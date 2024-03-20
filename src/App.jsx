import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage, { loader as homeLoader } from "./pages/HomePage/HomePage";
import AllPetsPage from "./pages/AllPetsPage/AllPetsPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ContactFormPage from "./pages/ContactFormPage/ContactFormPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SinglePetPage from "./pages/SinglePetPage/SinglePetPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SharedLayout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, Component: HomePage, loader: homeLoader },
        {
          path: "/animals",
          // Component: UsersPage,

          children: [
            { index: true, element: <AllPetsPage /> },
            {
              path: "/animals/:pet_type",
              element: <CategoryPage />,
            },
            {
              path: "/animals/:pet_type/:pet_id",
              element: <SinglePetPage />,
            },
          ],
        },
        { path: "/contact-form", element: <ContactFormPage /> },
        // { path: "*", Component: NotFound },
      ],
    },
  ]
  // { basename: "/react-fetch-users/" }
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
