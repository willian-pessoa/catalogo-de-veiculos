import React from "react";
import { useEffect, useState } from "react";

import { Oval } from "react-loader-spinner";

import "./protect-route.styles.scss";

const ProtectRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let auth = localStorage.getItem("auth");

    if (auth === "true") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  if (isLoading) {
    return (
      <div className="protected">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  if (!isAuth) {
    return <div className="protected">Need Admin Permissions</div>;
  }

  return children;
};

export default ProtectRoute;
