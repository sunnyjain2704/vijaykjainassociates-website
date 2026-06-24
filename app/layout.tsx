import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// export const metadata: Metadata = {
//   title:
//     " Vijay K Jain & Associates - Chartered Accountants & Business Advisors",
//   description:
//     "Premium chartered accountant firm delivering audit, taxation, compliance and financial advisory services. Indore-based with offices in Mumbai, Delhi, and Jaipur.",
//   keywords: [
//     "chartered accountant",
//     "CA",
//     "audit",
//     "taxation",
//     "GST",
//     "advisory",
//     "IND AS",
//     "business consulting",
//   ],
//   openGraph: {
//     title:
//       " Vijay K Jain & Associates - Chartered Accountants & Business Advisors",
//     description:
//       "Premium chartered accountant firm delivering audit, taxation, compliance and financial advisory services.",
//     type: "website",
//     images: "logo.png",
//     url: "https://VijayKJain&Associates.com", //--- REPLACE WITH ACTUAL URL ---
//   },
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// };

export const metadata: Metadata = {
  title: "Vijay K Jain & Associates | Chartered Accountants in Indore",
  description:
    "Vijay K Jain & Associates is a Chartered Accountant firm based in Indore with over 30 years of experience in audit, taxation, GST, compliance, and financial advisory services.",
  keywords: [
    "chartered accountant indore",
    "CA firm indore",
    "audit services",
    "GST consultant",
    "taxation services",
    "financial advisory",
    "IND AS",
    "internal audit",
    "compliance services",
  ],
  openGraph: {
    title: "Vijay K Jain & Associates | Chartered Accountants in Indore",
    description:
      "Chartered Accountant firm in Indore offering audit, taxation, GST, compliance, and advisory services with over 30 years of experience.",
    type: "website",
    images: ["/logo.png"],
    url: "https://VijayKJain&Associates.com", // ✅ replace with actual domain
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
