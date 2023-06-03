import Form from "./components/FormData";
import Card from "./components/Card";
import { useState } from "react";
import { Toaster } from "sonner";

function App() {
  const [optionalRender, setOptionalRender] = useState({
    name: "",
    lastname: "",
  });
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center ">
      <Form setOptionalRender={setOptionalRender} />
      {optionalRender.name.length > 0 && optionalRender.lastname.length > 0 && (
        <Card
          setOptionalRender={setOptionalRender}
          name={optionalRender.name}
          lastname={optionalRender.lastname}
        />
      )}
      <Toaster richColors position="top-center" />
    </div>
  );
}

export default App;
