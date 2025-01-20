import { useReducer } from "react";
import "./App.css";
import { ItemsContext, ItemsReducer, initialItemsState } from "./components/context/itemsContext";
import AppRoutes from "./routes/routes";

function App() {
  const [state, dispatch] = useReducer(ItemsReducer, initialItemsState);

  return (
    <ItemsContext.Provider value={{ state, dispatch }}>
      <AppRoutes />
    </ItemsContext.Provider>
  );
}

export default App;
