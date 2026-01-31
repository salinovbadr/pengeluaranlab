// ========================================
// BMHP SKRINING APPLICATION V2.0
// Generated: January 5, 2026
// Data Source: Mapping_untuk_Perencanaan_CKG.xlsx
// Total Pemeriksaan: 20
// ========================================

// ========================================
// MASTER DATA & GLOBAL VARIABLES
// ========================================

// Master Data for Pengujian Kesling
const masterKeslingCustomers = [
  { id: 'C001', nama: 'JANJI JIWA-SERUA', alamat: 'Jl. Ciater Raya No.8, Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414' },
  { id: 'C002', nama: 'CAFÉ VMOND-SERUA', alamat: 'Jl. Maruga Raya, Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten' },
  { id: 'C003', nama: 'OMAH CABE-SERUA', alamat: 'Jl bukit sarua,no 18 RT 03/RW 03 tangerang selatan banten, Jawa Barat' },
  { id: 'C004', nama: 'ARCHERIES-SERUA', alamat: 'Jl. Raya Bukit Sarua No.33, Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414' },
  { id: 'C005', nama: 'HOKBEN -SERUA', alamat: 'Jl. Benda Raya No.13, RT.1/RW.4, Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414' },
  { id: 'C006', nama: 'PHD -SERUA', alamat: 'Jl. Serua Raya Jl. Benda Raya No.Rt 4/4, Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414A' },
  { id: 'C007', nama: 'DAM BIRU -SERUA', alamat: 'Jl. Merdeka, Kompleks Sarua Permai Blok A10 No 4, Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414' },
  { id: 'C008', nama: 'DAM SUMBER MURNI PEGUNUNGAN-SERUA', alamat: 'KP. DUKUH RT 8 RW 1, KELURAHAN SERUA' },
  { id: 'C009', nama: 'DAM TIRTA JAYA-SERUA', alamat: 'Jl. Palapa Raya RT 02 RW 18 Kel. Serua-Ciputat' },
  { id: 'C010', nama: 'DAM KURNIA-SERUA', alamat: 'JL. Ciater No.1 , KELURAHAN SERUA' },
  { id: 'C011', nama: 'DAM BIRU PEMKOT-SERUA', alamat: 'JL. RAYA PAMULANG II NO.27, KELURAHAN SERUA' },
  { id: 'C012', nama: 'MAROON FRESH WATER-SERUA', alamat: 'VDT BLOK A 1/3, KELURAHAN SERUA' },
  { id: 'C013', nama: 'MASJID AL ITISHOM-SERUA', alamat: 'MARUGA RAYA, KELURAHAN SERUA' },
  { id: 'C014', nama: 'TAHU NA POTET', alamat: 'Tanah Sewaan RT 2 RW 8 Kel. Bakti Jaya' },
  { id: 'C015', nama: 'SOLARIA PUSPITEK', alamat: 'JL. Puspitek' },
  { id: 'C016', nama: 'LOTTE D&D', alamat: 'Jl. Puspitek Babakan' },
  { id: 'C017', nama: 'MARUGAME UDON', alamat: 'Mall Paradise Walk' },
  { id: 'C018', nama: 'MCD SERPONG JAYA', alamat: 'Perum. Serpong Jaya' },
  { id: 'C019', nama: 'IMPERIAL KITCHEN', alamat: 'Mall Paradise Walk' },
  { id: 'C020', nama: 'BAKMITOPIA', alamat: 'Mall Paradise Walk' },
  { id: 'C021', nama: 'KFC', alamat: 'JL. Puspitek, Babakan Kec. Setu' },
  { id: 'C022', nama: 'GOKANA', alamat: 'Mall Paradise Walk' },
  { id: 'C023', nama: 'SOLARIA', alamat: 'Mall Paradise Walk' },
  { id: 'C024', nama: 'NICE GARDEN-CILENGGANG', alamat: 'Jl. Raya Serpong, Cilenggang' },
  { id: 'C025', nama: 'MIE GACOAN-BUARAN', alamat: 'Jl.ciater raya, Buaran, Kec. Serpong' },
  { id: 'C026', nama: 'BREMGRA RESTO-CILENGGANG', alamat: 'Jl. Raya Cilenggang No.123' },
  { id: 'C027', nama: 'HOKBEN-BUARAN', alamat: 'Jl. Puspitek, Buaran, Kec. Serpong' },
  { id: 'C028', nama: 'KFC SPBU VIKTOR-BUARAN', alamat: 'Jl. Buaran raya No.73' },
  { id: 'C029', nama: 'DAPUR MBG-BUARAN', alamat: 'Buaran RW 05' },
  { id: 'C030', nama: 'DAM JAYA WATER-CILENGGANG', alamat: 'RT 01/01' },
  { id: 'C031', nama: 'DAM DEPOT RONI-CILENGGANG', alamat: 'RT 04/02' },
  { id: 'C032', nama: 'DAM FRESHTY WATER-CILENGGANG', alamat: 'RT 12/04' },
  { id: 'C033', nama: 'DAM SEGAR-BUARAN', alamat: 'RT 02/05' },
  { id: 'C034', nama: 'DAM IVIRO-BUARAN', alamat: 'RT 01/05' },
  { id: 'C035', nama: 'DAM USAHA MANDIRI-BUARAN', alamat: 'RT 03/05' },
  { id: 'C036', nama: 'DAM NURDIN-BUARAN', alamat: 'Gang Masjid RT 02/03' },
  { id: 'C037', nama: 'DAM ENDAI-BUARAN', alamat: 'Kodiklat RT 02/06' },
  { id: 'C038', nama: 'DAM TOYA BENING-BUARAN', alamat: 'Buaran RT 03/02' },
  { id: 'C039', nama: 'DAM PUTERA-BUARAN', alamat: 'Buaran RT 02/01' },
  { id: 'C040', nama: 'DAM ASIH-BUARAN', alamat: 'Buaran RT 03/07' },
  { id: 'C041', nama: 'DAM TIRTA KENCANA-BUARAN', alamat: 'Buaran RT 01/06' },
  { id: 'C042', nama: 'DAM AQUAWAY WATER TREATMENT-BUARAN', alamat: 'Buaran Rt 03/04' },
  { id: 'C043', nama: 'DAM BANYU UNGU-BUARAN', alamat: 'Kp. Gardu RT 04/01' },
  { id: 'C044', nama: 'DAM AZZAM-BUARAN', alamat: 'Buaran RT 01/03' },
  { id: 'C045', nama: 'Sambal Bakar Indonesia', alamat: 'Jl. WR. Supratman No. 39 RT 06/ RW 02 Rengas' },
  { id: 'C046', nama: 'Stetoskop Coffee House', alamat: 'Jl. Kenari RW 008 Rengas, Ciputat Timur' },
  { id: 'C047', nama: 'Ayam Bakar Pakde', alamat: 'Jl. WR Supratman RW 010, Rengas, Ciputat Timur' },
  { id: 'C048', nama: 'd’Besto', alamat: 'Jl. WR Supratman RW 002, Rengas, Ciputat Timur' },
  { id: 'C049', nama: 'Soto Betawi H. Usman', alamat: 'Jl. WR Supratman RW 002, Rengas, Ciputat Timur' },
  { id: 'C050', nama: 'RM. Padang Putera Minang', alamat: 'Jl. WR Supratman, RT 004/RW 010 Rengas, Ciputat Timur' },
  { id: 'C051', nama: 'Mie Ayam Bangka', alamat: 'Jl. Burung Gereja RW 007, Rengas, Ciputat Timur' },
  { id: 'C052', nama: 'Omnikopi', alamat: 'Jl. Bintaro Tengah RW 007 Rengas, Ciputat Timur' },
  { id: 'C053', nama: 'RM. Padang Famili Jaya', alamat: 'Jl. WR Supratman RT 04/ RW 10, Rengas, Ciputat Timur' },
  { id: 'C054', nama: 'Pondok Baso Pak Joko', alamat: 'Jl. Bintaro Selatan RW 007, Rengas, Ciputat Timur' },
  { id: 'C055', nama: 'BO2', alamat: 'Jl. Cempaka Bawah No. 22 RT 005/ RW 003 Rengas, Ciputat Timur' },
  { id: 'C056', nama: 'ZAHRA', alamat: 'Jl. Kramat Rengas RW 010 Rengas, Ciputat Timur' },
  { id: 'C057', nama: 'ALAMI', alamat: 'Jl. H. Kacit RT 02/09, Rengas, Ciputat Timur' },
  { id: 'C058', nama: 'ANUGERAH WATER', alamat: 'Jl. Wijaya Kusuma RT 04/04, Rengas, Ciputat Timur' },
  { id: 'C059', nama: 'ADITTIA', alamat: 'Jl. Gelatik Atas RT 10/09, Rengas, Ciputat Timur' },
  { id: 'C060', nama: 'SARI MURNI', alamat: 'Jl. Cempaka Bawah RT 05/03, Rengas, Ciputat Timur' },
  { id: 'C061', nama: 'BIRU', alamat: 'Jl. Kenari RT 04/08 Rengas, Ciputat Timur' },
  { id: 'C062', nama: 'SEHATI WATER', alamat: 'Jl. H. Toran RT 03/01, Rengas, Ciputat Timur' },
  { id: 'C063', nama: 'ASTON BINTARO HOTEL & CONFERENCE CENTER', alamat: 'Jl. Cendrawasih Raya No. 25 Kelurahan Sawah, Ciputat Kota Tangerang Selatan' },
  { id: 'C064', nama: 'THE HARVEST-PARIGI', alamat: 'Jl. Titihan No.Kav 1B, Kel. Parigi' },
  { id: 'C065', nama: 'BURGER KING EMERALD BINTARO-PARIGI', alamat: 'Jl. Boulevard Bintaro Jaya, Kel. Parigi' },
  { id: 'C066', nama: 'HOKBEN EMERALD BINTARO-PARIGI', alamat: 'Jl. Boulevard Bintaro Jaya No. 4 Segmen 6 Blok S6/B2, Kel. Parigi' },
  { id: 'C067', nama: 'POPEYE EMERALD BINTARO-PARIGI', alamat: 'Jl.Boulevard Bintaro Jaya Segmen 6 Blok S6/B2-04, Kel. Parigi' },
  { id: 'C068', nama: 'CHIGO X FLIP MARCHAND HYPE STATION-PARIGI', alamat: 'Marchand Hype Station, Jl. Emerald Boulevard Ruko No. 08, Kel. Parigi' },
  { id: 'C069', nama: 'PIZZA HUT DELIVERY EMERALD BINTARO-PARIGI', alamat: 'Jl. Emerald Boulevard RT 001 RW 007, Kel. Parigi' },
  { id: 'C070', nama: 'WING STOP EMERALD BINTARO-PARIGI', alamat: 'Kav. Komersial Bintaro Jaya.1, Jl. Boulevard Bintaro Jaya No. 5 Blok CE/B, Kel. Parigi' },
  { id: 'C071', nama: 'SUSHI MENTAI EMERALD BINARO-PARIGI', alamat: 'Kav. Komersial Bintaro Jaya.1, Jl. Boulevard Bintaro Jaya Blok CE/B, Kel. Parigi' },
  { id: 'C072', nama: 'KFC EMERALD BINTARO-PARIGI', alamat: 'Kav. Komersial Bintaro Jaya.1, Jl. Boulevard Bintaro Jaya No. 3 Blok CE/B, Kel. Parigi' },
  { id: 'C073', nama: 'AYAM TENES MALANG-PARIGI', alamat: 'Jl. Boulevard Bintaro Jaya No.34, Kel. Parigi' },
  { id: 'C074', nama: 'N.O.B COFFEE & EATERY-PARIGI', alamat: 'Jl. Boulevard Bintaro Jaya Blok CE / AA No. 3, Kel. Parigi' },
  { id: 'C075', nama: 'JUSTUS STEAK EMERALD BINTARO-PARIGI', alamat: 'Jl. CBD Emerald Bintaro Blok CE/AA No.2, Kel. Parigi' },
  { id: 'C076', nama: 'PESISIR SEAFOOD BINTARO-PARIGI', alamat: 'Jl. Boulevard Bintaro Jaya, Kel. Parigi' },
  { id: 'C077', nama: 'GION THE SUSHI BAR-PARIGI', alamat: 'Blok CE / AA No, Jl. Boulevard Bintaro Jaya No.1, Kel. Parigi' },
  { id: 'C078', nama: 'SUBWAY EMERALD BINTARO-PARIGI', alamat: 'Jl. Boulevard Bintaro Jaya No.1, Kel. Parigi' },
  { id: 'C079', nama: 'MCD EMERALD BINTARO-PARIGI', alamat: 'Blok CE/A, CBD Emerald, Jl. HR Rasuna Said Bintaro Jaya No.86, Kel. Parigi' },
  { id: 'C080', nama: 'PIZZA HUT RISTORANTE-PARIGI', alamat: 'Jl. Boulevard Bintaro Jaya, Kel. Parigi' },
];

const masterKeslingParameters = {
  "Kualitas Air Minum": [
    { kategori: "FISIKA", nama: "Suhu", bakuMutu: "Suhu Udara ± 3", satuan: "°C", metode: "SNI 06-6989.23-2005" },
    { kategori: "FISIKA", nama: "TDS", bakuMutu: "300", satuan: "mg/L", metode: "SNI 6989.27:2009" },
    { kategori: "FISIKA", nama: "Kekeruhan", bakuMutu: "3", satuan: "NTU", metode: "SNI 06-6989.25-2005" },
    { kategori: "FISIKA", nama: "Warna", bakuMutu: "10", satuan: "TCU", metode: "SNI 06-6989.24-2005" },
    { kategori: "FISIKA", nama: "Bau", bakuMutu: "Tidak berbau", satuan: "-", metode: "Organoleptik" },
    { kategori: "KIMIA", nama: "pH", bakuMutu: "6.5 - 8.5", satuan: "-", metode: "SNI 06-6989.11-2004" },
    { kategori: "KIMIA", nama: "Nitrat", bakuMutu: "50", satuan: "mg/L", metode: "SNI 06-6989.79-2011" },
    { kategori: "KIMIA", nama: "Nitrit", bakuMutu: "3", satuan: "mg/L", metode: "SNI 06-6989.9-2004" },
    { kategori: "KIMIA", nama: "Kromium", bakuMutu: "0.01", satuan: "mg/L", metode: "SNI 06-6989.17-2004" }
  ],
  "Kualitas Udara": [
    { kategori: "FISIKA", nama: "Suhu", bakuMutu: "18-28", satuan: "°C", metode: "Termometer" },
    { kategori: "FISIKA", nama: "Kelembaban", bakuMutu: "40-60", satuan: "%RH", metode: "Higrometer" },
    { kategori: "KIMIA", nama: "Karbon Monoksida (CO)", bakuMutu: "10", satuan: "mg/m3", metode: "Direct Reading" }
  ],
  "Keamanan Pangan": [
    { kategori: "KIMIA", nama: "Formalin", bakuMutu: "Negatif", satuan: "-", metode: "Test Kit" },
    { kategori: "KIMIA", nama: "Boraks", bakuMutu: "Negatif", satuan: "-", metode: "Test Kit" }
  ],
  "Vektor dan Binatang Pembawa Penyakit": [
    { kategori: "ENTOMOLOGI", nama: "Indeks Jentik", bakuMutu: "< 5", satuan: "%", metode: "Visual" }
  ]
};

// Master Material Database dengan inventory simulation
const masterMaterialDatabase = {
  Reagen: [
    // Hematologi
    {
      nama: "Onemed, Prufen",
      satuan: "pcs",
      testPerPackage: 25,
      consumptionPerTest: 1,
      currentStock: 150,
    },
    {
      nama: "Onetech Diluent",
      satuan: "ml",
      quantityPerPackage: 10000,
      testPerPackage: 200,
      consumptionPerTest: 50,
      currentStock: 1500,
    },
    {
      nama: "Onetech Lyse",
      satuan: "ml",
      quantityPerPackage: 500,
      testPerPackage: 200,
      consumptionPerTest: 2.5,
      currentStock: 380,
    },
    {
      nama: "Onetech Detergent",
      satuan: "ml",
      quantityPerPackage: 5000,
      testPerPackage: 200,
      consumptionPerTest: 25,
      currentStock: 450,
    },

    // Kimia Klinik
    {
      nama: "Codefree (Strip Glukosa)",
      satuan: "pcs",
      quantityPerPackage: 50,
      testPerPackage: 50,
      consumptionPerTest: 1,
      currentStock: 85,
    },
    {
      nama: "Proline GOD PAP",
      satuan: "ml",
      quantityPerPackage: 120,
      testPerPackage: 120,
      consumptionPerTest: 0.5,
      currentStock: 220,
    },
    {
      nama: "Proline Glucose Standard FS",
      satuan: "ml",
      quantityPerPackage: 6,
      testPerPackage: 60,
      consumptionPerTest: 0.02,
      currentStock: 115,
    },
    {
      nama: "Proline ASAT (GOT) FS R1",
      satuan: "ml",
      quantityPerPackage: 100,
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 180,
    },
    {
      nama: "Proline ASAT (GOT) FS R2",
      satuan: "ml",
      quantityPerPackage: 25,
      testPerPackage: 100,
      consumptionPerTest: 0.25,
      currentStock: 180,
    },
    {
      nama: "Proline ALAT (GPT) FS R1",
      satuan: "ml",
      quantityPerPackage: 100,
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 175,
    },
    {
      nama: "Proline ALAT (GPT) FS R2",
      satuan: "ml",
      quantityPerPackage: 25,
      testPerPackage: 100,
      consumptionPerTest: 0.25,
      currentStock: 175,
    },
    {
      nama: "Accugence (Strip Asam Urat)",
      satuan: "pcs",
      testPerPackage: 25,
      consumptionPerTest: 1,
      currentStock: 45,
    },
    {
      nama: "Proline Uric Acid Standard FS",
      satuan: "ml",
      quantityPerPackage: 6,
      testPerPackage: 60,
      consumptionPerTest: 0.02,
      currentStock: 110,
    },
    {
      nama: "Proline Uric Acid FS R1",
      satuan: "ml",
      quantityPerPackage: 100,
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 165,
    },
    {
      nama: "Proline Uric Acid FS R2",
      satuan: "ml",
      quantityPerPackage: 25,
      testPerPackage: 100,
      consumptionPerTest: 0.25,
      currentStock: 165,
    },
    {
      nama: "Proline Urea FS R1",
      satuan: "ml",
      quantityPerPackage: 100,
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 155,
    },
    {
      nama: "Proline Urea FS R2",
      satuan: "ml",
      quantityPerPackage: 25,
      testPerPackage: 100,
      consumptionPerTest: 0.25,
      currentStock: 155,
    },
    {
      nama: "Labiosis Creatinine R1",
      satuan: "ml",
      quantityPerPackage: 50,
      testPerPackage: 100,
      consumptionPerTest: 0.5,
      currentStock: 145,
    },
    {
      nama: "Labiosis Creatinine R2",
      satuan: "ml",
      quantityPerPackage: 50,
      testPerPackage: 100,
      consumptionPerTest: 0.5,
      currentStock: 145,
    },
    {
      nama: "Mission (Strip Kolesterol)",
      satuan: "pcs",
      testPerPackage: 25,
      consumptionPerTest: 1,
      currentStock: 52,
    },
    {
      nama: "Proline Cholesterol FS",
      satuan: "ml",
      quantityPerPackage: 150,
      testPerPackage: 150,
      consumptionPerTest: 1,
      currentStock: 280,
    },
    {
      nama: "Proline Cholesterol Standard FS",
      satuan: "ml",
      quantityPerPackage: 6,
      testPerPackage: 60,
      consumptionPerTest: 0.02,
      currentStock: 105,
    },
    {
      nama: "Proline Triglyseride FS 10'",
      satuan: "ml",
      quantityPerPackage: 120,
      testPerPackage: 120,
      consumptionPerTest: 1,
      currentStock: 210,
    },
    {
      nama: "Proline HDL-c direct FS R1",
      satuan: "ml",
      quantityPerPackage: 100,
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 185,
    },
    {
      nama: "Proline HDL-c direct FS R2",
      satuan: "ml",
      quantityPerPackage: 25,
      testPerPackage: 100,
      consumptionPerTest: 0.25,
      currentStock: 185,
    },

    // Urinalisis
    {
      nama: "FOKUS Urine Test Strip URS-10",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 195,
    },

    // Mikrobiologi
    {
      nama: "Indec ZN (Ziehl Neelsen)",
      satuan: "ml",
      quantityPerPackage: 500,
      testPerPackage: 20,
      consumptionPerTest: 30,
      currentStock: 340,
    },
    {
      nama: "Methylen Blue",
      satuan: "ml",
      quantityPerPackage: 100,
      testPerPackage: 20,
      consumptionPerTest: 6,
      currentStock: 285,
    },
    {
      nama: "Onecare Reagen Widal Salmonella typhi O",
      satuan: "ml",
      quantityPerPackage: 5,
      testPerPackage: 33,
      consumptionPerTest: 0.15,
      currentStock: 92,
    },
    {
      nama: "Onecare Reagen Widal Salmonella typhi OH",
      satuan: "ml",
      quantityPerPackage: 5,
      testPerPackage: 33,
      consumptionPerTest: 0.15,
      currentStock: 92,
    },
    {
      nama: "Onecare Reagen Widal Salmonella typhi A",
      satuan: "ml",
      quantityPerPackage: 5,
      testPerPackage: 33,
      consumptionPerTest: 0.15,
      currentStock: 92,
    },
    {
      nama: "Onecare Reagen Widal Salmonella typhi B",
      satuan: "ml",
      quantityPerPackage: 5,
      testPerPackage: 33,
      consumptionPerTest: 0.15,
      currentStock: 92,
    },
    {
      nama: "Indec HIV Sifilis Combo",
      satuan: "pcs",
      quantityPerPackage: 25,
      testPerPackage: 25,
      consumptionPerTest: 1,
      currentStock: 48,
    },
    {
      nama: "Focus RPR",
      satuan: "kit",
      quantityPerPackage: 100,
      testPerPackage: 100,
      consumptionPerTest: 0.05,
      currentStock: 175,
    },
    {
      nama: "Fastclear (HBsAg)",
      satuan: "pcs",
      quantityPerPackage: 25,
      testPerPackage: 25,
      consumptionPerTest: 1,
      currentStock: 55,
    },
    {
      nama: "Deteksi Anti HCV",
      satuan: "pcs",
      quantityPerPackage: 25,
      testPerPackage: 25,
      consumptionPerTest: 1,
      currentStock: 43,
    },
    {
      nama: "Virocheck HIV",
      satuan: "pcs",
      quantityPerPackage: 25,
      testPerPackage: 25,
      consumptionPerTest: 1,
      currentStock: 51,
    },
    {
      nama: "Onecare Reagen Anti A",
      satuan: "ml",
      quantityPerPackage: 10,
      testPerPackage: 66,
      consumptionPerTest: 0.15,
      currentStock: 128,
    },
    {
      nama: "Onecare Reagen Anti B",
      satuan: "ml",
      quantityPerPackage: 10,
      testPerPackage: 66,
      consumptionPerTest: 0.15,
      currentStock: 128,
    },
    {
      nama: "Onecare Reagen Anti O",
      satuan: "ml",
      quantityPerPackage: 10,
      testPerPackage: 66,
      consumptionPerTest: 0.15,
      currentStock: 128,
    },
    {
      nama: "Onecare Reagen Anti D",
      satuan: "ml",
      quantityPerPackage: 10,
      testPerPackage: 66,
      consumptionPerTest: 0.15,
      currentStock: 128,
    },
    {
      nama: "Onemed (Tes Kehamilan)",
      satuan: "pcs",
      quantityPerPackage: 50,
      testPerPackage: 50,
      consumptionPerTest: 1,
      currentStock: 98,
    },

    // Feses
    {
      nama: "Emtech Fecal Occult Blood",
      satuan: "pcs",
      quantityPerPackage: 25,
      testPerPackage: 25,
      consumptionPerTest: 1,
      currentStock: 62,
    },
  ],
  "Alat Habis Pakai": [
    {
      nama: "Pot urin steril",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 245,
    },
    {
      nama: "Urine tube",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 238,
    },
    {
      nama: "Object glass",
      satuan: "pcs",
      testPerPackage: 72,
      consumptionPerTest: 1,
      currentStock: 168,
    },
    {
      nama: "Deck glass (Cover glass)",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 225,
    },
    {
      nama: "Pot tinja steril",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 188,
    },
    {
      nama: "Tabung reaksi",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 275,
    },
    {
      nama: "Lancet steril",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 315,
    },
    {
      nama: "Alcohol swab",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 2,
      currentStock: 425,
    },
    {
      nama: "Vacutainer EDTA",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 198,
    },
    {
      nama: "Spuit 3cc steril",
      satuan: "pcs",
      testPerPackage: 100,
      consumptionPerTest: 1,
      currentStock: 265,
    },
    {
      nama: "Pipet pasteur",
      satuan: "pcs",
      testPerPackage: 500,
      consumptionPerTest: 1,
      currentStock: 1250,
    },
  ],
};

// Database wilayah Indonesia (simplified - add more as needed)
const wilayahData = {
  31: {
    name: "DKI Jakarta",
    cities: {
      71: {
        name: "Jakarta Pusat",
        kecamatan: [
          "Gambir",
          "Tanah Abang",
          "Menteng",
          "Senen",
          "Cempaka Putih",
          "Johar Baru",
          "Kemayoran",
          "Sawah Besar",
        ],
      },
      72: {
        name: "Jakarta Utara",
        kecamatan: [
          "Penjaringan",
          "Tanjung Priok",
          "Koja",
          "Cilincing",
          "Pademangan",
          "Kelapa Gading",
        ],
      },
      73: {
        name: "Jakarta Barat",
        kecamatan: [
          "Cengkareng",
          "Grogol Petamburan",
          "Taman Sari",
          "Tambora",
          "Kebon Jeruk",
          "Kalideres",
          "Palmerah",
          "Kembangan",
        ],
      },
      74: {
        name: "Jakarta Selatan",
        kecamatan: [
          "Kebayoran Baru",
          "Kebayoran Lama",
          "Pesanggrahan",
          "Cilandak",
          "Pasar Minggu",
          "Jagakarsa",
          "Mampang Prapatan",
          "Pancoran",
          "Tebet",
        ],
      },
      75: {
        name: "Jakarta Timur",
        kecamatan: [
          "Matraman",
          "Pulogadung",
          "Jatinegara",
          "Cakung",
          "Duren Sawit",
          "Kramat Jati",
          "Makasar",
          "Pasar Rebo",
          "Ciracas",
          "Cipayung",
        ],
      },
    },
  },
  32: {
    name: "Jawa Barat",
    cities: {
      71: {
        name: "Bogor",
        kecamatan: [
          "Bogor Selatan",
          "Bogor Timur",
          "Bogor Utara",
          "Bogor Tengah",
          "Bogor Barat",
          "Tanah Sareal",
        ],
      },
      73: {
        name: "Bandung",
        kecamatan: [
          "Bandung Wetan",
          "Sumur Bandung",
          "Cibeunying Kidul",
          "Cibeunying Kaler",
          "Coblong",
          "Sukasari",
          "Cicendo",
          "Sukajadi",
          "Cidadap",
          "Andir",
        ],
      },
      75: {
        name: "Bekasi",
        kecamatan: [
          "Bekasi Barat",
          "Bekasi Selatan",
          "Bekasi Timur",
          "Bekasi Utara",
          "Bantargebang",
          "Jatiasih",
          "Jatisampurna",
          "Medan Satria",
          "Mustika Jaya",
          "Pondok Gede",
          "Pondok Melati",
          "Rawalumbu",
        ],
      },
      76: {
        name: "Depok",
        kecamatan: [
          "Beji",
          "Cimanggis",
          "Cinere",
          "Cipayung",
          "Limo",
          "Pancoran Mas",
          "Sawangan",
          "Sukmajaya",
          "Tapos",
          "Bojongsari",
          "Cilodong",
        ],
      },
      77: {
        name: "Cimahi",
        kecamatan: ["Cimahi Selatan", "Cimahi Tengah", "Cimahi Utara"],
      },
    },
  },
};

