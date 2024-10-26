import { Card, Title1 } from "@fluentui/react-components";

export default function AppHeader() {
    return <Card
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "transparent",
            color: "white",
            boxShadow: "none",
        }}
        >
        <Title1>Panel de control de CoreMedia UI</Title1>
    </Card>
}