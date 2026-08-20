import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Church,
  Clock3,
  MapPin,
  PartyPopper,
  Sparkles,
} from "lucide-react";

const Celebracion = ({
  fecha = "12 Septiembre 2026",

  parroquia = {
    nombre: "Parroquia de Santa María de La Natividad",
    hora: "15:00",
    direccion: "Miguel Alemán 1, Sta María Xonacatepec, 72940 Santa María Xonacatepec, Pue.",
    ubicacion: "https://maps.app.goo.gl/9cs5Ax1B6w1b46Db8",
  },

  salon = {
    nombre: "Salón Social",
    hora: "17:00",
    direccion: "Av. San Pedro 14, Sta María Xonacatepec, 72940 Santa María Xonacatepec, Pue.",
    ubicacion: "https://maps.app.goo.gl/Q2Qk3nVEXaYELHY36",
  },
}) => {
  const eventos = [
    {
      tipo: "Ceremonia",
      nombre: parroquia.nombre,
      hora: parroquia.hora,
      direccion: parroquia.direccion,
      ubicacion: parroquia.ubicacion,
      Icono: Church,
    },
    {
      tipo: "Recepción",
      nombre: salon.nombre,
      hora: salon.hora,
      direccion: salon.direccion,
      ubicacion: salon.ubicacion,
      Icono: PartyPopper,
    },
  ];

  return (
    <section
      className="
        celebracionXV
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
          from-white
          via-[#F7F9FB]
          to-[#EEF2F5]
        "
      />

      {/* =====================================================
          LUCES / ACUARELAS
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
          blur-[95px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-24
          h-[390px]
          w-[390px]
          rounded-full
          bg-[#5F7892]/15
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
          opacity: [0.2, 0.8, 0.2],
          scale: [0.8, 1.1, 0.8],
          rotate: [0, 18, 0],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          size={28}
          strokeWidth={1.2}
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[14%]
          right-[8%]
          text-[#A9B9C8]/40
        "
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.75, 1.15, 0.75],
        }}
        transition={{
          duration: 3.8,
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
          <h2
            className="
              mb-3
              font-playfair
              text-[20px]
              uppercase
              tracking-[0.45em]
              text-[#5F7892]
              sm:text-2xl
            "
          >
            Celebración
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

          <p
            className="
              mx-auto
              max-w-xl
              font-playfair
              text-[15px]
              leading-[1.8]
              text-[#17191C]/65
              sm:text-base
            "
          >
            Será un honor compartir contigo cada momento
            de este día tan especial.
          </p>
        </motion.div>

        {/* =================================================
            FECHA PRINCIPAL
        ================================================== */}

        <motion.div
          className="
            mx-auto
            mt-10
            flex
            max-w-md
            items-center
            justify-center
            gap-4
            rounded-full
            border
            border-[#C8CDD2]
            bg-white/85
            px-6
            py-4
            shadow-[0_10px_30px_rgba(67,93,118,0.09)]
            backdrop-blur-md
          "
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
        >
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#A9B9C8]/55
              bg-[#EEF2F5]
              text-[#5F7892]
            "
          >
            <CalendarDays
              size={20}
              strokeWidth={1.4}
            />
          </div>

          <div className="text-left">
            <p
              className="
                font-playfair
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#5F7892]/70
              "
            >
              Fecha
            </p>

            <p
              className="
                mt-1
                font-playfair
                text-base
                text-[#17191C]
                sm:text-lg
              "
            >
              {fecha}
            </p>
          </div>
        </motion.div>

        {/* =================================================
            EVENTOS
        ================================================== */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-5xl
            grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >
          {eventos.map(
            (
              {
                tipo,
                nombre,
                hora,
                direccion,
                ubicacion,
                Icono,
              },
              indice
            ) => (
              <motion.article
                key={tipo}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-[#C8CDD2]/85
                  bg-white/90
                  px-5
                  py-8
                  text-center
                  shadow-[0_16px_45px_rgba(67,93,118,0.10)]
                  backdrop-blur-xl
                  sm:px-7
                  sm:py-9
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
                  duration: 0.75,
                  delay: indice * 0.12,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                whileHover={{
                  y: -5,
                }}
              >
                {/* BRILLO */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-14
                    -top-14
                    h-40
                    w-40
                    rounded-full
                    bg-[#A9B9C8]/16
                    blur-3xl
                  "
                />

                {/* =================================================
                    TIPO
                ================================================== */}

                <p
                  className="
                    relative
                    font-playfair
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-[#5F7892]/70
                  "
                >
                  {tipo}
                </p>

                {/* =================================================
                    ICONO PRINCIPAL
                ================================================== */}

                <div
                  className="
                    relative
                    mx-auto
                    mt-5
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A9B9C8]/65
                    bg-[#F5F7F9]
                    text-[#5F7892]
                    shadow-[0_8px_24px_rgba(67,93,118,0.10)]
                  "
                >
                  <Icono
                    size={29}
                    strokeWidth={1.25}
                  />
                </div>

                {/* =================================================
                    NOMBRE
                ================================================== */}

                <h3
                  className="
                    relative
                    mt-5
                    font-playfair
                    text-2xl
                    text-[#17191C]
                    sm:text-3xl
                  "
                >
                  {nombre}
                </h3>

                {/* =================================================
                    SEPARADOR
                ================================================== */}

                <div
                  className="
                    relative
                    mx-auto
                    my-5
                    h-px
                    w-16
                    bg-gradient-to-r
                    from-transparent
                    via-[#5F7892]/40
                    to-transparent
                  "
                />

                {/* =================================================
                    HORA
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <Clock3
                    size={17}
                    strokeWidth={1.4}
                    className="text-[#5F7892]"
                  />

                  <p
                    className="
                      font-playfair
                      text-lg
                      text-[#435D76]
                    "
                  >
                    {hora} hrs
                  </p>
                </div>

                {/* =================================================
                    DIRECCIÓN
                ================================================== */}

                <div
                  className="
                    relative
                    mx-auto
                    mt-5
                    flex
                    max-w-sm
                    items-start
                    justify-center
                    gap-2
                  "
                >
                  <MapPin
                    size={17}
                    strokeWidth={1.4}
                    className="
                      mt-1
                      shrink-0
                      text-[#5F7892]
                    "
                  />

                  <p
                    className="
                      font-playfair
                      text-sm
                      leading-relaxed
                      text-[#17191C]/60
                      sm:text-[15px]
                    "
                  >
                    {direccion}
                  </p>
                </div>

                {/* =================================================
                    BOTÓN
                ================================================== */}

                <motion.a
                  href={ubicacion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative
                    mt-7
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-[#5F7892]
                    px-7
                    py-3.5
                    font-playfair
                    text-[11px]
                    uppercase
                    tracking-[0.17em]
                    text-white
                    shadow-[0_10px_25px_rgba(67,93,118,0.25)]
                    transition
                    duration-300
                    hover:bg-[#435D76]
                    sm:text-xs
                  "
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <MapPin
                    size={16}
                    strokeWidth={1.5}
                  />

                  Ver ubicación
                </motion.a>
              </motion.article>
            )
          )}
        </div>

        {/* =================================================
            DETALLE INFERIOR
        ================================================== */}

        <div
          className="
            mx-auto
            mt-12
            flex
            items-center
            justify-center
            gap-3
            text-[#5F7892]/40
          "
        >
          <span className="h-px w-10 bg-[#5F7892]/20" />

          <Sparkles
            size={13}
            strokeWidth={1.2}
          />

          <span className="h-px w-10 bg-[#5F7892]/20" />
        </div>
      </div>
    </section>
  );
};

export default Celebracion;