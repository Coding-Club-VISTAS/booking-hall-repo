import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@repo/ui/globals.css";
import { Login, Signup } from "@repo/ui/components/forms/forms";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
