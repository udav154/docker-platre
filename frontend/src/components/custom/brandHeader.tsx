import { BrandLogo } from "@/assets/icons";
import { LogoIcon } from "./header/logo";

export function BrandHeader({}) {

  return (
    <div className="flex w-full gap-8 items-center justify-center mx-auto text-gold">
     <div className="w-full h-1px border-t border-current"/>
     <div>
      <LogoIcon width={145} height={145} className='w-[145px] h-[145px] tabletS:w-[80px] tabletS:h-[80px]' />
      {/* <BrandLogo 
       style={{width: '165px', height: '165px'}}
       /> */}
       </div>
      <div className="w-full h-1px border-t border-current"/>
    </div>
  );
}