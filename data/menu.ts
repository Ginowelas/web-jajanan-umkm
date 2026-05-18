export const whatsappNumber = "6281226532069";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;
export const minimumOrderQuantity = 20;

export const storeInfo = {
  name: "Warung Mak Menuk",
  address: "Wonosidi Lor, RT 007/RW 012, Wates, Kulon Progo",
  instagram: "@warungmakmenuk",
  whatsappLabel: "0812-2653-2069",
  minimumOrder: `Minimal order ${minimumOrderQuantity} pcs per pemesanan.`
};

export type MenuCategory = "Semua" | "Gorengan" | "Kue Basah" | "Ketan" | "Nasi Box";

export type MenuItem = {
  id: string;
  name: string;
  category: Exclude<MenuCategory, "Semua">;
  priceValue: number;
  unit: string;
  description: string;
  image: string;
  badge?: string;
  minOrder?: string;
};

export type PackageItem = {
  id: string;
  name: string;
  priceValue: number;
  description: string;
  items: string[];
  badge: string;
};

export const categories: MenuCategory[] = ["Semua", "Gorengan", "Kue Basah", "Ketan", "Nasi Box"];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

export const menuItems: MenuItem[] = [
  {
    id: "risol-mayo",
    name: "Risol Mayo",
    category: "Gorengan",
    priceValue: 2500,
    unit: "pcs",
    description: "Risol renyah berisi sosis, telur, dan mayones creamy lumer di setiap gigitan.",
    image: "/images/risol-mayo.jpg",
    badge: "Best Seller",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "lemet",
    name: "Lemet",
    category: "Kue Basah",
    priceValue: 1500,
    unit: "pcs",
    description: "Singkong parut dan gula merah dibungkus daun pisang dengan rasa manis legit.",
    image: "/images/lemet.jpg",
    badge: "Fresh Harian",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "pastel",
    name: "Pastel",
    category: "Gorengan",
    priceValue: 2500,
    unit: "pcs",
    description: "Pastel gurih berkulit renyah dengan isian sayuran dan telur yang lezat.",
    image: "/images/pastel.png",
    badge: "Favorit",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "arem-arem",
    name: "Arem-arem",
    category: "Nasi Box",
    priceValue: 2000,
    unit: "pcs",
    description: "Nasi lembut berisi ayam dan sayuran berbumbu, dibungkus daun pisang harum.",
    image: "/images/arem-arem.jpg",
    badge: "Fresh Harian",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "martabak-mini",
    name: "Martabak Mini",
    category: "Gorengan",
    priceValue: 2000,
    unit: "pcs",
    description: "Martabak mini renyah dengan isian telur dan daun bawang berbumbu gurih.",
    image: "/images/martabak.jpg",
    badge: "Paling Banyak Disukai",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "semar-mendem",
    name: "Semar Mendem",
    category: "Ketan",
    priceValue: 2000,
    unit: "pcs",
    description: "Ketan lembut dibalut dadar telur tipis dengan cita rasa tradisional yang nikmat.",
    image: "/images/semar-mendem.jpg",
    badge: "Fresh Harian",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "bengawan-solo",
    name: "Bengawan Solo",
    category: "Kue Basah",
    priceValue: 2500,
    unit: "pcs",
    description: "Kue lembut dengan rasa manis legit dan taburan kelapa gurih.",
    image: "/images/bengawan-solo.jpg",
    badge: "Fresh Harian",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "klepon",
    name: "Klepon",
    category: "Kue Basah",
    priceValue: 2000,
    unit: "pcs",
    description: "Klepon kenyal dengan isian gula merah lumer dan balutan kelapa parut.",
    image: "/images/klepon.jpg",
    badge: "Fresh Harian",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "donat-meses",
    name: "Donat Meses",
    category: "Gorengan",
    priceValue: 2500,
    unit: "pcs",
    description: "Donat lembut dengan lapisan cokelat manis dan taburan meses melimpah, menghadirkan rasa klasik yang lezat dan bikin nagih.",
    image: "/images/donat-meses.jpg",
    badge: "Best Seller",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "kroket-kentang",
    name: "Kroket Kentang",
    category: "Gorengan",
    priceValue: 2500,
    unit: "pcs",
    description: "Kroket kentang renyah dengan isian sayuran berbumbu gurih, lembut di dalam dan nikmat disantap hangat kapan saja.",
    image: "/images/kroket.jpg",
    badge: "Best Seller",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "dadar-gulung-keju",
    name: "Dadar Gulung Keju",
    category: "Kue Basah",
    priceValue: 2000,
    unit: "pcs",
    description: "Dadar gulung pandan yang lembut dengan taburan keju gurih, perpaduan manis dan lezat yang cocok dinikmati kapan saja.",
    image: "/images/dadar-gulung-keju.jpg",
    badge: "Fresh Harian",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "kue-lapis",
    name: "Kue Lapis",
    category: "Kue Basah",
    priceValue: 2000,
    unit: "pcs",
    description: "Kue lapis lembut dengan tekstur kenyal dan rasa manis yang pas, hadir dengan aroma pandan khas yang menggugah selera.",
    image: "/images/lapis.jpg",
    badge: "Fresh Harian",
    minOrder: "Min. 20 pcs"
  },
  {
    id: "kue-apem",
    name: "Kue Apem",
    category: "Kue Basah",
    priceValue: 2000,
    unit: "pcs",
    description: "Apem lembut dengan rasa manis khas dan aroma harum yang menggoda, cocok dinikmati sebagai camilan tradisional kapan saja.",
    image: "/images/apem.jpg",
    badge: "Fresh Harian",
    minOrder: "Min. 20 pcs"
  },
];