// NEW: Batch database - simulate batch tracking with expiry dates
const batchDatabase = {};

// Generate batches dynamically for all materials
function getOrCreateBatches(materialName, testPerPackage, currentStock) {
  if (batchDatabase[materialName]) {
    return batchDatabase[materialName];
  }

  const batches = [];
  const today = new Date();
  let remaining = currentStock;
  let batchCount = Math.min(3, Math.ceil(currentStock / testPerPackage));

  for (let i = 0; i < batchCount && remaining > 0; i++) {
    const batchTests = Math.min(
      testPerPackage * Math.ceil(remaining / testPerPackage / (batchCount - i)),
      remaining,
    );
    const expiryDate = new Date(today);
    expiryDate.setMonth(
      expiryDate.getMonth() + (6 + Math.floor(Math.random() * 18)),
    );

    batches.push({
      batchNo: `BATCH-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      expiry: expiryDate.toISOString().split("T")[0],
      remainingTests: batchTests,
      packageSize: testPerPackage,
    });

    remaining -= batchTests;
  }

  batchDatabase[materialName] = batches;
  return batches;
}

// Parameter database dengan kategori (from spreadsheet)
const parameterDatabase = {
  Hematologi: [
    "Hemoglobin, penetapan kadar",
    "Hematokrit, penetapan nilai",
    "Eritrosit, hitung jumlah",
    "Indeks Eritrosit (MCV, MCH, CHC), penetapan nilai",
    "Trombosit, hitung jumlah",
    "Leukosit, hitung jumlah",
    "Laju Endap Darah, pengukuran",
    "Pembuatan Apus Darah Tepi untuk rujukan",
  ],
  "Kimia Klinik": [
    "Glukosa, penetapan kadar",
    "SGOT, penetapan kadar",
    "SGPT, penetapan kadar",
    "Asam urat, penetapan kadar",
    "Ureum/ BUN, penetapan kadar",
    "Kreatinin, penetapan kadar",
    "Kolesterol total, penetapan kadar",
    "Trigliserida, penetapan kadar",
    "Kolesterol HDL, penetapan kadar",
    "Kolesterol LDL",
    "HbA1c",
  ],
  Urinalisis: [
    "Analisis Urine: Warna, Bau, Kejernihan, Volume",
    "pH, kuantitatif",
    "Berat Jenis, kuantitatif",
    "Protein, semi kuantitatif",
    "Glukosa, semi kuantitatif",
    "Bilirubin, semi kuantitatif",
    "Urobilinogen, kuantitatif",
    "Keton, semi kuantitatif",
    "Nitrit, semi kuantitatif",
    "Darah samar, semi kuantitatif",
    "Leukosit, kuantitatif",
    "Eritrosit, kuantitatif",
    "Epitel, kuantitatif",
    "Kristal, kualitatif",
    "Silinder, semikuantitatif",
    "Bakteri, penetapan semikuantitatif",
    "Trichomonas sp., kualitatif",
    "Jamur, kualitatif",
    "Sperma, kualitatif",
  ],
  "Mikrobiologi Klinik": [
    "BTA Mycobacterium Tuberculosis (semi kuantitatif)",
    "BTA untuk Mycobacterium Leprae (semi kuantitatif)",
    "Diplococcus gram negatif intra dan extra seluler, kualitatif",
    "Trichomoniasis, kualitatif",
    "Candidiasis vaginalis, kualitatif",
    "Bacterial vaginosis, kualitatif",
    "Jamur permukaan, kualitatif",
    "Malaria, kualitatif",
    "Malaria, kuantitatif",
    "Telur Cacing",
    "Mikrofilaria, kualitatif",
  ],
  "Serologi & Imunologi": [
    "Anti-Salmonella typhi IgG IgM, kualitatif",
    "Anti-Salmonella typhi, kualitatif",
    "Treponema Pallidum Hemagglutination Assay (TPHA) kualitatif",
    "VDRL/RPR, semikuantitatif",
    "HBsAg, kualitatif",
    "Anti HCV, kualitatif",
    "Anti HIV, kualitatif",
    "Anti HIV dan Sifilis, kualitatif",
    "Antibodi Dengue IgG/IgM, kualitatif",
    "Antigen Dengue (NS1) kualitatif",
    "Antibodi Leptospira IgG/IgM",
    "Antigen SARS-CoV-2, kualitatif",
    "Antigen Rotavirus",
    "Golongan darah ABO dan Rhesus, kualitatif",
    "Tes Kehamilan, kualitatif",
  ],
  "Feses (Tinja)": [
    "Konsistensi, Warna, Bau, Lendir, Darah",
    "Darah samar",
    "Telur cacing, kualitatif",
    "Amuba, kualitatif",
    "Eritrosit, kuantitatif",
    "Leukosit, kuantitatif",
    "Sisa makanan, kualitatif",
  ],
};

// Material database based on parameter-metode combinations
const materialDatabase = {
  "Hematologi-Lateral Flow": {
    Reagen: [
      {
        nama: "Onemed, Prufen",
        satuan: "pcs",
        testPerPackage: 25,
        consumptionPerTest: 1,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Lancet steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Alcohol swab",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 2,
      },
    ],
  },
  "Hematologi-Flow Cytometry": {
    Reagen: [
      {
        nama: "Onetech Diluent",
        satuan: "ml",
        quantityPerPackage: 10000,
        testPerPackage: 200,
        consumptionPerTest: 50,
      },
      {
        nama: "Onetech Lyse",
        satuan: "ml",
        quantityPerPackage: 500,
        testPerPackage: 200,
        consumptionPerTest: 2.5,
      },
      {
        nama: "Onetech Detergent",
        satuan: "ml",
        quantityPerPackage: 5000,
        testPerPackage: 200,
        consumptionPerTest: 25,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Vacutainer EDTA",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Spuit 3cc steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Alcohol swab",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 2,
      },
    ],
  },
  "Kimia Klinik-Lateral Flow": {
    Reagen: [
      {
        nama: "Codefree (Strip Glukosa)",
        satuan: "pcs",
        quantityPerPackage: 50,
        testPerPackage: 50,
        consumptionPerTest: 1,
      },
      {
        nama: "Accugence (Strip Asam Urat)",
        satuan: "pcs",
        testPerPackage: 25,
        consumptionPerTest: 1,
      },
      {
        nama: "Mission (Strip Kolesterol)",
        satuan: "pcs",
        testPerPackage: 25,
        consumptionPerTest: 1,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Lancet steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Alcohol swab",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 2,
      },
    ],
  },
  "Kimia Klinik-Enzimatik": {
    Reagen: [
      {
        nama: "Proline GOD PAP",
        satuan: "ml",
        quantityPerPackage: 120,
        testPerPackage: 120,
        consumptionPerTest: 0.5,
      },
      {
        nama: "Proline Glucose Standard FS",
        satuan: "ml",
        quantityPerPackage: 6,
        testPerPackage: 60,
        consumptionPerTest: 0.02,
      },
      {
        nama: "Proline ASAT (GOT) FS R1",
        satuan: "ml",
        quantityPerPackage: 100,
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Proline ASAT (GOT) FS R2",
        satuan: "ml",
        quantityPerPackage: 25,
        testPerPackage: 100,
        consumptionPerTest: 0.25,
      },
      {
        nama: "Proline ALAT (GPT) FS R1",
        satuan: "ml",
        quantityPerPackage: 100,
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Proline ALAT (GPT) FS R2",
        satuan: "ml",
        quantityPerPackage: 25,
        testPerPackage: 100,
        consumptionPerTest: 0.25,
      },
      {
        nama: "Proline Uric Acid Standard FS",
        satuan: "ml",
        quantityPerPackage: 6,
        testPerPackage: 60,
        consumptionPerTest: 0.02,
      },
      {
        nama: "Proline Uric Acid FS R1",
        satuan: "ml",
        quantityPerPackage: 100,
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Proline Uric Acid FS R2",
        satuan: "ml",
        quantityPerPackage: 25,
        testPerPackage: 100,
        consumptionPerTest: 0.25,
      },
      {
        nama: "Proline Urea FS R1",
        satuan: "ml",
        quantityPerPackage: 100,
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Proline Urea FS R2",
        satuan: "ml",
        quantityPerPackage: 25,
        testPerPackage: 100,
        consumptionPerTest: 0.25,
      },
      {
        nama: "Labiosis Creatinine R1",
        satuan: "ml",
        quantityPerPackage: 50,
        testPerPackage: 100,
        consumptionPerTest: 0.5,
      },
      {
        nama: "Labiosis Creatinine R2",
        satuan: "ml",
        quantityPerPackage: 50,
        testPerPackage: 100,
        consumptionPerTest: 0.5,
      },
      {
        nama: "Proline Cholesterol FS",
        satuan: "ml",
        quantityPerPackage: 150,
        testPerPackage: 150,
        consumptionPerTest: 1,
      },
      {
        nama: "Proline Cholesterol Standard FS",
        satuan: "ml",
        quantityPerPackage: 6,
        testPerPackage: 60,
        consumptionPerTest: 0.02,
      },
      {
        nama: "Proline Triglyseride FS 10'",
        satuan: "ml",
        quantityPerPackage: 120,
        testPerPackage: 120,
        consumptionPerTest: 1,
      },
      {
        nama: "Proline HDL-c direct FS R1",
        satuan: "ml",
        quantityPerPackage: 100,
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Proline HDL-c direct FS R2",
        satuan: "ml",
        quantityPerPackage: 25,
        testPerPackage: 100,
        consumptionPerTest: 0.25,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Vacutainer EDTA",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Spuit 3cc steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Alcohol swab",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 2,
      },
    ],
  },
  "Urinalisis-Reflactance photometri": {
    Reagen: [
      {
        nama: "FOKUS Urine Test Strip URS-10",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Pot urin steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Urine tube",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
    ],
  },
  "Urinalisis-Mikroskopis": {
    "Alat Habis Pakai": [
      {
        nama: "Pot urin steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Urine tube",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Object glass",
        satuan: "pcs",
        testPerPackage: 72,
        consumptionPerTest: 1,
      },
      {
        nama: "Deck glass (Cover glass)",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
    ],
  },
  "Urinalisis-Organoleptik": {
    "Alat Habis Pakai": [
      {
        nama: "Pot urin steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
    ],
  },
  "Mikrobiologi Klinik-Mikroskopis": {
    Reagen: [
      {
        nama: "Indec ZN (Ziehl Neelsen)",
        satuan: "ml",
        quantityPerPackage: 500,
        testPerPackage: 20,
        consumptionPerTest: 30,
      },
      {
        nama: "Methylen Blue",
        satuan: "ml",
        quantityPerPackage: 100,
        testPerPackage: 20,
        consumptionPerTest: 6,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Object glass",
        satuan: "pcs",
        testPerPackage: 72,
        consumptionPerTest: 1,
      },
      {
        nama: "Deck glass (Cover glass)",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Pipet pasteur",
        satuan: "pcs",
        testPerPackage: 500,
        consumptionPerTest: 1,
      },
    ],
  },
  "Serologi & Imunologi-Lateral Flow": {
    Reagen: [
      {
        nama: "Indec HIV Sifilis Combo",
        satuan: "pcs",
        quantityPerPackage: 25,
        testPerPackage: 25,
        consumptionPerTest: 1,
      },
      {
        nama: "Fastclear (HBsAg)",
        satuan: "pcs",
        quantityPerPackage: 25,
        testPerPackage: 25,
        consumptionPerTest: 1,
      },
      {
        nama: "Deteksi Anti HCV",
        satuan: "pcs",
        quantityPerPackage: 25,
        testPerPackage: 25,
        consumptionPerTest: 1,
      },
      {
        nama: "Virocheck HIV",
        satuan: "pcs",
        quantityPerPackage: 25,
        testPerPackage: 25,
        consumptionPerTest: 1,
      },
      {
        nama: "Onemed (Tes Kehamilan)",
        satuan: "pcs",
        quantityPerPackage: 50,
        testPerPackage: 50,
        consumptionPerTest: 1,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Vacutainer EDTA",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Spuit 3cc steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Alcohol swab",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 2,
      },
    ],
  },
  "Serologi & Imunologi-Aglutinasi": {
    Reagen: [
      {
        nama: "Onecare Reagen Widal Salmonella typhi O",
        satuan: "ml",
        quantityPerPackage: 5,
        testPerPackage: 33,
        consumptionPerTest: 0.15,
      },
      {
        nama: "Onecare Reagen Widal Salmonella typhi OH",
        satuan: "ml",
        quantityPerPackage: 5,
        testPerPackage: 33,
        consumptionPerTest: 0.15,
      },
      {
        nama: "Onecare Reagen Widal Salmonella typhi A",
        satuan: "ml",
        quantityPerPackage: 5,
        testPerPackage: 33,
        consumptionPerTest: 0.15,
      },
      {
        nama: "Onecare Reagen Widal Salmonella typhi B",
        satuan: "ml",
        quantityPerPackage: 5,
        testPerPackage: 33,
        consumptionPerTest: 0.15,
      },
      {
        nama: "Onecare Reagen Anti A",
        satuan: "ml",
        quantityPerPackage: 10,
        testPerPackage: 66,
        consumptionPerTest: 0.15,
      },
      {
        nama: "Onecare Reagen Anti B",
        satuan: "ml",
        quantityPerPackage: 10,
        testPerPackage: 66,
        consumptionPerTest: 0.15,
      },
      {
        nama: "Onecare Reagen Anti O",
        satuan: "ml",
        quantityPerPackage: 10,
        testPerPackage: 66,
        consumptionPerTest: 0.15,
      },
      {
        nama: "Onecare Reagen Anti D",
        satuan: "ml",
        quantityPerPackage: 10,
        testPerPackage: 66,
        consumptionPerTest: 0.15,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Object glass",
        satuan: "pcs",
        testPerPackage: 72,
        consumptionPerTest: 1,
      },
      {
        nama: "Lancet steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
    ],
  },
  "Serologi & Imunologi-Flokulasi": {
    Reagen: [
      {
        nama: "Focus RPR",
        satuan: "kit",
        quantityPerPackage: 100,
        testPerPackage: 100,
        consumptionPerTest: 0.05,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Vacutainer EDTA",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Spuit 3cc steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Alcohol swab",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 2,
      },
    ],
  },
  "Feses (Tinja)-Organoleptik": {
    "Alat Habis Pakai": [
      {
        nama: "Pot tinja steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
    ],
  },
  "Feses (Tinja)-Konvensional (kimia)": {
    Reagen: [
      {
        nama: "Emtech Fecal Occult Blood",
        satuan: "pcs",
        quantityPerPackage: 25,
        testPerPackage: 25,
        consumptionPerTest: 1,
      },
    ],
    "Alat Habis Pakai": [
      {
        nama: "Pot tinja steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Tabung reaksi",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
    ],
  },
  "Feses (Tinja)-Mikroskopis": {
    "Alat Habis Pakai": [
      {
        nama: "Pot tinja steril",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
      {
        nama: "Object glass",
        satuan: "pcs",
        testPerPackage: 72,
        consumptionPerTest: 1,
      },
      {
        nama: "Deck glass (Cover glass)",
        satuan: "pcs",
        testPerPackage: 100,
        consumptionPerTest: 1,
      },
    ],
  },
};

// ========================================
// MATERIAL MAPPING: bmhpMasterData -> materialDatabase
// Maps examinations to materialDatabase keys based on metode
// ========================================
const materialMapping = {
  // Lainnya
  "SHK, G6PD, SHAK": {
    "Lateral Flow": "Hematologi-Lateral Flow",
    Enzimatik: "Hematologi-Lateral Flow",
  },
  "Risiko Jantung": {
    "Konvensional (kimia)": null, // Custom materials only
  },
  "Fibrosis/Sirosis": {
    "Flow Cytometry": "Hematologi-Flow Cytometry",
    Enzimatik: "Kimia Klinik-Enzimatik",
  },
  "Kanker Payudara ": {
    "Konvensional (kimia)": null, // Custom materials only
  },
  "Kanker Leher Rahim": {
    "Pembuatan sediaan": null, // Custom materials only
  },
  Gigi: {
    Organoleptik: null, // Custom materials only
  },
  "Rekap Alkes Penunjang": {
    "Konvensional (kimia)": null, // Mixed materials
  },

  // Feses
  "Kanker Usus": {
    "Lateral Flow": "Feses (Tinja)-Konvensional (kimia)",
    Organoleptik: "Feses (Tinja)-Organoleptik",
  },

  // Hematologi
  Anemia: {
    "Lateral Flow": "Hematologi-Lateral Flow",
    "Reflactance photometri": "Hematologi-Lateral Flow",
  },
  "Talasemia Lanjutan (pemeriksaan darah lengkap)": {
    "Flow Cytometry": "Hematologi-Flow Cytometry",
  },

  // Kimia Klinik
  "Gula Darah Sewaktu": {
    Enzimatik: "Kimia Klinik-Enzimatik",
    "Reflactance photometri": "Kimia Klinik-Lateral Flow",
  },
  "Profil Lipid": {
    Enzimatik: "Kimia Klinik-Enzimatik",
  },
  "Fungsi Ginjal": {
    Enzimatik: "Kimia Klinik-Enzimatik",
  },

  // Mikrobiologi
  Tuberkulosis: {
    Mikroskopis: "Mikrobiologi Klinik-Mikroskopis",
    Molekuler: "Mikrobiologi Klinik-Mikroskopis",
    "Pembuatan sediaan": "Mikrobiologi Klinik-Mikroskopis",
  },
  "Hepatitis B": {
    "Lateral Flow": "Serologi & Imunologi-Lateral Flow",
    Aglutinasi: "Serologi & Imunologi-Lateral Flow",
  },
  "Hepatitis C": {
    "Lateral Flow": "Serologi & Imunologi-Lateral Flow",
    Aglutinasi: "Serologi & Imunologi-Lateral Flow",
  },
  "HIV dan Sifilis": {
    "Lateral Flow": "Serologi & Imunologi-Lateral Flow",
  },
  Kehamilan: {
    "Lateral Flow": "Serologi & Imunologi-Lateral Flow",
  },
  Malaria: {
    "Lateral Flow": "Serologi & Imunologi-Lateral Flow",
    Mikroskopis: "Mikrobiologi Klinik-Mikroskopis",
  },

  // Urinalisis
  Proteinuria: {
    "Reflactance photometri": "Urinalisis-Reflactance photometri",
  },
};

// ========================================
// MASTER DATA BMHP DARI EXCEL
// Data dari: master_data_perencanaan_bmhp_skrining.xlsx
// ========================================

// ========================================
// BMHP MASTER DATA V2
// Generated from: Mapping_untuk_Perencanaan_CKG.xlsx
// ========================================

// ========================================
// BMHP MASTER DATA V2
// Generated from: Mapping_untuk_Perencanaan_CKG.xlsx
// Generated at: 2026-01-05 10:32:31.530925
// ========================================

const bmhpMasterDataV2 = {
  Anemia: {
    jenisPemeriksaan: "Hematologi",
    parameters: ["Hemoglobin, penetapan kadar"],
    metode: ["Lateral Flow", "Reflactance photometri"],
    sasaran: [
      "Balita Usia 2 Tahun",
      "Catin Perempuan (18-49 thn)",
      "Ibu Hamil",
      "Perempuan 30-69 thn (Skrining Kanker)",
      "Remaja Putri Kelas 10 (16 thn)",
      "Siswa Kelas 7 (13 thn)",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Balita Usia 2 Tahun": [
          {
            nama: "[BMHP] - Hemoglobin test strip",
            templateSMILE: ["Hemoglobin test strip"],
            satuan: "test",
            consumptionPerTest: 1,
            materialType: "BMHP",
          },
          {
            nama: "[Reagen] - Paket reagen diluent cleanser",
            templateSMILE: [
              "Hematology Analyzer Reagent Kit 3 Diff",
              "Blood cell diluents",
              "Hematology Analyzer Reagent Kit 5 Diff",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
          {
            nama: "[Reagen] - Lyse",
            templateSMILE: [
              "Red cell lysing reagent",
              "Diff lyse reagent",
              "Lyse reagent",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
        ],
        "Ibu Hamil": [
          {
            nama: "Strip Hb",
            templateSMILE: ["Hemoglobin test strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Remaja Putri Kelas 10 (16 thn)": [
          {
            nama: "Strip Hb",
            templateSMILE: ["Hemoglobin test strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Siswa Kelas 7 (13 thn)": [
          {
            nama: "Strip Hb",
            templateSMILE: ["Hemoglobin test strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Catin Perempuan (18-49 thn)": [
          {
            nama: "Strip Hb",
            templateSMILE: ["Hemoglobin test strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Perempuan 30-69 thn (Skrining Kanker)": [
          {
            nama: "Alcohol Swab",
            templateSMILE: ["Alcohol Swab"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Blood Lancet",
            templateSMILE: ["Blood Lancet"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "HIV dan Sifilis": {
    jenisPemeriksaan: "Mikrobiologi Klinik, Parasitologi dan Imunologi",
    parameters: [
      "Anti HIV, kualitatif",
      "Anti HIV dan Sifilis, kualitatif",
      "Treponema Pallidum Hemagglutination Assay (TPHA) kualitatif",
    ],
    metode: ["Lateral Flow"],
    sasaran: ["Catin Laki-laki & Perempuan (18-49 thn)", "Ibu Hamil"],
    materials: {
      common: [],
      bySasaran: {
        "Ibu Hamil": [
          {
            nama: "Rapid Test HIV",
            templateSMILE: ["HIV test card/ cassette"],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Rapid Test HIV dan Sifilis combo/dual",
            templateSMILE: ["HIV & Syphilis Rapid Test"],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Rapid Test Sifilis",
            templateSMILE: [
              "Nontreponemal syphilis antibody test card/cassette",
              "Treponema pallidum treponemal antibody test card/cassette",
              "Nontreponemal syphilis antigen test card/cassette",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Catin Laki-laki & Perempuan (18-49 thn)": [
          {
            nama: "Rapid Test HIV",
            templateSMILE: ["HIV test card/ cassette"],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Rapid Test HIV dan Sifilis combo/dual",
            templateSMILE: ["HIV & Syphilis Rapid Test"],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Rapid Test Sifilis",
            templateSMILE: [
              "Nontreponemal syphilis antibody test card/cassette",
              "Treponema pallidum treponemal antibody test card/cassette",
              "Nontreponemal syphilis antigen test card/cassette",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Fibrosis/Sirosis": {
    jenisPemeriksaan: "Kimia Klinik",
    parameters: ["SGOT, penetapan kadar"],
    metode: ["Enzimatik"],
    sasaran: ["Seluruh Jumlah Penduduk", "Sesuai Jumlah Sasaran Terintegrasi"],
    materials: {
      common: [],
      bySasaran: {
        "Seluruh Jumlah Penduduk": [
          {
            nama: "Reagen SGOT",
            templateSMILE: ["AST/SGOT test kit"],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "[Reagen] - Paket reagen diluent cleanser",
            templateSMILE: [
              "Hematology Analyzer Reagent Kit 3 Diff",
              "Blood cell diluents",
              "Hematology Analyzer Reagent Kit 5 Diff",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
          {
            nama: "[Reagen] - Lyse",
            templateSMILE: [
              "Red cell lysing reagent",
              "Diff lyse reagent",
              "Lyse reagent",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
        ],
        "Sesuai Jumlah Sasaran Terintegrasi": [
          {
            nama: "Alcohol Swab",
            templateSMILE: ["Alcohol Swab"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Handscoon",
            templateSMILE: ["Handscoon"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Plester bulat bening",
            templateSMILE: ["Adhesive bandage steril"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Tabung vacutainer tutup ungu",
            templateSMILE: ["Tabung vacutainer tutup ungu"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Vacutainer Needle",
            templateSMILE: ["Blood collection safety holder disposable"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Vacutainer tutup merah",
            templateSMILE: ["Vacutainer tutup merah"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Fungsi Ginjal": {
    jenisPemeriksaan: "Kimia Klinik",
    parameters: [
      "Kreatinin, penetapan kadar",
      "Ureum/ BUN, penetapan kadar",
      "Ureum/ BUN, penetapan kadar\nKreatinin, penetapan kadar",
    ],
    metode: ["Enzimatik"],
    sasaran: [
      "Dewasa Usia 40 - 59 Tahun dengan HT & DM",
      "Lansia ≥ 60 thn dengan HT & DM",
      "Sasaran Skrining Fungsi Ginjal",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Dewasa Usia 40 - 59 Tahun dengan HT & DM": [
          {
            nama: "Reagen kreatinin",
            templateSMILE: ["Creatinine test kit", "Creatine test reagen kit"],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagen Ureum",
            templateSMILE: [
              "Urea nitrogen test reagent",
              "Urea nitrogen test reagen kit",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Lansia ≥ 60 thn dengan HT & DM": [
          {
            nama: "Reagen kreatinin",
            templateSMILE: ["Creatinine test kit", "Creatine test reagen kit"],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagen Ureum",
            templateSMILE: [
              "Urea nitrogen test reagent",
              "Urea nitrogen test reagen kit",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Sasaran Skrining Fungsi Ginjal": [
          {
            nama: "Handscoon",
            templateSMILE: ["Handscoon"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Tabung vacutainer tutup kuning",
            templateSMILE: ["Tabung vacutainer tutup kuning"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Tip Kuning",
            templateSMILE: ["Micropippette Tips"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Vacutainer Needle",
            templateSMILE: ["Blood collection safety holder disposable"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  Gigi: {
    jenisPemeriksaan: "Lainnya",
    parameters: [],
    metode: ["Manual"],
    sasaran: ["Anak Usia Sekolah Kelas 1-6 (7-12 thn)"],
    materials: {
      common: [],
      bySasaran: {
        "Anak Usia Sekolah Kelas 1-6 (7-12 thn)": [
          {
            nama: "Cawan",
            templateSMILE: ["Cawan"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Celemek dental",
            templateSMILE: ["Celemek dental"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Dental Kit",
            templateSMILE: ["Dental surgical set", "Dental restorative set"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Dental plaque disclosing",
            templateSMILE: ["Plaque Disclosing Solution"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Fluorida Varnish",
            templateSMILE: [
              "Dental varnish with flouride liquid",
              "Dental varnish with flouride gel",
              "Dental varnish",
            ],
            satuan: "ml",
            consumptionPerTest: 1,
          },
          {
            nama: "Kapas",
            templateSMILE: [
              "Medical absorbent cotton (kapas pembalut) 100 gr",
              "Medical absorbent cotton (kapas pembalut) 250 gr",
              "Medical absorbent cotton (kapas pembalut) 500 gr",
              "Medical absorbent cotton (kapas pembalut) 500 gr",
              "Medical absorbent cotton stick",
              "Cotton Applicators Wood Steril",
              "Cotton Applicators Wood Tidak Steril",
              "Stick swab (cotton/ flock)",
            ],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Microbrush",
            templateSMILE: ["Micro brush for fluoride varnish"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Gula Darah Sewaktu": {
    jenisPemeriksaan: "Kimia Klinik",
    parameters: ["Glukosa, penetapan kadar"],
    metode: ["Enzimatik", "Lateral Flow"],
    sasaran: [
      "Anak Usia Sekolah (7-12 thn) dengan Faktor Risiko",
      "Balita Usia 2 Tahun",
      "Balita Usia 3-6 Tahun dengan Risiko",
      "Dewasa Usia 18 - 59 Tahun",
      "Ibu Hamil",
      "Lansia (Umum)",
      "Sasaran Skrining GDS",
      "Siswa Kelas 10-12 (16-17 thn)",
      "Siswa Kelas 7 (13 thn)",
      "Siswa Kelas 8-9 dengan Faktor Risiko",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Anak Usia Sekolah (7-12 thn) dengan Faktor Risiko": [
          {
            nama: "Strip gula darah",
            templateSMILE: ["Glucose Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Balita Usia 3-6 Tahun dengan Risiko": [
          {
            nama: "Strip gula darah",
            templateSMILE: ["Glucose Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Balita Usia 2 Tahun": [
          {
            nama: "Strip gula darah",
            templateSMILE: ["Glucose Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Dewasa Usia 18 - 59 Tahun": [
          {
            nama: "Strip gula darah",
            templateSMILE: ["Glucose Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Ibu Hamil": [
          {
            nama: "Strip gula darah",
            templateSMILE: ["Glucose Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Siswa Kelas 10-12 (16-17 thn)": [
          {
            nama: "Strip gula darah",
            templateSMILE: ["Glucose Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Siswa Kelas 8-9 dengan Faktor Risiko": [
          {
            nama: "Strip gula darah",
            templateSMILE: ["Glucose Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Lansia (Umum)": [
          {
            nama: "Strip gula darah",
            templateSMILE: ["Glucose Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Siswa Kelas 7 (13 thn)": [
          {
            nama: "Strip gula darah",
            templateSMILE: ["Glucose Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Sasaran Skrining GDS": [
          {
            nama: "Alcohol Swab",
            templateSMILE: ["Alcohol Swab"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Blood Lancet",
            templateSMILE: ["Blood Lancet"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Hepatitis B": {
    jenisPemeriksaan: "Mikrobiologi Klinik, Parasitologi dan Imunologi",
    parameters: ["HBsAg, kualitatif"],
    metode: ["Lateral Flow"],
    sasaran: [
      "Dewasa 18-59 thn dengan Risiko Hepatitis B",
      "Ibu Hamil",
      "Lansia ≥ 60 thn dengan Risiko Hepatitis B",
      "Siswa Kelas 1-12 dengan Risiko Hepatitis B",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Ibu Hamil": [
          {
            nama: "Rapid test Hepatitis B (HBsAg)",
            templateSMILE: ["HBsAg Test Card", "HBsAg Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Siswa Kelas 1-12 dengan Risiko Hepatitis B": [
          {
            nama: "Rapid test Hepatitis B (HBsAg)",
            templateSMILE: ["HBsAg Test Card", "HBsAg Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Lansia ≥ 60 thn dengan Risiko Hepatitis B": [
          {
            nama: "Rapid test Hepatitis B (HBsAg)",
            templateSMILE: ["HBsAg Test Card", "HBsAg Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Dewasa 18-59 thn dengan Risiko Hepatitis B": [
          {
            nama: "Rapid test Hepatitis B (HBsAg)",
            templateSMILE: ["HBsAg Test Card", "HBsAg Test Strip"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Hepatitis C": {
    jenisPemeriksaan: "Mikrobiologi Klinik, Parasitologi dan Imunologi",
    parameters: ["Anti HCV, kualitatif"],
    metode: ["Lateral Flow"],
    sasaran: [
      "Dewasa 18-59 thn dengan Risiko Hepatitis C",
      "Lansia ≥ 60 thn dengan Risiko Hepatitis C",
      "Siswa Kelas 7-12 dengan Risiko Hepatitis C",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Siswa Kelas 7-12 dengan Risiko Hepatitis C": [
          {
            nama: "Rapid test Hepatitis C (anti HCV)",
            templateSMILE: ["HCV Reagent Test Strip", "HCV Test Card/Cassette"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Lansia ≥ 60 thn dengan Risiko Hepatitis C": [
          {
            nama: "Rapid test Hepatitis C (anti HCV)",
            templateSMILE: ["HCV Reagent Test Strip", "HCV Test Card/Cassette"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Dewasa 18-59 thn dengan Risiko Hepatitis C": [
          {
            nama: "Rapid test Hepatitis C (anti HCV)",
            templateSMILE: ["HCV Reagent Test Strip", "HCV Test Card/Cassette"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Kanker Leher Rahim": {
    jenisPemeriksaan: "Lainnya",
    parameters: [],
    metode: ["Manual"],
    sasaran: ["Perempuan 30-69 thn (Skrining Kanker)"],
    materials: {
      common: [],
      bySasaran: {
        "Perempuan 30-69 thn (Skrining Kanker)": [
          {
            nama: "Collecting Kit (cytobrush + VTM)",
            templateSMILE: [
              "Viral transport medium (VTM)",
              "Collection swab & virus sampling tube",
            ],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Kanker Payudara ": {
    jenisPemeriksaan: "Lainnya",
    parameters: [],
    metode: ["Manual"],
    sasaran: ["Perempuan 30-69 thn (Skrining Kanker)"],
    materials: {
      common: [],
      bySasaran: {
        "Perempuan 30-69 thn (Skrining Kanker)": [
          {
            nama: "Gel USG",
            templateSMILE: ["Ultrasound gel", "Electrode gel"],
            satuan: "ml",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Kanker Usus": {
    jenisPemeriksaan: "Feses (Tinja)",
    parameters: ["Darah samar"],
    metode: ["Lateral Flow"],
    sasaran: [],
    materials: {
      common: [
        {
          nama: "Fecal OBT",
          templateSMILE: ["Occult blood test Cassette"],
          satuan: "test",
          consumptionPerTest: 1,
        },
        {
          nama: "Handscoon",
          templateSMILE: ["Handscoon"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
        {
          nama: "Pot Sample Feses",
          templateSMILE: ["Pot Sample Feses"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
      ],
      bySasaran: {},
    },
  },
  Kehamilan: {
    jenisPemeriksaan: "Mikrobiologi Klinik, Parasitologi dan Imunologi",
    parameters: ["Tes Kehamilan, kualitatif"],
    metode: ["Lateral Flow"],
    sasaran: ["Ibu Hamil"],
    materials: {
      common: [],
      bySasaran: {
        "Ibu Hamil": [
          {
            nama: "Gel USG",
            templateSMILE: ["Ultrasound gel", "Electrode gel"],
            satuan: "ml",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  Malaria: {
    jenisPemeriksaan: "Mikrobiologi Klinik, Parasitologi dan Imunologi",
    parameters: ["Malaria, kuantitatif", "Malaria, kualitatif"],
    metode: ["Lateral Flow", "Mikroskopis"],
    sasaran: [
      "Seluruh Usia",
      "Seluruh Usia (Wilayah Endemis Tinggi)",
      "Suspek Malaria (Wilayah Endemis)",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Seluruh Usia": [
          {
            nama: "Reagensia Malaria (metanol, immertion oil dan giemsa)",
            templateSMILE: ["Bahan Pemeriksaan Malaria"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Seluruh Usia (Wilayah Endemis Tinggi)": [
          {
            nama: "Rapid Test Malaria",
            templateSMILE: ["Malaria Test Card/Cassette"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Suspek Malaria (Wilayah Endemis)": [
          {
            nama: "Rapid Test Malaria",
            templateSMILE: ["Malaria Test Card/Cassette"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Profil Lipid": {
    jenisPemeriksaan: "Kimia Klinik",
    parameters: [
      "Kolesterol total, penetapan kadar\nTrigliserida, penetapan kadar\nKolesterol HDL, penetapan kadar\nKolesterol LDL",
      "Kolesterol total, penetapan kadar",
      "Kolesterol HDL, penetapan kadar",
      "Kolesterol LDL",
      "Trigliserida, penetapan kadar",
    ],
    metode: ["Enzimatik"],
    sasaran: [
      "Dewasa Usia 40 - 59 Tahun dengan HT & DM",
      "Lansia ≥ 60 thn dengan HT & DM",
      "Sesuai Jumlah Sasaran Terintegrasi",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Dewasa Usia 40 - 59 Tahun dengan HT & DM": [
          {
            nama: "Control Normal",
            templateSMILE: ["Clinical chemistry calibrator liquid"],
            satuan: "ml",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagensia Cholesterol Total",
            templateSMILE: [
              "Cholesterol (total) test reagent",
              "Cholesterol (total) test kit",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagensia HDL Direct",
            templateSMILE: [
              "High density lipoprotein (HDL) test reagent",
              "High density lipoprotein (HDL) test kit",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagensia LDL Direct",
            templateSMILE: ["Low density lipoprotein (LDL) test kit"],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagensia Trigliserida",
            templateSMILE: [
              "Triglyceride test reagent",
              "Triglyceride test kit",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Lansia ≥ 60 thn dengan HT & DM": [
          {
            nama: "Control Normal",
            templateSMILE: ["Clinical chemistry calibrator liquid"],
            satuan: "ml",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagensia Cholesterol Total",
            templateSMILE: [
              "Cholesterol (total) test reagent",
              "Cholesterol (total) test kit",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagensia HDL Direct",
            templateSMILE: [
              "High density lipoprotein (HDL) test reagent",
              "High density lipoprotein (HDL) test kit",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagensia LDL Direct",
            templateSMILE: ["Low density lipoprotein (LDL) test kit"],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagensia Trigliserida",
            templateSMILE: [
              "Triglyceride test reagent",
              "Triglyceride test kit",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Sesuai Jumlah Sasaran Terintegrasi": [
          {
            nama: "Alcohol Swab",
            templateSMILE: ["Alcohol Swab"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Plester bulat bening",
            templateSMILE: ["Adhesive bandage steril"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Tabung vacutainer tutup kuning",
            templateSMILE: ["Tabung vacutainer tutup kuning"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Tip Kuning",
            templateSMILE: ["Micropippette Tips"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Vacutainer Needle",
            templateSMILE: ["Blood collection safety holder disposable"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  Proteinuria: {
    jenisPemeriksaan: "Urinalisis",
    parameters: [
      "pH, kuantitatif\nBerat Jenis, kuantitatif\nProtein, semi kuantitatif\nGlukosa, semi kuantitatif\nBilirubin, semi kuantitatif\nUrobilinogen, kuantitatif\nKeton, semi kuantitatif\nNitrit, semi kuantitatif\nDarah samar, semi kuantitatif",
    ],
    metode: ["Reflactance photometri"],
    sasaran: ["Ibu Hamil"],
    materials: {
      common: [],
      bySasaran: {
        "Ibu Hamil": [
          {
            nama: "Glukuproteinuria",
            templateSMILE: [
              "Urine test strip (14 parameters)",
              "Urine test strip (11 parameters)",
              "Urine test strip (10 parameters)",
              "Urine test strip (3 parameters)",
            ],
            satuan: "test",
            consumptionPerTest: 1,
          },
          {
            nama: "Pot urine",
            templateSMILE: ["Pot urine"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Rekap Alkes Penunjang": {
    jenisPemeriksaan: "Lainnya",
    parameters: [],
    metode: ["Manual"],
    sasaran: [],
    materials: {
      common: [
        {
          nama: "Blood Lancet",
          templateSMILE: ["Blood Lancet"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
        {
          nama: "Vacutainer Needle",
          templateSMILE: ["Adhesive bandage steril"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
        {
          nama: "Tabung vacutainer tutup ungu (EDTA) (K2/K3)",
          templateSMILE: ["Tabung vacutainer tutup ungu (EDTA) (K2/K3)"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
        {
          nama: "Tabung vacutainer tutup kuning",
          templateSMILE: ["Tabung vacutainer tutup kuning"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
        {
          nama: "Tip Kuning",
          templateSMILE: ["Micropippette Tips"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
        {
          nama: "Alcohol Swab",
          templateSMILE: ["Alcohol Swab"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
        {
          nama: "Handscoon",
          templateSMILE: ["Handscoon"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
        {
          nama: "plester bulat bening",
          templateSMILE: ["Adhesive bandage steril"],
          satuan: "pcs",
          consumptionPerTest: 1,
        },
      ],
      bySasaran: {},
    },
  },
  "Risiko Jantung": {
    jenisPemeriksaan: "Lainnya",
    parameters: [],
    metode: ["Manual"],
    sasaran: [
      "Dewasa Usia 40 - 59 Tahun dengan HT & DM",
      "Lansia ≥ 60 thn dengan HT & DM",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Dewasa Usia 40 - 59 Tahun dengan HT & DM": [
          {
            nama: "Gel EKG",
            templateSMILE: ["Ultrasound gel", "Electrode gel"],
            satuan: "ml",
            consumptionPerTest: 1,
          },
          {
            nama: "Thermal paper EKG",
            templateSMILE: ["ECG Paper"],
            satuan: "lembar",
            consumptionPerTest: 1,
          },
        ],
        "Lansia ≥ 60 thn dengan HT & DM": [
          {
            nama: "Gel EKG",
            templateSMILE: ["Ultrasound gel", "Electrode gel"],
            satuan: "ml",
            consumptionPerTest: 1,
          },
          {
            nama: "Thermal paper EKG",
            templateSMILE: ["ECG Paper"],
            satuan: "lembar",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "SHK, G6PD, SHAK": {
    jenisPemeriksaan: "Lainnya",
    parameters: [],
    metode: ["Manual"],
    sasaran: ["Bayi Baru Lahir (SHK)"],
    materials: {
      common: [],
      bySasaran: {
        "Bayi Baru Lahir (SHK)": [
          {
            nama: "Alcohol Swab",
            templateSMILE: ["Alcohol Swab"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Handscoon",
            templateSMILE: ["Handscoon"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Kertas Saring",
            templateSMILE: ["Kertas Saring"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Lancet Pediatric",
            templateSMILE: [
              "Lancet Pediatric",
              "Disposable lancet 26G/23G/28 G/21 G/17 G",
            ],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Plastik klip",
            templateSMILE: ["Plastik klip"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Plester",
            templateSMILE: [
              "Plester",
              "Medical adhesive tape",
              "Non Woven Adhesive",
              "Adhesive bandage steril",
              "Adhesive bandage non steril",
            ],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  "Talasemia Lanjutan (pemeriksaan darah lengkap)": {
    jenisPemeriksaan: "Hematologi",
    parameters: [
      "Hemoglobin, penetapan kadar\nHematokrit, penetapan nilai\nEritrosit, hitung jumlah\nIndeks Eritrosit (MCV, MCH, CHC), penetapan nilai\nTrombosit, hitung jumlah\nLeukosit, hitung jumlah",
    ],
    metode: ["Flow Cytometry"],
    sasaran: [
      "Balita (Umum)",
      "Balita Usia 2 Tahun",
      "Balita Usia 3-6 Tahun dengan Risiko Talasemia",
      "Sasaran Skrining Anemia & Talasemia (Sekolah)",
      "Sasaran Skrining Talasemia",
      "Usia Sekolah/Remaja (Umum)",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Balita (Umum)": [
          {
            nama: "Wing needle",
            templateSMILE: ["Wing needle"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
        "Balita Usia 2 Tahun": [
          {
            nama: "[Reagen] - Paket reagen diluent cleanser",
            templateSMILE: [
              "Hematology Analyzer Reagent Kit 3 Diff",
              "Blood cell diluents",
              "Hematology Analyzer Reagent Kit 5 Diff",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
          {
            nama: "[Reagen] - Lyse",
            templateSMILE: [
              "Red cell lysing reagent",
              "Diff lyse reagent",
              "Lyse reagent",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
        ],
        "Balita Usia 3-6 Tahun dengan Risiko Talasemia": [
          {
            nama: "[Reagen] - Paket reagen diluent cleanser",
            templateSMILE: [
              "Hematology Analyzer Reagent Kit 3 Diff",
              "Blood cell diluents",
              "Hematology Analyzer Reagent Kit 5 Diff",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
          {
            nama: "[Reagen] - Lyse",
            templateSMILE: [
              "Red cell lysing reagent",
              "Diff lyse reagent",
              "Lyse reagent",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
        ],
        "Sasaran Skrining Anemia & Talasemia (Sekolah)": [
          {
            nama: "[Reagen] - Paket reagen diluent cleanser",
            templateSMILE: [
              "Hematology Analyzer Reagent Kit 3 Diff",
              "Blood cell diluents",
              "Hematology Analyzer Reagent Kit 5 Diff",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
          {
            nama: "[Reagen] - Lyse",
            templateSMILE: [
              "Red cell lysing reagent",
              "Diff lyse reagent",
              "Lyse reagent",
            ],
            satuan: "package",
            consumptionPerTest: 1,
            materialType: "REAGEN",
            testPerPackage: 200,
          },
        ],
        "Sasaran Skrining Talasemia": [
          {
            nama: "Alcohol Swab",
            templateSMILE: ["Alcohol Swab"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Handscoon",
            templateSMILE: ["Handscoon"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Plester bulat bening",
            templateSMILE: ["Adhesive bandage steril"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Tabung vacutainer tutup ungu (EDTA)",
            templateSMILE: ["Tabung vacutainer tutup ungu ( EDTA) (K2/K3)"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
        "Usia Sekolah/Remaja (Umum)": [
          {
            nama: "Wing needle",
            templateSMILE: [
              "Wing needle",
              "Scalp Vein Set 25 G/19 G/27 G/23 G",
            ],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
  Tuberkulosis: {
    jenisPemeriksaan: "Mikrobiologi Klinik, Parasitologi dan Imunologi",
    parameters: ["BTA Mycobacterium Tuberculosis (semi kuantitatif)"],
    metode: ["Mikroskopis", "TCM"],
    sasaran: [
      "Estimasi Kasus TB (Semua Usia)",
      "Estimasi Kasus TB Anak (0-14 thn)",
    ],
    materials: {
      common: [],
      bySasaran: {
        "Estimasi Kasus TB (Semua Usia)": [
          {
            nama: "Cartridge TCM",
            templateSMILE: [
              "Mycobacterium tuberculosis PCR test kit",
              "MDR-TB test kit",
              "Mycobacterium tuberculosis IgG/IgM test kit",
            ],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Pot Sputum",
            templateSMILE: ["Pot Sputum"],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
          {
            nama: "Reagensia BTA",
            templateSMILE: ["Reagensia BTA"],
            satuan: "test",
            consumptionPerTest: 1,
          },
        ],
        "Estimasi Kasus TB Anak (0-14 thn)": [
          {
            nama: "Tuberkulin Vial",
            templateSMILE: [
              "Tuberculin Purified Protein Derivative RT23 0,4 mcg/0,1 mL Suspensi Injeksi",
              "Tuberculin Purified Protein Derivative 5 TU/0,1 mL Larutan Injeksi",
            ],
            satuan: "pcs",
            consumptionPerTest: 1,
          },
        ],
      },
    },
  },
};

// ========================================
// HELPER FUNCTIONS FOR BMHP MASTER DATA V2
// ========================================

function getBMHPJenisPemeriksaan() {
  const jenisSet = new Set();
  Object.values(bmhpMasterDataV2).forEach((data) => {
    jenisSet.add(data.jenisPemeriksaan);
  });
  return Array.from(jenisSet)
    .filter((k) => k !== "Lainnya")
    .sort();
}

function getBMHPPemeriksaanByJenis(jenisPemeriksaan) {
  const pemeriksaanList = [];
  Object.keys(bmhpMasterDataV2).forEach((pemeriksaan) => {
    if (bmhpMasterDataV2[pemeriksaan].jenisPemeriksaan === jenisPemeriksaan) {
      pemeriksaanList.push(pemeriksaan);
    }
  });
  return pemeriksaanList.sort();
}

function getBMHPParameters(jenisPemeriksaan, pemeriksaan) {
  const data = bmhpMasterDataV2[pemeriksaan];
  if (!data) return [];
  return data.parameters || [];
}

function getBMHPMaterials(jenisPemeriksaan, pemeriksaan) {
  const data = bmhpMasterDataV2[pemeriksaan];
  if (!data) return [];
  const materials = [...(data.materials?.common || [])];
  if (data.materials?.bySasaran) {
    Object.values(data.materials.bySasaran).forEach((mats) => {
      materials.push(...mats);
    });
  }
  return materials;
}

function getBMHPSasaran(jenisPemeriksaan, pemeriksaan) {
  const data = bmhpMasterDataV2[pemeriksaan];
  if (!data) return [];
  return data.sasaran || [];
}

console.log("✅ BMHP Master Data V2 berhasil dimuat!");
console.log("📊 Total Jenis Pemeriksaan:", getBMHPJenisPemeriksaan().length);
console.log("📊 Total Pemeriksaan:", Object.keys(bmhpMasterDataV2).length);

// ========================================
// MASTER DATA SASARAN SKRINING
// Berdasarkan Siklus Hidup (Kemenkes RI)
// ========================================

const masterSasaranSkrining = {
  "01_neonatus": {
    id: "neonatus",
    nama: "Neonatus (0-28 hari)",
    alias: ["Bayi Baru Lahir", "Neonatus"],
    rentang_usia: "0-28 hari",
    kategori: "Bayi",
  },
  "02_bayi": {
    id: "bayi",
    nama: "Bayi (1-11 bulan)",
    alias: ["Bayi"],
    rentang_usia: "1-11 bulan",
    kategori: "Bayi",
  },
  "03_balita": {
    id: "balita",
    nama: "Balita (1-5 tahun)",
    alias: [
      "Balita",
      "Balita 2 tahun",
      "Balita Usia 2 tahun",
      "Balita 3-6 tahun",
      "Balita 3-6 thn Faktor Risiko Talasemia",
      "Balita 2 tahun dengan Anemia",
    ],
    rentang_usia: "1-5 tahun",
    kategori: "Anak",
  },
  "04_anak_sekolah": {
    id: "anak_sekolah",
    nama: "Anak Usia Sekolah (6-12 tahun)",
    alias: [
      "Anak Usia Sekolah",
      "Kelas 1 - 6 ( usia 7 - 12 tahun)",
      "Anak Usia Sekolah Kelas 1 - 6 ( usia 7-12 tahun) dengan faktor risiko",
      "usia sekolah/remaja",
    ],
    rentang_usia: "6-12 tahun",
    kategori: "Anak",
  },
  "05_remaja": {
    id: "remaja",
    nama: "Remaja (13-18 tahun)",
    alias: [
      "Remaja",
      "Kelas 7 (remaja laki - laki dan putri, usia 13 thn)",
      "Seluruh Kelas 7 (13 tahun)",
      "Kelas 7 dengan Anemia",
      "Kelas 8 -9 ( 14 - 15 tahun) dengan faktor risiko",
      "Kelas 10 (remaja putri, usia 16 tahun)",
      "Kelas 10 - 12 (usia 16 - 17 tahun)",
      "Kelas 8-12 ( 13-17 tahun) dengan faktor risiko Talasemia",
      "Kelas 1 - 12 ( 7 - 17 tahun) memiliki faktor risiko Hepatitis B",
      "Kelas 7 - 12 ( 13 - 17 tahun) memiliki faktor risiko hepatitis C",
    ],
    rentang_usia: "13-18 tahun",
    kategori: "Remaja",
  },
  "06_dewasa": {
    id: "dewasa",
    nama: "Dewasa (19-59 tahun)",
    alias: [
      "Dewasa",
      "Dewasa Usia 18 - 59 tahun",
      "Dewasa Usia 40 - 59 dengan HT & DM",
      "Dewasa usia 40-59 tahun dengan HT & DM",
      "Usia 18 -59 tahun (Memiliki faktor risiko Hepatitis B)",
      "Usia 18 - 59 tahun ke atas (Memiliki faktor risiko Hepatitis C)",
      "Perempuan 30-69 tahun",
      "Laki-laki dan Perempuan usia  ≥ 45 tahun",
    ],
    rentang_usia: "19-59 tahun",
    kategori: "Dewasa",
  },
  "07_lansia": {
    id: "lansia",
    nama: "Lansia (≥60 tahun)",
    alias: [
      "Lansia",
      "Lansia 60 tahun ke atas dengan HT & DM",
      "Lansia Usia 60 tahun ke atas dengan HT & DM",
      "Usia ≥ 60 tahun (Memiliki faktor risiko Hepatitis B)",
      "Usia >=60 tahun ke atas (Memiliki faktor risiko Hepatitis C)",
    ],
    rentang_usia: "≥60 tahun",
    kategori: "Lansia",
  },
  "08_ibu_hamil": {
    id: "ibu_hamil",
    nama: "Ibu Hamil",
    alias: ["Ibu Hamil"],
    rentang_usia: "Semua usia",
    kategori: "Khusus - Maternal",
  },
  "09_ibu_nifas": {
    id: "ibu_nifas",
    nama: "Ibu Nifas",
    alias: ["Ibu Nifas"],
    rentang_usia: "Semua usia",
    kategori: "Khusus - Maternal",
  },
  "10_catin": {
    id: "catin",
    nama: "Calon Pengantin (18-49 tahun)",
    alias: [
      "Calon Pengantin",
      "Catin",
      "perempuan catin usia 18-49 tahun",
      "Laki-laki dan perempuan catin usia 18-49 tahun",
    ],
    rentang_usia: "18-49 tahun",
    kategori: "Khusus - Reproduksi",
  },
  "11_wus": {
    id: "wus",
    nama: "Wanita Usia Subur (15-49 tahun)",
    alias: ["Wanita Usia Subur", "WUS"],
    rentang_usia: "15-49 tahun",
    kategori: "Khusus - Reproduksi",
  },
  "12_pekerja": {
    id: "pekerja",
    nama: "Pekerja/Karyawan",
    alias: ["Pekerja", "Karyawan"],
    rentang_usia: "Semua usia produktif",
    kategori: "Khusus - Okupasi",
  },
  "13_risiko_hipertensi": {
    id: "risiko_hipertensi",
    nama: "Dengan Hipertensi",
    alias: ["Dengan HT", "Hipertensi", "dengan HT & DM"],
    rentang_usia: "Semua usia",
    kategori: "Risiko - Penyakit Kronis",
  },
  "14_risiko_diabetes": {
    id: "risiko_diabetes",
    nama: "Dengan Diabetes Melitus",
    alias: ["Dengan DM", "Diabetes", "dengan HT & DM"],
    rentang_usia: "Semua usia",
    kategori: "Risiko - Penyakit Kronis",
  },
  "15_risiko_talasemia": {
    id: "risiko_talasemia",
    nama: "Dengan Faktor Risiko Talasemia",
    alias: ["dengan faktor risiko Talasemia", "Faktor Risiko Talasemia"],
    rentang_usia: "Semua usia",
    kategori: "Risiko - Genetik",
  },
  "16_kontak_tbc": {
    id: "kontak_tbc",
    nama: "Kontak TBC",
    alias: [
      "Kontak TBC",
      "Estimasi kasus TB",
      "Estimasi kasus TB anak 0 - 14 tahun",
    ],
    rentang_usia: "Semua usia",
    kategori: "Risiko - Penyakit Menular",
  },
  "17_endemis_malaria": {
    id: "endemis_malaria",
    nama: "Daerah Endemis Malaria",
    alias: [
      "Seluruh usia di Endemis tinggi",
      "suspek malaria di endemis sedang s/d pemeliharaan",
    ],
    rentang_usia: "Semua usia",
    kategori: "Risiko - Geografis",
  },
  "18_semua_penduduk": {
    id: "semua_penduduk",
    nama: "Seluruh Penduduk",
    alias: ["Seluruh jumlah penduduk", "Seluruh usia", "Sesuai sasaran diatas"],
    rentang_usia: "Semua usia",
    kategori: "Umum",
  },
};

// ========================================
// FUNGSI HELPER UNTUK SASARAN
// ========================================

/**
 * Get daftar sasaran untuk dropdown
 * Mengelompokkan berdasarkan kategori
 */
function getSasaranOptions() {
  const grouped = {};

  Object.keys(masterSasaranSkrining).forEach((key) => {
    const data = masterSasaranSkrining[key];
    const kategori = data.kategori;

    if (!grouped[kategori]) {
      grouped[kategori] = [];
    }

    grouped[kategori].push({
      id: data.id,
      nama: data.nama,
      rentang_usia: data.rentang_usia,
    });
  });

  return grouped;
}

/**
 * Get nama sasaran berdasarkan ID
 */
function getSasaranNama(sasaranId) {
  for (let key in masterSasaranSkrining) {
    if (masterSasaranSkrining[key].id === sasaranId) {
      return masterSasaranSkrining[key].nama;
    }
  }
  return null;
}

/**
 * Get data lengkap sasaran berdasarkan ID
 */
function getSasaranData(sasaranId) {
  for (let key in masterSasaranSkrining) {
    if (masterSasaranSkrining[key].id === sasaranId) {
      return masterSasaranSkrining[key];
    }
  }
  return null;
}

/**
 * Mapping sasaran dari Excel ke master sasaran ID
 * Untuk backward compatibility dengan data lama
 */
function mapExcelSasaranToMaster(excelSasaran) {
  const matched = [];

  for (let key in masterSasaranSkrining) {
    const data = masterSasaranSkrining[key];

    // Cek apakah excelSasaran match dengan alias
    for (let alias of data.alias) {
      if (
        alias.toLowerCase().includes(excelSasaran.toLowerCase()) ||
        excelSasaran.toLowerCase().includes(alias.toLowerCase())
      ) {
        if (!matched.includes(data.id)) {
          matched.push(data.id);
        }
        break;
      }
    }
  }

  return matched.length > 0 ? matched : ["semua_penduduk"];
}

/**
 * Generate HTML options untuk dropdown sasaran
 */
function generateSasaranDropdownHTML() {
  const grouped = getSasaranOptions();
  let html = '<option value="">Pilih Sasaran</option>';
  html += '<option value="semua">-- Semua Sasaran --</option>';

  // Urutkan kategori
  const kategoriOrder = [
    "Bayi",
    "Anak",
    "Remaja",
    "Dewasa",
    "Lansia",
    "Khusus - Maternal",
    "Khusus - Reproduksi",
    "Khusus - Okupasi",
    "Risiko - Penyakit Kronis",
    "Risiko - Genetik",
    "Risiko - Penyakit Menular",
    "Risiko - Geografis",
    "Umum",
  ];

  kategoriOrder.forEach((kategori) => {
    if (grouped[kategori]) {
      html += `<optgroup label="${kategori}">`;
      grouped[kategori].forEach((item) => {
        html += `<option value="${item.id}">${item.nama}</option>`;
      });
      html += "</optgroup>";
    }
  });

  return html;
}

console.log("✅ Master Sasaran Skrining berhasil dimuat!");
console.log("📊 Total Sasaran:", Object.keys(masterSasaranSkrining).length);

// DUPLICATE HELPERS REMOVED

// Global variables for form state
let selectedTipePemeriksaan = [];
let selectedParameters = [];
let selectedType = null;
let customMaterials = { Reagen: [], "Alat Habis Pakai": [] };
let currentAddCategory = "";
let jumlahSampel = 0;
let jumlahTes = 0;
let sampleDataArray = [];
let pengeluaranData = [];

// Data Penerima untuk Distribusi Akhir
const penerimaDistribusiData = [
  {
    id: "lab-gayungan",
    nama: "LAB PUSKESMAS GAYUNGAN",
    lokasi: "Gayungan, Surabaya",
  },
  {
    id: "igd-gayungan",
    nama: "IGD PUSKESMAS GAYUNGAN",
    lokasi: "Gayungan, Surabaya",
  },
  {
    id: "farmasi-gayungan",
    nama: "RUANG FARMASI PUSKESMAS GAYUNGAN",
    lokasi: "Gayungan, Surabaya",
  },
  { id: "pustu-gayungan", nama: "PUSTU GAYUNGAN", lokasi: "GAYUNGAN" },
];

let selectedPenerimaDistribusi = null;

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  initializeTipePemeriksaanDropdown();
  const paramDropdown = document.getElementById("parameterDropdown");
  if (paramDropdown) {
    paramDropdown.innerHTML =
      '<div style="padding: 15px; text-align: center; color: #999;">Pilih tipe pemeriksaan terlebih dahulu</div>';
  }
  addSampleData();
  initializeKeslingCustomers();
});

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function goBack() {
  const form = document.getElementById("labDistributionForm");
  const menu = document.getElementById("inventoryMenu");
  const riwayat = document.getElementById("riwayatPengeluaranSection");
  const stok = document.getElementById("stokSection");
  const distribusi = document.getElementById("distribusiAkhirSection");
  const penerimaDistribusi = document.getElementById(
    "pilihPenerimaDistribusiSection",
  );
  const perencanaanBMHP = document.getElementById("perencanaanBMHPSection");
  const keslingSection = document.getElementById("pengujianKeslingSection");
  const riwayatKesling = document.getElementById("riwayatKeslingSection");
  const title = document.getElementById("pageTitle");
  const step0 = document.getElementById("step0Section");
  const step1 = document.getElementById("step1Section");
  const step2 = document.getElementById("step2Section");
  const step3 = document.getElementById("step3Section");
  const keslingStep1 = document.getElementById("keslingStep1");
  const keslingStep2 = document.getElementById("keslingStep2");
  const keslingStep3 = document.getElementById("keslingStep3");

  if (step3.style.display === "block") {
    backFromStep3();
  } else if (step2.style.display === "block") {
    backFromStep2();
  } else if (step1.style.display === "block") {
    backFromStep1();
  } else if (form.style.display === "block") {
    form.style.display = "none";
    menu.style.display = "block";
    title.textContent = "Inventaris";
    resetForm();
  } else if (riwayat.style.display === "block") {
    riwayat.style.display = "none";
    menu.style.display = "block";
    title.textContent = "Inventaris";
  } else if (riwayatKesling.style.display === "block") {
    riwayatKesling.style.display = "none";
    menu.style.display = "block";
    title.textContent = "Inventaris";
  } else if (stok.style.display === "block") {
    stok.style.display = "none";
    menu.style.display = "block";
    title.textContent = "Inventaris";
  } else if (distribusi.style.display === "block") {
    distribusi.style.display = "none";
    penerimaDistribusi.style.display = "block";
    title.textContent = "Distribusi Akhir";
    selectedPenerimaDistribusi = null;
  } else if (penerimaDistribusi.style.display === "block") {
    penerimaDistribusi.style.display = "none";
    menu.style.display = "block";
    title.textContent = "Inventaris";
  } else if (perencanaanBMHP.style.display === "block") {
    perencanaanBMHP.style.display = "none";
    menu.style.display = "block";
    title.textContent = "Inventaris";
  } else if (keslingStep3.style.display === "block") {
    goToKeslingStep2();
  } else if (keslingStep2.style.display === "block") {
    goToKeslingStep1();
  } else if (keslingSection.style.display === "block") {
    keslingSection.style.display = "none";
    menu.style.display = "block";
    title.textContent = "Inventaris";
  }
}

function showPage(pageName) {
  const form = document.getElementById("labDistributionForm");
  const menu = document.getElementById("inventoryMenu");
  const history = document.getElementById("riwayatPengeluaranSection");
  const stokSection = document.getElementById("stokSection");
  const distribusiSection = document.getElementById("distribusiAkhirSection");
  const penerimaDistribusiSection = document.getElementById(
    "pilihPenerimaDistribusiSection",
  );
  const perencanaanBMHPSection = document.getElementById(
    "perencanaanBMHPSection",
  );
  const keslingSection = document.getElementById("pengujianKeslingSection");
  const riwayatKeslingSection = document.getElementById("riwayatKeslingSection");
  const title = document.getElementById("pageTitle");

  // Hide all sections first
  form.style.display = "none";
  menu.style.display = "none";
  history.style.display = "none";
  stokSection.style.display = "none";
  distribusiSection.style.display = "none";
  penerimaDistribusiSection.style.display = "none";
  perencanaanBMHPSection.style.display = "none";
  keslingSection.style.display = "none";
  riwayatKeslingSection.style.display = "none";

  switch (pageName) {
    case "labDistribution":
      form.style.display = "block";
      title.textContent = "Pengeluaran Lab";
      break;
    case "riwayatPengeluaran":
      history.style.display = "block";
      title.textContent = "Riwayat Pengeluaran";
      renderHistory();
      break;
    case "riwayatKesling":
      riwayatKeslingSection.style.display = "block";
      title.textContent = "Riwayat Pengujian Kesling";
      renderHistoryKesling();
      break;
    case "stokSection":
      stokSection.style.display = "block";
      title.textContent = "Stok Material";
      document.getElementById("stokSearch").value = "";
      renderStokMaterial();
      break;
    case "distribusiAkhir":
      penerimaDistribusiSection.style.display = "block";
      distribusiSection.style.display = "none";
      title.textContent = "Distribusi Akhir";
      document.getElementById("searchPenerimaDistribusi").value = "";
      renderPenerimaDistribusiList();
      break;
    case "perencanaanBMHP":
      perencanaanBMHPSection.style.display = "block";
      title.textContent = "Perencanaan BMHP Skrining";
      resetBMHPForm();
      break;
    case "pengujianKesling":
      keslingSection.style.display = "block";
      title.textContent = "Pengujian Kesling";
      resetKeslingForm();
      break;
    default:
      menu.style.display = "block";
      title.textContent = "Inventaris";
  }
  window.scrollTo(0, 0);
}

function resetForm() {
  document.getElementById("step1Form").reset();
  document.getElementById("step2Form").reset();
  const checkboxes = document.querySelectorAll(".multi-select-checkbox");
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  selectedParameters = [];
  document.getElementById("parameterPlaceholder").style.display = "block";
  document.getElementById("parameterValues").style.display = "none";
  document.getElementById("parameterHidden").value = "";
  selectedType = null;
  customMaterials = { Reagen: [], "Alat Habis Pakai": [] };
  jumlahSampel = 0;
  jumlahTes = 0;
  sampleDataArray = [];
  document
    .querySelectorAll(".type-card")
    .forEach((card) => card.classList.remove("selected"));
  document
    .querySelectorAll('input[name="tipeOutput"]')
    .forEach((radio) => (radio.checked = false));
  document.getElementById("step0Section").style.display = "block";
  document.getElementById("step1Section").style.display = "none";
  document.getElementById("step2Section").style.display = "none";
  document.getElementById("step3Section").style.display = "none";
}

// ========================================
// PERENCANAAN BMHP SKRINING FUNCTIONS
// ========================================
function resetBMHPForm() {
  document.getElementById("bmhpTahunSelect").value = "";
  document.getElementById("bmhpPemeriksaanSelect").value = "";

  // Reset Sasaran multi-select
  const sasaranHidden = document.getElementById("bmhpSasaranHidden");
  const sasaranPlaceholder = document.getElementById("bmhpSasaranPlaceholder");
  const sasaranValues = document.getElementById("bmhpSasaranValues");
  const sasaranDropdown = document.getElementById("bmhpSasaranDropdown");

  if (sasaranHidden) sasaranHidden.value = "";
  if (sasaranPlaceholder) sasaranPlaceholder.style.display = "inline";
  if (sasaranValues) {
    sasaranValues.style.display = "none";
    sasaranValues.innerHTML = "";
  }
  if (sasaranDropdown) {
    const checkboxes = sasaranDropdown.querySelectorAll(
      'input[type="checkbox"]',
    );
    checkboxes.forEach((cb) => (cb.checked = false));
  }

  // Reset Metode multi-select
  const dropdown = document.getElementById("bmhpMetodeDropdown");
  const hiddenInput = document.getElementById("bmhpMetodeHidden");
  const placeholder = document.getElementById("bmhpMetodePlaceholder");
  const valuesSpan = document.getElementById("bmhpMetodeValues");

  if (hiddenInput) hiddenInput.value = "";
  if (placeholder) placeholder.style.display = "inline";
  if (valuesSpan) {
    valuesSpan.style.display = "none";
    valuesSpan.innerHTML = "";
  }
  if (dropdown) {
    dropdown.innerHTML =
      '<div style="padding: 15px; text-align: center; color: #999;">Pilih pemeriksaan terlebih dahulu</div>';
    dropdown.style.display = "none";
  }

  document.getElementById("bmhpJenisPemeriksaanGroup").style.display = "none";
  document.getElementById("bmhpParameterGroup").style.display = "none";
}

// ========================================
// BMHP MULTI-SELECT METODE - FUNGSI LENGKAP
// Tambahkan kode ini ke script.js Anda
// ========================================

// ==================== BAGIAN 1: TOGGLE DROPDOWN ====================

/**
 * Toggle multi-select dropdown untuk Metode BMHP
 */
function toggleBMHPMetodeDropdown() {
  const dropdown = document.getElementById("bmhpMetodeDropdown");
  if (!dropdown) return;

  const isVisible = dropdown.style.display === "block";

  // Close all other dropdowns first
  document.querySelectorAll(".multi-select-dropdown").forEach((d) => {
    d.style.display = "none";
  });

  // Toggle this dropdown
  dropdown.style.display = isVisible ? "none" : "block";
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  // Check if click is outside multi-select
  if (
    !event.target.closest(".multi-select-display") &&
    !event.target.closest(".multi-select-dropdown")
  ) {
    document.querySelectorAll(".multi-select-dropdown").forEach((d) => {
      d.style.display = "none";
    });
  }
});

// ==================== BAGIAN 2: POPULATE METODE OPTIONS ====================

/**
 * Mapping metode berdasarkan pemeriksaan
 * Sesuaikan dengan data Anda
 */
const metodePerPemeriksaan = {
  // Lainnya
  "SHK, G6PD, SHAK": ["Lateral Flow", "Enzimatik"],
  "Risiko Jantung": ["Konvensional (kimia)"],
  "Fibrosis/Sirosis": ["Flow Cytometry", "Enzimatik"],
  "Kanker Payudara ": ["Konvensional (kimia)"],
  "Kanker Leher Rahim": ["Pembuatan sediaan"],
  Gigi: ["Organoleptik"],
  "Rekap Alkes Penunjang": ["Konvensional (kimia)"],

  // Hematologi
  Anemia: ["Lateral Flow", "Reflactance photometri"],
  "Talasemia Lanjutan (pemeriksaan darah lengkap)": ["Flow Cytometry"],

  // Kimia Klinik
  "Gula Darah Sewaktu": ["Enzimatik", "Reflactance photometri"],
  "Profil Lipid": ["Enzimatik"],
  "Fungsi Ginjal": ["Enzimatik"],

  // Mikrobiologi Klinik, Parasitologi dan Imunologi
  Tuberkulosis: ["Mikroskopis", "Molekuler", "Pembuatan sediaan"],
  "Hepatitis B": ["Lateral Flow", "Aglutinasi"],
  "Hepatitis C": ["Lateral Flow", "Aglutinasi"],
  "HIV dan Sifilis": ["Lateral Flow"],
  Kehamilan: ["Lateral Flow"],
  Malaria: ["Lateral Flow", "Mikroskopis"],

  // Urinalisis
  Proteinuria: ["Reflactance photometri"],

  // Feses (Tinja)
  "Kanker Usus": ["Lateral Flow", "Organoleptik"],
};

/**
 * Update metode options berdasarkan pemeriksaan yang dipilih
 */
/**
 * Update metode options berdasarkan pemeriksaan yang dipilih dari bmhpMasterDataV2
 */
function updateBMHPMetodeOptions(pemeriksaan) {
  const dropdown = document.getElementById("bmhpMetodeDropdown");
  if (!dropdown) return;

  // Get metode list dari bmhpMasterDataV2
  const pemeriksaanData = bmhpMasterDataV2[pemeriksaan];
  let metodeList = pemeriksaanData ? pemeriksaanData.metode : [];

  // Clear dropdown
  dropdown.innerHTML = "";

  if (metodeList.length > 0) {
    // Add "Semua Metode" option
    const allDiv = document.createElement("div");
    allDiv.className = "multi-select-option";
    allDiv.innerHTML = `
      <input
        type="checkbox"
        id="bmhpMetode_semua"
        value="semua"
        onchange="toggleBMHPAllMetode(this)"
      />
      <label for="bmhpMetode_semua">-- Semua Metode --</label>
    `;
    dropdown.appendChild(allDiv);

    // Add individual metode options
    metodeList.forEach((metode) => {
      const div = document.createElement("div");
      div.className = "multi-select-option";
      const safeId = metode.replace(/\s+/g, "_").replace(/[()]/g, "");
      div.innerHTML = `
        <input
          type="checkbox"
          id="bmhpMetode_${safeId}"
          value="${metode}"
          onchange="updateBMHPMetodeSelection()"
          class="bmhp-metode-checkbox"
        />
        <label for="bmhpMetode_${safeId}">${metode}</label>
      `;
      dropdown.appendChild(div);
    });
  } else {
    // No metode available
    dropdown.innerHTML = `
      <div style="padding: 15px; text-align: center; color: #999;">
        Tidak ada metode tersedia untuk pemeriksaan ini
      </div>
    `;
  }
}

// ==================== BAGIAN 3: HANDLE SELECTION ====================

/**
 * Toggle semua metode
 */
function toggleBMHPAllMetode(checkbox) {
  const allCheckboxes = document.querySelectorAll(".bmhp-metode-checkbox");
  allCheckboxes.forEach((cb) => {
    cb.checked = checkbox.checked;
  });
  updateBMHPMetodeSelection();
}

/**
 * Update tampilan selection
 */
function updateBMHPMetodeSelection() {
  const checkboxes = document.querySelectorAll(".bmhp-metode-checkbox:checked");
  const placeholder = document.getElementById("bmhpMetodePlaceholder");
  const valuesSpan = document.getElementById("bmhpMetodeValues");
  const hiddenInput = document.getElementById("bmhpMetodeHidden");

  if (!placeholder || !valuesSpan || !hiddenInput) return;

  const selectedValues = Array.from(checkboxes).map((cb) => cb.value);

  if (selectedValues.length === 0) {
    // No selection
    placeholder.style.display = "inline";
    valuesSpan.style.display = "none";
    hiddenInput.value = "";
  } else {
    // Has selection
    placeholder.style.display = "none";
    valuesSpan.style.display = "inline";

    // Display selected values as badges
    valuesSpan.innerHTML = selectedValues
      .map((val) => `<span class="multi-select-badge">${val}</span>`)
      .join("");

    // Save to hidden input (comma-separated)
    hiddenInput.value = selectedValues.join(",");
  }

  // Update "Semua Metode" checkbox state
  const allMetodeCheckbox = document.getElementById("bmhpMetode_semua");
  const totalCheckboxes = document.querySelectorAll(
    ".bmhp-metode-checkbox",
  ).length;
  if (allMetodeCheckbox) {
    allMetodeCheckbox.checked = selectedValues.length === totalCheckboxes;
  }
}

// ==================== MULTI-SELECT SASARAN FUNCTIONS ====================

/**
 * Populate pemeriksaan dropdown from bmhpMasterData
 * Show all examinations (materials will be added from materialDatabase)
 */
/**
 * Populate pemeriksaan dropdown from bmhpMasterDataV2
 * Groups by jenisPemeriksaan and shows all examinations
 */
function populateBMHPPemeriksaanDropdown() {
  const select = document.getElementById("bmhpPemeriksaanSelect");
  if (!select) return;

  // Clear existing options except the first one
  select.innerHTML = '<option value="">Pilih Pemeriksaan</option>';

  // Group pemeriksaan by jenisPemeriksaan
  const groupedData = {};

  Object.keys(bmhpMasterDataV2).forEach((pemeriksaanName) => {
    const data = bmhpMasterDataV2[pemeriksaanName];
    const jenis = data.jenisPemeriksaan;

    if (!groupedData[jenis]) {
      groupedData[jenis] = [];
    }
    groupedData[jenis].push(pemeriksaanName);
  });

  // Create optgroups
  Object.keys(groupedData)
    .sort()
    .forEach((jenis) => {
      const optgroup = document.createElement("optgroup");
      optgroup.label = jenis;

      groupedData[jenis].sort().forEach((pemeriksaan) => {
        const option = document.createElement("option");
        option.value = pemeriksaan;
        option.textContent = pemeriksaan;
        optgroup.appendChild(option);
      });

      select.appendChild(optgroup);
    });
}

// Populate on page load
document.addEventListener("DOMContentLoaded", function () {
  populateBMHPPemeriksaanDropdown();
});

/**
 * Toggle multi-select dropdown untuk Sasaran BMHP
 */
function toggleBMHPSasaranDropdown() {
  const dropdown = document.getElementById("bmhpSasaranDropdown");
  if (!dropdown) return;

  const isVisible = dropdown.style.display === "block";
  dropdown.style.display = isVisible ? "none" : "block";
}

/**
 * Toggle semua sasaran
 */
function toggleBMHPAllSasaran(checkbox) {
  const allCheckboxes = document.querySelectorAll(".bmhp-sasaran-checkbox");
  allCheckboxes.forEach((cb) => {
    cb.checked = checkbox.checked;
  });
  updateBMHPSasaranSelection();
}

/**
 * Update tampilan selection sasaran
 */
function updateBMHPSasaranSelection() {
  const checkboxes = document.querySelectorAll(
    ".bmhp-sasaran-checkbox:checked",
  );
  const placeholder = document.getElementById("bmhpSasaranPlaceholder");
  const valuesSpan = document.getElementById("bmhpSasaranValues");
  const hiddenInput = document.getElementById("bmhpSasaranHidden");

  if (!placeholder || !valuesSpan || !hiddenInput) return;

  const selectedValues = Array.from(checkboxes).map((cb) => cb.value);

  if (selectedValues.length === 0) {
    // No selection
    placeholder.style.display = "inline";
    valuesSpan.style.display = "none";
    hiddenInput.value = "";
  } else {
    // Has selection
    placeholder.style.display = "none";
    valuesSpan.style.display = "inline";

    // Display selected values as badges
    const displayText =
      selectedValues.length === 1
        ? selectedValues[0]
        : `${selectedValues.length} sasaran dipilih`;

    valuesSpan.innerHTML = `<span class="multi-select-badge">${displayText}</span>`;

    // Save to hidden input (comma-separated)
    hiddenInput.value = selectedValues.join(",");
  }

  // Update "Semua Sasaran" checkbox state
  const allSasaranCheckbox = document.getElementById("bmhpSasaran_semua");
  const totalCheckboxes = document.querySelectorAll(
    ".bmhp-sasaran-checkbox",
  ).length;
  if (allSasaranCheckbox) {
    allSasaranCheckbox.checked = selectedValues.length === totalCheckboxes;
  }
}

function onBMHPPemeriksaanChange() {
  const pemeriksaan = document.getElementById("bmhpPemeriksaanSelect").value;
  const jenisPemeriksaanGroup = document.getElementById(
    "bmhpJenisPemeriksaanGroup",
  );
  const parameterGroup = document.getElementById("bmhpParameterGroup");
  const jenisPemeriksaanInfo = document.getElementById(
    "bmhpJenisPemeriksaanInfo",
  );
  const parameterList = document.getElementById("bmhpParameterList");
  const sasaranDropdown = document.getElementById("bmhpSasaranDropdown");
  const metodeDropdown = document.getElementById("bmhpMetodeDropdown");

  if (!pemeriksaan) {
    jenisPemeriksaanGroup.style.display = "none";
    parameterGroup.style.display = "none";
    // Reset sasaran dropdown
    sasaranDropdown.innerHTML = `
      <div class="multi-select-option">
        <input type="checkbox" id="bmhpSasaran_semua" value="semua" onchange="toggleBMHPAllSasaran(this)" />
        <label for="bmhpSasaran_semua">-- Semua Sasaran --</label>
      </div>
    `;
    // Reset metode dropdown
    metodeDropdown.innerHTML = "";
    updateBMHPSasaranSelection();
    updateBMHPMetodeSelection();
    return;
  }

  // GET DATA from bmhpMasterDataV2
  const pemeriksaanData = bmhpMasterDataV2[pemeriksaan];

  if (!pemeriksaanData) {
    alert("Data pemeriksaan tidak ditemukan!");
    return;
  }

  const jenisPemeriksaan = pemeriksaanData.jenisPemeriksaan;
  const parameters = pemeriksaanData.parameters || [];
  const sasaranList = pemeriksaanData.sasaran || [];
  const metodeList = pemeriksaanData.metode || [];

  // TAMPILKAN JENIS PEMERIKSAAN
  jenisPemeriksaanGroup.style.display = "block";
  jenisPemeriksaanInfo.innerHTML = `
    <div class="bmhp-info-item">
      <span class="bmhp-info-icon">🔬</span>
      <span class="bmhp-info-text">${jenisPemeriksaan}</span>
    </div>
  `;

  // TAMPILKAN PARAMETER
  if (parameters.length > 0) {
    parameterGroup.style.display = "block";
    parameterList.innerHTML = parameters
      .map(
        (param, index) => `
        <div class="bmhp-parameter-item">
          <span class="bmhp-parameter-number">${index + 1}</span>
          <span class="bmhp-parameter-text">${param.replace(/\n/g, "<br>")}</span>
        </div>
      `,
      )
      .join("");
  } else {
    parameterGroup.style.display = "none";
  }

  // POPULATE SASARAN DROPDOWN (Multi-select)
  sasaranDropdown.innerHTML = `
    <div class="multi-select-option">
      <input type="checkbox" id="bmhpSasaran_semua" value="semua" onchange="toggleBMHPAllSasaran(this)" />
      <label for="bmhpSasaran_semua">-- Semua Sasaran --</label>
    </div>
  `;

  // Add sasaran options from pemeriksaan data
  sasaranList.forEach((sasaran, index) => {
    const safeId = sasaran.replace(/\s+/g, "_").replace(/[()]/g, "");
    const div = document.createElement("div");
    div.className = "multi-select-option";
    div.innerHTML = `
      <input
        type="checkbox"
        id="bmhpSasaran_${safeId}"
        value="${sasaran}"
        onchange="updateBMHPSasaranSelection()"
        class="bmhp-sasaran-checkbox"
      />
      <label for="bmhpSasaran_${safeId}">${sasaran}</label>
    `;
    sasaranDropdown.appendChild(div);
  });

  // Reset selection
  updateBMHPSasaranSelection();

  // Update metode dropdown
  updateBMHPMetodeOptions(pemeriksaan);
}

// BMHP Data storage
let bmhpFormData = {
  tahun: "",
  pemeriksaan: "",
  sasaran: "",
  metode: "",
  sasaranData: {},
  materialData: {},
  templateData: {}, // Store template SMILE selections
};

const allSasaranList = [
  { value: "balita", label: "Balita (0-5 tahun)" },
  { value: "anak", label: "Anak (6-12 tahun)" },
  { value: "remaja", label: "Remaja (13-18 tahun)" },
  { value: "dewasa", label: "Dewasa (19-45 tahun)" },
  { value: "lansia", label: "Lansia (> 45 tahun)" },
  { value: "ibu hamil", label: "Ibu Hamil" },
  { value: "wus", label: "Wanita Usia Subur (WUS)" },
];

// NOTE: Removed duplicate updateBMHPMetodeOptions() that overrode the main one.

function processBMHPPerencanaan() {
  const tahun = document.getElementById("bmhpTahunSelect").value;
  const pemeriksaan = document.getElementById("bmhpPemeriksaanSelect").value;
  const sasaran = document.getElementById("bmhpSasaranHidden").value;
  const metode = document.getElementById("bmhpMetodeHidden").value;

  if (!tahun) {
    alert("Silakan pilih Tahun");
    return;
  }
  if (!pemeriksaan) {
    alert("Silakan pilih Pemeriksaan");
    return;
  }
  if (!sasaran) {
    alert("Silakan pilih Sasaran");
    return;
  }
  if (!metode) {
    alert("Silakan pilih Metode");
    return;
  }

  // Show summary
  const sasaranArray = sasaran
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  let sasaranText =
    sasaranArray.length === 1
      ? sasaranArray[0]
      : `${sasaranArray.length} sasaran dipilih`;
  let metodeText =
    metode === "semua"
      ? "Semua Metode"
      : (metode || "")
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean)
        .join(", ");

  let summary = `RINGKASAN PERENCANAAN BMHP SKRINING\n\n`;
  summary += `Tahun: ${tahun}\n`;
  summary += `Pemeriksaan: ${pemeriksaan}\n`;
  summary += `Sasaran: ${sasaranText}\n`;
  summary += `Metode: ${metodeText}\n\n`;
  summary += `Parameter yang tersedia: ${(parameterDatabase[pemeriksaan] || []).length} item`;

  alert(summary);
}

function getSasaranLabel(value) {
  const found = allSasaranList.find((s) => s.value === value);
  return found ? found.label : value;
}

function goToBMHPStep2() {
  const tahun = document.getElementById("bmhpTahunSelect").value;
  const pemeriksaan = document.getElementById("bmhpPemeriksaanSelect").value;
  const sasaranRaw = document.getElementById("bmhpSasaranHidden").value;
  const metode = document.getElementById("bmhpMetodeHidden").value;

  // Validasi
  if (!tahun || !pemeriksaan || !sasaranRaw || !metode) {
    alert("Silakan lengkapi semua field!");
    return;
  }

  // Parse sasaran (comma-separated)
  const sasaranArray = sasaranRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  // GET JENIS PEMERIKSAAN from bmhpMasterDataV2
  const pemeriksaanData = bmhpMasterDataV2[pemeriksaan];
  const jenisPemeriksaan = pemeriksaanData
    ? pemeriksaanData.jenisPemeriksaan
    : "Lainnya";

  // SIMPAN KE FORM DATA
  bmhpFormData.tahun = tahun;
  bmhpFormData.jenisPemeriksaan = jenisPemeriksaan;
  bmhpFormData.pemeriksaan = pemeriksaan;
  bmhpFormData.sasaran = sasaranRaw; // Save the raw comma-separated string
  bmhpFormData.metode = metode;

  // Generate sasaran input fields
  const container = document.getElementById("bmhpSasaranInputContainer");

  // Generate fields for selected sasaran
  let html = "";
  sasaranArray.forEach((sasaran) => {
    const prevData = bmhpFormData.sasaranData[sasaran] || {
      sampel: "",
      tes: "",
    };
    const safeId = sasaran.replace(/\s+/g, "_").replace(/[()]/g, "");
    html += `
            <div class="bmhp-sasaran-input-card">
                <div class="bmhp-sasaran-header">
                    <span class="bmhp-sasaran-icon">👥</span>
                    <span class="bmhp-sasaran-title">${sasaran}</span>
                </div>
                <div class="bmhp-sasaran-inputs">
                    <div class="bmhp-input-group">
                        <label class="form-label">Jumlah Sampel <span class="required">*</span></label>
                        <input type="number" class="form-input" id="bmhpSampel_${safeId}"
                               placeholder="0" min="0" value="${prevData.sampel}">
                    </div>
                    <div class="bmhp-input-group">
                        <label class="form-label">Jumlah Tes <span class="required">*</span></label>
                        <input type="number" class="form-input" id="bmhpTes_${safeId}"
                               placeholder="0" min="0" value="${prevData.tes}">
                    </div>
                </div>
            </div>
        `;
  });
  container.innerHTML = html;

  document.getElementById("bmhpStep1").style.display = "none";
  document.getElementById("bmhpStep2").style.display = "block";
}

function goToBMHPStep1() {
  // Save current step 2 data
  saveStep2Data();
  document.getElementById("bmhpStep2").style.display = "none";
  document.getElementById("bmhpStep1").style.display = "block";
}

function saveStep2Data() {
  const sasaranRaw = bmhpFormData.sasaran;
  const sasaranArray = sasaranRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  sasaranArray.forEach((sasaran) => {
    const safeId = sasaran.replace(/\s+/g, "_").replace(/[()]/g, "");
    const sampelInput = document.getElementById(`bmhpSampel_${safeId}`);
    const tesInput = document.getElementById(`bmhpTes_${safeId}`);
    if (sampelInput && tesInput) {
      bmhpFormData.sasaranData[sasaran] = {
        sampel: sampelInput.value,
        tes: tesInput.value,
      };
    }
  });
}

// Helper function to get material type from name
function getMaterialType(materialName) {
  if (materialName.startsWith("[BMHP]")) {
    return "BMHP";
  } else if (materialName.startsWith("[Reagen]")) {
    return "REAGEN";
  } else if (materialName.startsWith("[]")) {
    return "UNKNOWN"; // Skip these
  }
  return "BMHP"; // Default to BMHP for backward compatibility
}

// Helper function to clean material name (remove prefix)
function cleanMaterialName(materialName) {
  return materialName.replace(/^\[(BMHP|Reagen)\]\s*-\s*/, "").trim();
}

// Update Total Stok when REAGEN Kebutuhan changes
function updateReagenTotalStok(inputElement, safeId, index) {
  const kebutuhan = parseInt(inputElement.value) || 0;
  const testPerPackage = parseInt(inputElement.dataset.testPerPackage) || 100;
  const totalStok = kebutuhan * testPerPackage;

  const totalStokElement = document.getElementById(
    `totalStok_${safeId}_${index}`,
  );
  if (totalStokElement) {
    totalStokElement.textContent = totalStok;
  }
}

function goToBMHPStep3() {
  const sasaranRaw = bmhpFormData.sasaran;
  const sasaranArray = sasaranRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  // Validate step 2 data
  for (const sasaran of sasaranArray) {
    const safeId = sasaran.replace(/\s+/g, "_").replace(/[()]/g, "");
    const sampel = document.getElementById(`bmhpSampel_${safeId}`).value;
    const tes = document.getElementById(`bmhpTes_${safeId}`).value;
    if (!sampel || sampel <= 0) {
      alert(`Silakan masukkan Jumlah Sampel untuk ${sasaran}`);
      return;
    }
    if (!tes || tes <= 0) {
      alert(`Silakan masukkan Jumlah Tes untuk ${sasaran}`);
      return;
    }
  }

  saveStep2Data();

  // Get materials from bmhpMasterDataV2
  const pemeriksaan = bmhpFormData.pemeriksaan;
  const metodeRaw = (bmhpFormData.metode || "").trim();

  // Dapatkan data pemeriksaan dari bmhpMasterDataV2
  const pemeriksaanData = bmhpMasterDataV2[pemeriksaan];
  if (!pemeriksaanData) {
    alert("Data pemeriksaan tidak ditemukan!");
    return;
  }

  const materialsData = pemeriksaanData.materials || {
    common: [],
    bySasaran: {},
  };

  // Parse metode yang dipilih
  const selectedMetode = metodeRaw
    .split(",")
    .map((m) => m.trim())
    .filter(Boolean);

  // Generate material input UI grouped by sasaran
  const container = document.getElementById("bmhpMaterialContainer");
  container.innerHTML = "";

  sasaranArray.forEach((sasaran) => {
    const sasaranLabel = sasaran;
    const safeId = sasaran.replace(/\s+/g, "_").replace(/[()]/g, "");

    // Ambil jumlah sampel dan tes untuk sasaran ini
    const jumlahSampel =
      parseInt(document.getElementById(`bmhpSampel_${safeId}`).value) || 0;
    const jumlahTes =
      parseInt(document.getElementById(`bmhpTes_${safeId}`).value) || 0;

    // Merge common materials + sasaran-specific materials
    let sasaranMaterials = [...materialsData.common];

    // Add sasaran-specific materials if exists
    if (materialsData.bySasaran[sasaran]) {
      sasaranMaterials = sasaranMaterials.concat(
        materialsData.bySasaran[sasaran],
      );
    }

    // Jika tidak ada material untuk sasaran ini, skip
    if (sasaranMaterials.length === 0) return;

    // Group header
    const groupHeader = document.createElement("div");
    groupHeader.className = "bmhp-material-group-header";
    groupHeader.innerHTML = `
      <div class="bmhp-material-group-title">
        <i class="fas fa-users"></i> ${sasaranLabel}
      </div>
      <div class="bmhp-material-group-info">
        Sampel: ${jumlahSampel} | Tes: ${jumlahTes}
      </div>
    `;
    container.appendChild(groupHeader);

    // Material list container
    const materialList = document.createElement("div");
    materialList.className = "bmhp-material-list";

    // Tampilkan material
    sasaranMaterials.forEach((mat, index) => {
      // Detect material type
      const materialType = mat.materialType || getMaterialType(mat.nama);

      // Skip UNKNOWN types
      if (materialType === "UNKNOWN") return;

      const cleanName = cleanMaterialName(mat.nama);
      const row = document.createElement("div");
      row.className = "bmhp-material-item";

      const satuan = mat.satuan || "unit";
      const consumptionPerSample = mat.consumptionPerTest || 1;

      // Template SMILE selection
      let templateHTML = "";
      if (mat.templateSMILE && mat.templateSMILE.length > 0) {
        if (mat.templateSMILE.length === 1) {
          // Single option - auto-select, show as text
          templateHTML = `
            <div class="bmhp-material-template-info">
              (${mat.templateSMILE[0]})
            </div>
          `;
        } else {
          // Multiple options - show dropdown
          const templateOptions = mat.templateSMILE
            .map(
              (t) =>
                `<option value="${t.replace(/"/g, "&quot;")}">${t}</option>`,
            )
            .join("");

          templateHTML = `
            <div class="bmhp-material-template-select">
              <label>Template SMILE:</label>
              <select
                class="form-select"
                id="template_${safeId}_${index}"
                data-sasaran="${sasaran}"
                data-material="${cleanName}"
                required
                style="font-size: 0.875rem; margin-top: 4px;"
              >
                <option value="">Pilih template</option>
                ${templateOptions}
              </select>
            </div>
          `;
        }
      }

      // Render based on material type
      if (materialType === "REAGEN") {
        // REAGEN: Show Test per Package badge, Total Stok, dan Pengeluaran Lab (editable)
        const testPerPackage = mat.testPerPackage || 100;
        const defaultKebutuhan = Math.ceil(jumlahTes / testPerPackage);
        const prevValue =
          bmhpFormData.materialData[sasaran]?.[cleanName] || defaultKebutuhan;
        const totalStok = prevValue * testPerPackage;

        row.innerHTML = `
          <div class="bmhp-material-info">
            <div class="bmhp-material-name-row">
              <div class="bmhp-material-name-left">
                <span class="material-badge reagen">REAGEN</span>
                ${cleanName}
              </div>
              <div class="bmhp-material-pengeluaran-label">
                Pengeluaran Lab
              </div>
            </div>

            ${templateHTML}

            <!-- Test per Package & Total Stok - Horizontal Badges -->
            <div class="reagen-info-badges">
              <div class="reagen-badge test-per-pkg">
                ${testPerPackage} tes/pkg
              </div>
            </div>

            <!-- Input Section: Pengeluaran Lab (Editable) -->
            <div class="bmhp-material-input-group-reagen">
              <label>Pengeluaran Lab:</label>
              <div class="input-wrapper">
                <input
                  type="number"
                  class="form-input"
                  id="pengeluaran_${safeId}_${index}"
                  value="${prevValue}"
                  min="1"
                  placeholder="${defaultKebutuhan}"
                  data-sasaran="${sasaran}"
                  data-material="${cleanName}"
                  data-test-per-package="${testPerPackage}"
                  oninput="updateReagenTotalStok(this, '${safeId}', ${index})"
                />
                <span class="unit-label">package</span>
              </div>
            </div>

            <div class="bmhp-material-meta">
              ${selectedMetode.length > 0 ? `<span class="bmhp-material-metode">${selectedMetode.join(", ")}</span>` : ""}
              <span class="bmhp-material-satuan">package</span>
            </div>
          </div>
        `;
      } else {
        // BMHP: Original rendering with updated layout
        const idealPengeluaran = Math.ceil(jumlahTes * consumptionPerSample);
        const prevValue =
          bmhpFormData.materialData[sasaran]?.[cleanName] || idealPengeluaran;

        row.innerHTML = `
          <div class="bmhp-material-info">
            <div class="bmhp-material-name-row">
              <div class="bmhp-material-name-left">
                <span class="material-badge bmhp">BMHP</span>
                ${cleanName}
              </div>
              <div class="bmhp-material-pengeluaran-label">
                Pengeluaran Lab
              </div>
            </div>
            ${templateHTML}
            <div class="bmhp-material-input-right">
              <input
                type="number"
                class="form-input"
                id="pengeluaran_${safeId}_${index}"
                value="${prevValue}"
                min="0"
                placeholder="Masukkan pengeluaran"
                data-sasaran="${sasaran}"
                data-material="${cleanName}"
              />
            </div>
            <div class="bmhp-material-meta">
              ${selectedMetode.length > 0 ? `<span class="bmhp-material-metode">${selectedMetode.join(", ")}</span>` : ""}
              <span class="bmhp-material-satuan">${satuan}</span>
            </div>
          </div>
        `;
      }

      materialList.appendChild(row);
    });

    container.appendChild(materialList);
  });

  document.getElementById("bmhpStep2").style.display = "none";
  document.getElementById("bmhpStep3").style.display = "block";
}

