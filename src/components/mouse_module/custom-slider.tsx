// CustomSlider.tsx
import React from "react";
import "./custom-slider.css"; // Importamos el CSS personalizado

type CustomSliderProps = {
  value: number;
  min: number;
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function CustomSlider({
  value,
  min,
  max,
  onChange,
  disabled = false,
}: CustomSliderProps) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`custom-slider ${disabled ? "custom-slider-disabled" : ""}`}
      style={{
        WebkitAppearance: "slider-vertical",
        width: "14px",
        height: "200px",
      }}
    />
  );
}