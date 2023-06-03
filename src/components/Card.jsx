const Card = ({ name, lastname, setOptionalRender }) => {
  const handleClose = () => {
    setOptionalRender({
      name: "",
      lastname: "",
    });
  };
  return (
    <div className="relative p-4 text-center w-80 h-44 border-2 border-black rounded-lg flex flex-col items-center justify-center">
      <div
        onClick={handleClose}
        className="absolute  right-3  top-0 h-6 text-red-700 font-bold text-2xl cursor-pointer hover:scale-110"
      >
        x
      </div>
      <h1 className="font-bold text-2xl text-center">Bienvenido {name}</h1>
      <p>Tu apellido, {lastname} es elegante.</p>
    </div>
  );
};

export default Card;
