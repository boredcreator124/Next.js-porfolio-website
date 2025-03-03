import "./globals.css";

  export const metadata = {
    title: "Jacob's porfolio ",
    description: "",
  };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       >
        {children}
      </body>
    </html>
  );
}


