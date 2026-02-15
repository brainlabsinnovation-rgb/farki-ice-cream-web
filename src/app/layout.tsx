import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farki Ice Cream | Best Lassi & Gujarati Sweets Since 1992 | Ahmedabad",
  description: "Visit Farki for authentic ice cream, 20+ lassi varieties & traditional Gujarati sweets. Established 1992. 5 locations across Ahmedabad. Order on Swiggy/Zomato! 4.3★ rated with 2,197+ reviews.",
  keywords: "farki, lassi ahmedabad, gujarati sweets, delhi darwaja, ice cream, matho, traditional desserts, since 1992, sitafal ice cream, rajwadi lassi, ahmedabad ice cream",
  openGraph: {
    title: "Farki - Taste Tradition Since 1992",
    description: "Ahmedabad's favorite ice cream & lassi for 32 years",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
