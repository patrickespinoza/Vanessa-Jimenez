import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  UsersRound,
  Crown,
} from "lucide-react";

export default function PadresMadrinas() {
  const padres = [
    {
      titulo: "Papá",
      nombre: "Hevert Jimenez Merino",
    },
    {
      titulo: "Mamá",
      nombre: "Liliana Diaz Aguilar",
    },
  ];

  const madrinas = [
    {
      titulo: "Madrina",
      nombre: "Abril Lima Jimenez",
    },
    {
      titulo: "Madrina",
      nombre: "Wendy Lima Jimenez",
    },
  ];

  return (
    <section
      className="
        padresXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#EEF2F5]
        via-white
        to-[#F8FAFC]
        px-5
        py-20
        sm:px-8
        sm:py-28
      "
    >
      {/* =====================================================
          LUCES DECORATIVAS
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
          bg-[#A9B9C8]/30
          blur-[105px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-24
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#5F7892]/15
          blur-[115px]
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
          size={29}
          strokeWidth={1.2}
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-24
          right-[8%]
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
          size={36}
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
            max-w-3xl
            text-center
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
            Con todo mi amor
          </p>

          <h2
            className="
              mt-3
              font-cursiveDancing
              text-5xl
              leading-none
              text-[#5F7892]
              sm:text-6xl
              md:text-7xl
            "
          >
            Padres y Madrinas
          </h2>

          {/* SEPARADOR */}

          <div
            className="
              mx-auto
              my-7
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-16
                bg-gradient-to-r
                from-transparent
                to-[#5F7892]/40
              "
            />

            <Heart
              size={16}
              strokeWidth={1.3}
              className="text-[#5F7892]"
            />

            <span
              className="
                h-px
                w-16
                bg-gradient-to-l
                from-transparent
                to-[#5F7892]/40
              "
            />
          </div>

          <p
            className="
              mx-auto
              max-w-2xl
              font-playfair
              text-base
              leading-8
              text-[#17191C]/65
              sm:text-lg
            "
          >
            Gracias por acompañarme, guiarme y formar parte
            de uno de los momentos más importantes de mi vida.
          </p>
        </motion.div>

        {/* =================================================
            PADRES
        ================================================== */}

        <motion.div
          className="
            mx-auto
            mt-12
            max-w-4xl
          "
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {/* TÍTULO PADRES */}

          <div
            className="
              mb-6
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#A9B9C8]/60
                bg-white/90
                text-[#5F7892]
                shadow-[0_10px_30px_rgba(67,93,118,0.12)]
              "
            >
              <UsersRound
                size={25}
                strokeWidth={1.35}
              />
            </div>

            <h3
              className="
                mt-4
                font-playfair
                text-2xl
                uppercase
                tracking-[0.15em]
                text-[#17191C]
                sm:text-3xl
              "
            >
              Mis Padres
            </h3>
          </div>

          {/* TARJETAS PADRES */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
            "
          >
            {padres.map((persona, index) => (
              <motion.div
                key={`${persona.titulo}-${index}`}
                className="
                  relative
                  overflow-hidden
                  rounded-[1.7rem]
                  border
                  border-[#C8CDD2]/80
                  bg-white/90
                  px-6
                  py-8
                  text-center
                  shadow-[0_14px_40px_rgba(67,93,118,0.09)]
                  backdrop-blur-xl
                "
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -4,
                }}
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
                    bg-[#A9B9C8]/16
                    blur-2xl
                  "
                />

                <p
                  className="
                    relative
                    font-playfair
                    text-[18px]
                    uppercase
                    tracking-[0.3em]
                    text-[#5F7892]/65
                  "
                >
                  {persona.titulo}
                </p>

                <p
                  className="
                    relative
                    mt-3
                    font-cursiveDancing
                    text-3xl
                    text-[#435D76]
                    sm:text-4xl
                  "
                >
                  {persona.nombre}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            MADRINAS
        ================================================== */}

        <motion.div
          className="
            mx-auto
            mt-14
            max-w-4xl
          "
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {/* TÍTULO MADRINAS */}

          <div
            className="
              mb-6
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#A9B9C8]/60
                bg-white/90
                text-[#5F7892]
                shadow-[0_10px_30px_rgba(67,93,118,0.12)]
              "
            >
              <Crown
                size={25}
                strokeWidth={1.3}
              />
            </div>

            <h3
              className="
                mt-4
                font-playfair
                text-2xl
                uppercase
                tracking-[0.15em]
                text-[#17191C]
                sm:text-3xl
              "
            >
              Mis Madrinas
            </h3>
          </div>

          {/* TARJETAS MADRINAS */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
            "
          >
            {madrinas.map((persona, index) => (
              <motion.div
                key={`${persona.titulo}-${index}`}
                className="
                  relative
                  overflow-hidden
                  rounded-[1.7rem]
                  border
                  border-[#C8CDD2]/80
                  bg-white/90
                  px-6
                  py-8
                  text-center
                  shadow-[0_14px_40px_rgba(67,93,118,0.09)]
                  backdrop-blur-xl
                "
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -4,
                }}
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
                    bg-[#A9B9C8]/16
                    blur-2xl
                  "
                />

                <p
                  className="
                    relative
                    font-playfair
                    text-[18px]
                    uppercase
                    tracking-[0.3em]
                    text-[#5F7892]/65
                  "
                >
                  {persona.titulo}
                </p>

                <p
                  className="
                    relative
                    mt-3
                    font-cursiveDancing
                    text-3xl
                    text-[#435D76]
                    sm:text-4xl
                  "
                >
                  {persona.nombre}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            DETALLE FINAL
        ================================================== */}

        <motion.div
          className="
            mx-auto
            mt-14
            flex
            items-center
            justify-center
            gap-3
            text-[#5F7892]/40
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className="h-px w-10 bg-[#5F7892]/20" />

          <Sparkles
            size={14}
            strokeWidth={1.2}
          />

          <span className="h-px w-10 bg-[#5F7892]/20" />
        </motion.div>
      </div>
    </section>
  );
}