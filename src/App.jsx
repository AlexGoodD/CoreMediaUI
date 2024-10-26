import {
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";
import AppHeader from "./components/app-header";
import ServicesModule from "./components/services_module/services-module";
import MouseModule from "./components/mouse_module/mouse-module";

function App() {
  return (
    <main
    >
      <FluentProvider
        theme={webLightTheme}
        //style={{ height: "100%", backgroundColor: "transparent" }}
      >
        <div
        className="background-color"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centra los componentes horizontalmente si es necesario
            gap: 16, // Espacio entre los elementos
          }}
        >
          <AppHeader />
          <ServicesModule />
        </div>
      </FluentProvider>
    </main>
  );
}

export default App;