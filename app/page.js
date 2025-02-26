// app/page.js
import ClassCard from "./components/ClassCard";

export default function Home() {
  const classes = [
    {
      name: "Kelas SI",
      bgColor: "bg-pink-400",
      students: [
        { name: "Baekhyun", image: "baek.jpg" },
        { name: "Ghiselle", image: "gisel.jpg" },
        { name: "Irene", image: "irene.jpg" },
        { name: "Joy", image: "joy.jpg" },
        { name: "Kai", image: "kai.jpg" },
      ],
    },
    {
      name: "Kelas KA",
      bgColor: "bg-blue-400",
      students: [
        { name: "Karina", image: "karina.jpg" },
        { name: "Ningning", image: "ningning.jpg" },
        { name: "Seulgi", image: "seulgi.jpg" },
        { name: "Taeyeon", image: "taeyeon.jpg" },
        { name: "Hyeonsuk", image: "ucuk.jpg" },
      ],
    },
    {
      name: "Kelas BD",
      bgColor: "bg-green-400",
      students: [
        { name: "Wendy", image: "wendy.jpg" },
        { name: "Winter", image: "winter.jpg" },
        { name: "Woyeong", image: "woyeong.jpg" },
        { name: "Chanyeol", image: "yeol.jpg" },
        { name: "Yeri", image: "yeri.jpg" },
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-yellow-300 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">✨ Teman Terbaik di Setiap Kelas ✨</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls, index) => (
          <ClassCard key={index} className={cls.name} students={cls.students} bgColor={cls.bgColor} />
        ))}
      </div>
    </main>
  );
}
