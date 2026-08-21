export default function Dashboard() {
  const cards = [
    { titulo: "Abiertas", valor: 12, color: "#ef4444" },
    { titulo: "En Progreso", valor: 8, color: "#f59e0b" },
    { titulo: "Cerradas", valor: 24, color: "#22c55e" },
  ];

  return (
    <>
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "36px",
        }}
      >
        Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.titulo}
            style={{
              background: "white",
              width: "220px",
              padding: "25px",
              borderRadius: "12px",
              borderTop: `5px solid ${card.color}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{card.titulo}</h3>

            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {card.valor}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}