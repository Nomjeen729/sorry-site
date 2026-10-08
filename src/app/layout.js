import "./globals.css"

export const metadata = {
  title: "Хайрт минь, уучлаарай",
  description: "Чин сэтгэлийн захиа",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
