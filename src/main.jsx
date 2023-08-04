import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductMain from "./components/ProductMain.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}></Route>
        <Route path="/product/:productId" element={<ProductMain />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
