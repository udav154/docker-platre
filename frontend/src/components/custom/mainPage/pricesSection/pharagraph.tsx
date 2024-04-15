'use client'
import clsx from "clsx";
import { ITarifParagraphList } from "@/interfaces";
import styles from './styles.module.scss'

interface ITarifPharagraphParams {
  pharagraph: ITarifParagraphList
}


export function TarifPharagraph({
  pharagraph,
}: ITarifPharagraphParams) {
  const { children } = pharagraph

  const par = children[0]
  if (!par?.children) {
    return (<li className="mb-3 relative before:"><p>{par.text}</p></li>)
  }

  return (
    <ul className={clsx("ml-8", styles.listSecond)}>
      {children.map((item, idx) => <TarifPharagraph key={idx} pharagraph={item as any} />)}
    </ul>
  );
}