function goToBMHPStep2FromStep3() {
  // Save current material data
  saveStep3Data();
  document.getElementById("bmhpStep3").style.display = "none";
  document.getElementById("bmhpStep2").style.display = "block";
}

function saveStep3Data() {
  // Validate template SMILE selections first
  const templateSelects = document.querySelectorAll(
    '#bmhpMaterialContainer select[id^="template_"]',
  );

  for (const select of templateSelects) {
    if (!select.value) {
      alert(
        "Silakan pilih Template SMILE untuk semua material yang memiliki multiple opsi",
      );
      select.focus();
      return false;
    }
  }

  // Initialize templateData if not exists
  if (!bmhpFormData.templateData) {
    bmhpFormData.templateData = {};
  }

  // Save template SMILE selections
  templateSelects.forEach((select) => {
    const sasaran = select.dataset.sasaran;
    const material = select.dataset.material;
    if (sasaran && material) {
      if (!bmhpFormData.templateData[sasaran]) {
        bmhpFormData.templateData[sasaran] = {};
      }
      bmhpFormData.templateData[sasaran][material] = select.value;
    }
  });

  // Save pengeluaran values
  const inputs = document.querySelectorAll(
    '#bmhpMaterialContainer input[type="number"]',
  );
  inputs.forEach((input) => {
    const sasaran = input.dataset.sasaran;
    const material = input.dataset.material;
    if (sasaran && material) {
      if (!bmhpFormData.materialData[sasaran]) {
        bmhpFormData.materialData[sasaran] = {};
      }
      bmhpFormData.materialData[sasaran][material] = input.value;
    }
  });

  return true;
}

