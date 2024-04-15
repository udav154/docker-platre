import { IProject, ITarif } from "@/interfaces";
import { ProjectCard } from "../projectSection/projectCard";
import React from "react";
import { TarifCard } from "./tarifCard";

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export async function PricesSection() {
  const res = await fetch(`${API_URL}/api/tarifs?populate=preview`, {
    headers: {
      authorization: `bearer ${API_TOKEN}`,
    },
  });

  const { data } : { data: ITarif[] } = await res.json();
console.log('data', data[0].attributes.services[0]?.children?.[0])
  return (
    <section className="relative w-full min-h-screen grid grid-rows-1">
      <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/background2.png")' }}>
        <div className="relative container mx-auto w-full h-full py-100px flex flex-col gap-16">
          <h3 className="text-7xl font-second text-white">Услуги и цены</h3>
          <div className="flex gap-10 h-full">
            {
              data.map((el)=>(
                <TarifCard key={el.id} tarif={el}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}