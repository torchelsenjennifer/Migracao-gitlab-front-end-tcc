"use client";
import Filtro from "@/componentes/filtro";
import Footer from "@/componentes/footer";
import MenuBar from "@/componentes/menubar";

export default function Home() {
  return (
    <main>
      <MenuBar />
      <Filtro />
      <Footer />
    </main>
  );
}
