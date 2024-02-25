import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage, { admitLoader } from "./pages/HomePage";
import PatientPage, { patientLoader } from "./pages/PatientPage";
import ErrorPage from "./pages/ErrorPage";
import SupportPage, { doctorLoader } from "./pages/SupportPage";
import PrecautionPage from "./pages/PrecautionPage";
import LoginPage from "./pages/LoginPage";

// Example
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="patient">
        <Route index element={<PatientPage />} />
        <Route path=":id" element={<PatientPage />} loader={patientLoader} />
      </Route>
      <Route path="support" element={<SupportPage />} />
      <Route path="precaution" element={<PrecautionPage />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
