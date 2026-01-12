
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { HomePage } from "../pages/shop/HomePage";
import { ProductsPage } from "../pages/shop/ProductsPage";
import { ProductDetailPage } from "../pages/shop/ProductDetailPage";
import { AboutPage } from "../pages/shop/AboutPage";
import { ContactPage } from "../pages/shop/ContactPage";
import LoginPage from "../pages/auth/LoginPage";
import PrivateRoute from "./PrivateRoute";
import DashboardPage from "../pages/admin/DashboardPage";
import AdminProductsPage from "../pages/admin/AdminProductsPage";
import CartPage from "../pages/shop/CartPage";
import CheckoutPage from "../pages/shop/CheckoutPage";
import OrderConfirmationPage from "../pages/shop/OrderConfirmationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "order-confirmation",
        element: <OrderConfirmationPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "admin",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "products", // Route for admin products page
            element: <AdminProductsPage />,
          },
        ],
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
