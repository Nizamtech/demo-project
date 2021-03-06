import { useEffect } from "react";
import Navbar from "../Components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  async function registerServiceWorker() {
    const publicVapidKey =
      "BLNSBQ2KPnD_FIA2BzeJH3EfViLV76CJbsgsaJcuLaIGotcLHf0iY2qY1duSxD0DOS-aRpU19IBmKJBloIEZ9io";
    const register = await navigator.serviceWorker.register("/worker.js", {
      scope: "/",
    });

    if (register.active) {
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
      });

      await fetch("/api/notification", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((rejected) => {
        console.log(rejected);
      });
    }
  }

  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
