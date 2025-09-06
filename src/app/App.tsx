import { MantineThemeProvider } from "../providers";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { AppRouter } from "../router/router";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MantineThemeProvider>
              <AppRouter />
            </MantineThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
