export default function DeskPage() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <iframe
        src="/v2.html"
        title="LawBey Research Desk"
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
      />
    </div>
  )
}
