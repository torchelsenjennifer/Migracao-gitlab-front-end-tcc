"use client";
import Card from "@/componentes/card";
import Footer from "@/componentes/footer";
import MenuBar from "@/componentes/menubar";

const Listagem = () => {
  return (
    <main>
      <MenuBar showButtons={false} />
      <Card />
      <Footer />
    </main>
  );
};

export default Listagem;