function saveBMHPPerencanaan() {
  // Validate and save step 3 data
  if (!saveStep3Data()) {
    return; // Validation failed, don't proceed
  }

  // Build confirmation message
  let confirmMsg = `KONFIRMASI PENYIMPANAN PERENCANAAN BMHP\n\n`;
  confirmMsg += `Tahun: ${bmhpFormData.tahun}\n`;
  confirmMsg += `Pemeriksaan: ${bmhpFormData.pemeriksaan}\n`;
  confirmMsg += `Metode: ${bmhpFormData.metode === "semua"
    ? "Semua Metode"
    : (bmhpFormData.metode || "")
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean)
      .join(", ")
    }\n\n`;

  const sasaranRaw = bmhpFormData.sasaran;
  const sasaranArray = sasaranRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  sasaranArray.forEach((sasaran) => {
    const sasaranData = bmhpFormData.sasaranData[sasaran] || {};
    const materialData = bmhpFormData.materialData[sasaran] || {};
    confirmMsg += `📌 ${sasaran}\n`;
    confirmMsg += `   Sampel: ${sasaranData.sampel || 0}, Tes: ${sasaranData.tes || 0}\n`;

    const materialCount = Object.keys(materialData).filter(
      (k) => materialData[k] && materialData[k] > 0,
    ).length;
    confirmMsg += `   Material dengan pengeluaran: ${materialCount} item\n\n`;
  });

  confirmMsg += `Apakah Anda yakin ingin menyimpan data ini?`;

  if (confirm(confirmMsg)) {
    // Save to database (localStorage for demo)
    const saveData = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...bmhpFormData,
    };

    let bmhpHistory = JSON.parse(
      localStorage.getItem("bmhpPerencanaan") || "[]",
    );
    bmhpHistory.push(saveData);
    localStorage.setItem("bmhpPerencanaan", JSON.stringify(bmhpHistory));

    alert("✅ Data Perencanaan BMHP berhasil disimpan!");

    // Reset and go back to menu
    resetBMHPForm();
    showPage("inventoryMenu");
  }
}

