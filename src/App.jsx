import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AllPetsPage from "./pages/AllPetsPage/AllPetsPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ContactFormPage from "./pages/ContactFormPage/ContactFormPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SinglePetPage from "./pages/SinglePetPage/SinglePetPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";

import {
  getCategoriesLoder,
  getLimitedAnimalsLoader,
  getByTypeLoader,
  getSinglePetLoader,
} from "./services/requests";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SharedLayout />,
      errorElement: <NotFoundPage />,

      children: [
        {
          errorElement: <NotFoundPage />,
          children: [
            {
              index: true,
              Component: HomePage,
              loader: getCategoriesLoder,
            },
            {
              path: "/animals",

              // Component: UsersPage,

              children: [
                {
                  index: true,
                  element: <AllPetsPage />,
                  loader: getLimitedAnimalsLoader,
                },
                {
                  path: "/animals/:pet_type",
                  element: <CategoryPage />,
                  loader: getByTypeLoader,
                },
                {
                  path: "/animals/:pet_type/:pet_id",
                  element: <SinglePetPage />,
                  loader: getSinglePetLoader,
                },
              ],
            },
            { path: "/contact-form", element: <ContactFormPage /> },
          ],
        },

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
