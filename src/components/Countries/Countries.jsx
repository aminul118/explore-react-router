import { useLoaderData } from "react-router-dom";
import Counntry from "../Country/Counntry";

const Countries = () => {
  const allCountriesInfo = useLoaderData();
//   console.log(allCountriesInfo);

  return (
    <div>
      <h1 className="text-3xl text-center py-4 font-semibold">
        All Countries List is here:
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {allCountriesInfo.map((country,i) => (
          <Counntry key={i} country={country}></Counntry>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Countries;