export const snackPackages: PackageItem[] = [
  {
    id: "paket-arisan",
    name: "Paket Arisan",
    priceValue: 18000,
    description: "Komposisi ringan untuk suguhan tamu dan acara keluarga.",
    items: ["3 jajanan pilihan", "Box kraft premium", "Label nama acara"],
    badge: "Populer"
  },
  {
    id: "paket-kantor",
    name: "Paket Kantor",
    priceValue: 22000,
    description: "Paket rapi untuk meeting, seminar kecil, dan konsumsi kantor.",
    items: ["4 jajanan pilihan", "Sendok/tisu", "Kemasan siap distribusi"],
    badge: "Rapi"
  },
  {
    id: "paket-hajatan",
    name: "Paket Hajatan",
    priceValue: 28000,
    description: "Isi lebih lengkap untuk acara besar dengan tampilan premium.",
    items: ["5 jajanan pilihan", "Custom isi box", "Bisa tambah kartu ucapan"],
    badge: "Custom"
  }
];

export const testimonials = [
  {
    name: "Ibu Rani",
    event: "Arisan keluarga",
    quote: "Snack box-nya rapi, rasanya fresh, dan tamu banyak yang tanya pesan di mana."
  },
  {
    name: "Pak Dimas",
    event: "Meeting kantor",
    quote: "Pengiriman tepat waktu, pilihan menunya pas, dan tampilannya cocok untuk acara kantor."
  },
  {
    name: "Ibu Sinta",
    event: "Hajatan rumah",
    quote: "Bisa custom isi sesuai budget. Komunikasinya enak dan hasilnya memuaskan."
  }
];

export const faqs = [
  {
    question: "Berapa minimal order?",
    answer: "Minimal order tergantung jenis produk. Untuk snack box biasanya mulai dari 20 box."
  },
  {
    question: "Apakah bisa custom isi snack box?",
    answer: "Bisa. Isi box dapat disesuaikan dengan budget, acara, dan stok produksi harian."
  },
  {
    question: "Pesanan sebaiknya H-berapa?",
    answer: "Untuk acara kecil disarankan H-2. Untuk pesanan besar lebih aman H-5 sampai H-7."
  },
  {
    question: "Apakah tersedia pengiriman?",
    answer: "Tersedia untuk area tertentu. Detail ongkir akan dikonfirmasi melalui WhatsApp."
  }
];

export const galleryImages = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
  "/images/gallery-6.png"
];
