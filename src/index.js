import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import tablesReducer from "./slice.js";

// ストアの作成
const store = configureStore({
  // ストアにtablesのreducerをセット
  reducer: {
    tables: tablesReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // APPコンポーネント内で共有するためにプロバイダーでラッピング
  <React.StrictMode>
    {/* 提供するものを属性に書く */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);