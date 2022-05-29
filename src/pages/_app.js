import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const publicVapidKey =
    "BNBEafQfNJIbFDkGO8NGrv2R-M8Gq36xkleSym3nqDXCPTbYnXQ2hnLpuQ5DV8Al-pe4j_mXd258KxAkTIk067k";

  async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register("./worker.js", {
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
  }
  registerServiceWorker();

  return <Component {...pageProps} />;
}

export default MyApp;
