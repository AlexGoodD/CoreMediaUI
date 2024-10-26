// ShutdownButton.tsx
//import React from "react";

type ShutdownButtonProps = {
  onClick: () => void;
};

export default function ShutdownButton({ onClick }: ShutdownButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: 15,
        padding: "10px",
        backgroundColor: "#EB3538", // Rojo de fondo
        color: "white", // Texto blanco
        fontWeight: "bold", // Texto en negrita
        border: "2px solid #EB3538", // Borde del mismo color del fondo
        borderRadius: "8px", // Bordes redondeados
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Sombra ligera
        fontSize: 13,
        width: 160,
      }}
    >
      Apagar servicios
    </button>
  );
}