function resetBMHPForm() {
  bmhpFormData = {
    tahun: "",
    pemeriksaan: "",
    sasaran: "",
    metode: "",
    sasaranData: {},
    materialData: {},
    templateData: {}, // Added template SMILE selections
  };

  document.getElementById("bmhpTahunSelect").value = "";
  document.getElementById("bmhpPemeriksaanSelect").value = "";

  // Reset Sasaran multi-select
  const sasaranHidden = document.getElementById("bmhpSasaranHidden");
  const sasaranPlaceholder = document.getElementById("bmhpSasaranPlaceholder");
  const sasaranValues = document.getElementById("bmhpSasaranValues");
  const sasaranDropdown = document.getElementById("bmhpSasaranDropdown");

  if (sasaranHidden) sasaranHidden.value = "";
  if (sasaranPlaceholder) sasaranPlaceholder.style.display = "inline";
  if (sasaranValues) {
    sasaranValues.style.display = "none";
    sasaranValues.innerHTML = "";
  }
  if (sasaranDropdown) {
    // Uncheck all checkboxes
    const checkboxes = sasaranDropdown.querySelectorAll(
      'input[type="checkbox"]',
    );
    checkboxes.forEach((cb) => (cb.checked = false));
  }

  // Reset Metode multi-select
  const dropdown = document.getElementById("bmhpMetodeDropdown");
  const hiddenInput = document.getElementById("bmhpMetodeHidden");
  const placeholder = document.getElementById("bmhpMetodePlaceholder");
  const valuesSpan = document.getElementById("bmhpMetodeValues");

  if (hiddenInput) hiddenInput.value = "";
  if (placeholder) placeholder.style.display = "inline";
  if (valuesSpan) {
    valuesSpan.style.display = "none";
    valuesSpan.innerHTML = "";
  }
  if (dropdown) {
    dropdown.innerHTML =
      '<div style="padding: 15px; text-align: center; color: #999;">Pilih pemeriksaan terlebih dahulu</div>';
    dropdown.style.display = "none";
  }

  document.getElementById("bmhpJenisPemeriksaanGroup").style.display = "none";
  document.getElementById("bmhpParameterGroup").style.display = "none";
  document.getElementById("bmhpSasaranInputContainer").innerHTML = "";
  document.getElementById("bmhpMaterialContainer").innerHTML = "";

  document.getElementById("bmhpStep1").style.display = "block";
  document.getElementById("bmhpStep2").style.display = "none";
  document.getElementById("bmhpStep3").style.display = "none";
}
// ========================================
// TYPE SELECTION & DROPDOWN FUNCTIONS
// ========================================
function selectType(type) {
  selectedType = type;
  document.getElementById("typeSampel").checked = type === "sampel";
  document.getElementById("typeControl").checked = type === "control";
  document.getElementById("typeAlat").checked = type === "alat";
  document
    .querySelectorAll(".type-card")
    .forEach((card) => card.classList.remove("selected"));
  event.currentTarget.classList.add("selected");
}

function initializeTipePemeriksaanDropdown() {
  const dropdown = document.getElementById("tipePemeriksaanDropdown");
  if (!dropdown) return;
  dropdown.innerHTML = "";
  const categories = Object.keys(parameterDatabase);

  categories.forEach((category) => {
    const option = document.createElement("div");
    option.className = "multi-select-option";
    const uniqueId = `tipe-${category.replace(/[^a-zA-Z0-9]/g, "")}`;
    option.innerHTML = `
                <input type="checkbox" class="multi-select-checkbox tipe-checkbox" value="${category}" id="${uniqueId}">
                <label for="${uniqueId}" style="flex: 1; cursor: pointer;">${category}</label>
            `;
    dropdown.appendChild(option);

    const checkbox = document.getElementById(uniqueId);
    checkbox.addEventListener("change", updateTipePemeriksaanDisplay);
  });
}

function toggleTipePemeriksaanDropdown() {
  const dropdown = document.getElementById("tipePemeriksaanDropdown");
  const paramDropdown = document.getElementById("parameterDropdown");
  if (paramDropdown) paramDropdown.style.display = "none";

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.cssText =
      "display: block !important; position: absolute !important; top: 100% !important; left: 0 !important; right: 0 !important; width: 100% !important; min-width: 300px !important; max-height: 300px !important; background: white !important; border: 1px solid #ddd !important; border-top: none !important; border-radius: 0 0 6px 6px !important; overflow-y: auto !important; box-shadow: 0 4px 8px rgba(0,0,0,0.1) !important; z-index: 99999 !important;";
  }
}

function toggleParameterDropdown() {
  const dropdown = document.getElementById("parameterDropdown");
  const tipeDropdown = document.getElementById("tipePemeriksaanDropdown");

  if (selectedTipePemeriksaan.length === 0) {
    alert("Silakan pilih Tipe Pemeriksaan terlebih dahulu");
    return;
  }
  if (tipeDropdown) tipeDropdown.style.display = "none";

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.cssText =
      "display: block !important; position: absolute !important; top: 100% !important; left: 0 !important; right: 0 !important; width: 100% !important; min-width: 300px !important; max-height: 300px !important; background: white !important; border: 1px solid #ddd !important; border-top: none !important; border-radius: 0 0 6px 6px !important; overflow-y: auto !important; box-shadow: 0 4px 8px rgba(0,0,0,0.1) !important; z-index: 99999 !important;";
  }
}

document.addEventListener("click", function (event) {
  const tipeDisplay = document.getElementById("tipePemeriksaanDisplay");
  const tipeDropdown = document.getElementById("tipePemeriksaanDropdown");
  const paramDisplay = document.getElementById("parameterDisplay");
  const paramDropdown = document.getElementById("parameterDropdown");

  if (
    tipeDisplay &&
    tipeDropdown &&
    !tipeDisplay.contains(event.target) &&
    !tipeDropdown.contains(event.target)
  ) {
    tipeDropdown.style.display = "none";
  }
  if (
    paramDisplay &&
    paramDropdown &&
    !paramDisplay.contains(event.target) &&
    !paramDropdown.contains(event.target)
  ) {
    paramDropdown.style.display = "none";
  }
});

function updateTipePemeriksaanDisplay() {
  const checkboxes = document.querySelectorAll(".tipe-checkbox");
  selectedTipePemeriksaan = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) selectedTipePemeriksaan.push(checkbox.value);
  });

  const placeholder = document.getElementById("tipePemeriksaanPlaceholder");
  const values = document.getElementById("tipePemeriksaanValues");
  const hidden = document.getElementById("tipePemeriksaanHidden");

  if (selectedTipePemeriksaan.length > 0) {
    placeholder.style.display = "none";
    values.style.display = "block";
    values.textContent = selectedTipePemeriksaan.join(", ");
    hidden.value = selectedTipePemeriksaan.join("; ");
    filterParameterByTipe();
    updateMetodeDropdown();
  } else {
    placeholder.style.display = "block";
    values.style.display = "none";
    hidden.value = "";
    const paramDropdown = document.getElementById("parameterDropdown");
    if (paramDropdown) {
      paramDropdown.innerHTML =
        '<div style="padding: 15px; text-align: center; color: #999;">Pilih tipe pemeriksaan terlebih dahulu</div>';
    }
    resetMetodeDropdown();
  }
}

function filterParameterByTipe() {
  const dropdown = document.getElementById("parameterDropdown");
  dropdown.innerHTML = "";

  if (selectedTipePemeriksaan.length === 0) {
    dropdown.innerHTML =
      '<div style="padding: 15px; text-align: center; color: #999;">Pilih tipe pemeriksaan terlebih dahulu</div>';
    return;
  }

  selectedTipePemeriksaan.forEach((tipe) => {
    if (parameterDatabase[tipe]) {
      const categoryHeader = document.createElement("div");
      categoryHeader.className = "multi-select-category";
      categoryHeader.textContent = tipe;
      dropdown.appendChild(categoryHeader);

      parameterDatabase[tipe].forEach((param, index) => {
        const option = document.createElement("div");
        option.className = "multi-select-option";
        const uniqueId = `param-${tipe.replace(/[^a-zA-Z0-9]/g, "")}-${index}`;
        option.innerHTML = `
                        <input type="checkbox" class="multi-select-checkbox" value="${param}" data-category="${tipe}" id="${uniqueId}">
                        <label for="${uniqueId}" style="flex: 1; cursor: pointer;">${param}</label>
                    `;
        dropdown.appendChild(option);
        document
          .getElementById(uniqueId)
          .addEventListener("change", updateParameterDisplay);
      });
    }
  });

  selectedParameters = [];
  document.getElementById("parameterPlaceholder").style.display = "block";
  document.getElementById("parameterValues").style.display = "none";
  document.getElementById("parameterHidden").value = "";
}

function updateParameterDisplay() {
  const checkboxes = document.querySelectorAll(
    "#parameterDropdown .multi-select-checkbox",
  );
  selectedParameters = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedParameters.push({
        name: checkbox.value,
        category: checkbox.getAttribute("data-category"),
      });
    }
  });

  const placeholder = document.getElementById("parameterPlaceholder");
  const values = document.getElementById("parameterValues");
  const hidden = document.getElementById("parameterHidden");

  if (selectedParameters.length > 0) {
    placeholder.style.display = "none";
    values.style.display = "block";
    values.textContent = `${selectedParameters.length} parameter dipilih`;
    hidden.value = selectedParameters.map((p) => p.name).join("; ");
    updateMetodeDropdown();
  } else {
    placeholder.style.display = "block";
    values.style.display = "none";
    hidden.value = "";
    resetMetodeDropdown();
  }
}

function getAvailableMetodeForCategories(categories) {
  const availableMetode = new Set();
  Object.keys(materialDatabase).forEach((key) => {
    const parts = key.split("-");
    if (parts.length >= 2) {
      const category = parts[0];
      const metode = parts.slice(1).join("-");
      if (categories.includes(category)) availableMetode.add(metode);
    }
  });
  return Array.from(availableMetode);
}

