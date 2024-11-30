import { Inter } from "next/font/google";
import "./globals.css";
import { LoginProvider } from '@/Context/LoginContext'; // Certifique-se de importar o LoginProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wise Share",
  description: "Compartilhando conhecimento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {/* Aqui você envolve o conteúdo da aplicação com LoginProvider */}
        <LoginProvider>
          {children}
        </LoginProvider>
      </body>
    </html>
  );
}
