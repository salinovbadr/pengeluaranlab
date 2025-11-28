
    // ========================================
    // MASTER DATA & GLOBAL VARIABLES
    // ========================================
    
    // Master Material Database dengan inventory simulation
    const masterMaterialDatabase = {
        'Reagen': [
            // Hematologi
            { nama: 'Onemed, Prufen', satuan: 'pcs', testPerPackage: 25, consumptionPerTest: 1, currentStock: 150 },
            { nama: 'Onetech Diluent', satuan: 'ml', quantityPerPackage: 10000, testPerPackage: 200, consumptionPerTest: 50, currentStock: 1500 },
            { nama: 'Onetech Lyse', satuan: 'ml', quantityPerPackage: 500, testPerPackage: 200, consumptionPerTest: 2.5, currentStock: 380 },
            { nama: 'Onetech Detergent', satuan: 'ml', quantityPerPackage: 5000, testPerPackage: 200, consumptionPerTest: 25, currentStock: 450 },
            
            // Kimia Klinik
            { nama: 'Codefree (Strip Glukosa)', satuan: 'pcs', quantityPerPackage: 50, testPerPackage: 50, consumptionPerTest: 1, currentStock: 85 },
            { nama: 'Proline GOD PAP', satuan: 'ml', quantityPerPackage: 120, testPerPackage: 120, consumptionPerTest: 0.5, currentStock: 220 },
            { nama: 'Proline Glucose Standard FS', satuan: 'ml', quantityPerPackage: 6, testPerPackage: 60, consumptionPerTest: 0.02, currentStock: 115 },
            { nama: 'Proline ASAT (GOT) FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1, currentStock: 180 },
            { nama: 'Proline ASAT (GOT) FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25, currentStock: 180 },
            { nama: 'Proline ALAT (GPT) FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1, currentStock: 175 },
            { nama: 'Proline ALAT (GPT) FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25, currentStock: 175 },
            { nama: 'Accugence (Strip Asam Urat)', satuan: 'pcs', testPerPackage: 25, consumptionPerTest: 1, currentStock: 45 },
            { nama: 'Proline Uric Acid Standard FS', satuan: 'ml', quantityPerPackage: 6, testPerPackage: 60, consumptionPerTest: 0.02, currentStock: 110 },
            { nama: 'Proline Uric Acid FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1, currentStock: 165 },
            { nama: 'Proline Uric Acid FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25, currentStock: 165 },
            { nama: 'Proline Urea FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1, currentStock: 155 },
            { nama: 'Proline Urea FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25, currentStock: 155 },
            { nama: 'Labiosis Creatinine R1', satuan: 'ml', quantityPerPackage: 50, testPerPackage: 100, consumptionPerTest: 0.5, currentStock: 145 },
            { nama: 'Labiosis Creatinine R2', satuan: 'ml', quantityPerPackage: 50, testPerPackage: 100, consumptionPerTest: 0.5, currentStock: 145 },
            { nama: 'Mission (Strip Kolesterol)', satuan: 'pcs', testPerPackage: 25, consumptionPerTest: 1, currentStock: 52 },
            { nama: 'Proline Cholesterol FS', satuan: 'ml', quantityPerPackage: 150, testPerPackage: 150, consumptionPerTest: 1, currentStock: 280 },
            { nama: 'Proline Cholesterol Standard FS', satuan: 'ml', quantityPerPackage: 6, testPerPackage: 60, consumptionPerTest: 0.02, currentStock: 105 },
            { nama: 'Proline Triglyseride FS 10\'', satuan: 'ml', quantityPerPackage: 120, testPerPackage: 120, consumptionPerTest: 1, currentStock: 210 },
            { nama: 'Proline HDL-c direct FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1, currentStock: 185 },
            { nama: 'Proline HDL-c direct FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25, currentStock: 185 },
            
            // Urinalisis
            { nama: 'FOKUS Urine Test Strip URS-10', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1, currentStock: 195 },
            
            // Mikrobiologi
            { nama: 'Indec ZN (Ziehl Neelsen)', satuan: 'ml', quantityPerPackage: 500, testPerPackage: 20, consumptionPerTest: 30, currentStock: 340 },
            { nama: 'Methylen Blue', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 20, consumptionPerTest: 6, currentStock: 285 },
            { nama: 'Onecare Reagen Widal Salmonella typhi O', satuan: 'ml', quantityPerPackage: 5, testPerPackage: 33, consumptionPerTest: 0.15, currentStock: 92 },
            { nama: 'Onecare Reagen Widal Salmonella typhi OH', satuan: 'ml', quantityPerPackage: 5, testPerPackage: 33, consumptionPerTest: 0.15, currentStock: 92 },
            { nama: 'Onecare Reagen Widal Salmonella typhi A', satuan: 'ml', quantityPerPackage: 5, testPerPackage: 33, consumptionPerTest: 0.15, currentStock: 92 },
            { nama: 'Onecare Reagen Widal Salmonella typhi B', satuan: 'ml', quantityPerPackage: 5, testPerPackage: 33, consumptionPerTest: 0.15, currentStock: 92 },
            { nama: 'Indec HIV Sifilis Combo', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1, currentStock: 48 },
            { nama: 'Focus RPR', satuan: 'kit', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 0.05, currentStock: 175 },
            { nama: 'Fastclear (HBsAg)', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1, currentStock: 55 },
            { nama: 'Deteksi Anti HCV', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1, currentStock: 43 },
            { nama: 'Virocheck HIV', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1, currentStock: 51 },
            { nama: 'Onecare Reagen Anti A', satuan: 'ml', quantityPerPackage: 10, testPerPackage: 66, consumptionPerTest: 0.15, currentStock: 128 },
            { nama: 'Onecare Reagen Anti B', satuan: 'ml', quantityPerPackage: 10, testPerPackage: 66, consumptionPerTest: 0.15, currentStock: 128 },
            { nama: 'Onecare Reagen Anti O', satuan: 'ml', quantityPerPackage: 10, testPerPackage: 66, consumptionPerTest: 0.15, currentStock: 128 },
            { nama: 'Onecare Reagen Anti D', satuan: 'ml', quantityPerPackage: 10, testPerPackage: 66, consumptionPerTest: 0.15, currentStock: 128 },
            { nama: 'Onemed (Tes Kehamilan)', satuan: 'pcs', quantityPerPackage: 50, testPerPackage: 50, consumptionPerTest: 1, currentStock: 98 },
            
            // Feses
            { nama: 'Emtech Fecal Occult Blood', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1, currentStock: 62 }
        ],
        'Alat Habis Pakai': [
            { nama: 'Pot urin steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1, currentStock: 245 },
            { nama: 'Urine tube', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1, currentStock: 238 },
            { nama: 'Object glass', satuan: 'pcs', testPerPackage: 72, consumptionPerTest: 1, currentStock: 168 },
            { nama: 'Deck glass (Cover glass)', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1, currentStock: 225 },
            { nama: 'Pot tinja steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1, currentStock: 188 },
            { nama: 'Tabung reaksi', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1, currentStock: 275 },
            { nama: 'Lancet steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1, currentStock: 315 },
            { nama: 'Alcohol swab', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 2, currentStock: 425 },
            { nama: 'Vacutainer EDTA', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1, currentStock: 198 },
            { nama: 'Spuit 3cc steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1, currentStock: 265 },
            { nama: 'Pipet pasteur', satuan: 'pcs', testPerPackage: 500, consumptionPerTest: 1, currentStock: 1250 }
        ]
    };

    // Database wilayah Indonesia (simplified - add more as needed)
    const wilayahData = {
        '31': { 
            name: 'DKI Jakarta', 
            cities: {
                '71': { name: 'Jakarta Pusat', kecamatan: ['Gambir', 'Tanah Abang', 'Menteng', 'Senen', 'Cempaka Putih', 'Johar Baru', 'Kemayoran', 'Sawah Besar'] },
                '72': { name: 'Jakarta Utara', kecamatan: ['Penjaringan', 'Tanjung Priok', 'Koja', 'Cilincing', 'Pademangan', 'Kelapa Gading'] },
                '73': { name: 'Jakarta Barat', kecamatan: ['Cengkareng', 'Grogol Petamburan', 'Taman Sari', 'Tambora', 'Kebon Jeruk', 'Kalideres', 'Palmerah', 'Kembangan'] },
                '74': { name: 'Jakarta Selatan', kecamatan: ['Kebayoran Baru', 'Kebayoran Lama', 'Pesanggrahan', 'Cilandak', 'Pasar Minggu', 'Jagakarsa', 'Mampang Prapatan', 'Pancoran', 'Tebet'] },
                '75': { name: 'Jakarta Timur', kecamatan: ['Matraman', 'Pulogadung', 'Jatinegara', 'Cakung', 'Duren Sawit', 'Kramat Jati', 'Makasar', 'Pasar Rebo', 'Ciracas', 'Cipayung'] }
            }
        },
        '32': { 
            name: 'Jawa Barat', 
            cities: {
                '71': { name: 'Bogor', kecamatan: ['Bogor Selatan', 'Bogor Timur', 'Bogor Utara', 'Bogor Tengah', 'Bogor Barat', 'Tanah Sareal'] },
                '73': { name: 'Bandung', kecamatan: ['Bandung Wetan', 'Sumur Bandung', 'Cibeunying Kidul', 'Cibeunying Kaler', 'Coblong', 'Sukasari', 'Cicendo', 'Sukajadi', 'Cidadap', 'Andir'] },
                '75': { name: 'Bekasi', kecamatan: ['Bekasi Barat', 'Bekasi Selatan', 'Bekasi Timur', 'Bekasi Utara', 'Bantargebang', 'Jatiasih', 'Jatisampurna', 'Medan Satria', 'Mustika Jaya', 'Pondok Gede', 'Pondok Melati', 'Rawalumbu'] },
                '76': { name: 'Depok', kecamatan: ['Beji', 'Cimanggis', 'Cinere', 'Cipayung', 'Limo', 'Pancoran Mas', 'Sawangan', 'Sukmajaya', 'Tapos', 'Bojongsari', 'Cilodong'] },
                '77': { name: 'Cimahi', kecamatan: ['Cimahi Selatan', 'Cimahi Tengah', 'Cimahi Utara'] }
            }
        }
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
                remaining
            );
            const expiryDate = new Date(today);
            expiryDate.setMonth(expiryDate.getMonth() + (6 + Math.floor(Math.random() * 18)));
            
            batches.push({
                batchNo: `BATCH-${String(Math.floor(Math.random() * 9000) + 1000)}`,
                expiry: expiryDate.toISOString().split('T')[0],
                remainingTests: batchTests,
                packageSize: testPerPackage
            });
            
            remaining -= batchTests;
        }
        
        batchDatabase[materialName] = batches;
        return batches;
    }

    // Parameter database dengan kategori (from spreadsheet)
    const parameterDatabase = {
        'Hematologi': [
            'Hemoglobin, penetapan kadar',
            'Hematokrit, penetapan nilai',
            'Eritrosit, hitung jumlah',
            'Indeks Eritrosit (MCV, MCH, CHC), penetapan nilai',
            'Trombosit, hitung jumlah',
            'Leukosit, hitung jumlah',
            'Laju Endap Darah, pengukuran',
            'Pembuatan Apus Darah Tepi untuk rujukan'
        ],
        'Kimia Klinik': [
            'Glukosa, penetapan kadar',
            'SGOT, penetapan kadar',
            'SGPT, penetapan kadar',
            'Asam urat, penetapan kadar',
            'Ureum/ BUN, penetapan kadar',
            'Kreatinin, penetapan kadar',
            'Kolesterol total, penetapan kadar',
            'Trigliserida, penetapan kadar',
            'Kolesterol HDL, penetapan kadar',
            'Kolesterol LDL',
            'HbA1c'
        ],
        'Urinalisis': [
            'Analisis Urine: Warna, Bau, Kejernihan, Volume',
            'pH, kuantitatif',
            'Berat Jenis, kuantitatif',
            'Protein, semi kuantitatif',
            'Glukosa, semi kuantitatif',
            'Bilirubin, semi kuantitatif',
            'Urobilinogen, kuantitatif',
            'Keton, semi kuantitatif',
            'Nitrit, semi kuantitatif',
            'Darah samar, semi kuantitatif',
            'Leukosit, kuantitatif',
            'Eritrosit, kuantitatif',
            'Epitel, kuantitatif',
            'Kristal, kualitatif',
            'Silinder, semikuantitatif',
            'Bakteri, penetapan semikuantitatif',
            'Trichomonas sp., kualitatif',
            'Jamur, kualitatif',
            'Sperma, kualitatif'
        ],
        'Mikrobiologi Klinik': [
            'BTA Mycobacterium Tuberculosis (semi kuantitatif)',
            'BTA untuk Mycobacterium Leprae (semi kuantitatif)',
            'Diplococcus gram negatif intra dan extra seluler, kualitatif',
            'Trichomoniasis, kualitatif',
            'Candidiasis vaginalis, kualitatif',
            'Bacterial vaginosis, kualitatif',
            'Jamur permukaan, kualitatif',
            'Malaria, kualitatif',
            'Malaria, kuantitatif',
            'Telur Cacing',
            'Mikrofilaria, kualitatif'
        ],
        'Serologi & Imunologi': [
            'Anti-Salmonella typhi IgG IgM, kualitatif',
            'Anti-Salmonella typhi, kualitatif',
            'Treponema Pallidum Hemagglutination Assay (TPHA) kualitatif',
            'VDRL/RPR, semikuantitatif',
            'HBsAg, kualitatif',
            'Anti HCV, kualitatif',
            'Anti HIV, kualitatif',
            'Anti HIV dan Sifilis, kualitatif',
            'Antibodi Dengue IgG/IgM, kualitatif',
            'Antigen Dengue (NS1) kualitatif',
            'Antibodi Leptospira IgG/IgM',
            'Antigen SARS-CoV-2, kualitatif',
            'Antigen Rotavirus',
            'Golongan darah ABO dan Rhesus, kualitatif',
            'Tes Kehamilan, kualitatif'
        ],
        'Feses (Tinja)': [
            'Konsistensi, Warna, Bau, Lendir, Darah',
            'Darah samar',
            'Telur cacing, kualitatif',
            'Amuba, kualitatif',
            'Eritrosit, kuantitatif',
            'Leukosit, kuantitatif',
            'Sisa makanan, kualitatif'
        ]
    };

    // Material database based on parameter-metode combinations
    const materialDatabase = {
        'Hematologi-Lateral Flow': {
            'Reagen': [
                { nama: 'Onemed, Prufen', satuan: 'pcs', testPerPackage: 25, consumptionPerTest: 1 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Lancet steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Alcohol swab', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 2 }
            ]
        },
        'Hematologi-Flow Cytometry': {
            'Reagen': [
                { nama: 'Onetech Diluent', satuan: 'ml', quantityPerPackage: 10000, testPerPackage: 200, consumptionPerTest: 50 },
                { nama: 'Onetech Lyse', satuan: 'ml', quantityPerPackage: 500, testPerPackage: 200, consumptionPerTest: 2.5 },
                { nama: 'Onetech Detergent', satuan: 'ml', quantityPerPackage: 5000, testPerPackage: 200, consumptionPerTest: 25 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Vacutainer EDTA', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Spuit 3cc steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Alcohol swab', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 2 }
            ]
        },
        'Kimia Klinik-Lateral Flow': {
            'Reagen': [
                { nama: 'Codefree (Strip Glukosa)', satuan: 'pcs', quantityPerPackage: 50, testPerPackage: 50, consumptionPerTest: 1 },
                { nama: 'Accugence (Strip Asam Urat)', satuan: 'pcs', testPerPackage: 25, consumptionPerTest: 1 },
                { nama: 'Mission (Strip Kolesterol)', satuan: 'pcs', testPerPackage: 25, consumptionPerTest: 1 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Lancet steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Alcohol swab', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 2 }
            ]
        },
        'Kimia Klinik-Enzimatik': {
            'Reagen': [
                { nama: 'Proline GOD PAP', satuan: 'ml', quantityPerPackage: 120, testPerPackage: 120, consumptionPerTest: 0.5 },
                { nama: 'Proline Glucose Standard FS', satuan: 'ml', quantityPerPackage: 6, testPerPackage: 60, consumptionPerTest: 0.02 },
                { nama: 'Proline ASAT (GOT) FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Proline ASAT (GOT) FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25 },
                { nama: 'Proline ALAT (GPT) FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Proline ALAT (GPT) FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25 },
                { nama: 'Proline Uric Acid Standard FS', satuan: 'ml', quantityPerPackage: 6, testPerPackage: 60, consumptionPerTest: 0.02 },
                { nama: 'Proline Uric Acid FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Proline Uric Acid FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25 },
                { nama: 'Proline Urea FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Proline Urea FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25 },
                { nama: 'Labiosis Creatinine R1', satuan: 'ml', quantityPerPackage: 50, testPerPackage: 100, consumptionPerTest: 0.5 },
                { nama: 'Labiosis Creatinine R2', satuan: 'ml', quantityPerPackage: 50, testPerPackage: 100, consumptionPerTest: 0.5 },
                { nama: 'Proline Cholesterol FS', satuan: 'ml', quantityPerPackage: 150, testPerPackage: 150, consumptionPerTest: 1 },
                { nama: 'Proline Cholesterol Standard FS', satuan: 'ml', quantityPerPackage: 6, testPerPackage: 60, consumptionPerTest: 0.02 },
                { nama: 'Proline Triglyseride FS 10\'', satuan: 'ml', quantityPerPackage: 120, testPerPackage: 120, consumptionPerTest: 1 },
                { nama: 'Proline HDL-c direct FS R1', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Proline HDL-c direct FS R2', satuan: 'ml', quantityPerPackage: 25, testPerPackage: 100, consumptionPerTest: 0.25 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Vacutainer EDTA', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Spuit 3cc steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Alcohol swab', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 2 }
            ]
        },
        'Urinalisis-Reflactance photometri': {
            'Reagen': [
                { nama: 'FOKUS Urine Test Strip URS-10', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Pot urin steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Urine tube', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 }
            ]
        },
        'Urinalisis-Mikroskopis': {
            'Alat Habis Pakai': [
                { nama: 'Pot urin steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Urine tube', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Object glass', satuan: 'pcs', testPerPackage: 72, consumptionPerTest: 1 },
                { nama: 'Deck glass (Cover glass)', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 }
            ]
        },
        'Urinalisis-Organoleptik': {
            'Alat Habis Pakai': [
                { nama: 'Pot urin steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 }
            ]
        },
        'Mikrobiologi Klinik-Mikroskopis': {
            'Reagen': [
                { nama: 'Indec ZN (Ziehl Neelsen)', satuan: 'ml', quantityPerPackage: 500, testPerPackage: 20, consumptionPerTest: 30 },
                { nama: 'Methylen Blue', satuan: 'ml', quantityPerPackage: 100, testPerPackage: 20, consumptionPerTest: 6 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Object glass', satuan: 'pcs', testPerPackage: 72, consumptionPerTest: 1 },
                { nama: 'Deck glass (Cover glass)', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Pipet pasteur', satuan: 'pcs', testPerPackage: 500, consumptionPerTest: 1 }
            ]
        },
        'Serologi & Imunologi-Lateral Flow': {
            'Reagen': [
                { nama: 'Indec HIV Sifilis Combo', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1 },
                { nama: 'Fastclear (HBsAg)', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1 },
                { nama: 'Deteksi Anti HCV', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1 },
                { nama: 'Virocheck HIV', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1 },
                { nama: 'Onemed (Tes Kehamilan)', satuan: 'pcs', quantityPerPackage: 50, testPerPackage: 50, consumptionPerTest: 1 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Vacutainer EDTA', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Spuit 3cc steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Alcohol swab', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 2 }
            ]
        },
        'Serologi & Imunologi-Aglutinasi': {
            'Reagen': [
                { nama: 'Onecare Reagen Widal Salmonella typhi O', satuan: 'ml', quantityPerPackage: 5, testPerPackage: 33, consumptionPerTest: 0.15 },
                { nama: 'Onecare Reagen Widal Salmonella typhi OH', satuan: 'ml', quantityPerPackage: 5, testPerPackage: 33, consumptionPerTest: 0.15 },
                { nama: 'Onecare Reagen Widal Salmonella typhi A', satuan: 'ml', quantityPerPackage: 5, testPerPackage: 33, consumptionPerTest: 0.15 },
                { nama: 'Onecare Reagen Widal Salmonella typhi B', satuan: 'ml', quantityPerPackage: 5, testPerPackage: 33, consumptionPerTest: 0.15 },
                { nama: 'Onecare Reagen Anti A', satuan: 'ml', quantityPerPackage: 10, testPerPackage: 66, consumptionPerTest: 0.15 },
                { nama: 'Onecare Reagen Anti B', satuan: 'ml', quantityPerPackage: 10, testPerPackage: 66, consumptionPerTest: 0.15 },
                { nama: 'Onecare Reagen Anti O', satuan: 'ml', quantityPerPackage: 10, testPerPackage: 66, consumptionPerTest: 0.15 },
                { nama: 'Onecare Reagen Anti D', satuan: 'ml', quantityPerPackage: 10, testPerPackage: 66, consumptionPerTest: 0.15 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Object glass', satuan: 'pcs', testPerPackage: 72, consumptionPerTest: 1 },
                { nama: 'Lancet steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 }
            ]
        },
        'Serologi & Imunologi-Flokulasi': {
            'Reagen': [
                { nama: 'Focus RPR', satuan: 'kit', quantityPerPackage: 100, testPerPackage: 100, consumptionPerTest: 0.05 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Vacutainer EDTA', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Spuit 3cc steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Alcohol swab', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 2 }
            ]
        },
        'Feses (Tinja)-Organoleptik': {
            'Alat Habis Pakai': [
                { nama: 'Pot tinja steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 }
            ]
        },
        'Feses (Tinja)-Konvensional (kimia)': {
            'Reagen': [
                { nama: 'Emtech Fecal Occult Blood', satuan: 'pcs', quantityPerPackage: 25, testPerPackage: 25, consumptionPerTest: 1 }
            ],
            'Alat Habis Pakai': [
                { nama: 'Pot tinja steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Tabung reaksi', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 }
            ]
        },
        'Feses (Tinja)-Mikroskopis': {
            'Alat Habis Pakai': [
                { nama: 'Pot tinja steril', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 },
                { nama: 'Object glass', satuan: 'pcs', testPerPackage: 72, consumptionPerTest: 1 },
                { nama: 'Deck glass (Cover glass)', satuan: 'pcs', testPerPackage: 100, consumptionPerTest: 1 }
            ]
        }
    };

    // Global variables for form state
    let selectedParameters = [];
    let selectedType = null;
    let customMaterials = { Reagen: [], 'Alat Habis Pakai': [] };
    let currentAddCategory = '';
    let jumlahSampel = 0;
    let jumlahTes = 0;

    // NEW: Variable to store sample NIK data
    let sampleDataArray = []; // Array of objects with NIK and other fields

    // Storage for pengeluaran data (simulates database)
    let pengeluaranData = [];

    // ========================================
    // NIK PARSING FUNCTIONS
    // ========================================

    /**
     * Parse Indonesian NIK (16 digits) and extract demographic information
     * NIK Format: PPKKSSDDMMYYKKKK
     * PP = Province code (2 digits)
     * KK = City/Regency code (2 digits)  
     * SS = District code (2 digits)
     * DDMMYY = Birth date (DD+40 for female)
     * KKKK = Sequential number
     */
    function parseNIK(nik) {
        // Remove any spaces or dashes
        nik = nik.replace(/[\s-]/g, '');
        
        // Validate NIK length
        if (nik.length !== 16) {
            return { valid: false, error: 'NIK harus 16 digit' };
        }
        
        // Validate NIK is all numbers
        if (!/^\d+$/.test(nik)) {
            return { valid: false, error: 'NIK harus berisi angka saja' };
        }
        
        // Extract components
        const provinceCode = nik.substring(0, 2);
        const cityCode = nik.substring(2, 4);
        const districtCode = nik.substring(4, 6);
        let birthDay = parseInt(nik.substring(6, 8));
        const birthMonth = parseInt(nik.substring(8, 10));
        const birthYear = parseInt(nik.substring(10, 12));
        
        // Determine gender (if day > 40, it's female)
        let gender = 'Laki-laki';
        if (birthDay > 40) {
            gender = 'Perempuan';
            birthDay = birthDay - 40;
        }
        
        // Determine full year (assuming 1900s for >30, 2000s for <=30)
        const fullYear = birthYear > 30 ? 1900 + birthYear : 2000 + birthYear;
        
        // Validate date
        if (birthDay < 1 || birthDay > 31 || birthMonth < 1 || birthMonth > 12) {
            return { valid: false, error: 'Tanggal lahir tidak valid' };
        }
        
        // Format birth date
        const birthDate = `${String(birthDay).padStart(2, '0')}-${String(birthMonth).padStart(2, '0')}-${fullYear}`;
        
        // Calculate age
        const today = new Date();
        const birth = new Date(fullYear, birthMonth - 1, birthDay);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        
        // Get location data
        const province = wilayahData[provinceCode];
        if (!province) {
            return { valid: false, error: 'Kode provinsi tidak dikenali' };
        }
        
        const city = province.cities[cityCode];
        if (!city) {
            return { valid: false, error: 'Kode kota tidak dikenali' };
        }
        
        // Return parsed data
        return {
            valid: true,
            nik: nik,
            tanggalLahir: birthDate,
            usia: age,
            jenisKelamin: gender,
            provinsi: province.name,
            kota: city.name,
            kecamatanList: city.kecamatan // Available kecamatan for this city
        };
    }

    // ========================================
    // INITIALIZATION
    // ========================================

    // Initialize parameter dropdown with categories
    function initializeParameterDropdown() {
        const dropdown = document.getElementById('parameterDropdown');
        dropdown.innerHTML = '';
        
        Object.keys(parameterDatabase).forEach(category => {
            // Add category header
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'multi-select-category';
            categoryHeader.textContent = category;
            dropdown.appendChild(categoryHeader);
            
            // Add parameters under category
            parameterDatabase[category].forEach((param, index) => {
                const option = document.createElement('div');
                option.className = 'multi-select-option';
                const uniqueId = `param-${category.replace(/[^a-zA-Z0-9]/g, '')}-${index}`;
                option.innerHTML = `
                    <input type="checkbox" class="multi-select-checkbox" value="${param}" data-category="${category}" id="${uniqueId}" onchange="updateParameterDisplay()">
                    <label for="${uniqueId}" style="flex: 1; cursor: pointer;">${param}</label>
                `;
                dropdown.appendChild(option);
            });
        });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        initializeParameterDropdown();
        addSampleData(); // Add demo data for history
    });

    // ========================================
    // MULTI-SELECT PARAMETER FUNCTIONSBIContinue// ========================================
function toggleParameterDropdown() {
    const dropdown = document.getElementById('parameterDropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const multiSelect = document.querySelector('.multi-select-wrapper');
    const dropdown = document.getElementById('parameterDropdown');
    
    if (multiSelect && !multiSelect.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

function updateParameterDisplay() {
    const checkboxes = document.querySelectorAll('.multi-select-checkbox');
    selectedParameters = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedParameters.push({
                name: checkbox.value,
                category: checkbox.getAttribute('data-category')
            });
        }
    });
    
    const placeholder = document.getElementById('parameterPlaceholder');
    const values = document.getElementById('parameterValues');
    const hidden = document.getElementById('parameterHidden');
    
    if (selectedParameters.length > 0) {
        placeholder.style.display = 'none';
        values.style.display = 'block';
        values.textContent = selectedParameters.map(p => p.name).join(', ');
        hidden.value = selectedParameters.map(p => p.name).join('; ');
    } else {
        placeholder.style.display = 'block';
        values.style.display = 'none';
        hidden.value = '';
    }
}

// ========================================
// TYPE SELECTION
// ========================================

function selectType(type) {
    selectedType = type;
    
    document.getElementById('typeSampel').checked = (type === 'sampel');
    document.getElementById('typeControl').checked = (type === 'control');
    document.getElementById('typeAlat').checked = (type === 'alat');
    
    document.querySelectorAll('.type-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
}

// ========================================
// NAVIGATION FUNCTIONS (UPDATED FLOW)
// ========================================

function goBack() {
    const form = document.getElementById('labDistributionForm');
    const menu = document.getElementById('inventoryMenu');
    const riwayat = document.getElementById('riwayatPengeluaranSection');
    const stok = document.getElementById('stokSection');
    const title = document.getElementById('pageTitle');
    const step0 = document.getElementById('step0Section');
    const step1 = document.getElementById('step1Section');
    const step2 = document.getElementById('step2Section');
    const step3 = document.getElementById('step3Section');
    
    // Navigate backwards through the steps
    if (step3.style.display === 'block') {
        backFromStep3();
    } else if (step2.style.display === 'block') {
        backFromStep2();
    } else if (step1.style.display === 'block') {
        backFromStep1();
    } else if (form.style.display === 'block') {
        form.style.display = 'none';
        menu.style.display = 'block';
        title.textContent = 'Inventaris';
        resetForm();
    } else if (riwayat.style.display === 'block') {
        riwayat.style.display = 'none';
        menu.style.display = 'block';
        title.textContent = 'Inventaris';
    } else if (stok.style.display === 'block') {
        stok.style.display = 'none';
        menu.style.display = 'block';
        title.textContent = 'Inventaris';
    }
}

function resetForm() {
    // Reset all form inputs
    document.getElementById('step1Form').reset();
    document.getElementById('step2Form').reset();
    
    // Reset parameter selection
    const checkboxes = document.querySelectorAll('.multi-select-checkbox');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    selectedParameters = [];
    document.getElementById('parameterPlaceholder').style.display = 'block';
    document.getElementById('parameterValues').style.display = 'none';
    document.getElementById('parameterHidden').value = '';
    
    // Reset global variables
    selectedType = null;
    customMaterials = { Reagen: [], 'Alat Habis Pakai': [] };
    jumlahSampel = 0;
    jumlahTes = 0;
    sampleDataArray = []; // Clear sample data
    
    // Reset type selection
    document.querySelectorAll('.type-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('input[name="tipeOutput"]').forEach(radio => radio.checked = false);
    
    // Show step 0, hide others
    document.getElementById('step0Section').style.display = 'block';
    document.getElementById('step1Section').style.display = 'none';
    document.getElementById('step2Section').style.display = 'none';
    document.getElementById('step3Section').style.display = 'none';
}

function showPage(pageName) {
    const form = document.getElementById('labDistributionForm');
    const menu = document.getElementById('inventoryMenu');
    const history = document.getElementById('riwayatPengeluaranSection'); // ✅ Perbaiki ID
    const stokSection = document.getElementById('stokSection');
    const title = document.getElementById('pageTitle');
    
    // Hide all sections first
    form.style.display = 'none';
    menu.style.display = 'none';
    history.style.display = 'none';
    stokSection.style.display = 'none';
    
    // Show selected page
    switch(pageName) {
        case 'labDistribution':
            form.style.display = 'block';
            title.textContent = 'Pengeluaran Lab';
            break;
            
        case 'riwayatPengeluaran':
            history.style.display = 'block';
            title.textContent = 'Riwayat Pengeluaran';
            renderHistory(); // Render history data
            break;
            
        case 'stokSection':
            stokSection.style.display = 'block';
            title.textContent = 'Stok Material';
            document.getElementById('stokSearch').value = '';
            renderStokMaterial(); // Render stok data
            break;
            
        default:
            menu.style.display = 'block';
            title.textContent = 'Inventaris';
    }
    
    window.scrollTo(0, 0);
}

// STEP 0 -> STEP 1: After selecting type, go to Parameter & Metode
function goToStep1() {
    if (!selectedType) {
        alert('Silakan pilih tipe pengeluaran');
        return;
    }

    document.getElementById('step0Section').style.display = 'none';
    document.getElementById('step1Section').style.display = 'block';
    window.scrollTo(0, 0);
}

// STEP 1 -> STEP 0: Back to type selection
function backFromStep1() {
    document.getElementById('step1Section').style.display = 'none';
    document.getElementById('step0Section').style.display = 'block';
    window.scrollTo(0, 0);
}

// STEP 1 -> STEP 2: After Parameter & Metode, go to Jumlah (+ NIK for sampel)
function goToStep2() {
    if (selectedParameters.length === 0) {
        alert('Silakan pilih minimal 1 parameter');
        return;
    }

    const metode = document.getElementById('metodeSelect').value;
    if (!metode) {
        alert('Silakan pilih metode pemeriksaan');
        return;
    }

    // NEW: Check if type is Control or Alat - skip to material directly
    if (selectedType === 'control' || selectedType === 'alat') {
        jumlahSampel = 1;
        jumlahTes = 1;
        
        generateMaterialList(selectedParameters, metode);
        document.getElementById('step1Section').style.display = 'none';
        document.getElementById('step3Section').style.display = 'block';
        updateStep3IndicatorForControlAlat();
        window.scrollTo(0, 0);
        return;
    }

    // For Sampel type, proceed to step 2 (Jumlah & NIK)
    document.getElementById('step1Section').style.display = 'none';
    document.getElementById('step2Section').style.display = 'block';
    updateStep2Indicator();
    window.scrollTo(0, 0);
}

function updateStep3IndicatorForControlAlat() {
    const indicator = document.getElementById('step3Indicator');
    indicator.innerHTML = `
        <div class="step-item completed">
            <div class="step-number">✓</div>
            <div class="step-label">Tipe</div>
            <div class="step-line"></div>
        </div>
        <div class="step-item completed">
            <div class="step-number">✓</div>
            <div class="step-label">Parameter & Metode</div>
            <div class="step-line"></div>
        </div>
        <div class="step-item active">
            <div class="step-number">3</div>
            <div class="step-label">Material</div>
        </div>
    `;
}

function updateStep2Indicator() {
    const indicator = document.getElementById('step2Indicator');
    indicator.innerHTML = `
        <div class="step-item completed">
            <div class="step-number">✓</div>
            <div class="step-label">Tipe</div>
            <div class="step-line"></div>
        </div>
        <div class="step-item completed">
            <div class="step-number">✓</div>
            <div class="step-label">Parameter & Metode</div>
            <div class="step-line"></div>
        </div>
        <div class="step-item active">
            <div class="step-number">3</div>
            <div class="step-label">Jumlah</div>
            <div class="step-line"></div>
        </div>
        <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-label">Material</div>
        </div>
    `;
}

// STEP 2 -> STEP 1: Back to parameter selection
function backFromStep2() {
    // Hide NIK container if it was shown
    document.getElementById('nikDataContainer').style.display = 'none';
    
    document.getElementById('step2Section').style.display = 'none';
    document.getElementById('step1Section').style.display = 'block';
    window.scrollTo(0, 0);
}

// NEW: Generate NIK input forms when jumlah sampel is entered
function generateNIKForms() {
    const sampel = parseInt(document.getElementById('jumlahSampelInput').value);
    
    if (!sampel || sampel < 1) {
        document.getElementById('nikDataContainer').style.display = 'none';
        return;
    }
    
    // Show NIK container
    document.getElementById('nikDataContainer').style.display = 'block';
    
    // Generate progress dots
    const progressContainer = document.getElementById('sampleProgress');
    progressContainer.innerHTML = '';
    for (let i = 0; i < sampel; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        dot.id = `progress-dot-${i}`;
        progressContainer.appendChild(dot);
    }
    
    // Generate sample cards
    const container = document.getElementById('sampleCardsContainer');
    container.innerHTML = '';
    
    // Initialize or resize sample data array
    if (sampleDataArray.length !== sampel) {
        sampleDataArray = new Array(sampel).fill(null).map(() => ({
            nik: '',
            namaLengkap: '',
            tanggalLahir: '',
            usia: '',
            jenisKelamin: '',
            provinsi: '',
            kota: '',
            kecamatan: '',
            kelurahan: '',
            alamatLengkap: '',
            nohp: ''
        }));
    }
    
    for (let i = 0; i < sampel; i++) {
        const card = createSampleCard(i);
        container.appendChild(card);
    }
    
    // Update first card as active
    updateProgressIndicator(0);
}

// NEW: Create a sample card with NIK input
function createSampleCard(index) {
    const card = document.createElement('div');
    card.className = 'sample-card';
    card.id = `sample-card-${index}`;
    
    const data = sampleDataArray[index];
    const isComplete = validateSampleData(index);
    
    card.innerHTML = `
        <div class="sample-card-header">
            <div class="sample-number">Sampel #${index + 1}</div>
            <div class="sample-status ${isComplete ? '' : 'incomplete'}" id="status-${index}">
                ${isComplete ? '✓ Lengkap' : '⚠ Belum Lengkap'}
            </div>
        </div>
        
        <div class="form-group">
            <label class="form-label">NIK <span class="required">*</span></label>
            <input type="text" 
                   class="form-input nik-input" 
                   id="nik-${index}" 
                   placeholder="Masukkan 16 digit NIK"
                   maxlength="16"
                   value="${data.nik}"
                   oninput="handleNIKInput(${index}, this.value)">
            <div class="nik-helper" id="nik-helper-${index}">Otomatis mengisi Tanggal Lahir, Usia, Jenis Kelamin, Provinsi, Kab/Kota.</div>
        </div>
        
        <div class="form-group">
            <label class="form-label">Nama Lengkap <span class="required">*</span></label>
            <input type="text" 
                   class="form-input" 
                   id="nama-${index}" 
                   placeholder="Masukkan nama lengkap"
                   value="${data.namaLengkap}"
                   oninput="updateSampleData(${index}, 'namaLengkap', this.value)">
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Tanggal Lahir <span class="required">*</span></label>
                <input type="text" 
                       class="form-input auto-filled" 
                       id="tgl-lahir-${index}" 
                       placeholder="DD-MM-YYYY"
                       value="${data.tanggalLahir}"
                       readonly>
            </div>
            <div class="form-group">
                <label class="form-label">Usia <span class="required">*</span></label>
                <input type="text" 
                       class="form-input auto-filled" 
                       id="usia-${index}" 
                       placeholder="0"
                       value="${data.usia ? data.usia + ' thn' : ''}"
                       readonly>
            </div>
        </div>
        
        <div class="form-group">
            <label class="form-label">Jenis Kelamin <span class="required">*</span></label>
            <input type="text" 
                   class="form-input auto-filled" 
                   id="jk-${index}" 
                   placeholder="Laki-laki / Perempuan"
                   value="${data.jenisKelamin}"
                   readonly>
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Provinsi <span class="required">*</span></label>
                <input type="text" 
                       class="form-input auto-filled" 
                       id="provinsi-${index}" 
                       placeholder="Provinsi"
                       value="${data.provinsi}"
                       readonly>
            </div>
            <div class="form-group">
                <label class="form-label">Kabupaten/Kota <span class="required">*</span></label>
                <input type="text" 
                       class="form-input auto-filled" 
                       id="kota-${index}" 
                       placeholder="Kab/Kota"
                       value="${data.kota}"
                       readonly>
            </div>
        </div>
        
        <div class="form-group">
            <label class="form-label">Kecamatan <span class="required">*</span></label>
            <select class="form-select" 
                    id="kecamatan-${index}"
                    onchange="updateSampleData(${index}, 'kecamatan', this.value)">
                <option value="">Pilih Kecamatan</option>
            </select>
        </div>
        
        <div class="form-group">
            <label class="form-label">Kelurahan/Desa <span class="required">*</span></label>
            <input type="text" 
                   class="form-input" 
                   id="kelurahan-${index}" 
                   placeholder="Masukkan kelurahan/desa"
                   value="${data.kelurahan}"
                   oninput="updateSampleData(${index}, 'kelurahan', this.value)">
        </div>
        
        <div class="form-group">
            <label class="form-label">Alamat Lengkap <span class="required">*</span></label>
            <textarea class="form-textarea" 
                      id="alamat-${index}" 
                      placeholder="Jl. Nama Jalan No. XX, RT/RW"
                      oninput="updateSampleData(${index}, 'alamatLengkap', this.value)">${data.alamatLengkap}</textarea>
        </div>
        
        <div class="form-group">
            <label class="form-label">No. Telepon <span style="color: #999;">(Opsional)</span></label>
            <input type="tel" 
                   class="form-input" 
                   id="nohp-${index}" 
                   placeholder="08xxxxxxxxxx"
                   value="${data.nohp}"
                   oninput="updateSampleData(${index}, 'nohp', this.value)">
        </div>
    `;
    
    return card;
}

// NEW: Handle NIK input and auto-fill demographic data
function handleNIKInput(index, nik) {
    const helper = document.getElementById(`nik-helper-${index}`);
    
    // Update sample data
    sampleDataArray[index].nik = nik;
    
    // If NIK is 16 digits, parse it
    if (nik.length === 16) {
        const parsed = parseNIK(nik);
        
        if (parsed.valid) {
            // Success - auto-fill fields
            helper.className = 'nik-helper success';
            helper.textContent = '✓ NIK valid - Data terisi otomatis';
            
            // Update sample data
            sampleDataArray[index].tanggalLahir = parsed.tanggalLahir;
            sampleDataArray[index].usia = parsed.usia.toString();
            sampleDataArray[index].jenisKelamin = parsed.jenisKelamin;
            sampleDataArray[index].provinsi = parsed.provinsi;
            sampleDataArray[index].kota = parsed.kota;
            
            // Update UI
            document.getElementById(`tgl-lahir-${index}`).value = parsed.tanggalLahir;
            document.getElementById(`usia-${index}`).value = `${parsed.usia} thn`;
            document.getElementById(`jk-${index}`).value = parsed.jenisKelamin;
            document.getElementById(`provinsi-${index}`).value = parsed.provinsi;
            document.getElementById(`kota-${index}`).value = parsed.kota;
            
            // Populate kecamatan dropdown
            const kecamatanSelect = document.getElementById(`kecamatan-${index}`);
            kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
            parsed.kecamatanList.forEach(kec => {
                const option = document.createElement('option');
                option.value = kec;
                option.textContent = kec;
                if (sampleDataArray[index].kecamatan === kec) {
                    option.selected = true;
                }
                kecamatanSelect.appendChild(option);
            });
            
            // Update completion status
            updateSampleStatus(index);
        } else {
            // Error - show error message
            helper.className = 'nik-helper error';
            helper.textContent = `✗ ${parsed.error}`;
            
            // Clear auto-filled fields
            clearAutoFilledFields(index);
        }
    } else if (nik.length > 0) {
        helper.className = 'nik-helper';
        helper.textContent = `${nik.length}/16 digit`;
        
        // Clear auto-filled fields if NIK is incomplete
        clearAutoFilledFields(index);
    } else {
        helper.className = 'nik-helper';
        helper.textContent = 'Otomatis mengisi Tanggal Lahir, Usia, Jenis Kelamin, Provinsi, Kab/Kota.';
        
        clearAutoFilledFields(index);
    }
}

// NEW: Clear auto-filled demographic fields
function clearAutoFilledFields(index) {
    sampleDataArray[index].tanggalLahir = '';
    sampleDataArray[index].usia = '';
    sampleDataArray[index].jenisKelamin = '';
    sampleDataArray[index].provinsi = '';
    sampleDataArray[index].kota = '';
    
    document.getElementById(`tgl-lahir-${index}`).value = '';
    document.getElementById(`usia-${index}`).value = '';
    document.getElementById(`jk-${index}`).value = '';
    document.getElementById(`provinsi-${index}`).value = '';
    document.getElementById(`kota-${index}`).value = '';
    
    // Clear kecamatan dropdown
    const kecamatanSelect = document.getElementById(`kecamatan-${index}`);
    kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
    
    updateSampleStatus(index);
}

// NEW: Update sample data when user types in manual fields
function updateSampleData(index, field, value) {
    sampleDataArray[index][field] = value;
    updateSampleStatus(index);
}

// NEW: Validate if a sample has all required data
function validateSampleData(index) {
    const data = sampleDataArray[index];
    return data.nik.length === 16 &&
           data.namaLengkap.trim() !== '' &&
           data.tanggalLahir !== '' &&
           data.usia !== '' &&
           data.jenisKelamin !== '' &&
           data.provinsi !== '' &&
           data.kota !== '' &&
           data.kecamatan !== '' &&
           data.kelurahan.trim() !== '' &&
           data.alamatLengkap.trim() !== '';
}

// NEW: Update the status badge of a sample card
function updateSampleStatus(index) {
    const isComplete = validateSampleData(index);
    const statusBadge = document.getElementById(`status-${index}`);
    const progressDot = document.getElementById(`progress-dot-${index}`);
    
    if (statusBadge) {
        if (isComplete) {
            statusBadge.className = 'sample-status';
            statusBadge.textContent = '✓ Lengkap';
            if (progressDot) progressDot.classList.add('completed');
        } else {
            statusBadge.className = 'sample-status incomplete';
            statusBadge.textContent = '⚠ Belum Lengkap';
            if (progressDot) progressDot.classList.remove('completed');
        }
    }
}

// NEW: Update progress indicator when user focuses on a card
function updateProgressIndicator(index) {
    // Remove active class from all cards and dots
    document.querySelectorAll('.sample-card').forEach(card => card.classList.remove('active'));
    document.querySelectorAll('.progress-dot').forEach(dot => dot.classList.remove('active'));
    
    // Add active to current
    const card = document.getElementById(`sample-card-${index}`);
    const dot = document.getElementById(`progress-dot-${index}`);
    
    if (card) card.classList.add('active');
    if (dot && !dot.classList.contains('completed')) dot.classList.add('active');
}

// STEP 2 -> STEP 3: After Jumlah (and NIK for sampel), go to Material
function goToStep3() {
    const sampel = parseInt(document.getElementById('jumlahSampelInput').value);
    const tes = parseInt(document.getElementById('jumlahTesInput').value);
    
    if (!sampel || sampel < 1) {
        alert('Silakan isi jumlah sampel (minimal 1)');
        return;
    }
    
    if (!tes || tes < 1) {
        alert('Silakan isi jumlah tes (minimal 1)');
        return;
    }

    jumlahSampel = sampel;
    jumlahTes = tes;
    
    // FOR SAMPEL TYPE: Validate all NIK data is complete
    if (selectedType === 'sampel') {
        // Check if all samples have complete data
        for (let i = 0; i < sampel; i++) {
            if (!validateSampleData(i)) {
                alert(`Data sampel #${i + 1} belum lengkap. Silakan lengkapi semua data yang diperlukan.`);
                // Scroll to that card
                const card = document.getElementById(`sample-card-${i}`);
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    updateProgressIndicator(i);
                }
                return;
            }
        }
    }
    
    // Generate material list based on parameter categories and metode
    const metode = document.getElementById('metodeSelect').value;
    generateMaterialList(selectedParameters, metode);

    document.getElementById('step2Section').style.display = 'none';
    document.getElementById('step3Section').style.display = 'block';
    updateStep3Indicator();
    window.scrollTo(0, 0);
}

function updateStep3Indicator() {
    const indicator = document.getElementById('step3Indicator');
    indicator.innerHTML = `
        <div class="step-item completed">
            <div class="step-number">✓</div>
            <div class="step-label">Tipe</div>
            <div class="step-line"></div>
        </div>
        <div class="step-item completed">
            <div class="step-number">✓</div>
            <div class="step-label">Parameter & Metode</div>
            <div class="step-line"></div>
        </div>
        <div class="step-item completed">
            <div class="step-number">✓</div>
            <div class="step-label">Jumlah</div>
            <div class="step-line"></div>
        </div>
        <div class="step-item active">
            <div class="step-number">4</div>
            <div class="step-label">Material</div>
        </div>
    `;
}

// STEP 3 -> STEP 2: Back to jumlah/NIK
function backFromStep3() {
    document.getElementById('step3Section').style.display = 'none';
    
    if (selectedType === 'control' || selectedType === 'alat') {
        document.getElementById('step1Section').style.display = 'block';
    } else {
        document.getElementById('step2Section').style.display = 'block';
    }
    
    window.scrollTo(0, 0);
}

// Monitor jumlah sampel input to generate NIK forms
document.addEventListener('DOMContentLoaded', function() {
    const jumlahSampelInput = document.getElementById('jumlahSampelInput');
    if (jumlahSampelInput) {
        jumlahSampelInput.addEventListener('change', function() {
            if (selectedType === 'sampel') {
                generateNIKForms();
            }
        });
        
        jumlahSampelInput.addEventListener('blur', function() {
            if (selectedType === 'sampel') {
                generateNIKForms();
            }
        });
    }
});

// ========================================
// MATERIAL GENERATION FUNCTIONS
// ========================================

function generateMaterialList(parameters, metode) {
    const container = document.getElementById('materialListContainer');
    container.innerHTML = '';

    // Get unique categories from selected parameters
    const categories = [...new Set(parameters.map(p => p.category))];
    
    // Combine materials from all categories with the selected metode
    let combinedMaterials = { Reagen: [], 'Alat Habis Pakai': [] };
    
    categories.forEach(category => {
        const key = `${category}-${metode}`;
        const materials = materialDatabase[key];
        
        if (materials) {
            // Add Reagen materials
            if (materials.Reagen) {
                materials.Reagen.forEach(item => {
                    if (!combinedMaterials.Reagen.find(m => m.nama === item.nama)) {
                        combinedMaterials.Reagen.push(item);
                    }
                });
            }
            
            // Add Alat Habis Pakai materials
            if (materials['Alat Habis Pakai']) {
                materials['Alat Habis Pakai'].forEach(item => {
                    if (!combinedMaterials['Alat Habis Pakai'].find(m => m.nama === item.nama)) {
                        combinedMaterials['Alat Habis Pakai'].push(item);
                    }
                });
            }
        }
    });

    // If no materials found, show message
    if (combinedMaterials.Reagen.length === 0 && combinedMaterials['Alat Habis Pakai'].length === 0) {
        container.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">Tidak ada material default untuk kombinasi parameter dan metode ini. Silakan tambah material secara manual.</p>';
    }

    // Use jumlahTes for auto-calculation (for all types now)
    const tesMultiplier = jumlahTes;

    // Generate Reagen category
    if (combinedMaterials.Reagen.length > 0) {
        const reagenCategory = document.createElement('div');
        reagenCategory.className = 'material-category';
        reagenCategory.innerHTML = `
            <div class="category-header">Reagen</div>
            <div class="material-items" id="reagenItems"></div>
            <button type="button" class="add-material-btn" onclick="openAddMaterialModal('Reagen')">
                + Tambah Reagen Lainnya
            </button>
        `;
        container.appendChild(reagenCategory);

        const reagenContainer = reagenCategory.querySelector('#reagenItems');
        combinedMaterials.Reagen.forEach((item, index) => {
            const itemDiv = createMaterialItem(item, 'reagen', index, false, tesMultiplier);
            reagenContainer.appendChild(itemDiv);
        });

        // Add custom Reagen materials
        customMaterials.Reagen.forEach((item, index) => {
            const itemDiv = createMaterialItem(item, 'reagen-custom', index, true, tesMultiplier);
            reagenContainer.appendChild(itemDiv);
        });
    }

    // Generate Alat Habis Pakai category
    if (combinedMaterials['Alat Habis Pakai'].length > 0) {
        const alatCategory = document.createElement('div');
        alatCategory.className = 'material-category';
        alatCategory.innerHTML = `
            <div class="category-header">Alat Habis Pakai</div>
            <div class="material-items" id="alatItems"></div>
            <button type="button" class="add-material-btn" onclick="openAddMaterialModal('Alat Habis Pakai')">
                + Tambah Alat Habis Pakai Lainnya
            </button>
        `;
        container.appendChild(alatCategory);

        const alatContainer = alatCategory.querySelector('#alatItems');
        combinedMaterials['Alat Habis Pakai'].forEach((item, index) => {
            const itemDiv = createMaterialItem(item, 'alat', index, false, tesMultiplier);
            alatContainer.appendChild(itemDiv);
        });

        // Add custom Alat Habis Pakai materials
        customMaterials['Alat Habis Pakai'].forEach((item, index) => {
            const itemDiv = createMaterialItem(item, 'alat-custom', index, true, tesMultiplier);
            alatContainer.appendChild(itemDiv);
        });
    }

    // Add manual add buttons if no materials
    if (combinedMaterials.Reagen.length === 0) {
        const reagenCategory = document.createElement('div');
        reagenCategory.className = 'material-category';
        reagenCategory.innerHTML = `
            <div class="category-header">Reagen</div>
            <div class="material-items" id="reagenItems"></div>
            <button type="button" class="add-material-btn" onclick="openAddMaterialModal('Reagen')">
                + Tambah Reagen
            </button>
        `;
        container.appendChild(reagenCategory);
    }

    if (combinedMaterials['Alat Habis Pakai'].length === 0) {
        const alatCategory = document.createElement('div');
        alatCategory.className = 'material-category';
        alatCategory.innerHTML = `
            <div class="category-header">Alat Habis Pakai</div>
            <div class="material-items" id="alatItems"></div>
            <button type="button" class="add-material-btn" onclick="openAddMaterialModal('Alat Habis Pakai')">
                + Tambah Alat Habis Pakai
            </button>
        `;
        container.appendChild(alatCategory);
    }
}

function createMaterialItem(item, prefix, index, isCustom, tesMultiplier) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'material-item';
    const itemId = `${prefix}-${index}`;
    itemDiv.setAttribute('data-material-id', itemId);
    
    const masterItem = masterMaterialDatabase['Reagen'].find(m => m.nama === item.nama) || 
                     masterMaterialDatabase['Alat Habis Pakai'].find(m => m.nama === item.nama);
    const currentStock = masterItem ? masterItem.currentStock : 0;
    
    const defaultQty = item.consumptionPerTest * tesMultiplier;
    const batches = getOrCreateBatches(item.nama, item.testPerPackage, currentStock);
    
    let testInfo = '';
    if (item.testPerPackage) {
        testInfo = `${item.testPerPackage} tes/pkg`;
    }
    
    let calcInfo = '';
    if (tesMultiplier > 1) {
        calcInfo = `${tesMultiplier} tes × ${item.consumptionPerTest} ${item.satuan}/tes`;
    } else {
        calcInfo = `${item.consumptionPerTest} ${item.satuan}/tes`;
    }
    
    itemDiv.innerHTML = `
        ${isCustom ? `<button type="button" class="delete-material-btn" onclick="deleteCustomMaterial('${prefix}', ${index})">×</button>` : ''}
        <div class="material-name">${item.nama}</div>
        <div class="material-meta">
            <span class="material-unit">${item.satuan}</span>
            ${testInfo ? `<span class="material-test-info">${testInfo}</span>` : ''}
            <span class="material-stock-info">💊 Total Stock: ${currentStock} tes</span>
        </div>
        
        <div class="form-group" style="margin-top: 10px; margin-bottom: 10px;">
            <label class="form-label" style="font-size: 12px; margin-bottom: 6px;">Pilih Batch <span class="required">*</span></label>
            <select class="form-select batch-select" id="batch-${itemId}" onchange="updateMaterialQuantity('${itemId}', ${item.consumptionPerTest})">
                <option value="">-- Pilih Batch --</option>
                ${batches.map((batch, idx) => `
                    <option value="${idx}" 
                            data-remaining="${batch.remainingTests}" 
                            data-package="${batch.packageSize}"
                            data-batch-no="${batch.batchNo}">
                        ${batch.batchNo} | Sisa: ${batch.remainingTests} tes | Exp: ${batch.expiry}
                    </option>
                `).join('')}
            </select>
            <div class="batch-info" id="batch-info-${itemId}" style="display: none; color: #2e7d32; font-weight: 600; margin-top: 4px;">
                ✓ Batch dipilih
            </div>
        </div>
        
        <div class="material-details">
            <div class="material-calc-info">
                ${calcInfo}<br>
                <span style="font-size: 10px; color: #999;">Default: ${defaultQty} ${item.satuan}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <input type="number" 
                       class="quantity-input" 
                       id="qty-${itemId}" 
                       value="${defaultQty}" 
                       min="0" 
                       step="0.01"
                       onchange="validateQuantity('${itemId}')"
                       oninput="validateQuantity('${itemId}')"
                       style="width: 90px; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-weight: 600; text-align: center;">
                <span style="font-size: 13px; color: #666; font-weight: 500;">${item.satuan}</span>
            </div>
        </div>
        
        <div class="batch-warning" id="warning-${itemId}" style="display: none; margin-top: 8px; padding: 8px; background: #fff3e0; border-left: 3px solid #ff9800; border-radius: 4px;">
            <span style="font-size: 11px; color: #f57c00; font-weight: 600;">⚠Pilih batch terlebih dahulu</span>
        </div>
    `;
    
    return itemDiv;
}

// ========================================
// MODAL FUNCTIONS
// ========================================

function openAddMaterialModal(category) {
    currentAddCategory = category;
    document.getElementById('addMaterialModal').classList.add('active');
    document.getElementById('newMaterialCategory').value = category;
    document.getElementById('newMaterialName').value = '';
    document.getElementById('newMaterialName').disabled = false;
    document.getElementById('newMaterialUnit').value = '';
    document.getElementById('newMaterialTestPkg').value = '';
    
    updateMaterialOptions();
}

function updateMaterialOptions() {
    const category = document.getElementById('newMaterialCategory').value;
    const materialSelect = document.getElementById('newMaterialName');
    const unitInput = document.getElementById('newMaterialUnit');
    const testPkgInput = document.getElementById('newMaterialTestPkg');
    
    materialSelect.innerHTML = '<option value="">Pilih nama material</option>';
    unitInput.value = '';
    testPkgInput.value = '';
    
    if (category && masterMaterialDatabase[category]) {
        materialSelect.disabled = false;
        
        const existingMaterials = new Set();
        
        const materialItems = document.querySelectorAll('.material-item');
        materialItems.forEach(item => {
            const name = item.querySelector('.material-name').textContent;
            existingMaterials.add(name);
        });
        
        customMaterials[category].forEach(item => existingMaterials.add(item.nama));
        
        let availableCount = 0;
        masterMaterialDatabase[category].forEach(material => {
            if (!existingMaterials.has(material.nama)) {
                const option = document.createElement('option');
                option.value = material.nama;
                option.textContent = material.nama;
                option.setAttribute('data-unit', material.satuan);
                option.setAttribute('data-test-pkg', material.testPerPackage || '');
                option.setAttribute('data-consumption', material.consumptionPerTest || '');
                materialSelect.appendChild(option);
                availableCount++;
            }
        });
        
        if (availableCount === 0) {
            materialSelect.disabled = true;
            materialSelect.innerHTML = '<option value="">Semua material sudah ditambahkan</option>';
        }
    } else {
        materialSelect.disabled = true;
        materialSelect.innerHTML = '<option value="">Pilih kategori terlebih dahulu</option>';
    }
}

function collectMaterialsWithBatch() {
    const materials = {
        Reagen: [],
        'Alat Habis Pakai': []
    };

    const materialItems = document.querySelectorAll('.material-item');
    materialItems.forEach(item => {
        const nama = item.querySelector('.material-name').textContent;
        const satuanEl = item.querySelector('.material-unit');
        const itemId = item.getAttribute('data-material-id');
        const qtyInput = document.getElementById(`qty-${itemId}`);
        const batchSelect = document.getElementById(`batch-${itemId}`);
        
        if (satuanEl && qtyInput && batchSelect && batchSelect.value !== '') {
            const satuan = satuanEl.textContent;
            const quantity = parseFloat(qtyInput.value);
            const batchOption = batchSelect.options[batchSelect.selectedIndex];
            const batchNo = batchOption.getAttribute('data-batch-no');
            
            const reagenContainer = document.getElementById('reagenItems');
            const alatContainer = document.getElementById('alatItems');
            
            if (reagenContainer && reagenContainer.contains(item)) {
                materials.Reagen.push({
                    nama: nama,
                    quantity: quantity,
                    satuan: satuan,
                    batch: batchNo
                });
            } else if (alatContainer && alatContainer.contains(item)) {
                materials['Alat Habis Pakai'].push({
                    nama: nama,
                    quantity: quantity,
                    satuan: satuan,
                    batch: batchNo
                });
            }
        }
    });

    return materials;
}

function updateMaterialUnit() {
    const materialSelect = document.getElementById('newMaterialName');
    const unitInput = document.getElementById('newMaterialUnit');
    const testPkgInput = document.getElementById('newMaterialTestPkg');
    
    if (materialSelect.value) {
        const selectedOption = materialSelect.options[materialSelect.selectedIndex];
        const unit = selectedOption.getAttribute('data-unit');
        const testPkg = selectedOption.getAttribute('data-test-pkg');
        unitInput.value = unit || '';
        testPkgInput.value = testPkg ? `${testPkg} test` : '';
    } else {
        unitInput.value = '';
        testPkgInput.value = '';
    }
}

function closeAddMaterialModal() {
    document.getElementById('addMaterialModal').classList.remove('active');
    currentAddCategory = '';
}

function addNewMaterial() {
    const category = document.getElementById('newMaterialCategory').value;
    const materialSelect = document.getElementById('newMaterialName');
    const nama = materialSelect.value;

    if (!category) {
        alert('Silakan pilih kategori');
        return;
    }

    if (!nama) {
        alert('Silakan pilih nama material');
        return;
    }

    const masterItem = masterMaterialDatabase[category].find(m => m.nama === nama);
    if (!masterItem) {
        alert('Material tidak ditemukan');
        return;
    }

    const newMaterial = {
        nama: masterItem.nama,
        satuan: masterItem.satuan,
        testPerPackage: masterItem.testPerPackage,
        consumptionPerTest: masterItem.consumptionPerTest
    };

    customMaterials[category].push(newMaterial);
    closeAddMaterialModal();

    const metode = document.getElementById('metodeSelect').value;
    generateMaterialList(selectedParameters, metode);
}

function deleteCustomMaterial(prefix, index) {
    if (confirm('Hapus material ini?')) {
        const category = prefix.includes('reagen') ? 'Reagen' : 'Alat Habis Pakai';
        customMaterials[category].splice(index, 1);
        
        const metode = document.getElementById('metodeSelect').value;
        generateMaterialList(selectedParameters, metode);
    }
}

function closeConfirmModal() {
    document.getElementById('confirmModal').classList.remove('active');
}

function confirmSubmit() {
    const tanggalInput = document.getElementById('tanggalPengeluaran');
    if (!tanggalInput || !tanggalInput.value) {
        alert('Silakan isi tanggal aktual pengeluaran!');
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
        parameter: selectedParameters.map(p => p.name),
        metode: document.getElementById('metodeSelect').value,
        materials: {
            Reagen: materials.Reagen.map(m => `${m.nama}: ${m.quantity} ${m.satuan} (${m.batch})`),
            'Alat Habis Pakai': materials['Alat Habis Pakai'].map(m => `${m.nama}: ${m.quantity} ${m.satuan} (${m.batch})`)
        }
    };

    if (selectedType === 'sampel') {
        dataEntry.jumlahSampel = jumlahSampel;
        dataEntry.jumlahTes = jumlahTes;
        dataEntry.sampleData = JSON.parse(JSON.stringify(sampleDataArray));
    }

    pengeluaranData.unshift(dataEntry);
    
    let summary = '✓ DATA BERHASIL DISIMPAN!\n\n';
    summary += `Tanggal: ${tanggalPengeluaran}\n`;
    summary += `Tipe: ${selectedType.toUpperCase()}\n\n`;

    if (selectedType === 'sampel') {
        summary += `Sampel: ${jumlahSampel} | Tes: ${jumlahTes}\n\n`;
    }

    summary += `Material:\n`;
    summary += `- Reagen: ${materials.Reagen.length} item\n`;
    summary += `- Alat Habis Pakai: ${materials['Alat Habis Pakai'].length} item\n`;

    alert(summary);
    
    const form = document.getElementById('labDistributionForm');
    const menu = document.getElementById('inventoryMenu');
    const title = document.getElementById('pageTitle');
    
    form.style.display = 'none';
    menu.style.display = 'block';
    title.textContent = 'Inventaris';
    resetForm();
}

function collectMaterials() {
    const materials = {
        Reagen: [],
        'Alat Habis Pakai': []
    };
    
    const tesMultiplier = jumlahTes;

    const materialItems = document.querySelectorAll('.material-item');
    materialItems.forEach(item => {
        const nama = item.querySelector('.material-name').textContent;
        const satuanEl = item.querySelector('.material-unit');
        const qtyEl = item.querySelector('.quantity-display');
        
        if (satuanEl && qtyEl) {
            const satuan = satuanEl.textContent;
            const quantity = parseFloat(qtyEl.textContent);
            
            const reagenContainer = document.getElementById('reagenItems');
            const alatContainer = document.getElementById('alatItems');
            
            if (reagenContainer && reagenContainer.contains(item)) {
                const masterItem = masterMaterialDatabase['Reagen'].find(m => m.nama === nama);
                materials.Reagen.push({
                    nama: nama,
                    quantity: quantity,
                    satuan: satuan,
                    tesUsed: masterItem ? tesMultiplier : 0
                });
            } else if (alatContainer && alatContainer.contains(item)) {
                const masterItem = masterMaterialDatabase['Alat Habis Pakai'].find(m => m.nama === nama);
                materials['Alat Habis Pakai'].push({
                    nama: nama,
                    quantity: quantity,
                    satuan: satuan,
                    tesUsed: masterItem ? tesMultiplier : 0
                });
            }
        }
    });

    return materials;
}

function showDateConfirmModal(materials) {
    let modalContent = '<div class="summary-section">';
    modalContent += '<div class="summary-title">TANGGAL AKTUAL PENGELUARAN</div>';
    modalContent += `<div class="summary-text">`;
    modalContent += `<input type="date" id="tanggalPengeluaran" class="form-input" value="${new Date().toISOString().split('T')[0]}" required style="margin-bottom: 15px;">`;
    modalContent += `</div></div>`;
    
    modalContent += '<div class="summary-section">';
    modalContent += '<div class="summary-title">TIPE PENGELUARAN</div>';
    modalContent += `<div class="summary-text"><span class="summary-highlight">${selectedType.toUpperCase()}</span></div>`;
    modalContent += '</div>';

    if (selectedType === 'sampel') {
        modalContent += '<div class="summary-section">';
        modalContent += '<div class="summary-title">JUMLAH</div>';
        modalContent += `<div class="summary-text">`;
        modalContent += `Sampel: <span class="summary-highlight">${jumlahSampel}</span><br>`;
        modalContent += `Tes: <span class="summary-highlight">${jumlahTes}</span>`;
        modalContent += `</div></div>`;
        
        modalContent += '<div class="summary-section">';
        modalContent += '<div class="summary-title">DATA SAMPEL</div>';
        modalContent += `<div class="summary-text">`;
        modalContent += `${jumlahSampel} sampel dengan data NIK lengkap`;
        modalContent += `</div></div>`;
    }

    const metode = document.getElementById('metodeSelect').value;

    modalContent += '<div class="summary-section">';
    modalContent += '<div class="summary-title">PARAMETER & METODE</div>';
    modalContent += `<div class="summary-text">`;
    modalContent += `Metode: <span class="summary-highlight">${metode}</span><br>`;
    modalContent += `Parameter: ${selectedParameters.length} item`;
    modalContent += `</div></div>`;

    modalContent += '<div class="summary-section">';
    modalContent += '<div class="summary-title">MATERIAL</div>';
    modalContent += `<div class="summary-text">`;
    modalContent += `Reagen: ${materials.Reagen.length} item<br>`;
    modalContent += `Alat Habis Pakai: ${materials['Alat Habis Pakai'].length} item`;
    modalContent += `</div></div>`;

    modalContent += '<p style="color: #666; font-size: 13px; margin-top: 15px;">Apakah Anda yakin ingin menyimpan data ini?</p>';

    document.getElementById('confirmModalBody').innerHTML = modalContent;
    document.getElementById('confirmModal').classList.add('active');
}

function handleSubmit() {
    const materials = collectMaterialsWithBatch();

    if (materials.Reagen.length === 0 && materials['Alat Habis Pakai'].length === 0) {
        alert('Tidak ada material yang digunakan');
        return;
    }

    // Validate all materials have batch selected
    let missingBatch = false;
    let invalidQuantity = false;
    
    document.querySelectorAll('.batch-select').forEach(select => {
        const itemId = select.id.replace('batch-', '');
        const qtyInput = document.getElementById(`qty-${itemId}`);
        
        if (select.value === '') {
            missingBatch = true;
            const warning = document.getElementById(`warning-${itemId}`);
            if (warning) warning.style.display = 'block';
        }
        
        if (qtyInput && parseFloat(qtyInput.value) <= 0) {
            invalidQuantity = true;
        }
    });

    if (missingBatch) {
        alert('Silakan pilih batch untuk semua material!');
        return;
    }
    
    if (invalidQuantity) {
        alert('Jumlah material harus lebih dari 0!');
        return;
    }

    showDateConfirmModal(materials);
}

// ========================================
// HISTORY PAGE FUNCTIONS
// ========================================

function renderHistory() {
    const container = document.getElementById('historyCardsContainer');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filterType = document.getElementById('filterType').value;
    const filterDate = document.getElementById('filterDate').value;

    let filteredData = pengeluaranData.filter(item => {
        let matchSearch = true;
        if (searchTerm) {
            matchSearch = JSON.stringify(item).toLowerCase().includes(searchTerm);
        }

        let matchType = true;
        if (filterType && item.type !== filterType) {
            matchType = false;
        }

        let matchDate = true;
        if (filterDate) {
            const itemDate = new Date(item.timestamp);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (filterDate === 'today') {
                const todayEnd = new Date(today);
                todayEnd.setHours(23, 59, 59, 999);
                matchDate = itemDate >= today && itemDate <= todayEnd;
            } else if (filterDate === 'yesterday') {
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayEnd = new Date(yesterday);
                yesterdayEnd.setHours(23, 59, 59, 999);
                matchDate = itemDate >= yesterday && itemDate <= yesterdayEnd;
            } else if (filterDate === '7days') {
                const sevenDaysAgo = new Date(today);
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                matchDate = itemDate >= sevenDaysAgo;
            } else if (filterDate === '30days') {
                const thirtyDaysAgo = new Date(today);
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                matchDate = itemDate >= thirtyDaysAgo;
            }
        }

        return matchSearch && matchType && matchDate;
    });

    if (filteredData.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-text">Tidak ada data pengeluaran</div>
                <div class="empty-state-subtext">Data yang Anda cari tidak ditemukan</div>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    filteredData.forEach(item => {
        const card = createHistoryCard(item);
        container.appendChild(card);
    });
}

function createHistoryCard(item) {
    const card = document.createElement('div');
    card.className = 'history-card';
    card.onclick = () => showDetail(item.id);

    const date = new Date(item.timestamp);
    const dateStr = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    const timeStr = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    let badgeClass = 'badge-sampel';
    let badgeIcon = '';
    if (item.type === 'control') {
        badgeClass = 'badge-control';
        badgeIcon = '';
    } else if (item.type === 'alat') {
        badgeClass = 'badge-alat';
        badgeIcon = '';
    }

    let cardHTML = `
        <div class="card-header">
            <div class="card-title-section">
                <div class="card-type-badge ${badgeClass}">
                    ${badgeIcon} ${item.type.toUpperCase()}
                </div>
                <div class="card-datetime">${dateStr}, ${timeStr}</div>
            </div>
        </div>
        <div class="card-divider"></div>
    `;

    if (item.type === 'sampel' && item.jumlahSampel) {
        cardHTML += `
            <div class="card-info-row">
                <span class="card-label">Jumlah Sampel</span>
                <span class="card-value">${item.jumlahSampel}</span>
            </div>
            <div class="card-info-row">
                <span class="card-label">Jumlah Tes</span>
                <span class="card-value">${item.jumlahTes}</span>
            </div>
        `;
    }

    const parameterDisplay = item.parameter.length > 2 
        ? item.parameter.slice(0, 2).join(', ') + `, +${item.parameter.length - 2} lainnya`
        : item.parameter.join(', ');

    cardHTML += `
        <div class="card-info-row">
            <span class="card-label">Metode</span>
            <span class="card-value">${item.metode}</span>
        </div>
        <div class="card-info-row">
            <span class="card-label">Parameter</span>
            <span class="card-value">${parameterDisplay}</span>
        </div>
        <div class="card-info-row">
            <span class="card-label">Material</span>
            <span class="card-value">${item.materials.Reagen.length + item.materials['Alat Habis Pakai'].length} item</span>
        </div>
        <div class="card-footer">
            <button class="view-detail-btn">
                Lihat Detail →
            </button>
        </div>
    `;

    card.innerHTML = cardHTML;
    return card;
}

function filterHistory() {
    renderHistory();
}

function showDetail(id) {
    const item = pengeluaranData.find(d => d.id === id);
    if (!item) return;

    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('detailModalBody');

    const date = new Date(item.timestamp);
    const dateStr = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    let badgeClass = 'badge-sampel';
    let badgeIcon = '';
    if (item.type === 'control') {
        badgeClass = 'badge-control';
        badgeIcon = '';
    } else if (item.type === 'alat') {
        badgeClass = 'badge-alat';
        badgeIcon = '';
    }


    let detailHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <div class="badge-type-large ${badgeClass}">
                ${badgeIcon} ${item.type.toUpperCase()}
            </div>
            <div style="font-size: 14px; color: #666;">${dateStr}, ${timeStr} WIB</div>
        </div>
    `;

    if (item.type === 'sampel' && item.jumlahSampel) {
        detailHTML += `
            <div class="detail-section">
                <div class="detail-section-title">JUMLAH</div>
                <div class="detail-row">
                    <div class="detail-label">Jumlah Sampel</div>
                    <div class="detail-value">${item.jumlahSampel}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Jumlah Tes</div>
                    <div class="detail-value">${item.jumlahTes}</div>
                </div>
            </div>
        `;
        
        // NEW: Show NIK data if available
        if (item.sampleData && item.sampleData.length > 0) {
            detailHTML += `
                <div class="detail-section">
                    <div class="detail-section-title">DATA SAMPEL (NIK)</div>
            `;
            
            item.sampleData.forEach((sample, i) => {
                detailHTML += `
                    <div style="background: #f9f9f9; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
                        <div style="font-weight: 600; color: #004990; margin-bottom: 8px;">Sampel #${i + 1}</div>
                        <div class="detail-row">
                            <div class="detail-label">NIK</div>
                            <div class="detail-value">${sample.nik}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">Nama</div>
                            <div class="detail-value">${sample.namaLengkap}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">Tanggal Lahir</div>
                            <div class="detail-value">${sample.tanggalLahir} (${sample.usia} tahun)</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">Jenis Kelamin</div>
                            <div class="detail-value">${sample.jenisKelamin}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">Lokasi</div>
                            <div class="detail-value">${sample.kota}, ${sample.provinsi}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">Alamat</div>
                            <div class="detail-value">${sample.alamatLengkap}, Kel. ${sample.kelurahan}, Kec. ${sample.kecamatan}</div>
                        </div>
                        ${sample.nohp ? `
                        <div class="detail-row">
                            <div class="detail-label">No. HP</div>
                            <div class="detail-value">${sample.nohp}</div>
                        </div>
                        ` : ''}
                    </div>
                `;
            });
            
            detailHTML += `</div>`;
        }
    }

    detailHTML += `
        <div class="detail-section">
            <div class="detail-section-title">PARAMETER & METODE</div>
            <div class="detail-row">
                <div class="detail-label">Metode</div>
                <div class="detail-value">${item.metode}</div>
            </div>
            <div class="detail-row">
                <div class="detail-label">Parameter</div>
                <div class="detail-value">
                    <ul class="detail-list">
                        ${item.parameter.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    if (item.materials.Reagen.length > 0) {
        detailHTML += `
            <div class="detail-section">
                <div class="detail-section-title">MATERIAL REAGEN (${item.materials.Reagen.length} item)</div>
                <ul class="detail-list">
                    ${item.materials.Reagen.map(m => `<li>${m}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (item.materials['Alat Habis Pakai'].length > 0) {
        detailHTML += `
            <div class="detail-section">
                <div class="detail-section-title">MATERIAL ALAT HABIS PAKAI (${item.materials['Alat Habis Pakai'].length} item)</div>
                <ul class="detail-list">
                    ${item.materials['Alat Habis Pakai'].map(m => `<li>${m}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    modalBody.innerHTML = detailHTML;
    modal.classList.add('active');
}

function closeDetailModal() {
    document.getElementById('detailModal').classList.remove('active');
}

// Add some sample data for demonstration
function addSampleData() {
    const sampleData = [
        {
            id: Date.now() - 3600000,
            timestamp: new Date(Date.now() - 3600000),
            type: 'sampel',
            jumlahSampel: 2,
            jumlahTes: 6,
            parameter: ['Hemoglobin, penetapan kadar', 'Leukosit, hitung jumlah'],
            metode: 'Flow Cytometry',
            materials: {
                Reagen: ['Onetech Diluent: 300 ml', 'Onetech Lyse: 15 ml'],
                'Alat Habis Pakai': ['Vacutainer EDTA: 6 pcs', 'Spuit 3cc steril: 6 pcs', 'Alcohol swab: 12 pcs']
            },
            sampleData: [
                {
                    nik: '3173021509100002',
                    namaLengkap: 'Mamu',
                    tanggalLahir: '15-09-2010',
                    usia: '15',
                    jenisKelamin: 'Laki-laki',
                    provinsi: 'DKI Jakarta',
                    kota: 'Jakarta Barat',
                    kecamatan: 'Cengkareng',
                    kelurahan: 'Cengkareng Timur',
                    alamatLengkap: 'Jl. Baru No 34 Dusun Lama',
                    nohp: '08123456789'
                },
                {
                    nik: '3175024012950001',
                    namaLengkap: 'Siti Aminah',
                    tanggalLahir: '01-12-1995',
                    usia: '29',
                    jenisKelamin: 'Perempuan',
                    provinsi: 'DKI Jakarta',
                    kota: 'Jakarta Timur',
                    kecamatan: 'Matraman',
                    kelurahan: 'Palmeriam',
                    alamatLengkap: 'Jl. Matraman Raya No 123',
                    nohp: '08198765432'
                }
            ]
        },
        {
            id: Date.now() - 86400000,
            timestamp: new Date(Date.now() - 86400000),
            type: 'control',
            parameter: ['Glukosa, penetapan kadar', 'Kolesterol total, penetapan kadar'],
            metode: 'Enzimatik',
            materials: {
                Reagen: ['Proline GOD PAP: 0.5 ml', 'Proline Cholesterol FS: 1 ml'],
                'Alat Habis Pakai': ['Vacutainer EDTA: 1 pcs', 'Spuit 3cc steril: 1 pcs']
            }
        }
    ];
function updateMaterialQuantity(itemId, consumptionPerTest) {
    const batchSelect = document.getElementById(`batch-${itemId}`);
    const qtyInput = document.getElementById(`qty-${itemId}`);
    const warning = document.getElementById(`warning-${itemId}`);
    const batchInfo = document.getElementById(`batch-info-${itemId}`);
    
    if (batchSelect && batchSelect.value !== '') {
        const selectedOption = batchSelect.options[batchSelect.selectedIndex];
        const remainingTests = parseInt(selectedOption.getAttribute('data-remaining'));
        
        if (warning) warning.style.display = 'none';
        if (batchInfo) batchInfo.style.display = 'block';
        
        // Auto-calculate based on remaining tests
        const calculatedQty = remainingTests * consumptionPerTest;
        if (qtyInput) {
            qtyInput.value = calculatedQty.toFixed(2);
            qtyInput.max = calculatedQty;
        }
        
        validateQuantity(itemId);
    } else {
        if (warning) warning.style.display = 'block';
        if (batchInfo) batchInfo.style.display = 'none';
        if (qtyInput) {
            qtyInput.style.borderColor = '#ddd';
            qtyInput.style.backgroundColor = 'white';
        }
    }
}

function validateQuantity(itemId) {
    const qtyInput = document.getElementById(`qty-${itemId}`);
    const batchSelect = document.getElementById(`batch-${itemId}`);
    
    if (!batchSelect || batchSelect.value === '') {
        return;
    }
    
    const selectedOption = batchSelect.options[batchSelect.selectedIndex];
    const remainingTests = parseInt(selectedOption.getAttribute('data-remaining'));
    const currentQty = parseFloat(qtyInput.value);
    const maxQty = parseFloat(qtyInput.max);
    
    if (currentQty > maxQty) {
        qtyInput.style.borderColor = '#f44336';
        qtyInput.style.backgroundColor = '#ffebee';
    } else if (currentQty > 0) {
        qtyInput.style.borderColor = '#4caf50';
        qtyInput.style.backgroundColor = '#f0fff4';
    } else {
        qtyInput.style.borderColor = '#ddd';
        qtyInput.style.backgroundColor = 'white';
    }
}

    pengeluaranData.push(...sampleData);
}

// ========================================
// STOK MANAGEMENT FUNCTIONS
// ========================================

/**
 * Render All Material Cards
 * Function ini mengambil data dari masterMaterialDatabase dan menampilkan semua material
 */
function renderStokMaterial(searchTerm = '') {
    const container = document.getElementById('stokCardsContainer');
    container.innerHTML = '';
    
    let allMaterials = [];
    
    // Kumpulkan semua material dari masterMaterialDatabase
    Object.keys(masterMaterialDatabase).forEach(category => {
        masterMaterialDatabase[category].forEach(material => {
            allMaterials.push({
                ...material,
                category: category
            });
        });
    });
    
    // Filter berdasarkan search term
    if (searchTerm) {
        allMaterials = allMaterials.filter(m => 
            m.nama.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Tampilkan pesan jika tidak ada hasil
    if (allMaterials.length === 0) {
        container.innerHTML = `
            <div class="stok-empty-state">
                <div class="stok-empty-text">Tidak ada material ditemukan</div>
            </div>
        `;
        return;
    }
    
    // Urutkan berdasarkan nama
    allMaterials.sort((a, b) => a.nama.localeCompare(b.nama));
    
    // Buat card untuk setiap material
    allMaterials.forEach(material => {
        const card = createStokCard(material);
        container.appendChild(card);
    });
}

/**
 * Create Material Stock Card
 * Function ini membuat card untuk menampilkan info material
 */
function createStokCard(material) {
    const card = document.createElement('div');
    card.className = 'stok-card';
    card.onclick = () => showStokDetail(material.nama, material.category);
    
    const categoryClass = material.category === 'Reagen' ? 'reagen' : 'alat';
    const categoryLabel = material.category === 'Reagen' ? 'Reagen' : 'Alat';
    
    // Hitung total test yang tersedia dari semua batch
    const batches = getOrCreateBatches(material.nama, material.testPerPackage, material.currentStock);
    const totalTests = batches.reduce((sum, batch) => sum + batch.remainingTests, 0);
    
    // Tentukan warna indicator stok
    const stockLevel = getStockLevel(totalTests, material.testPerPackage * 2);
    
    card.innerHTML = `
        <div class="stok-card-header">
            <div class="stok-material-name">${material.nama}</div>
            <div class="stok-category-badge ${categoryClass}">${categoryLabel}</div>
        </div>
        
        <div class="stok-info-row">
            <span class="stok-info-label">Per Package:</span>
            <span class="stok-info-value">${material.testPerPackage} test</span>
        </div>
        
        <div class="stok-info-row">
            <span class="stok-info-label">Per Test:</span>
            <span class="stok-info-value">${material.consumptionPerTest} ${material.satuan}</span>
        </div>
        
        <div class="stok-stock-indicator">
            <div class="stok-stock-left">
                <div class="stok-stock-text">Stok Tersedia</div>
                <div class="stok-test-count">${totalTests} tes tersedia</div>
            </div>
            <div class="stok-stock-value ${stockLevel}">${totalTests}</div>
        </div>
    `;
    
    return card;
}

/**
 * Get Stock Level (low/medium/high)
 * Function ini menentukan warna indikator berdasarkan jumlah stok
 */
function getStockLevel(currentStock, threshold) {
    if (currentStock === 0) return 'low';
    if (currentStock < threshold) return 'medium';
    return 'high';
}

/**
 * Search Material
 * Function ini dipanggil saat user mengetik di search bar
 */
function searchStokMaterial() {
    const searchTerm = document.getElementById('stokSearch').value;
    renderStokMaterial(searchTerm);
}

/**
 * Show Material Detail Modal with Batch Information
 * Function ini menampilkan modal dengan detail batch material
 */
function showStokDetail(materialName, category) {
    const material = masterMaterialDatabase[category].find(m => m.nama === materialName);
    if (!material) return;
    
    const batches = getOrCreateBatches(material.nama, material.testPerPackage, material.currentStock);
    const totalTests = batches.reduce((sum, batch) => sum + batch.remainingTests, 0);
    const totalPackages = Math.ceil(totalTests / material.testPerPackage);
    
    let batchesHTML = '';
    batches.forEach((batch, index) => {
        const expiryStatus = getExpiryStatus(batch.expiry);
        const daysLeft = calculateDaysUntilExpiry(batch.expiry);
        
        let expiryText = '';
        if (daysLeft < 0) {
            expiryText = `Kadaluarsa ${Math.abs(daysLeft)} hari lalu`;
        } else if (daysLeft === 0) {
            expiryText = 'Kadaluarsa hari ini';
        } else {
            expiryText = `${daysLeft} hari lagi`;
        }
        
        batchesHTML += `
            <div class="stok-batch-item">
                <div class="stok-batch-header">
                    <div class="stok-batch-number">${batch.batchNo}</div>
                    <div class="stok-expiry-badge ${expiryStatus.class}">${expiryStatus.label}</div>
                </div>
                <div class="stok-batch-details">
                    <div class="stok-batch-detail-item">
                        <span class="stok-batch-detail-label">Tanggal Kadaluarsa</span>
                        <div class="stok-batch-detail-value">${batch.expiry}</div>
                        <div style="font-size: 11px; color: #666; margin-top: 2px;">${expiryText}</div>
                    </div>
                    <div class="stok-batch-detail-item">
                        <span class="stok-batch-detail-label">Sisa Tes</span>
                        <div class="stok-batch-detail-value">${batch.remainingTests} tes</div>
                    </div>
                    <div class="stok-batch-detail-item">
                        <span class="stok-batch-detail-label">Ukuran Package</span>
                        <div class="stok-batch-detail-value">${batch.packageSize} tes/pkg</div>
                    </div>
                    <div class="stok-batch-detail-item">
                        <span class="stok-batch-detail-label">Volume Tersisa</span>
                        <div class="stok-batch-detail-value">${(batch.remainingTests * material.consumptionPerTest).toFixed(2)} ${material.satuan}</div>
                    </div>
                </div>
            </div>
        `;
    });
    
    const modalBody = document.getElementById('stokDetailBody');
    modalBody.innerHTML = `
        <div class="stok-detail-header">
            <div class="stok-detail-name">${material.nama}</div>
            <div class="stok-detail-meta">
                <div class="stok-detail-meta-item">
                    <span>${category}</span>
                </div>
                <div class="stok-detail-meta-item">
                    <span>${material.testPerPackage} tes/package</span>
                </div>
                <div class="stok-detail-meta-item">
                    <span>${material.consumptionPerTest} ${material.satuan}/tes</span>
                </div>
            </div>
        </div>
        
        <div class="stok-batch-section-title">Informasi Batch (${batches.length} batch tersedia)</div>
        <div class="stok-batch-list">
            ${batchesHTML}
        </div>
        
        <div class="stok-total-summary">
            <div class="stok-total-title">Total Stok Keseluruhan</div>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                <div>
                    <div class="stok-total-value">${totalTests} tes</div>
                    <div style="font-size: 13px; color: #1565c0; margin-top: 4px; font-weight: 600;">
                        ≈ ${totalPackages} package | ${(totalTests * material.consumptionPerTest).toFixed(2)} ${material.satuan}
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 12px; color: #1565c0; font-weight: 600; margin-bottom: 4px;">RATA-RATA EXPIRY</div>
                    <div style="font-size: 16px; color: #0d47a1; font-weight: 700;">
                        ${calculateAverageExpiry(batches)} hari
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('stokDetailModal').classList.add('active');
}

/**
 * Get Expiry Status
 * Function ini menentukan status kadaluarsa berdasarkan tanggal
 */
function getExpiryStatus(expiryDate) {
    const days = calculateDaysUntilExpiry(expiryDate);
    
    if (days < 0) {
        return { class: 'expired', label: 'Kadaluarsa' };
    } else if (days <= 30) {
        return { class: 'warning', label: 'Segera Kadaluarsa' };
    } else {
        return { class: 'good', label: 'Bagus' };
    }
}

/**
 * Calculate Days Until Expiry
 * Function ini menghitung sisa hari sampai kadaluarsa
 */
function calculateDaysUntilExpiry(expiryDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const expiry = new Date(expiryDate);
    expiry.setHours(0, 0, 0, 0);
    
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

/**
 * Calculate Average Expiry Days
 * Function ini menghitung rata-rata hari kadaluarsa dari semua batch
 */
function calculateAverageExpiry(batches) {
    if (batches.length === 0) return 0;
    
    const totalDays = batches.reduce((sum, batch) => {
        return sum + calculateDaysUntilExpiry(batch.expiry);
    }, 0);
    
    return Math.round(totalDays / batches.length);
}

/**
 * Close Stock Detail Modal
 * Function ini menutup modal detail stok
 */
function closeStokDetailModal() {
    document.getElementById('stokDetailModal').classList.remove('active');
}

/**
 * Update stock after pengeluaran (INTEGRATION)
 * Function ini mengurangi stok setelah ada pengeluaran
 */
function updateStockAfterPengeluaran(materials) {
    // Update stok untuk Reagen
    materials.Reagen.forEach(item => {
        const match = item.match(/^(.+?):\s*([\d.]+)\s*(\w+)\s*\(Batch:\s*(.+?)\)$/);
        if (match) {
            const materialName = match[1];
            const quantity = parseFloat(match[2]);
            const batchNo = match[4];
            
            // Cari material di database
            const material = masterMaterialDatabase['Reagen'].find(m => m.nama === materialName);
            if (material && batchDatabase[materialName]) {
                const batch = batchDatabase[materialName].find(b => b.batchNo === batchNo);
                if (batch) {
                    const testsUsed = Math.ceil(quantity / material.consumptionPerTest);
                    batch.remainingTests = Math.max(0, batch.remainingTests - testsUsed);
                    
                    // Update total stock
                    material.currentStock = batchDatabase[materialName].reduce((sum, b) => sum + b.remainingTests, 0);
                }
            }
        }
    });
    
    // Update stok untuk Alat Habis Pakai
    materials['Alat Habis Pakai'].forEach(item => {
        const match = item.match(/^(.+?):\s*([\d.]+)\s*(\w+)\s*\(Batch:\s*(.+?)\)$/);
        if (match) {
            const materialName = match[1];
            const quantity = parseFloat(match[2]);
            const batchNo = match[4];
            
            const material = masterMaterialDatabase['Alat Habis Pakai'].find(m => m.nama === materialName);
            if (material && batchDatabase[materialName]) {
                const batch = batchDatabase[materialName].find(b => b.batchNo === batchNo);
                if (batch) {
                    const testsUsed = Math.ceil(quantity / material.consumptionPerTest);
                    batch.remainingTests = Math.max(0, batch.remainingTests - testsUsed);
                    
                    material.currentStock = batchDatabase[materialName].reduce((sum, b) => sum + b.remainingTests, 0);
                }
            }
        }
    });
}