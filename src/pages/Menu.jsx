import { pizzaData } from "../data/pizzaData";
import { MenuEl } from "../data/MenuEl";

function Menu() {
  const pizzas = pizzaData;

  return (
    <section className="bg-zinc-800 min-h-[50rem]" id="menu">
      <div className="flex flex-col items-center justify-start">
        <p className="uppercase text-xl sm:text-3xl md:text-4xl text-emerald-400 font-addition mt-10 mb-2">
          poznaj nasze dania!
        </p>
        <p className="uppercase text-xl sm:text-3xl md:text-4xl text-gray-200 font-main mb-4">
          menu
        </p>
        <div className="h-1 w-20 bg-emerald-400 "></div>
      </div>
      <div className="flex justify-center items-center gap-4 px-4 md:px-12 lg:px-16 ">
        <ul className="py-10 md:py-18 ">
          <div className="grid auto-rows-fr md:grid-cols-2 md:gap-28 ">
            {pizzas.map((pizza) => (
              <MenuEl pizzaObj={pizza} key={pizza.id}></MenuEl>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Menu;
