import React from "react";
import { Crown, Sparkles } from "lucide-react";

export default function Portada() {
  return (
    <section
      className="
        portadaXV
        relative
        h-screen
        min-h-[650px]
        w-full
        overflow-hidden
        bg-[#435D76]
      "
    >
      {/* =====================================================
          IMAGEN RESPONSIVE
          MOBILE: /Portada-mobile.png
          DESKTOP: /Portada-desktop.png
      ====================================================== */}
      <picture className="absolute inset-0 h-full w-full ">
        {/* COMPUTADORA / TABLET GRANDE */}
        <source
          media="(min-width: 768px)"
          srcSet="/Portada.png"
        />

        {/* CELULAR */}
        <img
          src="/portadacel.png"
          alt="Vanessa Jimenez Diaz"
          className="
            portadaXV__imagen
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </picture>

      {/* =====================================================
          CAPA SUAVE SOBRE TODA LA IMAGEN
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#17212B]/5
        "
      />

      {/* =====================================================
          DEGRADADO INFERIOR PARA EL TEXTO
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[64%]
          bg-gradient-to-t
          from-[#10171E]/90
          via-[#243342]/45
          to-transparent
        "
      />

      {/* =====================================================
          DEGRADADO LATERAL
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#17212B]/10
          via-transparent
          to-[#17212B]/10
        "
      />

      {/* =====================================================
          DESTELLOS
      ====================================================== */}
      <div
        className="
          absolute
          left-[7%]
          top-[10%]
          text-white/65
        "
      >
        <Sparkles
          size={24}
          strokeWidth={1.2}
        />
      </div>

      <div
        className="
          absolute
          right-[8%]
          top-[20%]
          text-[#E5E8EB]/60
        "
      >
        <Sparkles
          size={19}
          strokeWidth={1.2}
        />
      </div>

      {/* =====================================================
          CONTENIDO
      ====================================================== */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          items-center
          justify-end
          px-5
          pb-16
          text-center

          sm:px-6
          sm:pb-20

          md:pb-24
        "
      >
        {/* CORONA */}
        <div
          className="
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/35
            bg-[#17212B]/20
            text-[#E5E8EB]
            shadow-[0_6px_20px_rgba(0,0,0,0.18)]
            backdrop-blur-[3px]
          "
        >
          <Crown
            size={25}
            strokeWidth={1.2}
          />
        </div>

        {/* MIS XV AÑOS */}
        <p
          className="
            mb-4
            font-playfair
            text-[11px]
            uppercase
            tracking-[0.48em]
            text-[#F4F6F8]
            drop-shadow-[0_2px_5px_rgba(0,0,0,0.75)]

            sm:text-sm
          "
        >
          Mis XV Años
        </p>

        {/* =================================================
            NOMBRE
        ================================================== */}
        <div
          className="
            relative
            flex
            w-full
            max-w-[800px]
            items-center
            justify-center
          "
        >
          {/* SOMBRA DIFUMINADA DETRÁS */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[120%]
              w-[110%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#10171E]/30
              blur-[28px]
            "
          />

          <h1
            className="
              relative
              font-cursiveDancing
              text-[3.4rem]
              leading-[0.95]
              text-white
              drop-shadow-[0_4px_9px_rgba(0,0,0,0.95)]

              sm:text-7xl
              md:text-8xl
              lg:text-[7rem]
            "
          >
            Vanessa Jimenez Diaz
          </h1>
        </div>

        {/* =================================================
            SEPARADOR
        ================================================== */}
        <div
          className="
            my-6
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-14
              bg-gradient-to-r
              from-transparent
              to-[#E5E8EB]/80
            "
          />

          <Sparkles
            size={14}
            strokeWidth={1.2}
            className="text-[#E5E8EB]"
          />

          <span
            className="
              h-px
              w-14
              bg-gradient-to-l
              from-transparent
              to-[#E5E8EB]/80
            "
          />
        </div>

        {/* =================================================
            FECHA
        ================================================== */}
        <div
          className="
            rounded-full
            border
            border-white/40
            bg-white/90
            px-6
            py-3.5
            shadow-[0_12px_35px_rgba(0,0,0,0.25)]
            backdrop-blur-xl

            sm:px-8
            sm:py-4
          "
        >
          <p
            className="
              font-playfair
              text-sm
              uppercase
              tracking-[0.15em]
              text-[#435D76]

              sm:text-lg
              sm:tracking-[0.18em]
            "
          >
            12 · Septiembre · 2026
          </p>
        </div>

        {/* DETALLE FINAL */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            text-white/60
          "
        >
          <span className="h-px w-6 bg-white/30" />

          <span className="text-[8px]">
            ◆
          </span>

          <span className="h-px w-6 bg-white/30" />
        </div>
      </div>
    </section>
  );
}