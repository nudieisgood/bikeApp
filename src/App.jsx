import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import HomeLayout from "./pages/HomeLayout";
import Information from "./pages/Information";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Information /> },
      { path: "how-to-use", element: <Information /> },
      {
        path: "terms-fee",
        element: <Information />,
      },
      {
        path: "information",
        element: <Information />,
      },
      { path: "news", element: <Information /> },
      { path: "active", element: <Information /> },
    ],
  },
]);

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}
export default App;
