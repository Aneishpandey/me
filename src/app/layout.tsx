import Navbar from './components/navbar';
import FooterSection from './components/footerSection';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}