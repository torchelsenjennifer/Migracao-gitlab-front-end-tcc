"use client";

import Footer from "@/componentes/footer";
import MenuBar from "@/componentes/menubar";
import BotoesPerfil from "@/componentes/botoesPerfil";

const Perfil = () => {
  return (
    <main>
      <MenuBar showButtons={false}/>
	  <BotoesPerfil/>
	  <Footer/>
    </main>
  );
};

export default Perfil;