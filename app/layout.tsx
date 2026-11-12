import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ToastProvider } from "@/components/ToastContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://zuvansoftsol.com"),
  title: "Zuvan Software Services Pvt. Ltd. | Technology. Talent. Tomorrow.",
  description:
    "Zuvan Software Services Pvt. Ltd. - Your trusted partner for IT consulting, specialized staffing and executive recruitment in India. Building stronger teams, powering better businesses.",
  keywords: [
    "IT Consulting India",
    "IT Staffing",
    "Technical Recruitment",
    "Zuvan Softsol",
    "Zuvan Software Services",
    "Tech Talent Hyderabad",
    "Contract Staffing",
  ],
  icons: {
    icon: "/assets/images/logo-1.jpeg",
    shortcut: "/assets/images/logo-1.jpeg",
    apple: "/assets/images/logo-1.jpeg",
  },
  openGraph: {
    title: "Zuvan Software Services Pvt. Ltd. | Technology. Talent. Tomorrow.",
    description:
      "Empowering enterprises with client-focused IT Consulting, Specialized Staffing & Executive Recruitment across India.",
    url: "https://zuvansoftsol.com",
    siteName: "Zuvan Software Services",
    images: [
      {
        url: "/assets/images/logo-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Zuvan Software Services",
      },
    ],
    locale: "en_IN",
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
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">
        <ToastProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
