import React from 'react'

function Mentor() {
  return (
    <div>
      <h1>Mentor</h1>
    </div>
  )
}

export default Mentor

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Home() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   function fetchData() {
//     setLoading(true);
//     axios
//       .get("https://reqres.in/api/users?page=2")
//       .then((res) => {
//         setData(res?.data?.data);
//         setLoading(false);
//       })
//       .catch((err) => console.log(err));
//   }
//   // fetch("https://reqres.in/api/users?page=2")
//   //   .then((res) => res.json())
//   //   .then((res) => {
//   //     console.log(res);
//   //     setData(res?.data);
//   //     setLoading(false);
//   //   })
//   //   .catch((err) => console.log(err));

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//           {data.map((item) => (
//             <div style={{ border: "1px solid black" }} key={item.id}>
//               <img src={item.avatar} alt="img" />
//               <h1>{item.first_name}</h1>
//               <p>{item.email}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;