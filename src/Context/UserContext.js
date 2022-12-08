import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [detailsMovie, setDetailsMovie] = useState([]);
  const [dataSave, setDataSave] = useState(false);

  useEffect(() => {
    if (dataSave === true) {
      localStorage.setItem("movie-data", JSON.stringify(detailsMovie));
    }
  }, [detailsMovie, dataSave]);

  const InfoProvider = { detailsMovie, setDetailsMovie, setDataSave };
  return (
    <div>
      <AuthContext.Provider value={InfoProvider}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;
