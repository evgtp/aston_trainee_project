# 1 уровень (необходимый минимум)

# React

- Проект написан с использованием функциональных в приоритете над классовыми

- Есть разделение на умные и глупые компоненты

- Есть рендеринг списков [Characters](./src/components/Characters.jsx), [FavoritesPage](./src/pages/FavoritesPage.jsx)

- Реализованы формы [SignInPage](./src/components/AuthModule/SignInPage.jsx), [SignUpPage](./src/components/AuthModule/SignUpPage.jsx)

- Есть кастомный хук [Hooks](./src/Hooks/use-auth.jsx)

- Поиск не триггерит много запросов к серверу [SearchBlock](./src/components/SearchBlock.jsx)

- Есть применение lazy + Suspense [App](./src/App.js)

# Redux

- Использован Redux Toolkit

- Использованы слайсы [paginationSlice](./src/store/slices/paginationSlice.js), [userSlice](./src/store/slices/userSlice.js)

# 2 уровень (необязательный)

- Использование Firebase для учетных записей пользователей [SignInPage](./src/components/AuthModule/SignInPage.jsx), [SignUpPage](./src/components/AuthModule/SignUpPage.jsx)

- Настроен CI/CD.
