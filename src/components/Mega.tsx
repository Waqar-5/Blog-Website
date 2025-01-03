
import BlogCard from "../components/BlogCard"

export default function Mega() {
  const posts = [
    {
      id: 1,
      title: "HTML: The Foundation of Web Design",
      description: "HTML provides the essential structure for web pages, allowing developers to organize content effectively using elements like headings, paragraphs, and images. It forms the backbone of modern, engaging websites.",
      date: "2025-01-01",
      imageUrl: "/images/pic-1.jpg",
    },
    {
      id: 2,
      title: "AI: Transforming the Modern World",
      description: "Artificial Intelligence continues to reshape industries by streamlining automation, optimizing decision-making processes, and delivering tailored user experiences. It is driving the future of innovation.",
      date: "2025-01-01",
      imageUrl: "/images/Pic-2.jpg",
    },
    {
      id: 3,
      title: "Robotics: Revolutionizing Industries",
      description: "Advanced robotics is enabling machines to perform intricate tasks across sectors such as healthcare, manufacturing, and space exploration, bridging the gap between human capabilities and automation.",
      date: "2025-01-01",
      imageUrl: "/images/pic-3.jpg",
    },
    {
      id: 4,
      title: "Machine Learning Simplified",
      description: "Machine learning empowers systems to analyze and adapt from data, revolutionizing fields like predictive analytics, personalized recommendations, and operational efficiency.",
      date: "2025-01-01",
      imageUrl: "/images/pic-4.jpg",
    },
    {
      id: 5,
      title: "Cybersecurity: Securing Digital Lives",
      description: "As cyber threats evolve, cybersecurity plays a vital role in safeguarding sensitive information. Cutting-edge tools and techniques ensure data protection and maintain digital trust.",
      date: "2025-01-01",
      imageUrl: "/images/pic-5.jpg",
    },
    {
      id: 6,
      title: "Cloud Computing: Powering Digital Innovation",
      description: "Cloud computing offers unmatched scalability and efficiency, becoming a cornerstone of digital transformation for businesses seeking agility in an evolving technological landscape.",
      date: "2025-01-01",
      imageUrl: "/images/pic-6.jpg",
    },
    {
      id: 7,
      title: "Edge Computing: Revolutionizing Data Management",
      description: "Edge computing minimizes latency by processing data near its source, enabling faster decision-making and supporting critical applications like IoT and industrial automation.",
      date: "2025-01-01",
      imageUrl: "/images/pic-7.jpg",
    },
    {
      id: 8,
      title: "Blockchain: Beyond Cryptocurrency",
      description: "Blockchain technology underpins secure, decentralized solutions that are transforming industries like finance, supply chain, and healthcare, ensuring transparency and trust.",
      date: "2025-01-01",
      imageUrl: "/images/pic-8.jpg",
    },
    {
      id: 9,
      title: "NLP: Enhancing Human-Machine Interactions",
      description: "Natural Language Processing bridges communication between humans and machines, powering chatbots, translation tools, and voice assistants that are redefining interactivity.",
      date: "2025-01-01",
      imageUrl: "/images/pic-9.jpg",
    },
    {
      id: 10,
      title: "5G Technology: Redefining Connectivity",
      description: "5G technology promises ultra-fast speeds, reduced latency, and enhanced connectivity, revolutionizing applications in IoT, smart cities, and autonomous systems.",
      date: "2025-01-01",
      imageUrl: "/images/pic-10.jpg",
    },
    {
      id: 11,
      title: "Augmented Reality: A New Dimension",
      description: "Augmented Reality blends digital enhancements with the physical world, transforming user experiences in industries like retail, education, and healthcare through immersive solutions.",
      date: "2025-01-01",
      imageUrl: "/images/pic-1_1.jpg",
    },
    {
      id: 12,
      title: "Quantum Computing: Unlocking Possibilities",
      description: "Quantum computing leverages quantum mechanics to solve complex challenges, promising advancements in fields like encryption, drug discovery, and logistics optimization.",
      date: "2025-01-01",
      imageUrl: "/images/pic-12.jpg",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
