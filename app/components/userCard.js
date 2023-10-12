"use client";

import { useEffect, useState } from "react";
import { FaEllipsisH, FaVolumeMute } from "react-icons/fa";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
export default function UserCard({ user, totalUsers }) {
  useEffect(() => {
    const client = new ApolloClient({
      uri: "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
      cache: new InMemoryCache(),
    });

    const GET_SUBGRAPH_DATA = gql`
      query {
        domains(
          first: 1
          where: { owner: "0xed972ea8ed13dee21f6ec697820b4961b4988881" }
        ) {
          name
        }
      }
    `;

    client
      .query({
        query: GET_SUBGRAPH_DATA,
      })
      .then((result) => {
        setData({ ...data, domain: result.data.domains[0] });
      });

    // client.query.selectQuery(query).then((results) => {
    //   console.log(results);
    // });
  }, []);

  const [data, setData] = useState({
    domain: "",
  });
  const colWidthClass =
    totalUsers === 1
      ? "w-full"
      : totalUsers < 4
      ? `w-1/${totalUsers}`
      : "w-1/4";

  return (
    <div className={`${colWidthClass} px-2 rounded-lg relative`}>
      <button className="absolute w-6 h-6 bg-gray-600 right-4 top-4 rounded-full">
        <FaEllipsisH className="mx-auto" />
      </button>
      <div className="border-2 rounded-lg p-2">
        <img className="my-2 w-32 h-32 rounded-full mx-auto" src={user.image} />
        <div className="flex items-center">
          <div className="rounded-lg border bg-gray-200 px-2 flex-1">
            {data.domain.name}
          </div>
          <div className="p-2">
            <FaVolumeMute />
          </div>
        </div>
      </div>
    </div>
  );
}
