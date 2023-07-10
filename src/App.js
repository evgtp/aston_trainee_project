import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./components/Header/pages/HomePage"));
const FavoritesPage = lazy(() =>
  import("./components/Header/pages/FavoritesPage")
);
const HistoryPage = lazy(() => import("./components/Header/pages/HistoryPage"));
const SignInPage = lazy(() => import("./components/Header/pages/SignInPage"));
const SignUpPage = lazy(() => import("./components/Header/pages/SignUpPage"));
const NotFoundPage = lazy(() =>
  import("./components/Header/pages/NotFoundPage")
);

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
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
