"use client";

import Footer from "@/componentes/footer";
import Login from "@/componentes/login";
import MenuBar from "@/componentes/menubar";
import { useEffect, useState } from "react";

const Cadastrar = () => {
  return (
    <main>
      <MenuBar showButtons={false}/>
	  <Login/>
	  <Footer/>
    </main>
  );
};

export default Cadastrar;