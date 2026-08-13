# 🏗️ SIP-UM Integration Plan

## 📊 Ringkasan Temuan

| Aspek | Backend (sip-be) | Frontend (sip-fe) |
|-------|-----------------|------------------|
| Framework | Express + Sequelize + MySQL | Next.js 14 (App Router) |
| Port | 5000 | 3000 |
| Auth | JWT + Google OAuth | NextAuth v4 + Google OAuth |
| Status | Banyak bug kritis | Banyak fitur belum selesai |
| Env vars | Ada `.env.example` | **Tidak ada** `.env` sama sekali |

---

## 🐛 Bug Kritis (Harus Diperbaiki Sebelum Integrasi)

### Backend
| # | File | Bug | Dampak |
|---|------|-----|--------|
| 1 | `routes/reports.js:33` | Route `/vote?` dengan `?` literal | Endpoint vote tidak bisa diakses |
| 2 | `reports.repository.js:170` | Double increment vote | Upvote/downvote tambah 2, bukan 1 |
| 3 | `auth.repository.js:54` | `console.log(user.password)` sebelum null check | Server crash jika user tidak ditemukan |
| 4 | `user.controller.js:82` | `res.status(users.statusCode)` — `statusCode` tidak ada | HTTP 500 saat delete user |
| 5 | `reports.repository.js` | `image.path.split('\\')` — separator Windows di Linux | Upload gambar gagal di Linux/Docker |
| 6 | Migration vs Model | Tabel `Users` (capital) vs model `users` (lowercase) | Foreign Key error di MySQL Linux |
| 7 | `reports.repository.js` | Filter 24 jam hardcode di `findAllReports` | Data lama tidak pernah muncul |
| 8 | Semua route CRUD | Tidak ada middleware auth/RBAC | Endpoint bebas diakses siapapun |
| 9 | `progress.*` files | 3 file kosong (0 bytes) | Fitur progress tidak ada |

### Frontend
| # | File | Bug | Dampak |
|---|------|-----|--------|
| 1 | `laporan/detail/page.js` | `getLaporanById.find(...)` — dipanggil seperti array | Runtime error di halaman detail |
| 2 | `components/Card.js` | `src="/"` hardcode | Semua gambar laporan broken |
| 3 | `api/laporan/data.js` | Port `5000` vs `6570` — tidak konsisten | POST laporan tidak sampai ke backend |
| 4 | `api/laporan/data.js` | `Authorization: ""` hardcode kosong | Endpoint yang butuh auth selalu gagal |
| 5 | `login/page.js` | Form email/password belum terhubung ke API | Login manual tidak berfungsi |
| 6 | `(backoffice)/dashboard` | Data hardcode, bukan dari API | Dashboard admin tidak berfungsi |
| 7 | `(backoffice)/laporans/addLaporans` | Tidak ada `onSubmit` / API call | Admin tidak bisa tambah laporan |

---

## 📋 Rencana Integrasi (Bertahap)

### 🔴 Phase 1 — Fix Critical Bugs (Harus pertama)

**Backend:**
- [ ] Fix route `/vote?` → `/vote`
- [ ] Fix double increment di `reports.repository.js`
- [ ] Fix null check di `auth.repository.js` (pindah null check sebelum `console.log`)
- [ ] Fix `image.path.split('\\')` → `image.path.split('/').pop()` atau pakai `path.basename()`
- [ ] Fix table name: ubah migration atau model agar konsisten lowercase `users`
- [ ] Hapus filter hardcode 24 jam di `findAllReports`

**Frontend:**
- [ ] Fix `getLaporanById` — harusnya di-`await` dan hasilnya baru di-`.find()`
- [ ] Fix `Card.js` image src — pakai `item.image` dari API
- [ ] Fix port inconsistency — semuanya pakai env var `NEXT_PUBLIC_API_URL`
- [ ] Fix `Authorization` header — kirim JWT token dari session

---

### 🟡 Phase 2 — Integrasi Auth

**Alur Auth yang Disepakati:**
```
User → Google OAuth → NextAuth (FE) → JWT Token dari BE → Simpan di session
```

- [ ] FE: Setelah Google login via NextAuth, hit endpoint `GET /auth/callback-login` ke BE untuk dapat JWT
- [ ] FE: Simpan JWT di NextAuth session (`session.accessToken`)
- [ ] FE: Semua API call ke BE sertakan `Authorization: Bearer <token>`
- [ ] FE: Buat `CredentialsProvider` di NextAuth untuk login email/password via `POST /auth/login`
- [ ] BE: Pasang `jwtAuth.verifyToken` ke semua route yang butuh proteksi
- [ ] BE: Pasang `isAdmin` middleware ke route admin (DELETE, PUT reports, user management)

---

### 🟡 Phase 3 — Fix Semua API Calls Frontend

| Halaman | Endpoint BE | Status |
|---------|------------|--------|
| Home (kategori) | `GET /reports/category/:category` | ⚠️ URL hardcode |
| Trending | `GET /reports/trending/sort` | ⚠️ URL hardcode |
| Detail Laporan | `GET /reports/:id` | ❌ Bug `.find()` |
| Buat Laporan | `POST /reports/add` | ❌ Port salah (6570) |
| Dashboard Admin | `GET /reports/` + `PUT /reports/:id` | ❌ Hardcode static |
| Admin Add Laporan | `POST /reports/add` | ❌ Tidak ada onSubmit |

**Solusi:** Buat centralized API client di `src/lib/api.js`:
```js
// src/lib/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
});

// Auto-attach JWT dari session
api.interceptors.request.use((config) => {
  const token = /* ambil dari session */;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
```

---

### 🟢 Phase 4 — Fitur yang Belum Ada

- [ ] BE: Implementasi `progress.js` routes + controller + repository
- [ ] BE: Email verification (env `MAILER_*` sudah ada tapi belum diimplementasi)
- [ ] FE: Halaman trending responsive
- [ ] FE: Halaman detail laporan responsive
- [ ] FE: Tampilkan progress laporan di detail page

---

## 🐳 Arsitektur Docker Compose

```
┌─────────────────────────────────────────────┐
│              Docker Network: sip-net         │
│                                             │
│  ┌──────────┐    ┌──────────┐    ┌───────┐  │
│  │  sip-fe  │───▶│  sip-be  │───▶│ mysql │  │
│  │  :3000   │    │  :5000   │    │ :3306 │  │
│  └──────────┘    └──────────┘    └───────┘  │
│                       │                     │
│                  ┌────▼────┐                │
│                  │ uploads │                │
│                  │ volume  │                │
│                  └─────────┘                │
└─────────────────────────────────────────────┘
```

**Services:**
- `mysql` — MySQL 8, data di-persist di volume
- `sip-be` — Express API, depends on mysql, port 5000
- `sip-fe` — Next.js, depends on sip-be, port 3000

---

## ✅ Checklist Sebelum Deploy

- [ ] Buat `.env` di `apps/sip-be` (dari `.env.example`)
- [ ] Buat `.env.local` di `apps/sip-fe`
- [ ] Set `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET` baru (yang lama sudah di-rotate)
- [ ] Set `JWT_TOKEN_SECRET` yang kuat
- [ ] Set `NEXTAUTH_SECRET` yang kuat
- [ ] Jalankan `npm run sequelize:migrate` + `npm run sequelize:seed`
- [ ] Test semua endpoint via Postman/Thunder Client
