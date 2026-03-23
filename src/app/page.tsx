const wishes = [
  "Semoga setiap doa yang naik selama Ramadhan berbuah ketenangan, rezeki yang lapang, dan langkah yang dimudahkan.",
  "Mohon maaf lahir dan batin atas kata, sikap, dan keputusan yang mungkin pernah meninggalkan luka.",
  "Semoga Idul Fitri ini menjadi titik awal untuk hubungan yang lebih hangat, hati yang lebih lapang, dan semangat baru untuk berkarya.",
];

const branchFlow = [
  {
    title: "Buat branch utama fitur",
    command: "git checkout -b fitur/landing-idul-fitri",
    description:
      "Pakai branch ini untuk menyusun halaman utama tanpa mengganggu branch lain.",
  },
  {
    title: "Simpan perubahan inti",
    command: 'git add . && git commit -m "Buat landing page ucapan idul fitri"',
    description:
      "Commit awal sebaiknya fokus pada struktur dan konten utama dulu.",
  },
  {
    title: "Eksperimen di branch terpisah",
    command: "git checkout -b eksperimen/animasi-lentera",
    description:
      "Kalau mau coba animasi, warna, atau ornamen tambahan, lebih aman di branch baru.",
  },
  {
    title: "Gabungkan eksperimen yang cocok",
    command: "git checkout fitur/landing-idul-fitri",
    description:
      "Setelah eksperimen berhasil, merge ke branch fitur utama agar riwayat kerja tetap rapi.",
  },
  {
    title: "Masukkan ke main",
    command: "git checkout main",
    description:
      "Kalau semua aman, baru merge branch fitur ke main sebagai versi final.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-amber-200">
              Eid Mubarak 1447 H
            </span>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
                Selamat Hari Raya
                <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-emerald-200 bg-clip-text text-transparent">
                  Idul Fitri
                </span>
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Taqabbalallahu minna wa minkum. Semoga hari kemenangan ini
                membawa maaf yang tulus, silaturahmi yang kembali hangat, dan
                semangat baru untuk membuka lembaran hidup yang lebih baik.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#belajar-branch"
                className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-amber-200"
              >
                Belajar Git Branch
              </a>
              <a
                href="#kartu-ucapan"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Lihat Kartu Ucapan
              </a>
            </div>
          </div>

          <div
            id="kartu-ucapan"
            className="rounded-[32px] border border-white/15 bg-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
                  Kartu Ucapan
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white">
                  Mohon Maaf Lahir dan Batin
                </h2>
              </div>

              <div className="relative mt-1 h-20 w-20 shrink-0">
                <div className="absolute inset-0 rounded-full bg-amber-200/90" />
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[var(--color-night)]" />
              </div>
            </div>

            <div className="space-y-4">
              {wishes.map((wish) => (
                <article
                  key={wish}
                  className="rounded-2xl border border-white/10 bg-slate-950/25 p-4 text-slate-100"
                >
                  {wish}
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200/20 bg-emerald-300/10 p-4 text-sm leading-7 text-emerald-50">
              Semoga keberkahan, kesehatan, dan ketenangan selalu menyertai
              keluarga, sahabat, dan setiap langkah baik yang sedang kamu
              perjuangkan.
            </div>
          </div>
        </div>
      </section>

      <section
        id="belajar-branch"
        className="mx-auto max-w-7xl px-6 pb-20 lg:px-10"
      >
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-200">
            Belajar Git
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Alur branch sederhana buat latihan dari project ini
          </h2>
          <p className="text-lg leading-8 text-slate-200">
            Halaman ini sengaja cocok dipakai untuk belajar branching. Kamu
            bisa punya satu branch untuk versi utama dan satu branch lagi untuk
            eksperimen tampilan tanpa takut merusak hasil yang sudah jadi.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {branchFlow.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[28px] border border-white/12 bg-white/10 p-5 backdrop-blur-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                Langkah {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
              <code className="mt-4 block rounded-2xl bg-slate-950/65 px-4 py-3 text-sm text-emerald-200">
                {step.command}
              </code>
              <p className="mt-4 leading-7 text-slate-200">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-amber-200/20 bg-amber-300/10 p-6 text-slate-50">
          <p className="text-lg font-semibold">Urutan merge yang disarankan</p>
          <p className="mt-3 leading-8">
            Merge branch eksperimen ke branch fitur dulu, lalu setelah aman
            baru merge branch fitur ke <code>main</code>. Pola ini bikin
            belajar Git branch terasa lebih kebaca dan minim drama.
          </p>
        </div>
      </section>
    </main>
  );
}
