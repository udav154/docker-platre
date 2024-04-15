import Image from "next/image";

export function AboutUsSection() {

  return (
    <section className="relative w-screen bg-white">
      <div className="relative container mx-auto flex gap-28 justify-center mx-auto w-full h-auto py-100px">
        <Image 
          alt='aboutUs'
          src={'/aboutUs.png'}
          width={430}
          height={286}
        />
        <div className="flex flex-col gap-7">
          <h3 className="text-7xl font-second">
          О нас
          </h3>
          <p className="font-first max-w-550px">
          PLATRE — это группа профессионалов, которые создают комплексный дизайн интерьера «под ключ» от разработки дизайн-проекта до сопровождения строительных работ и комплектации объекта.<br/><br/>

          Мы хотим, чтобы наш дизайн всегда соответствовал нашим высоким требованиям
          и желаниям заказчика, был уникальным и актуальным.
          </p>
        </div>
      </div>
    </section>
  );
}