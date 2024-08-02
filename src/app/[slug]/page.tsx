import { getCountryDetails } from "@/shared/api/countries";
import { Currencies } from "@/shared/api/countries/models";
import { getMapRelation } from "@/shared/api/map";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getCurrencyArray = (currencies: Currencies) => {
  const currencyKeys = Object.keys(currencies);

  const currencyArray = currencyKeys.map((key) => {
    return `${currencies[key].name} (${currencies[key].symbol})`;
  });

  return currencyArray;
};

const CountryDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const details = await getCountryDetails(params.slug);

  const relationData = await getMapRelation(
    details[0].maps.openStreetMaps.split("relation/")[1].split("#")[0],
  );

  const bounds = relationData.data.elements[0].bounds;

  return (
    <main className="flex items-center justify-center h-screen px-4 py-2">
      <div className="bg-zinc-300 max-w-[1280px] w-full px-4 py-2 rounded-lg flex flex-col gap-4">
        <div>
          <Link href={"/"}>
            <div className="p-1 hover:bg-zinc-50/[0.35] hover:ml-[-4px] transition-all w-fit rounded-full">
              <ArrowLeft size={28} />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">{details[0].name.common}</h1>
          <div>
            <Image
              src={details[0].flags.svg}
              alt={details[0].name.common}
              width={48}
              height={16}
            />
          </div>
        </div>
        <hr className="border-zinc-400" />
        <div className="flex gap-4 flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-1.5 text-gray-600">
            <div>
              <span className="flex items-center gap-3">
                <p>Currencies:</p>
                <p>{getCurrencyArray(details[0].currencies).toString()}</p>
              </span>
            </div>
            <div>
              <span className="flex items-center gap-3">
                <p>Continent:</p>
                <p>{details[0].continents}</p>
              </span>
            </div>
            <div>
              <span className="flex items-center gap-3">
                <p>Capital:</p>
                <p>{details[0].capital}</p>
              </span>
            </div>
            <div>
              <span className="flex items-center gap-3">
                <p>Population:</p>
                <p>{details[0].population}</p>
              </span>
            </div>
          </div>
          <div className="max-w-[500px] h-[300px] w-full">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${bounds.minlon},${bounds.minlat},${bounds.maxlon},${bounds.maxlat}&amp;layer=mapnik`}></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetailsPage;
