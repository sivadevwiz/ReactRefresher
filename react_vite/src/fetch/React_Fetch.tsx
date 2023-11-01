import React, { useState, useEffect } from "react";

export default function ReactFetch() {
  const [users, setUsers] = useState("");

  // const funcFetch = async (url: any) => {
  //   console.log("second");
  //   const response = await fetch(url);
  //   if (response.status === 200) {
  //     const data = await response.json();
  //     console.log("users1.....", data);

  //     return data;
  //   } else {
  //     console.log("Error fetching users");
  //   }
  // };

  const funcFetch = (url: any) => {
    const res = fetch(url)
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      });

    return res;
  };

  const fetchItems = async () => {
    // const data = await funcFetch("https://jsonplaceholder.typicode.com/users");

    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("data ........", data);
    setUsers(data);

    // setUsers(users);
  };

  useEffect(() => {
    console.log("first");
    fetchItems();
  }, []);

  console.log("users........", users);

  return (
    <>
      <ul>
        <li>
          {/* users.map((user, key) => {
        users.name
     }); */}
        </li>
      </ul>
    </>
  );
}
