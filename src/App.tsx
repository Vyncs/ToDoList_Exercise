import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { LoaderProvider } from "./contexts/Loader.context";
import { GetTasksProvider } from "./contexts/GetTasks.context";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <LoaderProvider>
      <GetTasksProvider>
        <Home/>
      </GetTasksProvider>
      </LoaderProvider>
    </ThemeProvider>
  );
}
