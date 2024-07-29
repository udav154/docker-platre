import React from "react";
import { TarifPharagraph } from "./pharagraph";
import { ITarif } from "@/interfaces";
import styles from './styles.module.scss'
import clsx from "clsx";

interface ITarifCardParams {
  tarif: ITarif
}

export function TarifCard({
  tarif
}: ITarifCardParams) {
  const list = tarif.attributes.services[0]
  // ITarif
  //// console.log('tarif', tarif)

  // ITarifAttrs
  //// console.log('tarif.attributes', tarif.attributes)

  // ITarifService
  //// console.log('tarif.attributes.services[0]', list)

  // ITarifParagraphList
  ////console.log('tarif.attributes.services[0].children', list.children)

  // ITarifParagraph
  //// console.log('tarif.attributes.services[0].children[0]', list.children[3])

  // ITarifParagraphItem
  ////  console.log('tarif.attributes.services[0].children[0].children[0]', list.children[0].children[0])

  
  return (
      <div className='w-full h-full min-h-20 border border-gold bg-black-opacity backdrop-blur-lg pt-12 pb-6 px-12 flex flex-col gap-16 deskS:gap-8 justify-between shadow-shadow1 desk:[&:last-child]:col-[1/3] deskS:[&:last-child]:col-[auto] deskS:shadow-none deskS:p-[15px]'>
        <div>
          <p className="text-4xl text-white font-second deskS:text-3xl">
            {tarif.attributes.name}
          </p>
          <div className="border border-gold w-full my-8 deskS:my-4"/>
          <ul className={clsx("text-xl text-white font-normal deskS:text-sm", styles.listFirt)}>
            {
              list.children.map((service, idx) => <TarifPharagraph key={idx} pharagraph={service}/>)
            }
          </ul>
        </div>
        <div>
          <button className="h-temp-2 deskS:h-[50px] w-fit border text-white border-gold py-4 deskS:py-3 px-20 deskS:px-14 text-nowrap">
            <p className="leading-none text-xl deskS:text-lg">Пример</p>
          </button>
          <div className="border border-gold w-full my-8"/>
          <p className="text-xl text-white font-second">
            от <span className="text-4xl">{tarif.attributes.price}</span> руб/м<sup>2</sup>
          </p>
        </div>
      </div>
  );
}