"use client";

import { useState } from "react";
import { promptCards } from "@/data/greetings";

export default function GreetingCardGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeCard = promptCards.find((card) => card.id === activeId) ?? null;

  return (
    <>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {promptCards.map((card, index) => {
          const isActive = card.id === activeId;

          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setActiveId(card.id)}
              className={`group festive-card min-h-[260px] overflow-hidden rounded-[28px] border p-5 text-left transition duration-300 ${
                isActive
                  ? "border-amber-200/50 bg-white/16 shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
                  : "border-white/10 bg-white/8 hover:-translate-y-1 hover:border-white/25 hover:bg-white/12"
              }`}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-200/10 blur-2xl" />
              <div className="pointer-events-none absolute -left-3 top-16 h-14 w-14 rotate-45 rounded-[10px] border border-emerald-200/30 bg-emerald-200/10" />

              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex rounded-full border border-white/10 bg-slate-950/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                  {card.badge}
                </span>
                <span className="text-sm font-semibold text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                {card.subtitle}
              </p>
              <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-300">
                {card.summary}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="ketupat-mini">
                  <span />
                  <span />
                </div>
                <p className="text-sm text-emerald-100/90">
                  Nuansa kartu Lebaran
                </p>
              </div>
              <div
                className={`mt-5 h-2 rounded-full bg-gradient-to-r ${card.accent} transition duration-300 ${
                  isActive ? "opacity-100" : "opacity-50 group-hover:opacity-80"
                }`}
              />
              <p className="mt-4 text-sm font-semibold text-emerald-100">
                Klik untuk buka prompt
              </p>
            </button>
          );
        })}
      </section>

      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/15 bg-[#081222] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-amber-200/10 to-transparent" />
            <div className="pointer-events-none absolute left-8 top-0 h-24 w-px bg-amber-100/30" />
            <div className="pointer-events-none absolute left-16 top-0 h-18 w-px bg-emerald-100/20" />
            <div className="pointer-events-none absolute left-4 top-18 flex items-center gap-3">
              <div className="h-5 w-5 rounded-full bg-amber-100/70" />
              <div className="ketupat-large">
                <span />
                <span />
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                  {activeCard.badge}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-white">
                  {activeCard.title}
                </h2>
                <p className="mt-2 text-slate-200">{activeCard.subtitle}</p>
              </div>

              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/14"
              >
                Tutup
              </button>
            </div>

            <div
              className={`mt-6 h-3 rounded-full bg-gradient-to-r ${activeCard.accent}`}
            />

            <div className="mt-6 rounded-[28px] border border-white/10 bg-slate-950/35 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">
                {activeCard.badge}
              </p>
              <p className="mt-3 text-base leading-8 text-slate-200">
                {activeCard.summary}
              </p>
            </div>

            <div className="mt-5 rounded-[28px] border border-emerald-200/15 bg-emerald-300/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
                Prompt
              </p>
              <p className="mt-3 text-base leading-8 text-white">
                {activeCard.prompt}
              </p>
            </div>

            <div className="mt-5 rounded-[28px] border border-amber-200/15 bg-amber-300/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">
                Catatan
              </p>
              <p className="mt-3 text-base leading-8 text-slate-100">
                Sisipkan foto asli keluargamu sebagai referensi agar wajah,
                warna busana muslim, dan nuansa Lebaran tetap mirip saat diolah
                AI.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
