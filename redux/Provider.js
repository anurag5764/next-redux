"use client"; // Required for Next.js App Router

import { Provider } from "react-redux";
import store from "./store"; // Import the store

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
