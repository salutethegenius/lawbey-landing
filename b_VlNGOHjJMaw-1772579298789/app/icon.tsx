import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F0EBE1",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            width: 44,
          }}
        >
          <div style={{ height: 3, width: "78%", background: "rgba(17,24,39,0.15)", borderRadius: 4 }} />
          <div style={{ height: 3, width: "88%", background: "rgba(17,24,39,0.15)", borderRadius: 4 }} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: 4, width: "86%", background: "#C8922A", borderRadius: 4 }} />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                background: "#C8922A",
                marginLeft: -3,
                boxShadow: "0 0 0 2px rgba(200,146,42,0.35)",
              }}
            />
          </div>
          <div style={{ height: 3, width: "70%", background: "rgba(17,24,39,0.15)", borderRadius: 4 }} />
          <div style={{ height: 3, width: "78%", background: "rgba(17,24,39,0.10)", borderRadius: 4 }} />
          <div style={{ height: 3, width: "58%", background: "rgba(17,24,39,0.08)", borderRadius: 4 }} />
        </div>
      </div>
    ),
    { ...size },
  )
}
