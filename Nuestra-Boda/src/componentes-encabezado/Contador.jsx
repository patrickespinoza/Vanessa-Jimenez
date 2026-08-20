import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Contador = ({
  titulo = "¡Estás invitado!",
  texto = "Hay momentos que se sueñan toda la vida, y para mí será muy especial compartir este día contigo.",
  fecha = "2026-09-12T15:00:00",
}) => {
  const calcularTiempo = () => {
    const diferencia =
      new Date(fecha).getTime() - new Date().getTime();

    if (diferencia > 0) {
      return {
        Días: Math.floor(
          diferencia / (1000 * 60 * 60 * 24)
        ),
        Horas: Math.floor(
          (diferencia / (1000 * 60 * 60)) % 24
        ),
        Minutos: Math.floor(
          (diferencia / (1000 * 60)) % 60
        ),
        Segundos: Math.floor(
          (diferencia / 1000) % 60
        ),
      };
    }

    return {
      Días: 0,
      Horas: 0,
      Minutos: 0,
      Segundos: 0,
    };
  };

  const [tiempoRestante, setTiempoRestante] = useState(
    calcularTiempo()
  );

  useEffect(() => {
    const temporizador = setInterval(() => {
      setTiempoRestante(calcularTiempo());
    }, 1000);

    return () => clearInterval(temporizador);
  }, [fecha]);

  const elementosContador = Object.entries(tiempoRestante);

  return (
    <section
      className="
        contadorXV
        relative
        isolate
        overflow-hidden
        bg-[#F7F8FA]
        px-4
        py-20
        sm:px-6
        sm:py-24
        md:py-28
      "
    >
      {/* =====================================================
          FONDO DECORATIVO
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-white
          via-[#F8FAFC]
          to-[#EEF2F5]
        "
      />

      {/* =====================================================
          ACUARELA SUPERIOR IZQUIERDA
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-20
          h-[330px]
          w-[330px]
          rounded-full
          bg-[#A9B9C8]/35
          blur-[70px]
        "
      />

      {/* =====================================================
          ACUARELA SUPERIOR DERECHA
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          top-10
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#5F7892]/15
          blur-[80px]
        "
      />

      {/* =====================================================
          ACUARELA INFERIOR
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-1/2
          h-[300px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#C8CDD2]/25
          blur-[90px]
        "
      />

      {/* =====================================================
          PARTÍCULAS / DESTELLOS
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[17%]
          text-[#5F7892]/35
        "
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.8, 1.1, 0.8],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          size={25}
          strokeWidth={1.2}
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[16%]
          right-[9%]
          text-[#A9B9C8]/45
        "
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [0.75, 1.15, 0.75],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          size={31}
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
          max-w-5xl
        "
      >
        {/* =================================================
            TEXTO SUPERIOR
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
          {/* ETIQUETA */}

          <p
            className="
              mb-4
              font-playfair
              text-[11px]
              uppercase
              tracking-[0.45em]
              text-[#435D76]
              sm:text-xs
            "
          >
            Mis XV años
          </p>

          {/* TÍTULO */}

          <h2
            className="
              font-cursiveDancing
              text-4xl
              leading-tight
              text-[#435D76]
              sm:text-5xl
              md:text-6xl
            "
          >
            {titulo}
          </h2>

          {/* TEXTO */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              font-playfair
              text-[15px]
              leading-[1.8]
              text-[#17191C]/70
              sm:text-base
              md:text-lg
            "
          >
            {texto}
          </p>

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
                to-[#5F7892]/45
              "
            />

            <span
              className="
                h-[6px]
                w-[6px]
                rotate-45
                border
                border-[#5F7892]/65
              "
            />

            <span
              className="
                h-px
                w-16
                bg-gradient-to-l
                from-transparent
                to-[#5F7892]/45
              "
            />
          </div>
        </motion.div>

        {/* =================================================
            CONTADOR PRINCIPAL
        ================================================== */}

        <motion.div
          className="
            relative
            mx-auto
            mt-10
            max-w-4xl
          "
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          {/* FALTAN */}

          <div
            className="
              mb-3
              text-center
            "
          >
            <p
              className="
                font-playfair
                text-[10px]
                uppercase
                tracking-[0.38em]
                text-[#17191C]/65
                sm:text-xs
              "
            >
              Faltan
            </p>
          </div>

          {/* =================================================
              TARJETA BLANCA
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.4rem]
              border
              border-[#C8CDD2]/80
              bg-white/90
              px-3
              py-7
              shadow-[0_15px_40px_rgba(67,93,118,0.12)]
              backdrop-blur-xl
              sm:px-6
              sm:py-8
            "
          >
            {/* LÍNEA SUPERIOR DECORATIVA */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-[2px]
                w-[78%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#A9B9C8]
                to-transparent
              "
            />

            {/* BRILLO */}

            <div
              className="
                pointer-events-none
                absolute
                -right-12
                -top-12
                h-32
                w-32
                rounded-full
                bg-[#A9B9C8]/15
                blur-3xl
              "
            />

            {/* =================================================
                UNIDADES
            ================================================== */}

            <div
              className="
                relative
                grid
                grid-cols-4
                items-center
              "
            >
              {elementosContador.map(
                ([etiqueta, valor], indice) => (
                  <motion.div
                    key={etiqueta}
                    className="
                      relative
                      flex
                      min-w-0
                      flex-col
                      items-center
                      justify-center
                      px-1
                      text-center
                      sm:px-4
                    "
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: indice * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    {/* DIVISOR */}

                    {indice !== 0 && (
                      <span
                        className="
                          absolute
                          left-0
                          top-1/2
                          h-[54px]
                          w-px
                          -translate-y-1/2
                          bg-[#C8CDD2]/65
                          sm:h-[68px]
                        "
                      />
                    )}

                    {/* NÚMERO */}

                    <motion.span
                      key={`${etiqueta}-${valor}`}
                      className="
                        font-playfair
                        text-[1.85rem]
                        font-normal
                        leading-none
                        tabular-nums
                        text-[#17191C]
                        sm:text-4xl
                        md:text-[2.65rem]
                      "
                      initial={{
                        opacity: 0.45,
                        scale: 0.94,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {String(valor).padStart(2, "0")}
                    </motion.span>

                    {/* ETIQUETA */}

                    <span
                      className="
                        mt-3
                        font-playfair
                        text-[7px]
                        uppercase
                        tracking-[0.11em]
                        text-[#435D76]/75
                        sm:text-[9px]
                        sm:tracking-[0.18em]
                        md:text-[10px]
                      "
                    >
                      {etiqueta}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* =================================================
              FRASE INFERIOR
          ================================================== */}

          <motion.div
            className="
              mt-8
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
              duration: 0.7,
              delay: 0.25,
            }}
            viewport={{
              once: true,
            }}
          >

            <div
              className="
                mx-auto
                mt-5
                flex
                items-center
                justify-center
                gap-2
                text-[#5F7892]/45
              "
            >
              <span className="h-px w-7 bg-[#5F7892]/25" />

              <Sparkles
                size={12}
                strokeWidth={1.2}
              />

              <span className="h-px w-7 bg-[#5F7892]/25" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contador;