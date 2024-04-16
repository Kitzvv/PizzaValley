function About() {
  return (
    <article className="bg-zinc-800" id="about">
      <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 grid grid-cols-1 md:grid-cols-2 items-center mx-auto min-h-[40rem] gap-8 md:gap-20">
        <img
          src="/aboutImgs.png"
          alt="pizza img"
          className="h-72 md:h-96 mx-auto md:ml-0"
        />

        <div className="py-10 md:py-0">
          <p className="py-3 text-3xl md:text-4xl font-addition text-emerald-400">
            Poznaj nas od kuchni...
          </p>
          <p className="font-bold font-main text-gray-200 text-xl md:text-xl uppercase py-1">
            o naszej restauracji
          </p>
          <div className="h-1 w-20 bg-emerald-400 mb-2"></div>
          <p className="text-white text-xs sm:text-sm md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, officiis. A mollitia, consectetur quis laboriosam
            obcaecati sint minima temporibus quas similique, et magnam eligendi.
            Magni doloribus neque quas nobis voluptates? Mollitia sapiente
            reiciendis consequuntur omnis repellendus, eius laudantium nostrum
            obcaecati! Impedit fugiat quis quam, iste quia perspiciatis facere
            esse ullam rem iusto? Nostrum, quis repellendus vel delectus
            corrupti perferendis tempora? Magni quidem in mollitia distinctio
            nesciunt maxime maiores consequatur aliquam veritatis molestias
            nobis eaque vel similique quisquam illum consequuntur tempore
            laudantium tempora aliquid libero, earum, voluptates rem
            repudiandae! Maxime, expedita? Laborum aliquam praesentium earum
          </p>
        </div>
      </div>
    </article>
  );
}

export default About;
