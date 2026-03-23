export type PromptCard = {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
  badge: string;
  summary: string;
  prompt: string;
};

export const promptCards: PromptCard[] = [
  {
    id: "pixar-ceria",
    title: "Gaya Animasi 3D Pixar yang Ceria",
    subtitle: "Karakter keluarga yang hangat dan ekspresif",
    accent: "from-amber-200 via-yellow-300 to-orange-200",
    badge: "Populer",
    summary:
      "Cocok untuk tampilan keluarga yang lucu, cerah, dan terasa seperti film animasi.",
    prompt:
      "Ubah foto keluarga ini menjadi gaya animasi 3D Disney Pixar. Karakter wajah mirip asli, mengenakan baju lebaran seragam, pencahayaan hangat, latar belakang rumah minimalis.",
  },
  {
    id: "ghibli-estetik",
    title: "Gaya Anime Estetik Studio Ghibli",
    subtitle: "Lembut, tenang, dan artistik",
    accent: "from-emerald-200 via-teal-200 to-cyan-200",
    badge: "Estetik",
    summary:
      "Pas buat nuansa pedesaan, adem, dan penuh sentuhan lukisan lembut.",
    prompt:
      "Transformasikan foto ini ke dalam gaya anime Studio Ghibli. Tekstur cat air lembut, detail wajah tetap dikenali, suasana lebaran di pedesaan yang asri dan tenang.",
  },
  {
    id: "karikatur-3d",
    title: "Gaya Karikatur 3D yang Lucu",
    subtitle: "Ekspresif, cerah, dan playful",
    accent: "from-sky-200 via-blue-200 to-indigo-200",
    badge: "Lucu",
    summary:
      "Bagus untuk keluarga yang ingin kesan santai, ceria, dan penuh THR vibes.",
    prompt:
      "Buat karikatur 3D lucu berdasarkan foto keluarga ini. Ekspresi tertawa bahagia, memegang ketupat dan amplop THR, warna-warna cerah dan tekstur mengkilap.",
  },
  {
    id: "vektor-flat",
    title: "Ilustrasi Vektor Flat yang Modern",
    subtitle: "Bersih, modern, dan rapi",
    accent: "from-fuchsia-200 via-pink-200 to-rose-200",
    badge: "Modern",
    summary:
      "Pas untuk desain poster, feed Instagram, atau ucapan digital yang clean.",
    prompt:
      "Ubah foto ini menjadi ilustrasi vektor flat modern. Palet warna pastel, wajah minimalis namun mirip asli, busana muslim terlihat elegan dan rapi.",
  },
  {
    id: "claymation",
    title: "Gaya Claymation Unik",
    subtitle: "Tekstur seperti tanah liat buatan tangan",
    accent: "from-orange-200 via-amber-200 to-lime-200",
    badge: "Unik",
    summary:
      "Memberi kesan handmade yang berbeda dan menarik untuk kartu lebaran.",
    prompt:
      "Ubah foto keluarga ini menjadi gaya claymation 3D. Tekstur seperti tanah liat buatan tangan, detail pakaian tradisional yang unik, pencahayaan studio yang lembut.",
  },
  {
    id: "sketsa-klasik",
    title: "Gaya Sketsa Pensil Warna Klasik",
    subtitle: "Artistik dan penuh nuansa ilustrasi manual",
    accent: "from-rose-200 via-orange-200 to-yellow-200",
    badge: "Klasik",
    summary:
      "Cocok kalau ingin kesan elegan, hangat, dan seperti karya gambar tangan.",
    prompt:
      "Transformasikan foto keluarga ini menjadi sketsa pensil warna yang artistik. Tekstur kertas nyata, sapuan warna lembut, detail wajah sangat mirip dengan foto asli.",
  },
  {
    id: "poster-film",
    title: "Gaya Poster Film Animasi Populer",
    subtitle: "Sinematik dan dramatis",
    accent: "from-violet-200 via-sky-200 to-cyan-200",
    badge: "Sinematik",
    summary:
      "Mantap untuk membuat keluarga terlihat seperti pemeran utama film animasi Lebaran.",
    prompt:
      "Buat poster film animasi berdasarkan foto keluarga ini. Judul 'Idul Fitri di Rumah', karakter wajah mirip asli, sinematik, kualitas gambar sangat tinggi.",
  },
  {
    id: "komik-superhero",
    title: "Gaya Kartun Komik Marvel atau DC",
    subtitle: "Tegas, kontras, dan heroik",
    accent: "from-red-200 via-pink-200 to-purple-200",
    badge: "Heroik",
    summary:
      "Kalau mau hasil yang beda dan terasa seperti cover komik keluarga super.",
    prompt:
      "Ubah foto keluarga ini menjadi gaya komik pahlawan super. Garis tegas, warna kontras, tetap mengenakan baju koko dan hijab, latar belakang kota yang meriah.",
  },
  {
    id: "lukisan-minyak",
    title: "Gaya Lukisan Minyak Tradisional",
    subtitle: "Klasik, hangat, dan elegan",
    accent: "from-yellow-200 via-orange-200 to-red-200",
    badge: "Elegan",
    summary:
      "Pilihan yang pas untuk nuansa seni klasik dengan wajah tetap mirip aslinya.",
    prompt:
      "Transformasikan foto ini menjadi lukisan minyak di atas kanvas. Gaya klasik, tekstur kuas terlihat jelas, warna-warna hangat, detail wajah tetap terjaga kemiripannya.",
  },
  {
    id: "chibi-imut",
    title: "Gaya Chibi Imut dan Menggemaskan",
    subtitle: "Mini, lucu, dan ceria",
    accent: "from-pink-200 via-fuchsia-200 to-purple-200",
    badge: "Gemas",
    summary:
      "Paling cocok untuk hasil yang manis, mungil, dan ramah buat kartu digital.",
    prompt:
      "Buat versi Chibi yang sangat imut dari foto keluarga ini. Karakter mungil, mata besar bercahaya, sedang memegang stoples nastar, latar belakang pesta lebaran.",
  },
];

export const branchGuides = [
  {
    step: "Branch 1: bikin struktur card",
    branch: "fitur/kartu-ucapan",
    command: "git checkout -b fitur/kartu-ucapan",
    files: [
      "src/app/page.tsx",
      "src/components/GreetingCardGallery.tsx",
      "src/data/greetings.ts",
    ],
  },
  {
    step: "Branch 2: poles tampilan",
    branch: "eksperimen/animasi-warna",
    command: "git checkout -b eksperimen/animasi-warna",
    files: ["src/app/globals.css", "src/components/GreetingCardGallery.tsx"],
  },
  {
    step: "Branch 3: ganti isi ucapan",
    branch: "konten/ucapan-ardhitya",
    command: "git checkout -b konten/ucapan-ardhitya",
    files: ["src/data/greetings.ts"],
  },
];
