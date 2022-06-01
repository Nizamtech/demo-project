import { useEffect, useState } from "react";
import Image from "next/image";
const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // console.log("hello", navigator.serviceWorker.register("/worker.js"));

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user);
  return (
    <div className="user">
      <main style={{ top: "10" }}>
        <h1>This is User Page</h1>
        <div className="cardMain">
          {user &&
            user.map((item) => {
              return (
                <>
                  <div className="card">
                    <h1>{item?.name}</h1>
                    <h1>{item?.email}</h1>
                  </div>
                  {/* <Image
                  src={item?.image}
                  alt="Images "
                  width="150px"
                  height="150px"
                ></Image> */}
                </>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default User;
