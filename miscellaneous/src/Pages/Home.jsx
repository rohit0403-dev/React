import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]); // intially empty data
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  function fetchData() {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (isError) {
    return <h1>Error Found</h1>;
  }
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>User List </h1>
      {isLoading && <h1>Loading...</h1>}
      {data.map((item) => (
        <div>
          <img style={{ borderRadius: "100%" }} src={item.avatar} alt="image" />
          <h2>{item.first_name}</h2>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
