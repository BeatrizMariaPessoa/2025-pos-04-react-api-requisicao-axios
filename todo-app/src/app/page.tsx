"use client";
import type React from "react";
import Link from "next/link";

import { useEffect, useState } from "react";
import dados, { TarefaInterface } from "@/data";




const Home = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [tarefas, setTarefas] = useState<TarefaInterface[]>(dados)

  return (
    <div className="container mx-auto p-4">
      <Link href="/tarefas">
        <button className="mb-1 bg-gray-600 cursor-pointer text-white p-2 font-semibold rounded-lg">
          Tarefas
        </button>
      </Link>
    </div>
  );
};

export default Home;
