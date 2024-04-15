import Image from "next/image";


export function BannerSection() {

  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/before-after.png")' }} />
    </section>
  );
}