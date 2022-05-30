import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  async function registerServiceWorker() {
    const publicVapidKey =
      "BLNSBQ2KPnD_FIA2BzeJH3EfViLV76CJbsgsaJcuLaIGotcLHf0iY2qY1duSxD0DOS-aRpU19IBmKJBloIEZ9io";
    const register = await navigator.serviceWorker.register("/worker.js", {
      scope: "/",
    });

    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicVapidKey,
    });

    await fetch("http://localhost:3000/api/notification", {
      method: "POST",
      body: JSON.stringify(subscription),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("working");
  }

  useEffect(() => {
    registerServiceWorker();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
