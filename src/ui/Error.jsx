function Error({ error }) {
  return (
    <p className="text-red-500 text-3xl font-main sm:text-4xl md:text-5xl">
      {error}
    </p>
  );
}

export default Error;
