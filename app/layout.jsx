import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Homma",
  description: "Asiakkaat julkaisevat hommia, yritykset ilmoittautuvat tekijöiksi."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body>
        <Header />
        <main className="container py-6">{children}</main>
      </body>
    </html>
  );
}
