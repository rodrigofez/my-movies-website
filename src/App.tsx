import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../src/pages/LoginPage";
import HomePage from "./pages/HomePage";

import { Provider } from "react-redux";
import { store } from "./store/store";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./components/Layouts/Layout";
import DetailsPage from "./pages/DetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
