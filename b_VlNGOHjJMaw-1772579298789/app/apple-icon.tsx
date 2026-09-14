import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 11,
            width: 118,
          }}
        >
          <div style={{ height: 7, width: "78%", background: "rgba(17,24,39,0.15)", borderRadius: 8 }} />
          <div style={{ height: 7, width: "88%", background: "rgba(17,24,39,0.15)", borderRadius: 8 }} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: 10, width: "86%", background: "#C8922A", borderRadius: 8 }} />
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 99,
                background: "#C8922A",
                marginLeft: -6,
                boxShadow: "0 0 0 4px rgba(200,146,42,0.35)",
              }}
            />
          </div>
          <div style={{ height: 7, width: "70%", background: "rgba(17,24,39,0.15)", borderRadius: 8 }} />
          <div style={{ height: 7, width: "78%", background: "rgba(17,24,39,0.10)", borderRadius: 8 }} />
          <div style={{ height: 7, width: "58%", background: "rgba(17,24,39,0.08)", borderRadius: 8 }} />
        </div>
      </div>
    ),
    { ...size },
  )
}
