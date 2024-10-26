import { Title3 } from "@fluentui/react-components";
import "./service-toggler.css"; // Asegúrate de crear este archivo CSS

type ServiceTogglerProps = {
  isActive: boolean;
  enableButton: boolean;
  text: string;
  onClick: () => void;
};

export default function ServiceToggler(props: ServiceTogglerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
        color: "white",
      }}
    >
      <Title3>{props.text}</Title3>
      <label className="custom-switch">
        <input
          type="checkbox"
          checked={props.isActive}
          onChange={props.onClick}
          disabled={!props.enableButton}
        />
        <span className="slider" />
      </label>
    </div>
  );
}