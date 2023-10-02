import React, { useState, useEffect } from "react";
import { api } from "../api/api";

export default function Practice() {
  const [province, setProvince] = useState([]);

  useEffect(()=>{
    async function getProvince(){
      try{
        const response = await api.get('/location/province');
        const provinceData = response.data.data
        setProvince(provinceData)
      }catch(error){
        console.log(error.response.data.message)
      }
    };
    getProvince();
  }, [])

  return (
    <div>
      <h1>Weather App</h1>
      <ul>
        {province.map((data) => (
          <li key={data.area_id}>{data.domain}</li>
        ))}
      </ul>
    </div>
  );
}