function updateMetodeDropdown() {
  const metodeSelect = document.getElementById("metodeSelect");
  const selectedCategories = selectedTipePemeriksaan;
  if (selectedCategories.length === 0) {
    resetMetodeDropdown();
    return;
  }

  const availableMetode = getAvailableMetodeForCategories(selectedCategories);
  metodeSelect.innerHTML = '<option value="">Pilih metode pemeriksaan</option>';
  availableMetode.forEach((metode) => {
    const option = document.createElement("option");
    option.value = metode;
    option.textContent = metode;
    metodeSelect.appendChild(option);
  });

  if (availableMetode.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Tidak ada metode tersedia untuk tipe ini";
    option.disabled = true;
    metodeSelect.appendChild(option);
  }
}

function resetMetodeDropdown() {
  const metodeSelect = document.getElementById("metodeSelect");
  metodeSelect.innerHTML = `
            <option value="">Pilih metode pemeriksaan</option>
            <option value="Lateral Flow">Lateral Flow</option>
            <option value="Flow Cytometry">Flow Cytometry</option>
            <option value="Enzimatik">Enzimatik</option>
            <option value="Pembuatan sediaan">Pembuatan sediaan</option>
            <option value="Mikroskopis">Mikroskopis</option>
            <option value="Reflactance photometri">Reflactance photometri</option>
            <option value="Aglutinasi">Aglutinasi</option>
            <option value="Flokulasi">Flokulasi</option>
            <option value="Organoleptik">Organoleptik</option>
            <option value="Molekuler">Molekuler</option>
            <option value="Konvensional (kimia)">Konvensional (kimia)</option>
        `;
}

// ========================================
// STEP NAVIGATION
// ========================================
function goToStep1() {
  if (!selectedType) {
    alert("Silakan pilih tipe pengeluaran");
    return;
  }
  document.getElementById("step0Section").style.display = "none";
  document.getElementById("step1Section").style.display = "block";
  window.scrollTo(0, 0);
}

function backFromStep1() {
  document.getElementById("step1Section").style.display = "none";
  document.getElementById("step0Section").style.display = "block";
  window.scrollTo(0, 0);
}

function goToStep2() {
  const tanggalAktual = document.getElementById(
    "tanggalAktualPengeluaran",
  ).value;
  if (!tanggalAktual) {
    alert("Silakan isi Tanggal Aktual Pengeluaran");
    return;
  }
  if (selectedTipePemeriksaan.length === 0) {
    alert("Silakan pilih minimal 1 tipe pemeriksaan");
    return;
  }
  if (selectedParameters.length === 0) {
    alert("Silakan pilih minimal 1 parameter");
    return;
  }
  const metode = document.getElementById("metodeSelect").value;
  if (!metode) {
    alert("Silakan pilih metode pemeriksaan");
    return;
  }

  if (selectedType === "control" || selectedType === "alat") {
    jumlahSampel = 1;
    jumlahTes = 1;
    generateMaterialList(selectedParameters, metode);
    document.getElementById("step1Section").style.display = "none";
    document.getElementById("step3Section").style.display = "block";
    updateStep3IndicatorForControlAlat();
    window.scrollTo(0, 0);
    return;
  }

  document.getElementById("step1Section").style.display = "none";
  document.getElementById("step2Section").style.display = "block";
  updateStep2Indicator();
  window.scrollTo(0, 0);
}

function updateStep2Indicator() {
  const indicator = document.getElementById("step2Indicator");
  indicator.innerHTML = `
            <div class="step-item completed"><div class="step-number">✓</div><div class="step-label">Tipe</div><div class="step-line"></div></div>
            <div class="step-item completed"><div class="step-number">✓</div><div class="step-label">Parameter & Metode</div><div class="step-line"></div></div>
            <div class="step-item active"><div class="step-number">3</div><div class="step-label">Jumlah</div><div class="step-line"></div></div>
            <div class="step-item"><div class="step-number">4</div><div class="step-label">Material</div></div>
        `;
}

function updateStep3Indicator() {
  const indicator = document.getElementById("step3Indicator");
  indicator.innerHTML = `
            <div class="step-item completed"><div class="step-number">✓</div><div class="step-label">Tipe</div><div class="step-line"></div></div>
            <div class="step-item completed"><div class="step-number">✓</div><div class="step-label">Parameter & Metode</div><div class="step-line"></div></div>
            <div class="step-item completed"><div class="step-number">✓</div><div class="step-label">Jumlah</div><div class="step-line"></div></div>
            <div class="step-item active"><div class="step-number">4</div><div class="step-label">Material</div></div>
        `;
}

function updateStep3IndicatorForControlAlat() {
  const indicator = document.getElementById("step3Indicator");
  indicator.innerHTML = `
            <div class="step-item completed"><div class="step-number">✓</div><div class="step-label">Tipe</div><div class="step-line"></div></div>
            <div class="step-item completed"><div class="step-number">✓</div><div class="step-label">Parameter & Metode</div><div class="step-line"></div></div>
            <div class="step-item active"><div class="step-number">3</div><div class="step-label">Material</div></div>
        `;
}

function backFromStep2() {
  document.getElementById("nikDataContainer").style.display = "none";
  document.getElementById("step2Section").style.display = "none";
  document.getElementById("step1Section").style.display = "block";
  window.scrollTo(0, 0);
}

function goToStep3() {
  const sampel = parseInt(document.getElementById("jumlahSampelInput").value);
  const tes = parseInt(document.getElementById("jumlahTesInput").value);
  if (!sampel || sampel < 1) {
    alert("Silakan isi jumlah sampel (minimal 1)");
    return;
  }
  if (!tes || tes < 1) {
    alert("Silakan isi jumlah tes (minimal 1)");
    return;
  }

  jumlahSampel = sampel;
  jumlahTes = tes;

  if (selectedType === "sampel") {
    const isiDataNIK = document.getElementById("isiDataNIKCheckbox").checked;
    if (isiDataNIK) {
      for (let i = 0; i < sampel; i++) {
        if (!validateSampleData(i)) {
          alert(`Data sampel #${i + 1} belum lengkap.`);
          return;
        }
      }
    } else {
      sampleDataArray = [];
    }
  }

  const metode = document.getElementById("metodeSelect").value;
  generateMaterialList(selectedParameters, metode);
  document.getElementById("step2Section").style.display = "none";
  document.getElementById("step3Section").style.display = "block";
  updateStep3Indicator();
  window.scrollTo(0, 0);
}

function backFromStep3() {
  document.getElementById("step3Section").style.display = "none";
  if (selectedType === "control" || selectedType === "alat") {
    document.getElementById("step1Section").style.display = "block";
  } else {
    document.getElementById("step2Section").style.display = "block";
  }
  window.scrollTo(0, 0);
}

// ========================================
// NIK FUNCTIONS
// ========================================
function toggleNIKSection() {
  const checkbox = document.getElementById("isiDataNIKCheckbox");
  const nikContainer = document.getElementById("nikDataContainer");
  const infoTextNIK = document.getElementById("infoTextNIK");

  if (checkbox.checked) {
    nikContainer.style.display = "block";
    infoTextNIK.style.display = "inline";
    const sampelInput = document.getElementById("jumlahSampelInput");
    if (sampelInput && sampelInput.value && parseInt(sampelInput.value) > 0) {
      generateNIKForms();
    }
  } else {
    nikContainer.style.display = "none";
    infoTextNIK.style.display = "none";
  }
}

function generateNIKForms() {
  const sampel = parseInt(document.getElementById("jumlahSampelInput").value);
  if (!sampel || sampel < 1) {
    document.getElementById("nikDataContainer").style.display = "none";
    return;
  }
  document.getElementById("nikDataContainer").style.display = "block";

  const progressContainer = document.getElementById("sampleProgress");
  progressContainer.innerHTML = "";
  for (let i = 0; i < sampel; i++) {
    const dot = document.createElement("div");
    dot.className = "progress-dot";
    dot.id = `progress-dot-${i}`;
    progressContainer.appendChild(dot);
  }

  const container = document.getElementById("sampleCardsContainer");
  container.innerHTML = "";

  if (sampleDataArray.length !== sampel) {
    sampleDataArray = new Array(sampel).fill(null).map(() => ({
      nik: "",
      namaLengkap: "",
      tanggalLahir: "",
      usia: "",
      jenisKelamin: "",
      provinsi: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      alamatLengkap: "",
      nohp: "",
    }));
  }

  for (let i = 0; i < sampel; i++) {
    const card = createSampleCard(i);
    container.appendChild(card);
  }
  updateProgressIndicator(0);
}

function createSampleCard(index) {
  const card = document.createElement("div");
  card.className = "sample-card";
  card.id = `sample-card-${index}`;
  const data = sampleDataArray[index];
  const isComplete = validateSampleData(index);

  card.innerHTML = `
            <div class="sample-card-header">
                <div class="sample-number">Sampel #${index + 1}</div>
                <div class="sample-status ${isComplete ? "" : "incomplete"}" id="status-${index}">${isComplete ? "✓ Lengkap" : "⚠ Belum Lengkap"}</div>
            </div>
            <div class="form-group">
                <label class="form-label">NIK <span class="required">*</span></label>
                <input type="text" class="form-input nik-input" id="nik-${index}" placeholder="Masukkan 16 digit NIK" maxlength="16" value="${data.nik}" oninput="handleNIKInput(${index}, this.value)">
                <div class="nik-helper" id="nik-helper-${index}">Otomatis mengisi Tanggal Lahir, Usia, Jenis Kelamin, Provinsi, Kab/Kota.</div>
            </div>
            <div class="form-group">
                <label class="form-label">Nama Lengkap <span class="required">*</span></label>
                <input type="text" class="form-input" id="nama-${index}" placeholder="Masukkan nama lengkap" value="${data.namaLengkap}" oninput="updateSampleData(${index}, 'namaLengkap', this.value)">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Tanggal Lahir <span class="required">*</span></label>
                    <input type="text" class="form-input auto-filled" id="tgl-lahir-${index}" placeholder="DD-MM-YYYY" value="${data.tanggalLahir}" readonly>
                </div>
                <div class="form-group">
                    <label class="form-label">Usia <span class="required">*</span></label>
                    <input type="text" class="form-input auto-filled" id="usia-${index}" placeholder="0" value="${data.usia ? data.usia + " thn" : ""}" readonly>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Jenis Kelamin <span class="required">*</span></label>
                <input type="text" class="form-input auto-filled" id="jk-${index}" placeholder="Laki-laki / Perempuan" value="${data.jenisKelamin}" readonly>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Provinsi <span class="required">*</span></label>
                    <input type="text" class="form-input auto-filled" id="provinsi-${index}" placeholder="Provinsi" value="${data.provinsi}" readonly>
                </div>
                <div class="form-group">
                    <label class="form-label">Kabupaten/Kota <span class="required">*</span></label>
                    <input type="text" class="form-input auto-filled" id="kota-${index}" placeholder="Kab/Kota" value="${data.kota}" readonly>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Kecamatan <span class="required">*</span></label>
                <select class="form-select" id="kecamatan-${index}" onchange="updateSampleData(${index}, 'kecamatan', this.value)"><option value="">Pilih Kecamatan</option></select>
            </div>
            <div class="form-group">
                <label class="form-label">Kelurahan/Desa <span class="required">*</span></label>
                <input type="text" class="form-input" id="kelurahan-${index}" placeholder="Masukkan kelurahan/desa" value="${data.kelurahan}" oninput="updateSampleData(${index}, 'kelurahan', this.value)">
            </div>
            <div class="form-group">
                <label class="form-label">Alamat Lengkap <span class="required">*</span></label>
                <textarea class="form-textarea" id="alamat-${index}" placeholder="Jl. Nama Jalan No. XX, RT/RW" oninput="updateSampleData(${index}, 'alamatLengkap', this.value)">${data.alamatLengkap}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">No. Telepon <span style="color: #999;">(Opsional)</span></label>
                <input type="tel" class="form-input" id="nohp-${index}" placeholder="08xxxxxxxxxx" value="${data.nohp}" oninput="updateSampleData(${index}, 'nohp', this.value)">
            </div>
        `;
  return card;
}

function parseNIK(nik) {
  nik = nik.replace(/[\s-]/g, "");
  if (nik.length !== 16) return { valid: false, error: "NIK harus 16 digit" };
  if (!/^\d+$/.test(nik))
    return { valid: false, error: "NIK harus berisi angka saja" };

  const provinceCode = nik.substring(0, 2);
  const cityCode = nik.substring(2, 4);
  let birthDay = parseInt(nik.substring(6, 8));
  const birthMonth = parseInt(nik.substring(8, 10));
  const birthYear = parseInt(nik.substring(10, 12));

  let gender = "Laki-laki";
  if (birthDay > 40) {
    gender = "Perempuan";
    birthDay -= 40;
  }

  const fullYear = birthYear > 30 ? 1900 + birthYear : 2000 + birthYear;
  if (birthDay < 1 || birthDay > 31 || birthMonth < 1 || birthMonth > 12) {
    return { valid: false, error: "Tanggal lahir tidak valid" };
  }

  const birthDate = `${String(birthDay).padStart(2, "0")}-${String(birthMonth).padStart(2, "0")}-${fullYear}`;
  const today = new Date();
  const birth = new Date(fullYear, birthMonth - 1, birthDay);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate()))
    age--;

  const province = wilayahData[provinceCode];
  if (!province) return { valid: false, error: "Kode provinsi tidak dikenali" };
  const city = province.cities[cityCode];
  if (!city) return { valid: false, error: "Kode kota tidak dikenali" };

  return {
    valid: true,
    nik,
    tanggalLahir: birthDate,
    usia: age,
    jenisKelamin: gender,
    provinsi: province.name,
    kota: city.name,
    kecamatanList: city.kecamatan,
  };
}

function handleNIKInput(index, nik) {
  const helper = document.getElementById(`nik-helper-${index}`);
  sampleDataArray[index].nik = nik;

  if (nik.length === 16) {
    const parsed = parseNIK(nik);
    if (parsed.valid) {
      helper.className = "nik-helper success";
      helper.textContent = "✓ NIK valid - Data terisi otomatis";
      sampleDataArray[index].tanggalLahir = parsed.tanggalLahir;
      sampleDataArray[index].usia = parsed.usia.toString();
      sampleDataArray[index].jenisKelamin = parsed.jenisKelamin;
      sampleDataArray[index].provinsi = parsed.provinsi;
      sampleDataArray[index].kota = parsed.kota;

      document.getElementById(`tgl-lahir-${index}`).value = parsed.tanggalLahir;
      document.getElementById(`usia-${index}`).value = `${parsed.usia} thn`;
      document.getElementById(`jk-${index}`).value = parsed.jenisKelamin;
      document.getElementById(`provinsi-${index}`).value = parsed.provinsi;
      document.getElementById(`kota-${index}`).value = parsed.kota;

      const kecamatanSelect = document.getElementById(`kecamatan-${index}`);
      kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
      parsed.kecamatanList.forEach((kec) => {
        const option = document.createElement("option");
        option.value = kec;
        option.textContent = kec;
        if (sampleDataArray[index].kecamatan === kec) option.selected = true;
        kecamatanSelect.appendChild(option);
      });
      updateSampleStatus(index);
    } else {
      helper.className = "nik-helper error";
      helper.textContent = `✗ ${parsed.error}`;
      clearAutoFilledFields(index);
    }
  } else if (nik.length > 0) {
    helper.className = "nik-helper";
    helper.textContent = `${nik.length}/16 digit`;
    clearAutoFilledFields(index);
  } else {
    helper.className = "nik-helper";
    helper.textContent =
      "Otomatis mengisi Tanggal Lahir, Usia, Jenis Kelamin, Provinsi, Kab/Kota.";
    clearAutoFilledFields(index);
  }
}

function clearAutoFilledFields(index) {
  sampleDataArray[index].tanggalLahir = "";
  sampleDataArray[index].usia = "";
  sampleDataArray[index].jenisKelamin = "";
  sampleDataArray[index].provinsi = "";
  sampleDataArray[index].kota = "";
  document.getElementById(`tgl-lahir-${index}`).value = "";
  document.getElementById(`usia-${index}`).value = "";
  document.getElementById(`jk-${index}`).value = "";
  document.getElementById(`provinsi-${index}`).value = "";
  document.getElementById(`kota-${index}`).value = "";
  const kecamatanSelect = document.getElementById(`kecamatan-${index}`);
  kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
  updateSampleStatus(index);
}

function updateSampleData(index, field, value) {
  sampleDataArray[index][field] = value;
  updateSampleStatus(index);
}

function validateSampleData(index) {
  const data = sampleDataArray[index];
  return (
    data.nik.length === 16 &&
    data.namaLengkap.trim() !== "" &&
    data.tanggalLahir !== "" &&
    data.usia !== "" &&
    data.jenisKelamin !== "" &&
    data.provinsi !== "" &&
    data.kota !== "" &&
    data.kecamatan !== "" &&
    data.kelurahan.trim() !== "" &&
    data.alamatLengkap.trim() !== ""
  );
}

function updateSampleStatus(index) {
  const isComplete = validateSampleData(index);
  const statusBadge = document.getElementById(`status-${index}`);
  const progressDot = document.getElementById(`progress-dot-${index}`);
  if (statusBadge) {
    if (isComplete) {
      statusBadge.className = "sample-status";
      statusBadge.textContent = "✓ Lengkap";
      if (progressDot) progressDot.classList.add("completed");
    } else {
      statusBadge.className = "sample-status incomplete";
      statusBadge.textContent = "⚠ Belum Lengkap";
      if (progressDot) progressDot.classList.remove("completed");
    }
  }
}

function updateProgressIndicator(index) {
  document
    .querySelectorAll(".sample-card")
    .forEach((card) => card.classList.remove("active"));
  document
    .querySelectorAll(".progress-dot")
    .forEach((dot) => dot.classList.remove("active"));
  const card = document.getElementById(`sample-card-${index}`);
  const dot = document.getElementById(`progress-dot-${index}`);
  if (card) card.classList.add("active");
  if (dot && !dot.classList.contains("completed")) dot.classList.add("active");
}

// ========================================
// MATERIAL FUNCTIONS
// ========================================
function generateMaterialList(parameters, metode) {
  const container = document.getElementById("materialListContainer");
  container.innerHTML = "";
  const categories = [...new Set(parameters.map((p) => p.category))];
  let combinedMaterials = { Reagen: [], "Alat Habis Pakai": [] };

  categories.forEach((category) => {
    const key = `${category}-${metode}`;
    const materials = materialDatabase[key];
    if (materials) {
      if (materials.Reagen) {
        materials.Reagen.forEach((item) => {
          if (!combinedMaterials.Reagen.find((m) => m.nama === item.nama)) {
            combinedMaterials.Reagen.push(item);
          }
        });
      }
      if (materials["Alat Habis Pakai"]) {
        materials["Alat Habis Pakai"].forEach((item) => {
          if (
            !combinedMaterials["Alat Habis Pakai"].find(
              (m) => m.nama === item.nama,
            )
          ) {
            combinedMaterials["Alat Habis Pakai"].push(item);
          }
        });
      }
    }
  });

  if (
    combinedMaterials.Reagen.length === 0 &&
    combinedMaterials["Alat Habis Pakai"].length === 0
  ) {
    container.innerHTML =
      '<p style="color: #666; text-align: center; padding: 20px;">Tidak ada material default untuk kombinasi parameter dan metode ini.</p>';
  }

  const tesMultiplier = jumlahTes;

  if (combinedMaterials.Reagen.length > 0) {
    const reagenCategory = document.createElement("div");
    reagenCategory.className = "material-category";
    reagenCategory.innerHTML = `<div class="category-header">Reagen</div><div class="material-items" id="reagenItems"></div><button type="button" class="add-material-btn" onclick="openAddMaterialModal('Reagen')">+ Tambah Reagen Lainnya</button>`;
    container.appendChild(reagenCategory);
    const reagenContainer = reagenCategory.querySelector("#reagenItems");
    combinedMaterials.Reagen.forEach((item, index) => {
      reagenContainer.appendChild(
        createMaterialItem(item, "reagen", index, false, tesMultiplier),
      );
    });
    customMaterials.Reagen.forEach((item, index) => {
      reagenContainer.appendChild(
        createMaterialItem(item, "reagen-custom", index, true, tesMultiplier),
      );
    });
  }

  if (combinedMaterials["Alat Habis Pakai"].length > 0) {
    const alatCategory = document.createElement("div");
    alatCategory.className = "material-category";
    alatCategory.innerHTML = `<div class="category-header">Alat Habis Pakai</div><div class="material-items" id="alatItems"></div><button type="button" class="add-material-btn" onclick="openAddMaterialModal('Alat Habis Pakai')">+ Tambah Alat Habis Pakai Lainnya</button>`;
    container.appendChild(alatCategory);
    const alatContainer = alatCategory.querySelector("#alatItems");
    combinedMaterials["Alat Habis Pakai"].forEach((item, index) => {
      alatContainer.appendChild(
        createMaterialItem(item, "alat", index, false, tesMultiplier),
      );
    });
    customMaterials["Alat Habis Pakai"].forEach((item, index) => {
      alatContainer.appendChild(
        createMaterialItem(item, "alat-custom", index, true, tesMultiplier),
      );
    });
  }
}

function createMaterialItem(item, prefix, index, isCustom, tesMultiplier) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "material-item";
  const itemId = `${prefix}-${index}`;
  itemDiv.setAttribute("data-material-id", itemId);

  const masterItem =
    masterMaterialDatabase["Reagen"].find((m) => m.nama === item.nama) ||
    masterMaterialDatabase["Alat Habis Pakai"].find(
      (m) => m.nama === item.nama,
    );
  const currentStock = masterItem ? masterItem.currentStock : 0;
  const defaultQty = item.consumptionPerTest * tesMultiplier;
  const batches = getOrCreateBatches(
    item.nama,
    item.testPerPackage,
    currentStock,
  );

  let testInfo = item.testPerPackage ? `${item.testPerPackage} tes/pkg` : "";
  let calcInfo =
    tesMultiplier > 1
      ? `${tesMultiplier} tes × ${item.consumptionPerTest} ${item.satuan}/tes`
      : `${item.consumptionPerTest} ${item.satuan}/tes`;

  itemDiv.innerHTML = `
            ${isCustom ? `<button type="button" class="delete-material-btn" onclick="deleteCustomMaterial('${prefix}', ${index})">×</button>` : ""}
            <div class="material-name">${item.nama}</div>
            <div class="material-meta">
                <span class="material-unit">${item.satuan}</span>
                ${testInfo ? `<span class="material-test-info">${testInfo}</span>` : ""}
                <span class="material-stock-info">Total Stok: ${currentStock} tes</span>
            </div>
            <div class="form-group" style="margin-top: 10px; margin-bottom: 10px;">
                <label class="form-label" style="font-size: 12px; margin-bottom: 6px;">Pilih Batch <span class="required">*</span></label>
                <select class="form-select batch-select" id="batch-${itemId}" onchange="updateMaterialQuantity('${itemId}', ${item.consumptionPerTest})">
                    <option value="">-- Pilih Batch --</option>
                    ${batches.map((batch, idx) => `<option value="${idx}" data-remaining="${batch.remainingTests}" data-package="${batch.packageSize}" data-batch-no="${batch.batchNo}">${batch.batchNo} | Sisa: ${batch.remainingTests} tes | Exp: ${batch.expiry}</option>`).join("")}
                </select>
                <div class="batch-info" id="batch-info-${itemId}" style="display: none; color: #2e7d32; font-weight: 600; margin-top: 4px;">✓ Batch dipilih</div>
            </div>
            <div class="material-details">
                <div class="material-calc-info">${calcInfo}<br><span style="font-size: 10px; color: #999;">Default: ${defaultQty} ${item.satuan}</span></div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="number" class="quantity-input" id="qty-${itemId}" value="${defaultQty}" min="0" step="0.01" onchange="validateQuantity('${itemId}')" oninput="validateQuantity('${itemId}')" style="width: 90px; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-weight: 600; text-align: center;">
                    <span style="font-size: 13px; color: #666; font-weight: 500;">${item.satuan}</span>
                </div>
            </div>
            <div class="batch-warning" id="warning-${itemId}" style="display: none; margin-top: 8px; padding: 8px; background: #fff3e0; border-left: 3px solid #ff9800; border-radius: 4px;">
                <span style="font-size: 11px; color: #f57c00; font-weight: 600;">⚠Pilih batch terlebih dahulu</span>
            </div>
        `;
  return itemDiv;
}

function updateMaterialQuantity(itemId, consumptionPerTest) {
  const batchSelect = document.getElementById(`batch-${itemId}`);
  const qtyInput = document.getElementById(`qty-${itemId}`);
  const warning = document.getElementById(`warning-${itemId}`);
  const batchInfo = document.getElementById(`batch-info-${itemId}`);

  if (batchSelect && batchSelect.value !== "") {
    const selectedOption = batchSelect.options[batchSelect.selectedIndex];
    const remainingTests = parseInt(
      selectedOption.getAttribute("data-remaining"),
    );
    if (warning) warning.style.display = "none";
    if (batchInfo) batchInfo.style.display = "block";
    const calculatedQty = remainingTests * consumptionPerTest;
    if (qtyInput) {
      qtyInput.value = calculatedQty.toFixed(2);
      qtyInput.max = calculatedQty;
    }
    validateQuantity(itemId);
  } else {
    if (warning) warning.style.display = "block";
    if (batchInfo) batchInfo.style.display = "none";
    if (qtyInput) {
      qtyInput.style.borderColor = "#ddd";
      qtyInput.style.backgroundColor = "white";
    }
  }
}

function validateQuantity(itemId) {
  const qtyInput = document.getElementById(`qty-${itemId}`);
  const batchSelect = document.getElementById(`batch-${itemId}`);
  if (!batchSelect || batchSelect.value === "") return;

  const currentQty = parseFloat(qtyInput.value);
  const maxQty = parseFloat(qtyInput.max);

  if (currentQty > maxQty) {
    qtyInput.style.borderColor = "#f44336";
    qtyInput.style.backgroundColor = "#ffebee";
  } else if (currentQty > 0) {
    qtyInput.style.borderColor = "#4caf50";
    qtyInput.style.backgroundColor = "#f0fff4";
  } else {
    qtyInput.style.borderColor = "#ddd";
    qtyInput.style.backgroundColor = "white";
  }
}

