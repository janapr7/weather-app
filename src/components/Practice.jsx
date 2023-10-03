import React, { useState, useEffect } from "react";
import { api } from "../api/api";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  {
    provinces {
      data {
        id
        name
      }
    }
  }
`;

export default function Practice() {
  const { data, loading, error } = useQuery(query);

  if (loading) return "Loading...";
  if (error) return <pre>data:{error.message}</pre>
  const provinces = data.provinces.data



  return (
    <div>
      <h1>Weather App</h1>
      <ul>
        {provinces.map((item) => (
          <li hidden={item.id == "Indonesia"} key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}