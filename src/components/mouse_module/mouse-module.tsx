// MouseModule.tsx
import { useState } from "react";
import CustomSlider from "./custom-slider"; // Importa el componente slider personalizado

type MouseModuleProps = {
  pointerActive: boolean; // Propiedad opcional que determina si el slider está habilitado o no
};

export default function MouseModule({ pointerActive }: MouseModuleProps) {
  const [sliderValue, setSliderValue] = useState<number>(0);

  // Función para manejar el cambio de valor del slider
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSliderValue(Number(event.target.value));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
        color: "white",
        backgroundColor: "transparent",
        boxShadow: "none",
        height: 450,
      }}
    >
      <h3 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
        Sensibilidad del puntero
      </h3>
      <div style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
        {sliderValue}
      </div>
      <CustomSlider
        value={sliderValue}
        min={0}
        max={100}
        onChange={handleChange}
        disabled={!pointerActive} // Deshabilita el slider si pointerActive es false
      />
    </div>
  );
}