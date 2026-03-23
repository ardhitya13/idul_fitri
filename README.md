# Ucapan Selamat Idul Fitri

Project ini dibuat di:

`C:\xampp\htdocs\nextjs\idul_fitri`

Stack yang dipakai:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Menjalankan Project

Masuk ke folder project lalu jalankan:

```bash
npm run dev
```

Setelah itu buka:

`http://localhost:3000`

## Belajar Git Branch

Contoh alur latihan yang cocok untuk project ini:

```bash
git checkout -b fitur/landing-idul-fitri
git add .
git commit -m "Buat landing page ucapan idul fitri"

git checkout -b eksperimen/animasi-lentera
# ubah tampilan atau animasi
git add .
git commit -m "Tambah eksperimen animasi lentera"

git checkout fitur/landing-idul-fitri
git merge eksperimen/animasi-lentera

git checkout main
git merge fitur/landing-idul-fitri
```

## File Penting

- `src/app/page.tsx` untuk halaman utama
- `src/app/layout.tsx` untuk metadata dan layout global
- `src/app/globals.css` untuk tema dan background
