'use client';

import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: "1",
    title: "HTML: Building Blocks of the Web",
    description: "HTML (HyperText Markup Language) serves as the foundation of web development...",
    image: "/images/Web-pic.jpg",
  },
  {
    id: "2",
    title: "AI's Transformative Power",
    description: "Artificial Intelligence (AI) is revolutionizing the modern world by automating repetitive tasks...",
    image: "/images/Al.jpg",
  },
  {
    id: "3",
    title: "Robotics: Shaping Tomorrow",
    description: "Robotics combines cutting-edge engineering and artificial intelligence to design machines...",
    image: "/images/Robot-pic.jpg",
  },
  {
    id: "4",
    title: "Demystifying Machine Learning",
    description: "Machine learning (ML), a critical branch of artificial intelligence, empowers systems...",
    image: "/images/ML-pic.jpg",
  },
  {
    id: "5",
    title: "Cybersecurity: Defending the Digital",
    description: "Cybersecurity is a critical pillar in safeguarding digital infrastructure...",
    image: "/images/CS-pic.jpg",
  },
  {
    id: "6",
    title: "Cloud Computing: A Tech Revolution",
    description: "Cloud computing is a revolutionary technology that enables the delivery of computing services...",
    image: "/images/CC-pic.jpg",
  },
  {
    id: "7",
    title: "Edge Computing: Next-Gen Data Solutions",
    description: "Edge computing revolutionizes data processing by decentralizing computational tasks...",
    image: "/images/EC-pic.jpg",
  },
  {
    id: "8",
    title: "Blockchain: Innovation Beyond Bitcoin",
    description: "Blockchain technology, initially recognized for its role in powering cryptocurrencies...",
    image: "/images/BC-pic.jpg",
  },
  {
    id: "9",
    title: "NLP: Bridging Human-Machine Communication",
    description: "Natural Language Processing (NLP) enables machines to understand, interpret, and generate human language...",
    image: "/images/NLP-pic.jpg",
  },
  {
    id: "10",
    title: "5G Technology: The Future of Connectivity",
    description: "5G technology is poised to revolutionize communication with its promise of ultra-fast internet speeds...",
    image: "/images/G-pic.jpg",
  },
  {
    id: "11",
    title: "Augmented Reality: Redefining Experiences",
    description: "Augmented Reality (AR) overlays digital information onto the physical world...",
    image: "/images/Reality-pic.jpg",
  },
  {
    id: "12",
    title: "Quantum Computing: The Next Frontier",
    description: "Quantum computing leverages the principles of quantum mechanics to solve problems beyond the reach of classical computers...",
    image: "/images/QC-pic.webp",
  },
];

const BlogList = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-10">
         My Blogs 
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`"/posts/${post.id}"`}
              className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-all hover:scale-105"
            >
              <div>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-red-700">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm">
                  {post.description.slice(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
