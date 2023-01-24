import { BrowserRouter, Routes, Route } from "react-router-dom";


// Views
import Products from "../views/Products/Products";

export default function RoutesComponent() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Products />} />

            </Routes>
        </BrowserRouter>
    );
}