function deleteCustomMaterial(prefix, index) {
  if (confirm("Hapus material ini?")) {
    const category = prefix.includes("reagen") ? "Reagen" : "Alat Habis Pakai";
    customMaterials[category].splice(index, 1);
    const metode = document.getElementById("metodeSelect").value;
    generateMaterialList(selectedParameters, metode);
  }
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openAddMaterialModal(category) {
  currentAddCategory = category;
  document.getElementById("addMaterialModal").classList.add("active");
  document.getElementById("newMaterialCategory").value = category;
  document.getElementById("newMaterialName").value = "";
  document.getElementById("newMaterialName").disabled = false;
  document.getElementById("newMaterialUnit").value = "";
  document.getElementById("newMaterialTestPkg").value = "";
  updateMaterialOptions();
}

function updateMaterialOptions() {
  const category = document.getElementById("newMaterialCategory").value;
  const materialSelect = document.getElementById("newMaterialName");
  const unitInput = document.getElementById("newMaterialUnit");
  const testPkgInput = document.getElementById("newMaterialTestPkg");

  materialSelect.innerHTML = '<option value="">Pilih nama material</option>';
  unitInput.value = "";
  testPkgInput.value = "";

  if (category && masterMaterialDatabase[category]) {
    materialSelect.disabled = false;
    const existingMaterials = new Set();
    document.querySelectorAll(".material-item").forEach((item) => {
      existingMaterials.add(item.querySelector(".material-name").textContent);
    });
    customMaterials[category].forEach((item) =>
      existingMaterials.add(item.nama),
    );

    let availableCount = 0;
    masterMaterialDatabase[category].forEach((material) => {
      if (!existingMaterials.has(material.nama)) {
        const option = document.createElement("option");
        option.value = material.nama;
        option.textContent = material.nama;
        option.setAttribute("data-unit", material.satuan);
        option.setAttribute("data-test-pkg", material.testPerPackage || "");
        option.setAttribute(
          "data-consumption",
          material.consumptionPerTest || "",
        );
        materialSelect.appendChild(option);
        availableCount++;
      }
    });

    if (availableCount === 0) {
      materialSelect.disabled = true;
      materialSelect.innerHTML =
        '<option value="">Semua material sudah ditambahkan</option>';
    }
  } else {
    materialSelect.disabled = true;
    materialSelect.innerHTML =
      '<option value="">Pilih kategori terlebih dahulu</option>';
  }
}

function updateMaterialUnit() {
  const materialSelect = document.getElementById("newMaterialName");
  const unitInput = document.getElementById("newMaterialUnit");
  const testPkgInput = document.getElementById("newMaterialTestPkg");

  if (materialSelect.value) {
    const selectedOption = materialSelect.options[materialSelect.selectedIndex];
    unitInput.value = selectedOption.getAttribute("data-unit") || "";
    testPkgInput.value = selectedOption.getAttribute("data-test-pkg")
      ? `${selectedOption.getAttribute("data-test-pkg")} test`
      : "";
  } else {
    unitInput.value = "";
    testPkgInput.value = "";
  }
}

function closeAddMaterialModal() {
  document.getElementById("addMaterialModal").classList.remove("active");
  currentAddCategory = "";
}

function addNewMaterial() {
  const category = document.getElementById("newMaterialCategory").value;
  const nama = document.getElementById("newMaterialName").value;
  if (!category) {
    alert("Silakan pilih kategori");
    return;
  }
  if (!nama) {
    alert("Silakan pilih nama material");
    return;
  }

  const masterItem = masterMaterialDatabase[category].find(
    (m) => m.nama === nama,
  );
  if (!masterItem) {
    alert("Material tidak ditemukan");
    return;
  }

  customMaterials[category].push({
    nama: masterItem.nama,
    satuan: masterItem.satuan,
    testPerPackage: masterItem.testPerPackage,
    consumptionPerTest: masterItem.consumptionPerTest,
  });
  closeAddMaterialModal();
  const metode = document.getElementById("metodeSelect").value;
  generateMaterialList(selectedParameters, metode);
}

function closeConfirmModal() {
  document.getElementById("confirmModal").classList.remove("active");
}
function closeDetailModal() {
  document.getElementById("detailModal").classList.remove("active");
}

// ========================================
// SUBMIT FUNCTIONS
// ========================================
function collectMaterialsWithBatch() {
  const materials = { Reagen: [], "Alat Habis Pakai": [] };
  document.querySelectorAll(".material-item").forEach((item) => {
    const nama = item.querySelector(".material-name").textContent;
    const satuanEl = item.querySelector(".material-unit");
    const itemId = item.getAttribute("data-material-id");
    const qtyInput = document.getElementById(`qty-${itemId}`);
    const batchSelect = document.getElementById(`batch-${itemId}`);

    if (satuanEl && qtyInput && batchSelect && batchSelect.value !== "") {
      const satuan = satuanEl.textContent;
      const quantity = parseFloat(qtyInput.value);
      const batchOption = batchSelect.options[batchSelect.selectedIndex];
      const batchNo = batchOption.getAttribute("data-batch-no");

      const reagenContainer = document.getElementById("reagenItems");
      const alatContainer = document.getElementById("alatItems");

      if (reagenContainer && reagenContainer.contains(item)) {
        materials.Reagen.push({ nama, quantity, satuan, batch: batchNo });
      } else if (alatContainer && alatContainer.contains(item)) {
        materials["Alat Habis Pakai"].push({
          nama,
          quantity,
          satuan,
          batch: batchNo,
        });
      }
    }
  });
  return materials;
}

function handleSubmit() {
  const materials = collectMaterialsWithBatch();
  if (
    materials.Reagen.length === 0 &&
    materials["Alat Habis Pakai"].length === 0
  ) {
    alert("Tidak ada material yang digunakan");
    return;
  }

  let missingBatch = false;
  let invalidQuantity = false;
  document.querySelectorAll(".batch-select").forEach((select) => {
    const itemId = select.id.replace("batch-", "");
    const qtyInput = document.getElementById(`qty-${itemId}`);
    if (select.value === "") {
      missingBatch = true;
      const warning = document.getElementById(`warning-${itemId}`);
      if (warning) warning.style.display = "block";
    }
    if (qtyInput && parseFloat(qtyInput.value) <= 0) invalidQuantity = true;
  });

  if (missingBatch) {
    alert("Silakan pilih batch untuk semua material!");
    return;
  }
  if (invalidQuantity) {
    alert("Jumlah material harus lebih dari 0!");
    return;
  }
  showDateConfirmModal(materials);
}

function showDateConfirmModal(materials) {
  let modalContent = `<div class="summary-section"><div class="summary-title">TIPE PENGELUARAN</div><div class="summary-text"><span class="summary-highlight">${selectedType.toUpperCase()}</span></div></div>`;
  if (selectedType === "sampel") {
    modalContent += `<div class="summary-section"><div class="summary-title">JUMLAH</div><div class="summary-text">Sampel: <span class="summary-highlight">${jumlahSampel}</span><br>Tes: <span class="summary-highlight">${jumlahTes}</span></div></div>`;
    modalContent += `<div class="summary-section"><div class="summary-title">DATA SAMPEL</div><div class="summary-text">${jumlahSampel} sampel dengan data NIK lengkap</div></div>`;
  }
  const metode = document.getElementById("metodeSelect").value;
  modalContent += `<div class="summary-section"><div class="summary-title">PARAMETER & METODE</div><div class="summary-text">Metode: <span class="summary-highlight">${metode}</span><br>Parameter: ${selectedParameters.length} item</div></div>`;
  modalContent += `<div class="summary-section"><div class="summary-title">MATERIAL</div><div class="summary-text">Reagen: ${materials.Reagen.length} item<br>Alat Habis Pakai: ${materials["Alat Habis Pakai"].length} item</div></div>`;
  modalContent +=
    '<p style="color: #666; font-size: 13px; margin-top: 15px;">Apakah Anda yakin ingin menyimpan data ini?</p>';
  document.getElementById("confirmModalBody").innerHTML = modalContent;
  document.getElementById("confirmModal").classList.add("active");
}

function confirmSubmit() {
  const tanggalInput = document.getElementById("tanggalAktualPengeluaran");
  if (!tanggalInput || !tanggalInput.value) {
    alert("Silakan isi tanggal aktual pengeluaran!");
    return;
  }
  const tanggalPengeluaran = tanggalInput.value;
  closeConfirmModal();

  const materials = collectMaterialsWithBatch();
  const dataEntry = {
    id: Date.now(),
    timestamp: new Date(),
    tanggalAktual: tanggalPengeluaran,
    type: selectedType,
    parameter: selectedParameters.map((p) => p.name),
    metode: document.getElementById("metodeSelect").value,
    sudahDistribusi: false,
    materials: {
      Reagen: materials.Reagen.map(
        (m) => `${m.nama}: ${m.quantity} ${m.satuan} (${m.batch})`,
      ),
      "Alat Habis Pakai": materials["Alat Habis Pakai"].map(
        (m) => `${m.nama}: ${m.quantity} ${m.satuan} (${m.batch})`,
      ),
    },
    rawMaterials: materials,
  };

  if (selectedType === "sampel") {
    dataEntry.jumlahSampel = jumlahSampel;
    dataEntry.jumlahTes = jumlahTes;
    dataEntry.sampleData = JSON.parse(JSON.stringify(sampleDataArray));
  }

  pengeluaranData.unshift(dataEntry);
  updateStockAfterPengeluaran(dataEntry.materials);

  let summary = `✓ DATA BERHASIL DISIMPAN!\n\nTanggal: ${tanggalPengeluaran}\nTipe: ${selectedType.toUpperCase()}\n\n`;
  if (selectedType === "sampel")
    summary += `Sampel: ${jumlahSampel} | Tes: ${jumlahTes}\n\n`;
  summary += `Material:\n- Reagen: ${materials.Reagen.length} item\n- Alat Habis Pakai: ${materials["Alat Habis Pakai"].length} item\n`;
  alert(summary);

  document.getElementById("labDistributionForm").style.display = "none";
  document.getElementById("inventoryMenu").style.display = "block";
  document.getElementById("pageTitle").textContent = "Inventaris";
  resetForm();
}

// ========================================
// HISTORY FUNCTIONS
// ========================================
function renderHistory() {
  const container = document.getElementById("historyCardsContainer");
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filterType = document.getElementById("filterType").value;
  const filterDate = document.getElementById("filterDate").value;

  let filteredData = pengeluaranData.filter((item) => {
    let matchSearch =
      !searchTerm || JSON.stringify(item).toLowerCase().includes(searchTerm);
    let matchType = !filterType || item.type === filterType;
    let matchDate = true;

    if (filterDate) {
      const itemDate = new Date(item.timestamp);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (filterDate === "today") {
        const todayEnd = new Date(today);
        todayEnd.setHours(23, 59, 59, 999);
        matchDate = itemDate >= today && itemDate <= todayEnd;
      } else if (filterDate === "yesterday") {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayEnd = new Date(yesterday);
        yesterdayEnd.setHours(23, 59, 59, 999);
        matchDate = itemDate >= yesterday && itemDate <= yesterdayEnd;
      } else if (filterDate === "7days") {
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        matchDate = itemDate >= sevenDaysAgo;
      } else if (filterDate === "30days") {
        const thirtyDaysAgo = new Date(today);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        matchDate = itemDate >= thirtyDaysAgo;
      }
    }
    return matchSearch && matchType && matchDate && item.type !== 'kesling';
  });

  if (filteredData.length === 0) {
    container.innerHTML =
      '<div class="empty-state"><div class="empty-state-text">Tidak ada data pengeluaran</div><div class="empty-state-subtext">Data yang Anda cari tidak ditemukan</div></div>';
    return;
  }

  container.innerHTML = "";
  filteredData.forEach((item) =>
    container.appendChild(createHistoryCard(item)),
  );
}

function createHistoryCard(item) {
  const card = document.createElement("div");
  card.className = "history-card";
  card.onclick = () => showDetail(item.id);

  const date = new Date(item.timestamp);
  const dateStr = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const timeStr = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let badgeClass =
    item.type === "control"
      ? "badge-control"
      : item.type === "alat"
        ? "badge-alat"
        : item.type === "kesling"
          ? "badge-kesling"
          : "badge-sampel";

  const parameterDisplay =
    item.parameter && item.parameter.length > 2
      ? item.parameter.slice(0, 2).join(", ") +
      `, +${item.parameter.length - 2} lainnya`
      : item.parameter ? item.parameter.join(", ") : "Kesling Parameter";

  let cardHTML = `<div class="card-header"><div class="card-title-section"><div class="card-type-badge ${badgeClass}">${item.type.toUpperCase()}</div><div class="card-datetime">${dateStr}, ${timeStr}</div></div></div><div class="card-divider"></div>`;

  if (item.type === "sampel" && item.jumlahSampel) {
    cardHTML += `<div class="card-info-row"><span class="card-label">Jumlah Sampel</span><span class="card-value">${item.jumlahSampel}</span></div><div class="card-info-row"><span class="card-label">Jumlah Tes</span><span class="card-value">${item.jumlahTes}</span></div>`;
  } else if (item.type === "kesling") {
    cardHTML += `
      <div class="card-info-row"><span class="card-label">Pelanggan</span><span class="card-value">${item.customer}</span></div>
      <div class="card-info-row"><span class="card-label">Bahan Uji</span><span class="card-value">${item.bahanUji}</span></div>
      <div class="card-info-row"><span class="card-label">No Lab</span><span class="card-value">${item.noLab}</span></div>
      <div class="card-info-row"><span class="card-label">Status Lab</span><span class="card-value">${item.statusLab}</span></div>
    `;
  }

  if (item.type !== "kesling") {
    cardHTML += `<div class="card-info-row"><span class="card-label">Metode</span><span class="card-value">${item.metode}</span></div><div class="card-info-row"><span class="card-label">Parameter</span><span class="card-value">${parameterDisplay}</span></div><div class="card-info-row"><span class="card-label">Material</span><span class="card-value">${item.materials.Reagen.length + item.materials["Alat Habis Pakai"].length} item</span></div>`;
  }

  cardHTML += `<div class="card-footer"><button class="view-detail-btn">Lihat Detail →</button></div>`;
  card.innerHTML = cardHTML;
  return card;
}

function filterHistory() {
  renderHistory();
}

function showDetail(id) {
  const item = pengeluaranData.find((d) => d.id === id);
  if (!item) return;
  const modal = document.getElementById("detailModal");
  const modalBody = document.getElementById("detailModalBody");

  const date = new Date(item.timestamp);
  const dateStr = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeStr = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
  let badgeClass =
    item.type === "control"
      ? "badge-control"
      : item.type === "alat"
        ? "badge-alat"
        : item.type === "kesling"
          ? "badge-kesling"
          : "badge-sampel";

  let detailHTML = `<div style="text-align: center; margin-bottom: 20px;"><div class="badge-type-large ${badgeClass}">${item.type.toUpperCase()}</div><div style="font-size: 14px; color: #666;">${dateStr}, ${timeStr} WIB</div></div>`;

  if (item.type === "sampel" && item.jumlahSampel) {
    detailHTML += `<div class="detail-section"><div class="detail-section-title">JUMLAH</div><div class="detail-row"><div class="detail-label">Jumlah Sampel</div><div class="detail-value">${item.jumlahSampel}</div></div><div class="detail-row"><div class="detail-label">Jumlah Tes</div><div class="detail-value">${item.jumlahTes}</div></div></div>`;
  } else if (item.type === "kesling") {
    detailHTML += `
      <div class="detail-section">
        <div class="detail-section-title">INFORMASI PENGUJIAN KESLING</div>
        <div class="detail-row"><div class="detail-label">Pelanggan</div><div class="detail-value">${item.customer || ""}</div></div>
        <div class="detail-row"><div class="detail-label">Bahan Uji</div><div class="detail-value">${item.bahanUji || ""}</div></div>
        <div class="detail-row"><div class="detail-label">No Lab</div><div class="detail-value">${item.noLab || ""}</div></div>
        <div class="detail-row"><div class="detail-label">Status Lab</div><div class="detail-value">${item.statusLab || ""}</div></div>
        <div class="detail-row"><div class="detail-label">Tgl Pengujian</div><div class="detail-value">${item.tglPengujian || ""}</div></div>
        <div class="detail-row"><div class="detail-label">Pengambil Sampel</div><div class="detail-value">${item.pengambilSampel || ""}</div></div>
        <div class="detail-row"><div class="detail-label">Lokasi</div><div class="detail-value">${item.lokasi || ""}</div></div>
        <div class="detail-row"><div class="detail-label">Tgl Pengambilan</div><div class="detail-value">${item.tglPengambilan || ""}</div></div>
      </div>
    `;

    if (item.statusLab === "Sudah") {
      detailHTML += `
        <div class="detail-section">
          <div class="detail-section-title">HASIL PENGUJIAN</div>
          <div class="table-container" style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 10px;">
              <thead>
                <tr style="background: #f5f5f5;">
                  <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Parameter</th>
                  <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Std Baku Mutu</th>
                  <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Hasil</th>
                  <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Metode</th>
                </tr>
              </thead>
              <tbody>
                ${item.results.map(r => `
                  <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">${r.parameter || ""}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${(r.bakuMutu || "")} ${(r.satuan || "")}</td>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #004990;">${r.hasil || ""}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${r.metode || ""}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  } else {
    detailHTML += `<div class="detail-section"><div class="detail-section-title">PARAMETER & METODE</div><div class="detail-row"><div class="detail-label">Metode</div><div class="detail-value">${item.metode || ""}</div></div><div class="detail-row"><div class="detail-label">Parameter</div><div class="detail-value"><ul class="detail-list">${item.parameter ? item.parameter.map((p) => `<li>${p}</li>`).join("") : ""}</ul></div></div></div>`;
  }
  if (item.materials.Reagen.length > 0)
    detailHTML += `<div class="detail-section"><div class="detail-section-title">MATERIAL REAGEN (${item.materials.Reagen.length} item)</div><ul class="detail-list">${item.materials.Reagen.map((m) => `<li>${m}</li>`).join("")}</ul></div>`;
  if (item.materials["Alat Habis Pakai"].length > 0)
    detailHTML += `<div class="detail-section"><div class="detail-section-title">MATERIAL ALAT HABIS PAKAI (${item.materials["Alat Habis Pakai"].length} item)</div><ul class="detail-list">${item.materials["Alat Habis Pakai"].map((m) => `<li>${m}</li>`).join("")}</ul></div>`;
  modalBody.innerHTML = detailHTML;
  modal.classList.add("active");
}

function addSampleData() {
  pengeluaranData.push(
    {
      id: Date.now() - 3600000,
      timestamp: new Date(Date.now() - 3600000),
      type: "sampel",
      jumlahSampel: 2,
      jumlahTes: 6,
      parameter: ["Hemoglobin, penetapan kadar", "Leukosit, hitung jumlah"],
      metode: "Flow Cytometry",
      materials: {
        Reagen: ["Onetech Diluent: 300 ml", "Onetech Lyse: 15 ml"],
        "Alat Habis Pakai": [
          "Vacutainer EDTA: 6 pcs",
          "Spuit 3cc steril: 6 pcs",
          "Alcohol swab: 12 pcs",
        ],
      },
      sampleData: [],
    },
    {
      id: Date.now() - 86400000,
      timestamp: new Date(Date.now() - 86400000),
      type: "control",
      parameter: [
        "Glukosa, penetapan kadar",
        "Kolesterol total, penetapan kadar",
      ],
      metode: "Enzimatik",
      materials: {
        Reagen: ["Proline GOD PAP: 0.5 ml", "Proline Cholesterol FS: 1 ml"],
        "Alat Habis Pakai": [
          "Vacutainer EDTA: 1 pcs",
          "Spuit 3cc steril: 1 pcs",
        ],
      },
    },
  );
}

// ========================================
// STOK FUNCTIONS
// ========================================
function renderStokMaterial(searchTerm = "") {
  const container = document.getElementById("stokCardsContainer");
  container.innerHTML = "";
  let allMaterials = [];
  Object.keys(masterMaterialDatabase).forEach((category) => {
    masterMaterialDatabase[category].forEach((material) =>
      allMaterials.push({ ...material, category }),
    );
  });
  if (searchTerm)
    allMaterials = allMaterials.filter((m) =>
      m.nama.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  if (allMaterials.length === 0) {
    container.innerHTML =
      '<div class="stok-empty-state"><div class="stok-empty-text">Tidak ada material ditemukan</div></div>';
    return;
  }
  allMaterials.sort((a, b) => a.nama.localeCompare(b.nama));
  allMaterials.forEach((material) =>
    container.appendChild(createStokCard(material)),
  );
}

function createStokCard(material) {
  const card = document.createElement("div");
  card.className = "stok-card";
  card.onclick = () => showStokDetail(material.nama, material.category);
  const categoryClass = material.category === "Reagen" ? "reagen" : "alat";
  const batches = getOrCreateBatches(
    material.nama,
    material.testPerPackage,
    material.currentStock,
  );
  const totalTests = batches.reduce(
    (sum, batch) => sum + batch.remainingTests,
    0,
  );
  const stockLevel = getStockLevel(totalTests, material.testPerPackage * 2);

  card.innerHTML = `
            <div class="stok-card-header"><div class="stok-material-name">${material.nama}</div><div class="stok-category-badge ${categoryClass}">${material.category === "Reagen" ? "Reagen" : "Alat"}</div></div>
            <div class="stok-info-row"><span class="stok-info-label">Per Package:</span><span class="stok-info-value">${material.testPerPackage} test</span></div>
            <div class="stok-info-row"><span class="stok-info-label">Per Test:</span><span class="stok-info-value">${material.consumptionPerTest} ${material.satuan}</span></div>
            <div class="stok-stock-indicator"><div class="stok-stock-left"><div class="stok-stock-text">Stok Tersedia</div><div class="stok-test-count">${totalTests} tes tersedia</div></div><div class="stok-stock-value ${stockLevel}">${totalTests}</div></div>
        `;
  return card;
}

function getStockLevel(currentStock, threshold) {
  if (currentStock === 0) return "low";
  if (currentStock < threshold) return "medium";
  return "high";
}

function searchStokMaterial() {
  renderStokMaterial(document.getElementById("stokSearch").value);
}

function showStokDetail(materialName, category) {
  const material = masterMaterialDatabase[category].find(
    (m) => m.nama === materialName,
  );
  if (!material) return;
  const batches = getOrCreateBatches(
    material.nama,
    material.testPerPackage,
    material.currentStock,
  );
  const totalTests = batches.reduce(
    (sum, batch) => sum + batch.remainingTests,
    0,
  );
  const totalPackages = Math.ceil(totalTests / material.testPerPackage);

  let batchesHTML = batches
    .map((batch) => {
      const expiryStatus = getExpiryStatus(batch.expiry);
      const daysLeft = calculateDaysUntilExpiry(batch.expiry);
      let expiryText =
        daysLeft < 0
          ? `Kadaluarsa ${Math.abs(daysLeft)} hari lalu`
          : daysLeft === 0
            ? "Kadaluarsa hari ini"
            : `${daysLeft} hari lagi`;
      return `<div class="stok-batch-item"><div class="stok-batch-header"><div class="stok-batch-number">${batch.batchNo}</div><div class="stok-expiry-badge ${expiryStatus.class}">${expiryStatus.label}</div></div><div class="stok-batch-details"><div class="stok-batch-detail-item"><span class="stok-batch-detail-label">Tanggal Kadaluarsa</span><div class="stok-batch-detail-value">${batch.expiry}</div><div style="font-size: 11px; color: #666; margin-top: 2px;">${expiryText}</div></div><div class="stok-batch-detail-item"><span class="stok-batch-detail-label">Sisa Tes</span><div class="stok-batch-detail-value">${batch.remainingTests} tes</div></div><div class="stok-batch-detail-item"><span class="stok-batch-detail-label">Ukuran Package</span><div class="stok-batch-detail-value">${batch.packageSize} tes/pkg</div></div><div class="stok-batch-detail-item"><span class="stok-batch-detail-label">Volume Tersisa</span><div class="stok-batch-detail-value">${(batch.remainingTests * material.consumptionPerTest).toFixed(2)} ${material.satuan}</div></div></div></div>`;
    })
    .join("");

  document.getElementById("stokDetailBody").innerHTML = `
            <div class="stok-detail-header"><div class="stok-detail-name">${material.nama}</div><div class="stok-detail-meta"><div class="stok-detail-meta-item"><span>${category}</span></div><div class="stok-detail-meta-item"><span>${material.testPerPackage} tes/package</span></div><div class="stok-detail-meta-item"><span>${material.consumptionPerTest} ${material.satuan}/tes</span></div></div></div>
            <div class="stok-batch-section-title">Informasi Batch (${batches.length} batch tersedia)</div><div class="stok-batch-list">${batchesHTML}</div>
            <div class="stok-total-summary"><div class="stok-total-title">Total Stok Keseluruhan</div><div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;"><div><div class="stok-total-value">${totalTests} tes</div><div style="font-size: 13px; color: #1565c0; margin-top: 4px; font-weight: 600;">≈ ${totalPackages} package | ${(totalTests * material.consumptionPerTest).toFixed(2)} ${material.satuan}</div></div><div style="text-align: right;"><div style="font-size: 12px; color: #1565c0; font-weight: 600; margin-bottom: 4px;">RATA-RATA EXPIRY</div><div style="font-size: 16px; color: #0d47a1; font-weight: 700;">${calculateAverageExpiry(batches)} hari</div></div></div></div>
        `;
  document.getElementById("stokDetailModal").classList.add("active");
}

function getExpiryStatus(expiryDate) {
  const days = calculateDaysUntilExpiry(expiryDate);
  if (days < 0) return { class: "expired", label: "Kadaluarsa" };
  if (days <= 30) return { class: "warning", label: "Segera Kadaluarsa" };
  return { class: "good", label: "Bagus" };
}

function calculateDaysUntilExpiry(expiryDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const expiry = new Date(expiryDate);
  expiry.setHours(0, 0, 0, 0);
  return Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
}

function calculateAverageExpiry(batches) {
  if (batches.length === 0) return 0;
  return Math.round(
    batches.reduce(
      (sum, batch) => sum + calculateDaysUntilExpiry(batch.expiry),
      0,
    ) / batches.length,
  );
}

function closeStokDetailModal() {
  document.getElementById("stokDetailModal").classList.remove("active");
}

function updateStockAfterPengeluaran(materials) {
  materials.Reagen.forEach((item) => {
    const match = item.match(
      /^(.+?):\s*([\d.]+)\s*(\w+)\s*\(Batch:\s*(.+?)\)$/,
    );
    if (match) {
      const materialName = match[1];
      const quantity = parseFloat(match[2]);
      const batchNo = match[4];
      const material = masterMaterialDatabase["Reagen"].find(
        (m) => m.nama === materialName,
      );
      if (material && batchDatabase[materialName]) {
        const batch = batchDatabase[materialName].find(
          (b) => b.batchNo === batchNo,
        );
        if (batch) {
          const testsUsed = Math.ceil(quantity / material.consumptionPerTest);
          batch.remainingTests = Math.max(0, batch.remainingTests - testsUsed);
          material.currentStock = batchDatabase[materialName].reduce(
            (sum, b) => sum + b.remainingTests,
            0,
          );
        }
      }
    }
  });
  materials["Alat Habis Pakai"].forEach((item) => {
    const match = item.match(
      /^(.+?):\s*([\d.]+)\s*(\w+)\s*\(Batch:\s*(.+?)\)$/,
    );
    if (match) {
      const materialName = match[1];
      const quantity = parseFloat(match[2]);
      const batchNo = match[4];
      const material = masterMaterialDatabase["Alat Habis Pakai"].find(
        (m) => m.nama === materialName,
      );
      if (material && batchDatabase[materialName]) {
        const batch = batchDatabase[materialName].find(
          (b) => b.batchNo === batchNo,
        );
        if (batch) {
          const testsUsed = Math.ceil(quantity / material.consumptionPerTest);
          batch.remainingTests = Math.max(0, batch.remainingTests - testsUsed);
          material.currentStock = batchDatabase[materialName].reduce(
            (sum, b) => sum + b.remainingTests,
            0,
          );
        }
      }
    }
  });
}

// ========================================
// DISTRIBUSI FUNCTIONS
// ========================================
function renderPenerimaDistribusiList() {
  const container = document.getElementById("penerimaDistribusiListContainer");
  const searchTerm = document
    .getElementById("searchPenerimaDistribusi")
    .value.toLowerCase();
  let filteredPenerima = penerimaDistribusiData.filter(
    (p) =>
      p.nama.toLowerCase().includes(searchTerm) ||
      p.lokasi.toLowerCase().includes(searchTerm),
  );
  document.getElementById("penerimaDistribusiCount").textContent =
    filteredPenerima.length;
  container.innerHTML = "";
  filteredPenerima.forEach((penerima) => {
    const card = document.createElement("div");
    card.className = "penerima-card";
    card.onclick = () => selectPenerimaDistribusi(penerima);
    card.innerHTML = `<div class="penerima-info"><div class="penerima-name">${penerima.nama}</div><div class="penerima-location">${penerima.lokasi}</div></div><div class="penerima-arrow">›</div>`;
    container.appendChild(card);
  });
}

function selectPenerimaDistribusi(penerima) {
  selectedPenerimaDistribusi = penerima;
  document.getElementById("pilihPenerimaDistribusiSection").style.display =
    "none";
  document.getElementById("distribusiAkhirSection").style.display = "block";
  document.getElementById("distribusiPenerimaTitle").textContent =
    `Distribusi ke ${penerima.nama}`;
  document.getElementById("pageTitle").textContent =
    `Distribusi - ${penerima.nama}`;
  renderDistribusiAkhir();
  window.scrollTo(0, 0);
}

function filterPenerimaDistribusi() {
  renderPenerimaDistribusiList();
}

function aggregateDistribusiData() {
  const aggregated = {};
  pengeluaranData
    .filter((entry) => !entry.sudahDistribusi)
    .forEach((entry) => {
      if (!entry.rawMaterials) return;
      entry.rawMaterials.Reagen.forEach((material) => {
        const key = `${material.nama}-${material.batch}`;
        if (!aggregated[key])
          aggregated[key] = {
            nama: material.nama,
            batch: material.batch,
            satuan: material.satuan,
            totalQuantity: 0,
            entries: [],
          };
        aggregated[key].totalQuantity += material.quantity;
        aggregated[key].entries.push(entry.id);
      });
      entry.rawMaterials["Alat Habis Pakai"].forEach((material) => {
        const key = `${material.nama}-${material.batch}`;
        if (!aggregated[key])
          aggregated[key] = {
            nama: material.nama,
            batch: material.batch,
            satuan: material.satuan,
            totalQuantity: 0,
            entries: [],
          };
        aggregated[key].totalQuantity += material.quantity;
        aggregated[key].entries.push(entry.id);
      });
    });
  return Object.values(aggregated);
}

function renderDistribusiAkhir() {
  const aggregatedData = aggregateDistribusiData();
  const container = document.getElementById("distribusiCardsContainer");
  const emptyState = document.getElementById("distribusiEmptyState");
  container.innerHTML = "";
  if (aggregatedData.length === 0) {
    container.style.display = "none";
    emptyState.style.display = "block";
    return;
  }
  container.style.display = "flex";
  emptyState.style.display = "none";
  aggregatedData.forEach((item) =>
    container.appendChild(createDistribusiCard(item)),
  );
}

function createDistribusiCard(item) {
  const masterItem =
    masterMaterialDatabase["Reagen"].find((m) => m.nama === item.nama) ||
    masterMaterialDatabase["Alat Habis Pakai"].find(
      (m) => m.nama === item.nama,
    );
  if (!masterItem) return document.createElement("div");
  const testPerPackage = masterItem.testPerPackage;
  const consumptionPerTest = masterItem.consumptionPerTest;
  const satuan = item.satuan;
  const totalTests = item.totalQuantity / consumptionPerTest;
  const packages = totalTests / testPerPackage;

  let bisaDikeluarkan,
    statusText,
    kurangInfo = "";
  if (satuan.toLowerCase() === "pcs") {
    bisaDikeluarkan = item.totalQuantity >= 1;
    statusText = bisaDikeluarkan
      ? "✓ Sudah Bisa Dikeluarkan"
      : "⏳ Belum Bisa Dikeluarkan";
    if (!bisaDikeluarkan)
      kurangInfo = `Kurang ${(1 - item.totalQuantity).toFixed(0)} pcs lagi`;
  } else {
    bisaDikeluarkan = packages >= 1;
    statusText = bisaDikeluarkan
      ? "✓ Sudah Bisa Dikeluarkan"
      : "⏳ Belum Bisa Dikeluarkan";
    if (!bisaDikeluarkan)
      kurangInfo = `Kurang ${(1 - packages).toFixed(2)} pkg lagi`;
  }

  const card = document.createElement("div");
  card.className = "distribusi-card";
  card.innerHTML = `
            <div class="distribusi-card-left"><div class="distribusi-material-info"><div class="distribusi-material-name">${item.nama}</div><div class="distribusi-batch">${item.batch}</div></div><div class="distribusi-consumption"><div class="distribusi-consumption-title">Total Consumption</div><div class="distribusi-consumption-value">${packages.toFixed(2)} pkg</div><div class="distribusi-consumption-sub">${Math.round(totalTests)} tes</div></div><div class="distribusi-volume"><div class="distribusi-volume-title">Volume</div><div class="distribusi-volume-value">${item.totalQuantity.toFixed(2)} ${satuan}</div></div></div>
            <div class="distribusi-card-right"><div class="distribusi-status"><div class="distribusi-status-badge ${bisaDikeluarkan ? "ready" : "pending"}">${statusText}</div>${kurangInfo ? `<div class="distribusi-kurang-info">${kurangInfo}</div>` : ""}</div><button class="distribusi-action-btn primary" onclick="distribusikanMaterial('${item.nama}', '${item.batch}')" ${!bisaDikeluarkan ? "disabled" : ""}>Distribusikan</button></div>
        `;
  return card;
}

function distribusikanMaterial(materialName, batchNo) {
  if (!selectedPenerimaDistribusi) {
    alert("Silakan pilih penerima terlebih dahulu!");
    return;
  }
  if (
    !confirm(
      `Distribusikan material "${materialName}" (${batchNo}) ke ${selectedPenerimaDistribusi.nama}?`,
    )
  )
    return;

  const entriesToUpdate = pengeluaranData.filter((entry) => {
    if (entry.sudahDistribusi || !entry.rawMaterials) return false;
    return (
      entry.rawMaterials.Reagen.some(
        (m) => m.nama === materialName && m.batch === batchNo,
      ) ||
      entry.rawMaterials["Alat Habis Pakai"].some(
        (m) => m.nama === materialName && m.batch === batchNo,
      )
    );
  });
  entriesToUpdate.forEach((entry) => (entry.sudahDistribusi = true));
  alert(
    `✓ Material "${materialName}" (${batchNo}) berhasil didistribusikan ke ${selectedPenerimaDistribusi.nama}!\n\nTotal: ${entriesToUpdate.length} transaksi ditandai sebagai sudah distribusi.`,
  );
  renderDistribusiAkhir();
}

// ========================================
// PENGUJIAN KESLING FUNCTIONS
// ========================================

/**
 * Initialize Kesling Customers (Card View)
 */
function initializeKeslingCustomers() {
  renderKeslingCustomerCards();
}

/**
 * Render customer cards based on search
 */
function renderKeslingCustomerCards() {
  const container = document.getElementById("keslingCustomerCardList");
  const searchTerm = document.getElementById("keslingCustomerSearch").value.toLowerCase();

  const filteredCustomers = masterKeslingCustomers.filter(c =>
    c.nama.toLowerCase().includes(searchTerm) ||
    c.alamat.toLowerCase().includes(searchTerm)
  );

  container.innerHTML = "";

  if (filteredCustomers.length === 0) {
    container.innerHTML = '<div style="text-align: center; padding: 20px; color: #999;">Pelanggan tidak ditemukan</div>';
    return;
  }

  filteredCustomers.forEach(customer => {
    const card = document.createElement("div");
    card.className = "kesling-customer-card";
    card.onclick = () => selectKeslingCustomer(customer.id);

    // Check if this card is currently selected
    const currentSelection = document.getElementById("keslingCustomerSelect").value;
    if (currentSelection === customer.id) {
      card.classList.add("selected");
    }

    card.innerHTML = `
      <div class="customer-card-content">
        <div class="customer-name">${customer.nama}</div>
        <div class="customer-address">${customer.alamat}</div>
      </div>
      <div class="customer-card-arrow">›</div>
    `;
    container.appendChild(card);
  });
}

/**
 * Handle customer selection from card
 */
function selectKeslingCustomer(customerId) {
  const select = document.getElementById("keslingCustomerSelect");

  // Update hidden select
  select.innerHTML = `<option value="${customerId}">${customerId}</option>`;
  select.value = customerId;

  // Visual feedback: Re-render cards to show selection highlight
  renderKeslingCustomerCards();

  const customer = masterKeslingCustomers.find((c) => c.id === customerId);
  if (customer) {
    // Auto-fill name in Step 3 location field
    const lokasiInput = document.getElementById("keslingLokasi");
    if (lokasiInput) {
      lokasiInput.value = customer.nama;
    }

    // Auto-proceed to Step 2
    setTimeout(() => {
      goToKeslingStep2();
    }, 300);
  }
}

/**
 * Navigation Kesling: Go to Step 1
 */
function goToKeslingStep1() {
  document.getElementById("keslingStep1").style.display = "block";
  document.getElementById("keslingStep2").style.display = "none";
  document.getElementById("keslingStep3").style.display = "none";
  window.scrollTo(0, 0);
}

/**
 * Navigation Kesling: Go to Step 2
 */
function goToKeslingStep2() {
  // Generate No Lab if empty
  const noLabInput = document.getElementById("keslingNoLab");
  if (!noLabInput.value) {
    noLabInput.value = generateKeslingNoLab();
  }

  // Set default tgl penerimaan if empty
  const tglInput = document.getElementById("keslingTglPenerimaan");
  if (!tglInput.value) {
    tglInput.value = new Date().toISOString().split("T")[0];
  }

  document.getElementById("keslingStep1").style.display = "none";
  document.getElementById("keslingStep2").style.display = "block";
  document.getElementById("keslingStep3").style.display = "none";
  window.scrollTo(0, 0);

  // Update button text based on Status Lab
  toggleKeslingNextButton();
}

/**
 * Navigation Kesling: Go to Step 3
 */
function goToKeslingStep3() {
  const paramCategory = document.getElementById("keslingParameterCategorySelect").value;
  const bahanUji = document.getElementById("keslingBahanUji").value;
  const tglPenerimaan = document.getElementById("keslingTglPenerimaan").value;

  if (!paramCategory || !bahanUji || !tglPenerimaan) {
    alert("Silakan lengkapi data Parameter, Bahan Uji, dan Tanggal Penerimaan!");
    return;
  }

  // Update Lokasi/Tanggal default if empty
  const lokasiTglInput = document.getElementById("keslingLokasiTgl");
  if (!lokasiTglInput.value) {
    const customer = masterKeslingCustomers.find(c => c.id === document.getElementById("keslingCustomerSelect").value);
    const alamatShort = customer ? customer.alamat.split(',')[0] : "Sidakalang";
    const dateFormatted = tglPenerimaan.split('-').reverse().join('.');
    lokasiTglInput.value = `${alamatShort} / ${dateFormatted}`;
  }

  // Update Tgl Pengujian defaults
  if (!document.getElementById("keslingTglMulai").value) {
    document.getElementById("keslingTglMulai").value = tglPenerimaan;
  }
  if (!document.getElementById("keslingTglSelesai").value) {
    const end = new Date(tglPenerimaan);
    end.setDate(end.getDate() + 6);
    document.getElementById("keslingTglSelesai").value = end.toISOString().split("T")[0];
  }

  document.getElementById("keslingStep1").style.display = "none";
  document.getElementById("keslingStep2").style.display = "none";
  document.getElementById("keslingStep3").style.display = "block";
  window.scrollTo(0, 0);
}

/**
 * Generate No Lab LX
 */
function generateKeslingNoLab() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${random}LX/${month}/${year}`;
}

/**
 * Handle parameter category change
 */
function handleKeslingParameterCategoryChange() {
  const category = document.getElementById("keslingParameterCategorySelect").value;
  const airMinumFields = document.getElementById("keslingAirMinumFields");
  const container = document.getElementById("keslingResultMobileContainer");

  // Show/hide specific fields
  if (category === "Kualitas Air Minum") {
    airMinumFields.style.display = "block";
  } else {
    airMinumFields.style.display = "none";
  }

  // Clear and populate result cards
  container.innerHTML = "";
  if (category && masterKeslingParameters[category]) {
    masterKeslingParameters[category].forEach((param) => {
      addKeslingParameterRow(param);
    });
  }
}

/**
 * Add card to Kesling result list (mobile-friendly)
 */
function addKeslingParameterRow(data = null) {
  const container = document.getElementById("keslingResultMobileContainer");
  const card = document.createElement("div");
  card.className = "kesling-mobile-card";

  // Mapping parameter to specific methods
  const methodMapping = {
    'pH': ['SNI 6989.11-2019'],
    'TDS': ['SNI 6989.27-2019'],
    'Kekeruhan': ['SNI 3554-2015'],
    'Bau': ['SNI 3554-2015'],
    'Nitrit': ['SNI 06-6989.9-2004'],
    'Warna': ['APHA 2120B'],
    'Kromium': ['US-EPA Method 200.8'],
    'Formalin': ['Test Kit'],
    'Boraks': ['Test Kit'],
    'Suhu': ['SNI 06-6989.23-2005'],
    'Kelembaban': ['Higrometer'],
    'Karbon Monoksida (CO)': ['Direct Reading'],
    'Indeks Jentik': ['Visual']
  };

  const paramName = data ? data.nama : "Parameter Baru";
  const allowedMethods = methodMapping[paramName] || (data && data.metode ? [data.metode] : []);

  // All possible methods for UI reference
  const allMethodOptions = [
    { value: "SNI 6989.11-2019", label: "SNI 6989.11-2019 (pH)" },
    { value: "SNI 6989.27-2019", label: "SNI 6989.27-2019 (TDS)" },
    { value: "SNI 3554-2015", label: "SNI 3554-2015 (Kekeruhan/Bau)" },
    { value: "SNI 06-6989.9-2004", label: "SNI 06-6989.9-2004 (Nitrit)" },
    { value: "APHA 2120B", label: "APHA 2120B (Warna)" },
    { value: "US-EPA Method 200.8", label: "US-EPA Method 200.8 (Kromium)" },
    { value: "Turbidimetri", label: "Turbidimetri" },
    { value: "Photometric", label: "Photometric" },
    { value: "IK (Instruksi Kerja)", label: "IK (Instruksi Kerja)" },
    { value: "Test Kit", label: "Test Kit" },
    { value: "Organoleptik", label: "Organoleptik" },
    { value: "Permenkes", label: "Permenkes" },
    { value: "Higrometer", label: "Higrometer" },
    { value: "Direct Reading", label: "Direct Reading" },
    { value: "Visual", label: "Visual" },
    { value: "SNI 06-6989.23-2005", label: "SNI 06-6989.23-2005 (Suhu)" }
  ];

  let methodOptionsHtml = '<option value="">-- Pilih Metode --</option>';
  if (allowedMethods.length > 0) {
    allMethodOptions.forEach(opt => {
      if (allowedMethods.includes(opt.value)) {
        methodOptionsHtml += `<option value="${opt.value}" selected>${opt.label}</option>`;
      }
    });
  } else {
    // If no specific mapping, show all or standard ones. 
    // User requested "tidak ada pilihan lain", so if it's a known param, it's restricted.
    // Otherwise we show all options as a fallback but for master data it's always restricted.
    allMethodOptions.forEach(opt => {
      methodOptionsHtml += `<option value="${opt.value}">${opt.label}</option>`;
    });
  }

  card.innerHTML = `
    <div class="kesling-card-header">
      <input type="text" class="kesling-p-name-main kesling-p-name" value="${paramName}" placeholder="Nama Parameter" ${data ? 'readonly style="background-color: #f9f9f9;"' : ''}>
      <button type="button" class="remove-card-btn" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
    <div class="kesling-card-body">
        <div class="kesling-info-grid">
            <div class="info-item">
                <label>Standar Baku Mutu</label>
                <input type="text" class="kesling-p-baku" value="${data ? data.bakuMutu : ''}" readonly>
            </div>
            <div class="info-item">
                <label>Satuan</label>
                <input type="text" class="kesling-p-unit" value="${data ? data.satuan : ''}" readonly>
            </div>
        </div>

        <div class="kesling-input-section">
            <label>Hasil Pengujian <span class="required">*</span></label>
            <input type="text" class="kesling-p-res" placeholder="Masukkan Hasil Pengujian" value="${data && data.hasil !== undefined ? data.hasil : ''}">
        </div>

        <div class="kesling-metode-section">
            <label>Metode Pengujian</label>
            <select class="kesling-p-meth form-select" style="width: 100%; border: 1px solid #ddd; border-radius: 4px; padding: 4px;">
                ${methodOptionsHtml}
            </select>
        </div>
    </div>
  `;

  container.appendChild(card);
}

/**
 * Reset Kesling Form
 */
function resetKeslingForm() {
  document.getElementById("keslingCustomerSearch").value = "";
  document.getElementById("keslingCustomerSelect").innerHTML = '<option value=""></option>';
  document.getElementById("keslingCustomerSelect").value = "";
  document.getElementById("keslingParameterCategorySelect").value = "";
  document.getElementById("keslingBahanUji").value = "";
  document.getElementById("keslingKemasan").value = "";
  document.getElementById("keslingMerk").value = "";
  document.getElementById("keslingNoLab").value = "";
  document.getElementById("keslingTglPenerimaan").value = "";
  document.querySelectorAll('input[name="keslingStatusLab"]').forEach(r => {
    if (r.value === "Belum") r.checked = true;
  });
  document.getElementById("keslingTglMulai").value = "";
  document.getElementById("keslingTglSelesai").value = "";

  // Reset Radio to Pelanggan
  document.querySelector('input[name="keslingPengambilSampel"][value="Pelanggan"]').checked = true;

  document.getElementById("keslingLokasi").value = "";
  document.getElementById("keslingLokasiTgl").value = "";
  document.getElementById("keslingResultMobileContainer").innerHTML = "";
  window.editingKeslingId = null;
  toggleKeslingNextButton();
  goToKeslingStep1();
}

/**
 * Handle Kesling Submission
 */
function handleKeslingSubmit() {
  const customerId = document.getElementById("keslingCustomerSelect").value;
  const paramCategory = document.getElementById("keslingParameterCategorySelect").value;
  const isSudahLab = document.querySelector('input[name="keslingStatusLab"]:checked').value === "Sudah";

  // Validation for Step 3 Mandatory Fields
  const tglMulai = document.getElementById("keslingTglMulai").value;
  const tglSelesai = document.getElementById("keslingTglSelesai").value;
  const lokasi = document.getElementById("keslingLokasi").value;
  const lokasiTgl = document.getElementById("keslingLokasiTgl").value;

  if (isSudahLab) {
    if (!tglMulai || !tglSelesai) {
      alert("Silakan lengkapi Tanggal Pengujian (Mulai & Selesai)!");
      return;
    }

    if (!lokasi || !lokasiTgl) {
      alert("Silakan lengkapi Lokasi dan Tanggal Pengambilan!");
      return;
    }
  }


  const results = [];
  let allResultsFilled = true;
  document.querySelectorAll(".kesling-mobile-card").forEach(card => {
    const name = card.querySelector(".kesling-p-name").value;
    const res = card.querySelector(".kesling-p-res").value;

    if (name) {
      if (!res) {
        allResultsFilled = false;
      }
      results.push({
        parameter: name,
        bakuMutu: card.querySelector(".kesling-p-baku").value,
        satuan: card.querySelector(".kesling-p-unit").value,
        hasil: res,
        metode: card.querySelector(".kesling-p-meth").value
      });
    }
  });

  // Only validate results if Status Lab is "Sudah"
  if (isSudahLab) {
    if (results.length === 0) {
      alert("Silakan tambahkan setidaknya satu parameter pengujian!");
      return;
    }

    if (!allResultsFilled) {
      alert("Silakan lengkapi semua Hasil Pengujian!");
      return;
    }
  }

  if (!confirm("Apakah Anda yakin ingin menyimpan data pengujian kesling ini?")) return;

  const customer = masterKeslingCustomers.find(c => c.id === customerId);

  const dataEntry = {
    id: window.editingKeslingId || Date.now(),
    timestamp: new Date(),
    tanggalAktual: document.getElementById("keslingTglPenerimaan").value,
    type: "kesling",
    customer: customer ? customer.nama : "Umum",
    parameterCategory: paramCategory,
    bahanUji: document.getElementById("keslingBahanUji").value,
    noLab: document.getElementById("keslingNoLab").value,
    statusLab: isSudahLab ? "Sudah" : "Belum",
    results: results,
    parameter: results.map(r => r.parameter),
    materials: { Reagen: [], "Alat Habis Pakai": [] },
    pengambilSampel: document.querySelector('input[name="keslingPengambilSampel"]:checked').value,
    lokasi: document.getElementById("keslingLokasi").value,
    tglPengambilan: document.getElementById("keslingLokasiTgl").value,
    tglPengujian: isSudahLab ? `${document.getElementById("keslingTglMulai").value} s/d ${document.getElementById("keslingTglSelesai").value}` : "-",
    sudahDistribusi: false
  };

  if (window.editingKeslingId) {
    const index = pengeluaranData.findIndex(d => d.id === window.editingKeslingId);
    if (index !== -1) {
      pengeluaranData[index] = dataEntry;
    } else {
      pengeluaranData.unshift(dataEntry);
    }
  } else {
    pengeluaranData.unshift(dataEntry);
  }

  let msg = `✓ DATA KESLING BERHASIL DISIMPAN!\n\nNo Lab: ${dataEntry.noLab}\nPelanggan: ${dataEntry.customer}\n`;
  if (!isSudahLab) {
    msg += `\nStatus: Belum Selesai`;
  }
  alert(msg);

  showPage('inventoryMenu');
}

/**
 * Filter and render kesling history
 */
function renderHistoryKesling() {
  const container = document.getElementById("keslingHistoryList");
  const searchTerm = document.getElementById("keslingHistorySearch").value.toLowerCase();

  const filteredData = pengeluaranData.filter((item) => {
    // Only include kesling
    if (item.type !== "kesling") return false;
    return (
      item.customer.toLowerCase().includes(searchTerm) ||
      item.noLab.toLowerCase().includes(searchTerm) ||
      item.parameterCategory.toLowerCase().includes(searchTerm)
    );
  });

  if (filteredData.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">Tidak ada data riwayat kesling</div></div>';
    return;
  }

  container.innerHTML = "";
  filteredData.forEach((item) => container.appendChild(createKeslingHistoryCard(item)));
}

/**
 * Create card for Kesling history
 */
function createKeslingHistoryCard(item) {
  const card = document.createElement("div");
  card.className = "history-card kesling-card";
  card.onclick = () => showDetail(item.id);

  const dateStr = new Date(item.timestamp).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  card.innerHTML = `
    <div class="card-header">
      <div class="card-title-section">
        <div class="card-type-badge badge-kesling">KESLING</div>
        <div class="card-datetime">${dateStr}</div>
      </div>
      <div class="status-badge ${item.statusLab === "Sudah" ? "status-done" : "status-pending"}">${item.statusLab.toUpperCase()}</div>
    </div>
    <div class="card-divider"></div>
    <div class="card-info-row"><span class="card-label">Pelanggan</span><span class="card-value">${item.customer}</span></div>
    <div class="card-info-row"><span class="card-label">Kategori</span><span class="card-value">${item.parameterCategory}</span></div>
    <div class="card-info-row"><span class="card-label">No Lab</span><span class="card-value"><strong>${item.noLab}</strong></span></div>
    <div class="card-footer" style="display: flex; gap: 10px;">
      <button class="view-detail-btn" style="flex: 1;">Lihat Detail</button>
      ${item.statusLab === "Belum" ? `<button class="view-detail-btn" style="flex: 1; background-color: #f39c12; border-color: #f39c12; color: white;" onclick="event.stopPropagation(); editKeslingEntry(${item.id})">Ubah Status Lab</button>` : ""}
    </div>
  `;
  return card;
}

/**
 * Edit existing Kesling entry (Redirect to Step 2)
 */
function editKeslingEntry(id) {
  const item = pengeluaranData.find(d => d.id === id);
  if (!item) return;

  // Set page title
  document.getElementById("pageTitle").textContent = "Tambah Pengujian Kesling";
  showPage('pengujianKesling');

  // Fill Step 1 (Customer)
  const customer = masterKeslingCustomers.find(c => c.nama === item.customer);
  if (customer) {
    const select = document.getElementById("keslingCustomerSelect");
    select.innerHTML = `<option value="${customer.id}">${customer.id}</option>`;
    select.value = customer.id;
    document.getElementById("keslingCustomerSearch").value = customer.nama;
    renderKeslingCustomerCards();
  }

  // Fill Step 2
  document.getElementById("keslingParameterCategorySelect").value = item.parameterCategory;
  document.getElementById("keslingBahanUji").value = item.bahanUji;
  document.getElementById("keslingNoLab").value = item.noLab;
  document.getElementById("keslingTglPenerimaan").value = item.tanggalAktual;

  // Status Radios
  document.querySelectorAll('input[name="keslingStatusLab"]').forEach(r => {
    if (r.value === item.statusLab) r.checked = true;
  });

  // Load results into Step 3 container
  const container = document.getElementById("keslingResultMobileContainer");
  container.innerHTML = "";
  if (item.results && item.results.length > 0) {
    item.results.forEach(res => {
      const paramData = {
        nama: res.parameter,
        bakuMutu: res.bakuMutu,
        satuan: res.satuan,
        hasil: res.hasil,
        metode: res.metode
      };
      addKeslingParameterRow(paramData);
    });
  }

  toggleKeslingNextButton();

  // Go to Step 2
  goToKeslingStep2();

  window.editingKeslingId = id;
}


/**
 * Toggle Step 2 button text based on status
 */
function toggleKeslingNextButton() {
  const isSudah = document.querySelector('input[name="keslingStatusLab"]:checked').value === "Sudah";
  const btn = document.getElementById("keslingStep2NextBtn");
  btn.textContent = isSudah ? "Lanjutkan" : "Simpan & Selesai";
}

/**
 * Handle Step 2 next/save action
 */
function handleKeslingStep2Next() {
  const isSudah = document.querySelector('input[name="keslingStatusLab"]:checked').value === "Sudah";
  if (isSudah) {
    goToKeslingStep3();
  } else {
    // Validate required fields before saving
    const noLab = document.getElementById("keslingNoLab").value;
    const tglRec = document.getElementById("keslingTglPenerimaan").value;
    const customerId = document.getElementById("keslingCustomerSelect").value;
    const paramCategory = document.getElementById("keslingParameterCategorySelect").value;
    const bahanUji = document.getElementById("keslingBahanUji").value;

    if (!noLab || !tglRec || !customerId || !paramCategory || !bahanUji) {
      alert("Silakan lengkapi data Pelanggan, No Lab, Tgl Penerimaan, Kategori Parameter, dan Bahan Uji!");
      return;
    }

    handleKeslingSubmit();
  }
}

// ========================================

// ========================================
// CACHE BUSTER & VERSION CHECK
// ========================================
(function () {
  const CURRENT_VERSION = "V2.0_2026-01-05";
  const storedVersion = localStorage.getItem("bmhp_app_version");

  if (storedVersion !== CURRENT_VERSION) {
    console.log("🔄 New version detected! Clearing old data...");
    // Clear old BMHP data
    localStorage.removeItem("bmhpPerencanaan");
    // Update version
    localStorage.setItem("bmhp_app_version", CURRENT_VERSION);
    console.log("✅ Cache cleared. Version:", CURRENT_VERSION);
  } else {
    console.log("✅ Using version:", CURRENT_VERSION);
  }
})();
