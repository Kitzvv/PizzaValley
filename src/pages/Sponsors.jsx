function Sponsors() {
  return (
    <section className="bg-zinc-700 py-6 md:py-12  h-auto md:h-72 lg:h-72 flex flex-col items-center justify-start">
      <p className="uppercase text-sm sm:text-2xl md:text-3xl  font-addition text-emerald-300 p-3 ">
        zamów z najpopularniejszych aplikacji!
      </p>
      <p className="uppercase text-xs sm:text-xl md:text-2xl  font-main text-gray-200 mb-4">
        znajdziesz nas tutaj
      </p>
      <div className="h-1 w-12 md:w-20 bg-emerald-400 mb-4"></div>
      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center items-center gap-4 md:gap-8 lg:gap-10  mx-auto">
        <img
          className="h-6 sm:h-12 md:h-18 lg:h-20 hover:scale-110 transform transition-all"
          src="/glovo.svg"
          alt="Glovo"
        />
        <img
          className="h-6 sm:h-12 md:h-18 lg:h-20  hover:scale-110 transform transition-all sm:-mt-2"
          src="/pyszne.svg"
          alt="Pyszne"
        />
        <img
          className="h-6 sm:h-9 md:h-10 lg:h-16  hover:scale-110 transform transition-all"
          src="/uber.svg"
          alt="Uber Eats"
        />
      </div>
    </section>
  );
}

export default Sponsors;
