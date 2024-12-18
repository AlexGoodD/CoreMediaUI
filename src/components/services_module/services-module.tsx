// ServicesModule.tsx
import { Card, Text } from "@fluentui/react-components";
import IpSelector from "./ip-selector";
import { useState } from "react";
import ServiceToggler from "./service-toggler";
import MouseModule from "../mouse_module/mouse-module";
import { invoke } from "@tauri-apps/api";
import ShutdownButton from "./Shutdown-Button";
import "./service-module.css";

export default function ServicesModule() {
  const [ipSelected, setIpSelected] = useState("");
  const [controllerActive, setControllerActive] = useState(false);
  const [controllerPID, setControllerPID] = useState(-1);
  const [pointerActive, setPointerActive] = useState(false);
  const [pointerPID, setPointerPID] = useState(-1);

  function getIp(value: string) {
    setIpSelected(value);
  }

  async function runServer() {
    const pid: number = await invoke("run_server", { ip: ipSelected });
    if (pid > -1) {
      setControllerActive(true);
      setControllerPID(pid);
    }
  }

  async function stopServer() {
    const isClosed: boolean = await invoke("close_server", {
      pid: controllerPID,
    });
    if (isClosed) {
      setControllerActive(false);
      setControllerPID(-1);
    }
  }

  async function runPointer() {
    const pid: number = await invoke("start_pointer", { ip: ipSelected });
    if (pid > -1) {
      setPointerPID(pid);
      setPointerActive(true);
    }
  }

  async function closePointer() {
    const isClosed = await invoke("close_pointer", { pid: pointerPID });
    if (isClosed) {
      setPointerPID(-1);
      setPointerActive(false);
    }
  }

  async function stopAllServices() {
    if (controllerActive) await stopServer();
    if (pointerActive) await closePointer();
  }

  return (
    <Card
      style={{
        minWidth: 480,
        marginLeft: 8,
        marginBottom: 16,
        backgroundColor: "transparent",
        boxShadow: "none",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <IpSelector onSelected={getIp} />
      <Text>
        Dirección URL:{" "}
        {ipSelected.length > 0 ? (
          <a
            href={`http://${ipSelected}:3001/`}
            target="_blank"
            style={{ color: "#4CAF50" }}
          >
            {`http://${ipSelected}:3001/`}
          </a>
        ) : (
          <span className="secondary-font-color">Sin dirección</span>
        )}
      </Text>
      <Text>
        IP Seleccionada:{" "}
        <span className="secondary-font-color">
          {ipSelected || "No seleccionada"}
        </span>
      </Text>
      <div style={{ marginTop: 24 }}>
        <ServiceToggler
          onClick={controllerActive ? stopServer : runServer}
          text="Servicio de controlador:"
          enableButton={ipSelected.length > 0}
          isActive={controllerActive}
        />
        <ServiceToggler
          onClick={pointerActive ? closePointer : runPointer}
          text="Servicio de púntero mágico:"
          enableButton={ipSelected.length > 0}
          isActive={pointerActive}
        />
      </div>
      <ShutdownButton onClick={stopAllServices} />
      
      {/* Pasamos pointerActive a MouseModule */}
      <MouseModule pointerActive={pointerActive} />
    </Card>
  );
}