import { ITarif } from "@/interfaces";
import React from "react";
import { TarifCard } from "./tarifCard";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_PUBLIC_API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function PricesSection() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/tarifs?populate=preview`, {
    headers: {
      authorization: `bearer ${NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  const { data } : { data: ITarif[] } = await res.json();
  return (
    <section className="relative w-full min-h-screen grid grid-rows-1">
      <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/background2.png")' }}>
        <div className="relative container mx-auto w-full h-full py-100px flex flex-col gap-16 deskS:py-[40px] deskS:px-mobile deskS:gap-10">
          <h3 className="text-7xl font-second text-white deskS:text-5xl deskS:text-center">Услуги и цены</h3>
          <div className="grid gap-10 h-full deskS:h-auto grid-cols-3 desk:grid-cols-2 deskS:grid-cols-1 ">
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
// grid-cols-3 desk:grid-cols-2 deskS:flex deskS:flex-col