import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./pages/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const SignInPage = lazy(() => import("./components/AuthModule/SignInPage"));
const SignUpPage = lazy(() => import("./components/AuthModule/SignUpPage"));
const DetailedCutaway = lazy(() => import("./pages/DetailedCutaway"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/detailed-cutaway" element={<DetailedCutaway />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
