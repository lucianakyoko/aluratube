import React from "react";

export const ColorModeContext = React.createContext({
  mode: '',
  setMode: () => { alert("Você precisa me configurar primeiro!")},
  toggleMode: () => { alert("Você precisa me configurar primeiro!")}
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode);
  const toggleMode = () => {
    if(mode === 'dark') setMode("light");
    if(mode === 'light') setMode("dark");
  };
  return (
    // Entender pq ta sendo ignorado
    <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
      {props.children}
    </ColorModeContext.Provider>
  );
}