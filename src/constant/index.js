import about from "../assets/Ilustrasi/About/about.png";
import about_2 from "../assets/Ilustrasi/About/about-2.png";
import about_3 from "../assets/Ilustrasi/About/about-3.png";
import serviceDesign from "../assets/Icons/Services/service-design.png";
import serviceShop from "../assets/Icons/Services/service-shop.png";
import serviceTeacher from "../assets/Icons/Services/service-teacher.png";
import serviceUser from "../assets/Icons/Services/service-user.png";
import checkIcon from "../assets/Icons/Prices/tick-circle.png";
import calculatorIcon from "../assets/Icons/Custom Package/calculator.png";
import userIcon from "../assets/Icons/Custom Package/profile-2user.png";
import messageIcon from "../assets/Icons/Custom Package/messages.png";
import starIcon from "../assets/Icons/Custom Package/star.png";
import likeTagIcon from "../assets/Icons/Custom Package/like-tag.png";
import unlimitedIcon from "../assets/Icons/Custom Package/unlimited.png";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "layanan",
    title: "Layanan",
  },
  {
    id: "harga",
    title: "Harga",
  },
  {
    id: "tentang_kami",
    title: "Tentang Kami",
  },
];

export const aboutData = [
  {
    id: 0,
    title: "Dukungan Profesional",
    body: "Kami adalah tim profesional yang telah berpengalaman dalam mengerjakan proyek-proyek untuk berbagai industri, dan untuk memastikan website Anda selalu dalam kondisi terbaik dan terus berkembang, tim kami juga menyediakan layanan maintenance.",
    img: about,
  },
  {
    id: 1,
    title: "Desain Kreatif",
    body: "Kami dapat memberikan desain website yang unik, menarik, dan sesuai dengan preferensi Anda. Kenyamanan pengunjung dan user website Anda menjadi prioritas kami.",
    img: about_2,
  },
  {
    id: 2,
    title: "Harga Terjangkau",
    body: "Solusi website berkualitas dan terjangkau kami dapat membantu pertumbuhan bisnis Anda. Jangan ragu untuk menghubungi kami dan segera dapatkan solusi terbaik untuk website Anda.",
    img: about_3,
  },
];

export const services = [
  {
    id: 0,
    title: "Website Bisnis",
    body: "Landing page, company profile, dan toko online.",
    img: serviceShop,
  },
  {
    id: 1,
    title: "Website Pribadi",
    body: "Portfolio pribadi, blog pribadi, dan undangan pernikahan.",
    img: serviceUser,
  },
  {
    id: 2,
    title: "Website Sekolah",
    body: "Website sekolah untuk SD, SMP, SMA, dan perguruan tinggi.",
    img: serviceTeacher,
  },
  {
    id: 3,
    title: "Website Custom",
    body: "Website dengan kebutuhan khusus yang tidak tercakup di kategori sebelumnya.",
    img: serviceDesign,
  },
];

export const prices = [
  {
    id: 0,
    lvl: "Basic",
    price: "1.5 - 2 jt",
    span: "(Rp 1.500.000 - 2.000.000)",
  },
  {
    id: 1,
    lvl: "Beginner",
    price: "3.5 - 5 jt",
    span: "(Rp 3.500.000 - 5.000.000)",
  },
  {
    id: 2,
    lvl: "Intermediate",
    price: "7 - 9 jt",
    span: "(Rp 7.000.000 - 9.000.000)",
  },
  {
    id: 3,
    lvl: "Advanced+",
    price: "12 - 15 jt",
    span: "(Rp 12.000.000 - 15.000.000)",
  },
];
export const features = [
  {
    id: 0,
    featureType: "Max halaman",
    levels: [
      {
        id: 0,
        lvl: "Basic",
        feature: "4",
      },
      {
        id: 1,
        lvl: "Beginner",
        feature: "5",
      },
      {
        id: 2,
        lvl: "Intermediate",
        feature: "10",
      },
      {
        id: 3,
        lvl: "Advanced+",
        feature: "20",
      },
    ],
  },
  {
    id: 1,
    featureType: "Tipe halaman",
    levels: [
      {
        lvl: "Basic",
        feature: "Statis",
      },
      {
        lvl: "Beginner",
        feature: "Statis",
      },
      {
        lvl: "Intermediate",
        feature: "Dinamis",
      },
      {
        lvl: "Advanced+",
        feature: "Dinamis",
      },
    ],
  },
  {
    id: 2,
    featureType: "Tampilan",
    levels: [
      {
        lvl: "Basic",
        feature: "Responsif",
      },
      {
        lvl: "Beginner",
        feature: "Responsif",
      },
      {
        lvl: "Intermediate",
        feature: "Responsif",
      },
      {
        lvl: "Advanced+",
        feature: "Responsif",
      },
    ],
  },
  {
    id: 3,
    featureType: "Max revisi desain",
    levels: [
      {
        lvl: "Basic",
        feature: "5x",
      },
      {
        lvl: "Beginner",
        feature: "10x",
      },
      {
        lvl: "Intermediate",
        feature: "15x",
      },
      {
        lvl: "Advanced+",
        feature: "25x",
      },
    ],
  },
  {
    id: 4,
    featureType: "Integrasi database",
    levels: [
      {
        lvl: "Basic",
        feature: "-",
      },
      {
        lvl: "Beginner",
        feature: "-",
      },
      {
        lvl: "Intermediate",
        feature: {
          icon: checkIcon,
        },
      },
      {
        lvl: "Advanced+",
        feature: {
          icon: checkIcon,
        },
      },
    ],
  },
];

export const specialOffers = [
  {
    id: 0,
    description:
      "Website yang dibuat sesuai dengan kebutuhan dan preferensi klien",
    img: userIcon,
  },
  {
    id: 1,
    description: "Fleksibilitas dalam menyesuaikan timeline dan anggaran klien",
    img: calculatorIcon,
  },
  {
    id: 2,
    description: "Fitur khusus dan unik yang tidak tersedia pada paket lain",
    img: starIcon,
  },
  {
    id: 3,
    description: "Konsultasi dan diskusi yang lebih dalam dan intensif",
    img: messageIcon,
  },
  {
    id: 4,
    description: "Pemeliharaan dan dukungan selama 6 bulan",
    img: likeTagIcon,
  },
  {
    id: 5,
    description: "Tidak terbatas pada jumlah revisi",
    img: unlimitedIcon,
  },
];

export const contactWA = "(+62) 1234 5678 9010";
