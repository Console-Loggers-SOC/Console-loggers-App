import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Donate from "./pages/Donate";
//loging pages
import LandingPage from "./pages/Login-pages/LandingPage";
import SignUp from "./pages/Login-pages/Signup";
import Login from "./pages/Login-pages/Login";
import ResetPassword from "./pages/Login-pages/ResetPassword";
import RequestPassword from "./pages/Login-pages/ReqestPassword";

import Styles from "./pages/Styles";
import Header from "./components/header/Header";
import Shopping from "./pages/Shopping";
import Food from "./pages/Food";
import Breakdown from "./pages/Breakdown";
import Navbar from "./components/Navbar";
import Additem from "./pages/AdditemPage";

// authorisation component
import AuthProvider from "./components/authorisation/AuthProvider";
import AuthRoute from "./components/authorisation/AuthRoute";

import RecipeDetail from "./pages/RecipeDetail";

import AddItemButton from "./components/AddItemButton.js";



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-container">
          <Header />
          <div className="content-container">
            <div className="scrollable-content">
              <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/Login" element={<Login />} />

                <Route path="/SignUp" element={<SignUp />} />

                <Route path="/ResetPassword" element={<ResetPassword />} />

                <Route path="/RequestPassword" element={<RequestPassword />} />
                <Route path="/Styles" element={<Styles />} />

                {/* Authorisation routes */}
                <Route element={<AuthRoute />}>
                  <Route path="/HomePage" element={<Home />} />
                  <Route path="/Food" element={<Food />} />
                  <Route path="/Breakdown" element={<Breakdown />} />
                  <Route path="/Recipes" element={<Recipes />} />
                  <Route
                    path="/Recipes/:recipeIdMeal"
                    element={<RecipeDetail />}
                  />
                  <Route path="/Shopping" element={<Shopping />} />
                  <Route path="/Donate" element={<Donate />} />

                  <Route path="/additem" element={<Additem />} />
                </Route>
              </Routes>
            </div>
            <AddItemButton />
          </div>
          <Navbar />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
