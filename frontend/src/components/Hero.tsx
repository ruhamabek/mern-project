import hero from "../assets/hero.png";

function Hero() {
  return (
    <div>
      <img src={hero} className="w-full object-cover max-h-[400px]" />
    </div>
  );
}

export default Hero;
