import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  Clock3,
  GlassWater,
  Heart,
  Music2,
  PartyPopper,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

const Itinerario = () => {
  const eventos = [
    {
      hora: "15:00",
      titulo: "Misa",
      icono: Church,
    },
    {
      hora: "17:00",
      titulo: "Recepción",
      icono: PartyPopper,
    },
    {
      hora: "17:30",
      titulo: "Comida",
      icono: UtensilsCrossed,
    },
    {
      hora: "19:00",
      titulo: "Vals",
      icono: Heart,
    },
    {
      hora: "21:00",
      titulo: "Baile",
      icono: Music2,
    },
  ];

  return (
    <section
      className="
        itinerarioXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#F8FAFC]
        px-4
        py-20
        sm:px-6
        sm:py-24
        md:py-28
      "
    >
      {/* =====================================================
          FONDO
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-[#EEF2F5]
          via-white
          to-[#F7F9FB]
        "
      />

      {/* =====================================================
          ACUARELAS / LUCES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-28
          -top-28
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#A9B9C8]/25
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-28
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#5F7892]/12
          blur-[110px]
        "
      />

      {/* =====================================================
          DESTELLOS
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-20
          text-[#5F7892]/35
        "
        animate={{
          opacity: [0.2, 0.85, 0.2],
          scale: [0.8, 1.15, 0.8],
          rotate: [0, 18, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          size={27}
          strokeWidth={1.2}
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[7%]
          text-[#A9B9C8]/45
        "
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.75, 1.15, 0.75],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          size={34}
          strokeWidth={1.1}
        />
      </motion.div>

      {/* =====================================================
          CONTENIDO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* =================================================
            ENCABEZADO
        ================================================== */}

        <motion.div
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            md:mb-20
          "
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.85,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <p
            className="
              font-playfair
              text-[11px]
              uppercase
              tracking-[0.42em]
              text-[#5F7892]
              sm:text-xs
            "
          >
            Cada momento cuenta
          </p>

          <h2
            className="
              mt-3
              font-playfair
              text-3xl
              uppercase
              tracking-[0.12em]
              text-[#17191C]
              sm:text-4xl
              md:text-5xl
            "
          >
            Itinerario
          </h2>

          {/* SEPARADOR */}

          <div
            className="
              mx-auto
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
                to-[#5F7892]/45
              "
            />

            <Sparkles
              size={15}
              strokeWidth={1.3}
              className="text-[#5F7892]"
            />

            <span
              className="
                h-px
                w-14
                bg-gradient-to-l
                from-transparent
                to-[#5F7892]/45
              "
            />
          </div>

        </motion.div>

        {/* =================================================
            TIMELINE
        ================================================== */}

        <div
          className="
            relative
            mx-auto
            max-w-4xl
          "
        >
          {/* =================================================
              LÍNEA VERTICAL
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-[27px]
              top-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#A9B9C8]
              to-transparent

              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* =================================================
              EVENTOS
          ================================================== */}

          <div
            className="
              space-y-8
              md:space-y-10
            "
          >
            {eventos.map((evento, index) => {
              const Icono = evento.icono;
              const izquierda = index % 2 === 0;

              return (
                <motion.div
                  key={`${evento.hora}-${evento.titulo}`}
                  className="
                    relative
                    grid
                    grid-cols-[56px_1fr]
                    items-center
                    gap-4

                    md:grid-cols-[1fr_80px_1fr]
                    md:gap-7
                  "
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                >
                  {/* =================================================
                      TARJETA DESKTOP IZQUIERDA
                  ================================================== */}

                  <div
                    className={`
                      hidden
                      md:block
                      ${
                        izquierda
                          ? "md:col-start-1 md:row-start-1"
                          : "md:col-start-3 md:row-start-1"
                      }
                    `}
                  >
                    <motion.div
                      className={`
                        relative
                        overflow-hidden
                        rounded-[1.6rem]
                        border
                        border-[#C8CDD2]/85
                        bg-white/90
                        px-6
                        py-6
                        shadow-[0_12px_35px_rgba(67,93,118,0.09)]
                        backdrop-blur-xl

                        ${
                          izquierda
                            ? "text-right"
                            : "text-left"
                        }
                      `}
                      whileHover={{
                        y: -4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      {/* LUZ */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-10
                          -top-10
                          h-28
                          w-28
                          rounded-full
                          bg-[#A9B9C8]/18
                          blur-2xl
                        "
                      />

                      {/* HORA */}

                      <div
                        className={`
                          relative
                          flex
                          items-center
                          gap-2

                          ${
                            izquierda
                              ? "justify-end"
                              : "justify-start"
                          }
                        `}
                      >
                        <Clock3
                          size={15}
                          strokeWidth={1.4}
                          className="text-[#5F7892]"
                        />

                        <p
                          className="
                            font-playfair
                            text-xl
                            uppercase
                            tracking-[0.22em]
                            text-[#5F7892]
                          "
                        >
                          {evento.hora} hrs
                        </p>
                      </div>

                      {/* TÍTULO */}

                      <h3
                        className="
                          relative
                          mt-3
                          font-playfair
                          text-2xl
                          text-[#17191C]
                        "
                      >
                        {evento.titulo}
                      </h3>

                      {/* LÍNEA */}

                      <div
                        className={`
                          relative
                          my-4
                          h-px
                          w-12
                          bg-[#A9B9C8]/65

                          ${
                            izquierda
                              ? "ml-auto"
                              : "mr-auto"
                          }
                        `}
                      />

                
                    </motion.div>
                  </div>

                  {/* =================================================
                      ICONO CENTRAL
                  ================================================== */}

                  <motion.div
                    className="
                      relative
                      z-10
                      col-start-1
                      row-start-1
                      flex
                      h-[54px]
                      w-[54px]
                      items-center
                      justify-center
                      rounded-full
                      border-[5px]
                      border-[#F8FAFC]
                      bg-[#5F7892]
                      text-white
                      shadow-[0_8px_25px_rgba(67,93,118,0.28)]

                      md:col-start-2
                      md:h-16
                      md:w-16
                    "
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <Icono
                      size={21}
                      strokeWidth={1.45}
                      className="md:h-6 md:w-6"
                    />

                    {/* PULSO */}

                    <motion.span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-[#5F7892]/65
                      "
                      animate={{
                        scale: [1, 1.45],
                        opacity: [0.45, 0],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>

                  {/* =================================================
                      TARJETA MÓVIL
                  ================================================== */}

                  <motion.div
                    className="
                      relative
                      col-start-2
                      row-start-1
                      overflow-hidden
                      rounded-[1.4rem]
                      border
                      border-[#C8CDD2]/80
                      bg-white/90
                      px-5
                      py-5
                      shadow-[0_10px_30px_rgba(67,93,118,0.08)]
                      backdrop-blur-xl

                      md:hidden
                    "
                  >
                    {/* BRILLO */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-28
                        w-28
                        rounded-full
                        bg-[#A9B9C8]/18
                        blur-2xl
                      "
                    />

                    {/* HORA */}

                    <div
                      className="
                        relative
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <Clock3
                        size={14}
                        strokeWidth={1.4}
                        className="text-[#5F7892]"
                      />

                      <p
                        className="
                          font-playfair
                          text-[10px]
                          uppercase
                          tracking-[0.2em]
                          text-[#5F7892]
                        "
                      >
                        {evento.hora} hrs
                      </p>
                    </div>

                    {/* TÍTULO */}

                    <h3
                      className="
                        relative
                        mt-2
                        font-playfair
                        text-xl
                        text-[#17191C]
                      "
                    >
                      {evento.titulo}
                    </h3>

  
                  </motion.div>

                  {/* =================================================
                      ESPACIO VACÍO DESKTOP
                  ================================================== */}

                  <div
                    className={`
                      hidden
                      md:block
                      ${
                        izquierda
                          ? "md:col-start-3 md:row-start-1"
                          : "md:col-start-1 md:row-start-1"
                      }
                    `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            MENSAJE FINAL
        ================================================== */}

        <motion.div
          className="
            mx-auto
            mt-16
            max-w-2xl
            text-center
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <div
            className="
              mx-auto
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-transparent
                to-[#5F7892]/40
              "
            />

            <GlassWater
              size={18}
              strokeWidth={1.3}
              className="text-[#5F7892]"
            />

            <span
              className="
                h-px
                w-10
                bg-gradient-to-l
                from-transparent
                to-[#5F7892]/40
              "
            />
          </div>

          <p
            className="
              mt-5
              font-cursiveDancing
              text-3xl
              text-[#5F7892]
              sm:text-4xl
            "
          >
            ¡Disfrutemos juntos cada momento!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Itinerario;