import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Crown,
  Heart,
  MessageCircle,
  Send,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

const Confirmacion = () => {
  /* =========================================================
      NÚMERO DE WHATSAPP

      FORMATO:
      52 + número de 10 dígitos

      EJEMPLO:
      521234567890
  ========================================================== */

  const NUMERO_WHATSAPP = "5210000000000";

  /* =========================================================
      ESTADOS
  ========================================================== */

  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");

  /* =========================================================
      SELECCIONAR ASISTENCIA
  ========================================================== */

  const seleccionarAsistencia = (respuesta) => {
    setAsistencia(respuesta);
    setError("");

    if (respuesta === "No podré asistir") {
      setInvitados("");
    }
  };

  /* =========================================================
      ENVIAR A WHATSAPP
  ========================================================== */

  const enviarConfirmacion = () => {
    /* VALIDACIÓN NOMBRE */

    if (!nombreInvitado.trim()) {
      setError("Por favor escribe tu nombre completo.");
      return;
    }

    /* VALIDACIÓN ASISTENCIA */

    if (!asistencia) {
      setError("Selecciona si podrás asistir.");
      return;
    }

    /* VALIDACIÓN INVITADOS */

    if (
      asistencia === "Sí asistiré" &&
      (!invitados || Number(invitados) < 1)
    ) {
      setError("Indica el número de invitados.");
      return;
    }

    setError("");

    /* =======================================================
        CREAR MENSAJE
    ======================================================== */

    let mensaje = `Hola 👋

Quiero confirmar mi asistencia a los XV años de Vanessa.

👤 Nombre:
${nombreInvitado.trim()}

💙 Asistencia:
${asistencia}`;

    /* SI ASISTE, AGREGAMOS NÚMERO DE INVITADOS */

    if (asistencia === "Sí asistiré") {
      mensaje += `

👥 Número de asistentes:
${invitados}`;
    }

    /* SI ESCRIBIÓ MENSAJE */

    if (mensajeInvitado.trim()) {
      mensaje += `

💌 Mensaje:
${mensajeInvitado.trim()}`;
    }

    mensaje += `

¡Muchas gracias! ✨`;

    /* =======================================================
        ABRIR WHATSAPP
    ======================================================== */

    const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(urlWhatsApp, "_blank");
  };

  return (
    <section
      className="
        confirmacionXV
        relative
        isolate
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#435D76]
        via-[#5F7892]
        to-[#A9B9C8]
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
          -left-32
          -top-32
          h-[430px]
          w-[430px]
          rounded-full
          bg-white/15
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-36
          -right-28
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#E5E8EB]/30
          blur-[120px]
        "
      />

      {/* =====================================================
          CÍRCULOS DECORATIVOS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-16
          h-36
          w-36
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-16
          left-[6%]
          h-48
          w-48
          rounded-full
          border
          border-white/10
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
          top-24
          text-white/75
        "
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          size={32}
          strokeWidth={1.2}
        />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-24
          right-[8%]
          text-white/60
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.75, 1.15, 0.75],
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
          size={40}
          strokeWidth={1.1}
        />
      </motion.div>

      {/* =====================================================
          TARJETA PRINCIPAL
      ====================================================== */}

      <motion.div
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/70
          bg-gradient-to-b
          from-white/95
          via-[#F8FAFC]/95
          to-[#EEF2F5]/95
          px-5
          py-12
          shadow-[0_35px_100px_rgba(23,25,28,0.28)]
          backdrop-blur-xl
          sm:px-10
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
          amount: 0.2,
        }}
      >
        {/* =================================================
            BRILLOS INTERNOS
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-64
            w-64
            rounded-full
            bg-[#A9B9C8]/30
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-20
            h-64
            w-64
            rounded-full
            bg-white/90
            blur-3xl
          "
        />

        <div className="relative z-10">

          {/* =================================================
              CORONA
          ================================================== */}

          <motion.div
            className="
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
              bg-white/80
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
            <Crown
              size={36}
              strokeWidth={1.35}
            />

            <motion.span
              className="
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
              <Sparkles size={18} />
            </motion.span>
          </motion.div>

          {/* =================================================
              ENCABEZADO
          ================================================== */}

          <div
            className="
              mx-auto
              max-w-2xl
              text-center
            "
          >
            <p
              className="
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
              RSVP
            </p>

            <h2
              className="
                mt-4
                font-cursiveDancing
                text-5xl
                leading-none
                text-[#5F7892]
                sm:text-6xl
                md:text-7xl
              "
            >
              Confirma tu asistencia
            </h2>

            {/* SEPARADOR */}

            <div
              className="
                mx-auto
                my-8
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
                  to-[#5F7892]/40
                  sm:w-24
                "
              />

              <Heart
                size={18}
                strokeWidth={1.4}
                className="text-[#5F7892]"
              />

              <span
                className="
                  h-px
                  w-14
                  bg-gradient-to-l
                  from-transparent
                  to-[#5F7892]/40
                  sm:w-24
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
                text-[#17191C]/70
                sm:text-lg
              "
            >
              Tu presencia hará de esta celebración un momento
              todavía más especial. Por favor, confirma si
              podrás acompañarme.
            </p>
          </div>

          {/* =================================================
              FORMULARIO
          ================================================== */}

          <div
            className="
              mx-auto
              mt-10
              max-w-2xl
              space-y-5
            "
          >
            {/* =================================================
                NOMBRE
            ================================================== */}

            <div>
              <label
                htmlFor="nombreInvitado"
                className="
                  mb-2
                  block
                  font-playfair
                  text-sm
                  font-semibold
                  text-[#435D76]
                "
              >
                Nombre completo
              </label>

              <div className="relative">
                <UserRound
                  size={20}
                  strokeWidth={1.5}
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-[#5F7892]/55
                  "
                />

                <input
                  id="nombreInvitado"
                  type="text"
                  placeholder="Nombre y apellido"
                  value={nombreInvitado}
                  onChange={(event) => {
                    setNombreInvitado(event.target.value);
                    setError("");
                  }}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-[#A9B9C8]/60
                    bg-white/85
                    py-4
                    pl-14
                    pr-5
                    font-playfair
                    text-[#17191C]
                    outline-none
                    transition
                    duration-300
                    placeholder:text-[#17191C]/35
                    focus:border-[#5F7892]/65
                    focus:ring-4
                    focus:ring-[#A9B9C8]/20
                  "
                />
              </div>
            </div>

            {/* =================================================
                ASISTENCIA
            ================================================== */}

            <fieldset>
              <legend
                className="
                  mb-3
                  font-playfair
                  text-sm
                  font-semibold
                  text-[#435D76]
                "
              >
                ¿Podrás acompañarme?
              </legend>

              <div
                className="
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* SÍ */}

                <motion.button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("Sí asistiré")
                  }
                  className={`
                    flex
                    min-h-[76px]
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    border
                    px-5
                    py-4
                    font-playfair
                    transition
                    duration-300
                    ${
                      asistencia === "Sí asistiré"
                        ? "border-[#5F7892] bg-[#5F7892] text-white shadow-[0_12px_30px_rgba(67,93,118,0.25)]"
                        : "border-[#A9B9C8]/60 bg-white/80 text-[#435D76] hover:bg-white"
                    }
                  `}
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Check
                    size={20}
                    strokeWidth={2}
                  />

                  Sí asistiré
                </motion.button>

                {/* NO */}

                <motion.button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("No podré asistir")
                  }
                  className={`
                    flex
                    min-h-[76px]
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    border
                    px-5
                    py-4
                    font-playfair
                    transition
                    duration-300
                    ${
                      asistencia === "No podré asistir"
                        ? "border-[#5F7892] bg-[#5F7892] text-white shadow-[0_12px_30px_rgba(67,93,118,0.25)]"
                        : "border-[#A9B9C8]/60 bg-white/80 text-[#435D76] hover:bg-white"
                    }
                  `}
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <X
                    size={20}
                    strokeWidth={2}
                  />

                  No podré asistir
                </motion.button>
              </div>
            </fieldset>

            {/* =================================================
                NÚMERO DE INVITADOS
            ================================================== */}

            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <label
                    htmlFor="numeroInvitados"
                    className="
                      mb-2
                      block
                      font-playfair
                      text-sm
                      font-semibold
                      text-[#435D76]
                    "
                  >
                    Número de asistentes
                  </label>

                  <div className="relative">
                    <UsersRound
                      size={20}
                      strokeWidth={1.5}
                      className="
                        pointer-events-none
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        text-[#5F7892]/55
                      "
                    />

                    <input
                      id="numeroInvitados"
                      type="number"
                      min="1"
                      inputMode="numeric"
                      placeholder="Ejemplo: 2"
                      value={invitados}
                      onChange={(event) => {
                        setInvitados(event.target.value);
                        setError("");
                      }}
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-[#A9B9C8]/60
                        bg-white/85
                        py-4
                        pl-14
                        pr-5
                        font-playfair
                        text-[#17191C]
                        outline-none
                        transition
                        duration-300
                        placeholder:text-[#17191C]/35
                        focus:border-[#5F7892]/65
                        focus:ring-4
                        focus:ring-[#A9B9C8]/20
                      "
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =================================================
                MENSAJE
            ================================================== */}

            <div>
              <label
                htmlFor="mensajeInvitado"
                className="
                  mb-2
                  block
                  font-playfair
                  text-sm
                  font-semibold
                  text-[#435D76]
                "
              >
                Mensaje para la quinceañera
              </label>

              <div className="relative">
                <MessageCircle
                  size={20}
                  strokeWidth={1.5}
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-5
                    text-[#5F7892]/55
                  "
                />

                <textarea
                  id="mensajeInvitado"
                  placeholder="Escribe un mensaje especial..."
                  value={mensajeInvitado}
                  onChange={(event) =>
                    setMensajeInvitado(event.target.value)
                  }
                  rows={4}
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-[#A9B9C8]/60
                    bg-white/85
                    py-4
                    pl-14
                    pr-5
                    font-playfair
                    leading-7
                    text-[#17191C]
                    outline-none
                    transition
                    duration-300
                    placeholder:text-[#17191C]/35
                    focus:border-[#5F7892]/65
                    focus:ring-4
                    focus:ring-[#A9B9C8]/20
                  "
                />
              </div>
            </div>

            {/* =================================================
                ERROR
            ================================================== */}

            <AnimatePresence>
              {error && (
                <motion.div
                  role="alert"
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-red-400/25
                    bg-red-50
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-red-700
                  "
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                >
                  <X
                    size={19}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                  />

                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =================================================
                BOTÓN WHATSAPP
            ================================================== */}

            <motion.button
              type="button"
              onClick={enviarConfirmacion}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#5F7892]
                px-6
                py-4
                font-playfair
                text-base
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                shadow-[0_16px_40px_rgba(67,93,118,0.30)]
                transition
                duration-300
                hover:bg-[#435D76]
                sm:text-lg
              "
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <MessageCircle
                size={21}
                strokeWidth={1.7}
              />

              Enviar por WhatsApp

              <Send
                size={18}
                strokeWidth={1.7}
              />
            </motion.button>
          </div>

          {/* =================================================
              MENSAJE FINAL
          ================================================== */}

          <p
            className="
              mx-auto
              mt-8
              max-w-xl
              text-center
              font-cursiveDancing
              text-3xl
              text-[#5F7892]
              sm:text-4xl
            "
          >
            ¡Será una noche inolvidable!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Confirmacion;