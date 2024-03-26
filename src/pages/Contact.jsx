import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { IconContext } from "react-icons";
import Map from "../ui/Map";

function Contact() {
  return (
    <section className="bg-zinc-700 min-h-[54rem]" id="contact">
      <div className="flex items-center justify-center flex-col mb-12">
        <p className="uppercase text-xl sm:text-3xl md:text-5xl  text-emerald-400 font-addition mt-10 mb-4">
          Skontaktuj sie z nami!
        </p>
        <p className="uppercase font-main text-xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-200 mb-4">
          kontakt
        </p>
        <div className="h-1 w-20 bg-emerald-400"></div>
      </div>
      <div className="flex flex-col  items-center justify-center md:mb-10 md:flex-row md:justify-evenly ">
        <div className="flex flex-col justify-center items-center md:-ml-12">
          <IconContext.Provider value={{ size: "5rem", color: "#d4d4d8" }}>
            <CiLocationOn />
          </IconContext.Provider>

          <p className="text-gray-200 uppercase font-main text-sm md:text-2xl mb-4 font-semibold">
            odbierz zamówienie
          </p>
          <div className="h-1 w-20 bg-emerald-400 mb-4"></div>
          <p className="text-gray-200 font-main text-sm sm:text-2xl mb-4">
            ul. Legitna 16, Łódź
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <IconContext.Provider value={{ size: "5rem", color: "#d4d4d8" }}>
            <CiMail />
          </IconContext.Provider>

          <p className="text-gray-200 uppercase font-main text-sm sm:text-xl md:text-2xl mb-4 font-semibold">
            napisz do nas
          </p>
          <div className="h-1 w-20 bg-emerald-400 mb-4"></div>
          <p className="text-gray-200 font-main text-sm sm:text-2xl mb-4">
            pizzavalley@gmail.com
          </p>
        </div>

        <div className="flex flex-col justify-center items-center md:mb-4 lg:mb-4">
          <IconContext.Provider value={{ size: "5rem", color: "#d4d4d8" }}>
            <CiPhone />
          </IconContext.Provider>

          <p className="text-gray-200 uppercase font-main text-sm sm:text-xl md:text-2xl mb-4 font-semibold">
            zadzwoń do nas
          </p>
          <div className="h-1 w-20 bg-emerald-400 mb-4"></div>
          <p className="text-gray-200 font-main text-sm sm:text-2xl mb-4">
            999-999-999
          </p>
        </div>
      </div>
      <div className="min-h-20 sm:min-h-[25rem] bg-zinc-600 text-center flex justify-center items-center ">
        <Map />
      </div>
    </section>
  );
}

export default Contact;
