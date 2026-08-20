import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Crown,
  Music2,
  Pause,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function MusicaXV() {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [silenciado, setSilenciado] = useState(false);
  const [audioListo, setAudioListo] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;

    const marcarAudioListo = () => {
      setAudioListo(true);
    };

    const marcarPausa = () => {
      setReproduciendo(false);
    };

    const marcarReproduccion = () => {
      setReproduciendo(true);
    };

    audio.addEventListener("canplaythrough", marcarAudioListo);
    audio.addEventListener("play", marcarReproduccion);
    audio.addEventListener("pause", marcarPausa);

    if (audio.readyState >= 3) {
      setAudioListo(true);
    }

    return () => {
      audio.removeEventListener("canplaythrough", marcarAudioListo);
      audio.removeEventListener("play", marcarReproduccion);
      audio.removeEventListener("pause", marcarPausa);
    };
  }, []);

  const iniciarConMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.muted = false;
      setSilenciado(false);

      await audio.play();

      setReproduciendo(true);
      setMostrarModal(false);
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);

      setReproduciendo(false);
      setMostrarModal(false);
    }
  };

  const continuarSinMusica = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
    }

    setReproduciendo(false);
    setMostrarModal(false);
  };

  const alternarReproduccion = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setReproduciendo(true);
      } else {
        audio.pause();
        setReproduciendo(false);
      }
    } catch (error) {
      console.error("No se pudo cambiar la reproducción:", error);
    }
  };

  const alternarSilencio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    const nuevoEstado = !audio.muted;

    audio.muted = nuevoEstado;
    setSilenciado(nuevoEstado);
  };

  return (
    <>
      {/* =====================================================
          AUDIO PRINCIPAL
      ====================================================== */}
      <audio
        ref={audioRef}
        src="/musica.mp3"
        preload="auto"
        loop
      />

      {/* =====================================================
          VENTANA INICIAL
      ====================================================== */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              overflow-hidden
              bg-[#17212B]/75
              px-5
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* =================================================
                LUCES DEL FONDO
            ================================================== */}

            <motion.div
              className="
                pointer-events-none
                absolute
                -left-20
                -top-20
                h-[320px]
                w-[320px]
                rounded-full
                bg-[#A9B9C8]/25
                blur-[90px]
              "
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-24
                h-[350px]
                w-[350px]
                rounded-full
                bg-[#E5E8EB]/20
                blur-[100px]
              "
              animate={{
                scale: [1.1, 0.95, 1.1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* =================================================
                DESTELLOS
            ================================================== */}

            <motion.div
              className="
                absolute
                left-[8%]
                top-[12%]
                text-white/80
              "
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.7, 1.2, 0.7],
                rotate: [0, 20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={28} strokeWidth={1.2} />
            </motion.div>

            <motion.div
              className="
                absolute
                bottom-[13%]
                right-[9%]
                text-[#C8CDD2]
              "
              animate={{
                opacity: [0.2, 0.9, 0.2],
                scale: [0.75, 1.15, 0.75],
                rotate: [0, -20, 0],
              }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={36} strokeWidth={1.2} />
            </motion.div>

            {/* =================================================
                TARJETA PRINCIPAL
            ================================================== */}

            <motion.div
              className="
                relative
                w-full
                max-w-[430px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/80
                bg-gradient-to-b
                from-white
                via-[#F8FAFB]
                to-[#E5E8EB]
                px-6
                py-9
                text-center
                shadow-[0_30px_100px_rgba(0,0,0,0.38)]
                sm:px-10
                sm:py-11
              "
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* =================================================
                  DECORACIÓN SUPERIOR AZUL
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-[6px]
                  w-full
                  bg-gradient-to-r
                  from-[#A9B9C8]
                  via-[#5F7892]
                  to-[#A9B9C8]
                "
              />

              {/* BRILLO SUPERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-white/80
                  blur-3xl
                "
              />

              {/* BRILLO INFERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-16
                  h-52
                  w-52
                  rounded-full
                  bg-[#5F7892]/15
                  blur-3xl
                "
              />

              {/* =================================================
                  CORONA
              ================================================== */}

              <motion.div
                className="
                  relative
                  mx-auto
                  mb-6
                  flex
                  h-[86px]
                  w-[86px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C8CDD2]
                  bg-white/80
                  text-[#5F7892]
                  shadow-[0_12px_35px_rgba(67,93,118,0.15)]
                  backdrop-blur-md
                "
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* CÍRCULO INTERIOR */}

                <div
                  className="
                    absolute
                    inset-[6px]
                    rounded-full
                    border
                    border-[#5F7892]/15
                  "
                />

                <Crown
                  size={40}
                  strokeWidth={1.2}
                  className="relative z-10"
                />

                <motion.span
                  className="
                    absolute
                    right-1
                    top-0
                    text-[#9CA7B1]
                  "
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.25, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles size={18} />
                </motion.span>
              </motion.div>

              {/* =================================================
                  TEXTO
              ================================================== */}

              <p
                className="
                  relative
                  mb-3
                  font-playfair
                  text-[11px]
                  uppercase
                  tracking-[0.42em]
                  text-[#17191C]/75
                  sm:text-xs
                "
              >
                Mis XV años
              </p>

              <h2
                className="
                  relative
                  font-cursiveDancing
                  text-5xl
                  leading-none
                  text-[#5F7892]
                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.08)]
                  sm:text-6xl
                "
              >
                Allison
              </h2>

              {/* =================================================
                  SEPARADOR
              ================================================== */}

              <div
                className="
                  relative
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
                    to-[#5F7892]/50
                  "
                />

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C8CDD2]
                    bg-white
                    text-[#5F7892]
                    shadow-sm
                  "
                >
                  <Music2
                    size={17}
                    strokeWidth={1.5}
                  />
                </div>

                <span
                  className="
                    h-px
                    w-14
                    bg-gradient-to-l
                    from-transparent
                    to-[#5F7892]/50
                  "
                />
              </div>

              {/* =================================================
                  DESCRIPCIÓN
              ================================================== */}

              <p
                className="
                  relative
                  mx-auto
                  max-w-[330px]
                  font-playfair
                  text-[15px]
                  leading-[1.8]
                  text-[#17191C]/75
                  sm:text-base
                "
              >
                Esta celebración tiene una melodía especial.
                <br />
                Acompáñame a vivir este momento con música.
              </p>

              {/* =================================================
                  BOTONES
              ================================================== */}

              <div
                className="
                  relative
                  mt-8
                  flex
                  flex-col
                  gap-3
                "
              >
                {/* ENTRAR CON MÚSICA */}

                <motion.button
                  type="button"
                  onClick={iniciarConMusica}
                  disabled={!audioListo}
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-r
                    from-[#435D76]
                    via-[#5F7892]
                    to-[#435D76]
                    px-6
                    py-4
                    font-playfair
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    text-white
                    shadow-[0_14px_35px_rgba(67,93,118,0.32)]
                    transition
                    duration-300
                    hover:shadow-[0_16px_40px_rgba(67,93,118,0.42)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:text-[15px]
                  "
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* BRILLO DEL BOTÓN */}

                  <motion.span
                    className="
                      pointer-events-none
                      absolute
                      -left-[40%]
                      top-0
                      h-full
                      w-[30%]
                      skew-x-[-20deg]
                      bg-white/20
                    "
                    animate={{
                      left: ["-40%", "130%"],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />

                  <Play
                    size={18}
                    fill="currentColor"
                    className="relative z-10"
                  />

                  <span className="relative z-10">
                    {audioListo
                      ? "Entrar con música"
                      : "Preparando música..."}
                  </span>
                </motion.button>

                {/* CONTINUAR SIN MÚSICA */}

                <motion.button
                  type="button"
                  onClick={continuarSinMusica}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#5F7892]/25
                    bg-white/65
                    px-6
                    py-3.5
                    font-playfair
                    text-sm
                    uppercase
                    tracking-[0.14em]
                    text-[#435D76]
                    shadow-[0_6px_18px_rgba(0,0,0,0.04)]
                    backdrop-blur-md
                    transition
                    duration-300
                    hover:border-[#5F7892]/40
                    hover:bg-white
                  "
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <VolumeX size={18} />

                  Continuar sin música
                </motion.button>
              </div>

              {/* =================================================
                  DETALLE INFERIOR
              ================================================== */}

              <div
                className="
                  relative
                  mx-auto
                  mt-7
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[#5F7892]/55
                "
              >
                <span className="h-px w-8 bg-[#5F7892]/20" />

                <Sparkles
                  size={12}
                  strokeWidth={1.3}
                />

                <span className="h-px w-8 bg-[#5F7892]/20" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          CONTROLES FLOTANTES
      ====================================================== */}

      <AnimatePresence>
        {!mostrarModal && (
          <motion.div
            className="
              fixed
              bottom-5
              right-4
              z-[9998]
              flex
              items-center
              gap-2
              sm:bottom-7
              sm:right-7
            "
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.85,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {/* =================================================
                SILENCIAR
            ================================================== */}

            <motion.button
              type="button"
              onClick={alternarSilencio}
              aria-label={
                silenciado
                  ? "Activar sonido"
                  : "Silenciar música"
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/80
                bg-white/90
                text-[#435D76]
                shadow-[0_8px_25px_rgba(23,25,28,0.16)]
                backdrop-blur-md
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {silenciado ? (
                <VolumeX size={19} />
              ) : (
                <Volume2 size={19} />
              )}
            </motion.button>

            {/* =================================================
                REPRODUCIR / PAUSAR
            ================================================== */}

            <motion.button
              type="button"
              onClick={alternarReproduccion}
              aria-label={
                reproduciendo
                  ? "Pausar música"
                  : "Reproducir música"
              }
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                overflow-visible
                rounded-full
                border
                border-white/70
                bg-gradient-to-br
                from-[#6F89A3]
                to-[#435D76]
                text-white
                shadow-[0_12px_30px_rgba(67,93,118,0.4)]
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {/* PULSO */}

              {reproduciendo && (
                <motion.span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-[#A9B9C8]
                  "
                  animate={{
                    scale: [1, 1.65],
                    opacity: [0.7, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}

              {/* SEGUNDO PULSO */}

              {reproduciendo && (
                <motion.span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-white/50
                  "
                  animate={{
                    scale: [1, 1.4],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                />
              )}

              <span className="relative z-10">
                {reproduciendo ? (
                  <Pause
                    size={21}
                    fill="currentColor"
                  />
                ) : (
                  <Play
                    size={21}
                    fill="currentColor"
                    className="translate-x-[1px]"
                  />
                )}
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}