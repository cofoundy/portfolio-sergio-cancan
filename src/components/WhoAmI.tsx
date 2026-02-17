"use client";

import { FC } from "react";
import Image from "next/image";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <Image
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.jpg"
        alt="Sergio Cancan"
        width={225}
        height={225}
        priority
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          ¿Quién soy?
        </h1>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Soy Sergio Cancan Estares, AI Engineer en Rimac Seguros y bachiller
          en Ingeniería Mecatrónica por UTEC. Combino inteligencia artificial
          con robótica blanda — desde agentes GenAI multi-cloud y pipelines
          de MLOps hasta músculos artificiales para rehabilitación infantil.
          Con 3 publicaciones académicas (IEEE, Frontiers, Springer) y
          certificaciones de Stanford, Duke y AWS, busco aplicar tecnología
          de vanguardia a problemas reales.
        </p>
      </div>
    </div>
  );
};

export default Who;
