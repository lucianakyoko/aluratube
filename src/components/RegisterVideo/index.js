import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(props) {
  const [values, setValues] = useState(props.initialValues);
  console.log(values)

  return {
    values,
    handleChange: (e) => {
        const value = e.target.value;
        const name = e.target.name;
        console.log(value)
        setValues({
          ...values, 
          [name]: value
        })
      },
    clearForm() {
      setValues({});
    }
  };
}

export function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {titulo: "Frost punk", url: "https://youtube.com"}
  });
  const [formVisible, setFormVisible] = useState(false);

  return (
    <StyledRegisterVideo>
      <button 
        className="add-video"
        onClick={() => setFormVisible(true)}
      >+</button>

      {formVisible && 
        <form onSubmit={(e) => {
          e.preventDefault();
          setFormVisible(false);
          formCadastro.clearForm();
        }}>
          <div>
            <button 
              type="button"
              className="close-modal"
              onClick={() => setFormVisible(false)}
            >x</button>

            <input 
              placeholder="Título do video"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input 
              placeholder="Url"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />

            <button 
              type="submit"
              onClick={() => setFormVisible(false)}
            >Cadastrar</button>
          </div>
        </form>
      }
    </StyledRegisterVideo>
  );
}