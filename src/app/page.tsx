"use client";

import { useState } from "react";

export default function Home() {
  const [showCard, setShowCard] = useState(false);

  return (
    <main className="eid-stage relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-6 sm:px-5 sm:py-10">
      <div className="stars-layer stars-back" />
      <div className="stars-layer stars-mid" />
      <div className="stars-layer stars-front" />

      <section className="ornament-frame relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-emerald-950/20 bg-white/92 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:rounded-[36px]">
        <div className="ornament-top">
          <div className="arch-panel" />
          <div className="hanging hanging-left">
            <span className="string" />
            <span className="ketupat-hang">
              <span />
              <span />
            </span>
          </div>
          <div className="hanging hanging-center">
            <span className="string" />
            <span className="lamp-hang" />
          </div>
          <div className="hanging hanging-right">
            <span className="string" />
            <span className="ketupat-hang">
              <span />
              <span />
            </span>
          </div>
        </div>

        <div className="relative px-4 pb-7 pt-28 sm:px-8 sm:pb-10 sm:pt-36 lg:px-10 lg:pt-40">
          {!showCard ? (
            <div className="mx-auto max-w-2xl text-center animate-fade-up">
              <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-emerald-800/10 bg-emerald-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700 sm:gap-4 sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.28em]">
                <span className="mini-moon" />
                Momen Hari Raya
              </div>

              <h1 className="mt-6 text-3xl font-black leading-tight text-emerald-900 sm:mt-8 sm:text-5xl lg:text-6xl">
                Malam Takbiran
                <span className="block bg-gradient-to-r from-amber-500 via-yellow-400 to-emerald-500 bg-clip-text text-transparent">
                  Dalam Sebuah Kartu
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
                Bintang-bintang menari di langit, lentera bergoyang pelan, dan
                sebuah kartu ucapan Idul Fitri menunggu untuk kamu buka.
              </p>

              <button
                type="button"
                onClick={() => setShowCard(true)}
                className="open-card-button mt-8 sm:mt-10"
              >
                Buka Kartu Ucapan
              </button>
            </div>
          ) : (
            <div className="animate-card-in">
              <div className="mx-auto max-w-md">
                <section className="eid-card relative overflow-hidden rounded-[24px] border border-emerald-900/20 bg-white px-5 py-7 text-center shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:rounded-[30px] sm:px-8 sm:py-10">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-emerald-700 via-amber-300 to-emerald-700" />
                  <div className="eid-spark eid-spark-left" />
                  <div className="eid-spark eid-spark-right" />

                  <div className="mx-auto flex w-fit items-center gap-3 sm:gap-5">
                    <div className="moon-icon" />
                    <div className="ketupat-icon">
                      <span />
                      <span />
                    </div>
                  </div>

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 sm:mt-7 sm:text-sm sm:tracking-[0.28em]">
                    Kartu Ucapan Digital
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold leading-tight text-emerald-800 sm:mt-4 sm:text-4xl">
                    Selamat Idul Fitri 1447 H
                  </h2>

                  <div className="card-panel mt-5 rounded-[20px] bg-emerald-50 px-4 py-4 text-left shadow-[inset_0_0_0_1px_rgba(6,95,70,0.08)] sm:mt-6 sm:rounded-[24px] sm:px-5 sm:py-5">
                    <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                      Taqabbalallaahu minnaa wa minkum. Mohon maaf lahir dan batin.
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-700 sm:mt-4 sm:text-lg sm:leading-8">
                      Semoga hari raya ini membawa kebahagiaan, kedamaian, dan
                      keberkahan bagi kita semua. Semoga hati kembali bersih,
                      silaturahmi makin erat, dan setiap doa baik kita diijabah.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7">
                    <button
                      type="button"
                      onClick={() => setShowCard(false)}
                      className="rounded-full border border-emerald-800/15 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100"
                    >
                      Kembali
                    </button>
                  </div>

                  <div className="mt-6 rounded-full border border-emerald-800/15 bg-emerald-50 px-5 py-3 text-sm italic text-emerald-900 sm:mt-7 sm:text-base">
                    ~ Ardhitya ~
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
