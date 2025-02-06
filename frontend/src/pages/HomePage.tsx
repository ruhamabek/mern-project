import landing from "../assets/landing.png";
import appDownloader from "../assets/appDownload.png";

function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-red-600">
          Dive Into The World Of Delivery.
        </h1>
        <span className="text-xl ">Get Food On A Single Click.</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center justify-center gap-4 text-center lg:py-40">
            <span className="font-bold text-3xl tracking-tighter text-red-600 lg:text-5xl">
              Order takeaway even faster!
            </span>
            <span className="text-xl ">
              Download the RuhaEats App for faster ordering and personalised
              recommendations
            </span>
            <img src={appDownloader} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
