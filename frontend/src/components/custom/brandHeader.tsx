import { BrandLogo } from "@/assets/icons";

export function BrandHeader() {

  return (
    <div className="container flex gap-8 items-center justify-center mx-auto text-gold">
     <div className="w-full h-1px border-t border-current"/>
     <div>
     <BrandLogo 
       style={{width: '165px', height: '165px'}}
       />
       </div>
      <div className="w-full h-1px border-t border-current"/>
    </div>
  );
}