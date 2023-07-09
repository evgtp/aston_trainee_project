import { Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
const Header = lazy(() => import("./components/Header/Header"));
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route to="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
