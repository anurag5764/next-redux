"use client"; // Required for client components
import "../app/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store"; // Import the Redux store

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
