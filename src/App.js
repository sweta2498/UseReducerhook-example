
import './App.css';
import { StoreContext, ThemeContext } from './Context';
import { useReducer, useState } from 'react';
import ComponentWithFunction from './ComponentWithFunction';
// import ComponentWithClass from './ComponentWithClass';
import { reducer } from './Reducer';

const themes = {
  red: { background: 'white', color: 'red' },
  light: { background: 'white', color: 'grey' },
  dark: { background: 'black', color: 'white' },
  black: { background: 'white', color: 'black' }
}

function App() {

  const [theme, setTheme] = useState(themes.black);
  const [state, dispatch] = useReducer(reducer, [<ComponentWithFunction />])
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <StoreContext.Provider value={{ state, dispatch }}>
          <div className="App">REACT <br />
            <button onClick={() => setTheme(themes.red)}>Red</button>
            <button onClick={() => setTheme(themes.dark)}>Dark</button>
            <button onClick={() => setTheme(themes.light)}>Light</button>
                
            <br /><br />Total State / Component : {state.length}<br /><br />
            <button onClick={() => dispatch({ type: 'ADD' })}>Add Component </button>
            <button onClick={() => dispatch({ type: 'REMOVE' })}>Remove Component </button>
            {
              state.map(c => c)
            }
          </div>
          {/* <ComponentWithFunction></ComponentWithFunction>
          <ComponentWithClass></ComponentWithClass> */}
        </StoreContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
