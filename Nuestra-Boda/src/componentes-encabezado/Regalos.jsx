import React from "react";
import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

const Regalos = () => {
  return (
    <section
      className="
        regalosXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#F7F9FB]
        via-[#FFFFFF]
        to-[#EEF2F5]
        px-5
        py-20
        sm:px-8
        sm:py-28
      "
    >
      {/* =====================================================
          LUZ SUPERIOR IZQUIERDA
      ====================================================== */}

      <div
        className="
          regalosXV__luz-superior
          pointer-events-none
          absolute
          -left-28
          -top-28
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#A9B9C8]/35
          blur-[105px]
        "
      />

      {/* =====================================================
          LUZ INFERIOR DERECHA
      ====================================================== */}

      <div
        className="
          regalosXV__luz-inferior
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
          CÍRCULOS DECORATIVOS
      ====================================================== */}

      <div
        className="
          regalosXV__circulo-izquierdo
          pointer-events-none
          absolute
          left-8
          top-28
          h-36
          w-36
          rounded-full
          border
          border-[#5F7892]/10
        "
      />

      <div
        className="
          regalosXV__circulo-derecho
          pointer-events-none
          absolute
          bottom-24
          right-8
          h-48
          w-48
          rounded-full
          border
          border-[#A9B9C8]/30
        "
      />

      {/* =====================================================
          DESTELLO IZQUIERDO
      ====================================================== */}

      <motion.div
        className="
          regalosXV__destello-izquierdo
          pointer-events-none
          absolute
          left-[8%]
          top-20
          text-[#5F7892]/40
        "
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.15, 0.8],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          size={30}
          strokeWidth={1.2}
        />
      </motion.div>

      {/* =====================================================
          DESTELLO DERECHO
      ====================================================== */}

      <motion.div
        className="
          regalosXV__destello-derecho
          pointer-events-none
          absolute
          bottom-24
          right-[9%]
          text-[#A9B9C8]/70
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.7, 1.2, 0.7],
          rotate: [0, -18, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles
          size={38}
          strokeWidth={1.1}
        />
      </motion.div>

      {/* =====================================================
          TARJETA PRINCIPAL
      ====================================================== */}

      <motion.div
        className="
          regalosXV__tarjeta-principal
          relative
          z-10
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/90
          bg-white/75
          px-6
          py-14
          text-center
          shadow-[0_30px_90px_rgba(67,93,118,0.14)]
          backdrop-blur-xl
          sm:px-12
          sm:py-16
          md:px-16
        "
        initial={{
          opacity: 0,
          y: 55,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
      >
        {/* =================================================
            BRILLO SUPERIOR
        ================================================== */}

        <div
          className="
            regalosXV__tarjeta-luz-superior
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-64
            w-64
            rounded-full
            bg-[#A9B9C8]/25
            blur-3xl
          "
        />

        {/* =================================================
            BRILLO INFERIOR
        ================================================== */}

        <div
          className="
            regalosXV__tarjeta-luz-inferior
            pointer-events-none
            absolute
            -bottom-24
            -left-20
            h-64
            w-64
            rounded-full
            bg-[#E5E8EB]/75
            blur-3xl
          "
        />

        <div className="regalosXV__contenido relative">

          {/* =================================================
              ICONO PRINCIPAL
          ================================================== */}

          <motion.div
            className="
              regalosXV__icono-principal
              relative
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-[#5F7892]/15
              bg-gradient-to-br
              from-white
              to-[#E5E8EB]
              text-[#5F7892]
              shadow-[0_14px_35px_rgba(67,93,118,0.16)]
            "
            animate={{
              y: [0, -6, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Gift
              size={36}
              strokeWidth={1.35}
            />

            {/* DESTELLO DEL ICONO */}

            <motion.span
              className="
                regalosXV__icono-destello
                absolute
                -right-1
                top-0
                text-[#5F7892]
              "
              animate={{
                opacity: [0, 1, 0],
                scale: [0.6, 1.2, 0.6],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
              }}
            >
              <Sparkles
                size={18}
                strokeWidth={1.3}
              />
            </motion.span>
          </motion.div>

          {/* =================================================
              CON MUCHO CARIÑO
          ================================================== */}

          <p
            className="
              regalosXV__etiqueta
              mt-7
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#5F7892]/70
              sm:text-sm
            "
          >
            Con mucho cariño
          </p>


          {/* =================================================
              SEPARADOR
          ================================================== */}

          <div
            className="
              regalosXV__separador
              mx-auto
              my-8
              flex
              items-center
              justify-center
              gap-3
            "
          >
            {/* LÍNEA IZQUIERDA */}

            <span
              className="
                h-px
                w-16
                bg-gradient-to-r
                from-transparent
                to-[#5F7892]/40
                sm:w-24
              "
            />

            {/* DIAMANTE DECORATIVO */}

            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#5F7892]"
            >
              <path
                d="M14 3L17 11L25 14L17 17L14 25L11 17L3 14L11 11L14 3Z"
                stroke="currentColor"
                strokeWidth="1"
              />

              <circle
                cx="14"
                cy="14"
                r="2.5"
                fill="currentColor"
                fillOpacity="0.5"
              />
            </svg>

            {/* LÍNEA DERECHA */}

            <span
              className="
                h-px
                w-16
                bg-gradient-to-l
                from-transparent
                to-[#5F7892]/40
                sm:w-24
              "
            />
          </div>

          {/* =================================================
              MENSAJE
          ================================================== */}

          <p
            className="
              regalosXV__mensaje
              mx-auto
              max-w-2xl
              font-playfair
              text-lg
              leading-9
              text-[#17191C]/70
              sm:text-xl
              sm:leading-10
            "
          >
            Tu presencia es el regalo más importante para mí.
            Será muy especial compartir contigo esta noche
            llena de magia y alegría.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Regalos;