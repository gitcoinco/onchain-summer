import hero from "@/assets/hero.svg";

export function Home() {
  return (
    <div className="flex flex-col items-center p-4 pt-24">
      <img src={hero} alt="Hero Image" className="h-[600px] w-[622px]" />
    </div>
  );
}
