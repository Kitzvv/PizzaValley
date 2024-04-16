function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-900 min-h-[1rem]">
      <div className="flex justify-center space-x-8 items-center">
        <p className="font-main text-xs sm:text-xl text-zinc-400">
          Pizza Valley Project
        </p>
        <p className="font-main text-sm sm:text-xl text-zinc-400">
          Michał Nowakowski
        </p>
        <p className="font-main text-sm sm:text-xl text-zinc-400">
          &copy; {currYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
