import { useState } from "react";
import { toast } from "sonner";

const FormData = ({ setOptionalRender }) => {
  const [data, setData] = useState({ name: "", lastname: "" });
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let nameValidation = data.name.trim();
    let lastNameValidation = data.lastname.trim();

    if (nameValidation.length < 3 || nameValidation.startsWith(" ")) {
      setError(true);
      toast.error(
        "El nombre tiene que ser mayor a 3 caracteres. Porfavor, intentalo de nuevo."
      );
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    } else if (lastNameValidation.length < 6) {
      setError(true);
      toast.error(
        "El apellido tiene que ser mayor a 6 caracteres. Porfavor, intentalo de nuevo."
      );
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    setOptionalRender({
      name: nameValidation,
      lastname: lastNameValidation,
    });
    toast.success("Informacion enviada exitosamente.");

    setData({ name: "", lastname: "" });
  };

  return (
    <>
      <div className="w-80 h-auto shadow-xl rounded-lg mb-4  ">
        <h1 className="font-bold text-2xl text-center">Ingresa tus datos</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col p-4 justify-around items-center"
        >
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="border-2 border-black p-2"
            placeholder="Nombre"
          />
          <input
            type="text"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            className="border-2 border-black p-2"
            placeholder="Apellido"
          />
          <button
            type="submit"
            className="bg-indigo-700 rounded-lg text-white font-bold p-2 my-6 hover:scale-110"
          >
            Enviar
          </button>
        </form>
      </div>
      {error && (
        <p className="text-red-600 font-bold">
          Por favor chequea que la información sea correcta.
        </p>
      )}
    </>
  );
};

export default FormData;
