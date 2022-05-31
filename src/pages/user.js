import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    console.log("hello", navigator.serviceWorker.register("/worker.js"));
  }, []);

  return (
    <div>
      {/* <header>
        <meta name="description" content="Aamar taka user Information page " />
        <meta name="keywords" content="User Data, User info" />
        <meta name="author" content="Nizam" />
      </header> */}
      <main className="user">
        <h1>This is User Page</h1>
      </main>
    </div>
  );
};

export default User;
