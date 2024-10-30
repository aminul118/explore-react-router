

const Counntry = ({country}) => {
    console.log(country);
    const { name, flags, region, continents } = country;
    // console.log(flag);
    return (
      <div className="bg-slate-700 rounded-lg p-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-semibold">Name: {name.common}</h1>
          <img className="h-40 w-full rounded-lg" src={flags.png} alt="" />
          <p>Region: {region}</p>
          <p>Containents: {continents}</p>
        </div>
      </div>
    );
};

export default Counntry;