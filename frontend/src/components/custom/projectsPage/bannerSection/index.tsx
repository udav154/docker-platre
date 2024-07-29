export function BannerSection() {

  return (
    <section className="relative w-full h-screen flex justify-center items-center">
        <div className="relative w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/projectBanner.jpg")' }}>
          <div className="container relative top-[25%]  deskS:top-[20%]">
               <p className="absolute left text-8xl font-second text-white deskS:text-6xl" style={{textShadow: '6px 8px 5px rgba(0, 0, 0, 0.5);'}} >Проекты</p>
          </div>
          <div className="w-full h-full" style={{ background: 'linear-gradient(360deg, rgba(15,33,23,1), transparent 10%), linear-gradient(360deg, black, rgba(75,75,75,0) 50%)' }}></div>
        </div>
    </section>
  );
}