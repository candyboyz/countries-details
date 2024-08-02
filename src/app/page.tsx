import { getAllCountry } from "@/shared/api/countries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const countries = await getAllCountry();

  return (
    <main className="px-6 py-4">
      <div className="flex flex-col justify-center items-center gap-4">
        {countries.map((country) => {
          return (
            <div
              key={country.name.common}
              className="max-w-[400px] w-full bg-zinc-300 rounded-lg flex flex-col px-4 py-2 gap-3">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl">{country.name.common}</h2>
                <div>
                  <Image
                    src={country.flags.svg}
                    alt={country.name.common}
                    width={32}
                    height={16}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex gap-2 text-gray-500 text-[12px]">
                  <p>Captial:</p>
                  <p>{country.capital}</p>
                </span>
                <Link
                  href={`/${country.name.common
                    .toLowerCase()
                    .replaceAll(" ", "_")}`}
                  className="px-4 py-1 text-sm outline-1 outline outline-black rounded-full hover:bg-black hover:text-white transition-all">
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
