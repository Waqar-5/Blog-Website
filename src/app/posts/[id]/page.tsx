'use client';

import AuthorCard from '@/components/AuthorCard';
import CommentSection from '@/components/CommentSection';
import Footer from '@/components/Footer';
import Image from 'next/image';

const posts = [
  {
    id: "1",
    title: "HTML: Building Blocks of the Web",
    description: "HTML (HyperText Markup Language) serves as the foundation of web development, providing the structural framework for all web pages. It allows developers to define and organize web content using tags that represent elements such as headings, paragraphs, images, and tables. HTML is pivotal in ensuring a seamless and user-friendly experience, offering support for multimedia, semantic structuring, and responsive design. Whether it’s creating simple text pages or intricate layouts, HTML remains a cornerstone in crafting visually appealing, accessible, and device-compatible websites. Its integration with CSS and JavaScript further enhances its versatility, enabling interactive and aesthetically pleasing interfaces.",
    image: "/images/Web-pic.jpg",
  },
  {
    id: "2",
    title: "AI's Transformative Power",
    description: "Artificial Intelligence (AI) is revolutionizing the modern world by automating repetitive tasks, analyzing vast amounts of data with unmatched precision, and delivering tailored solutions to users. AI technologies, including machine learning and deep learning, are enabling groundbreaking advancements across industries like healthcare, where AI-driven diagnostics improve patient outcomes, and finance, where fraud detection algorithms ensure security. The scope of AI extends to autonomous vehicles, virtual assistants, predictive analytics, and personalized entertainment recommendations. Its transformative potential lies in its adaptability, continuously learning and evolving to address complex problems, thereby reshaping human interactions with technology.",
    image: "/images/Al.jpg",
  },
  {
    id: "3",
    title: "Robotics: Shaping Tomorrow",
    description: "Robotics combines cutting-edge engineering and artificial intelligence to design machines that can perform a wide range of tasks, from mundane household chores to intricate surgical procedures. In healthcare, robots are enhancing precision during surgeries and assisting in patient care. In manufacturing, they optimize assembly lines by boosting productivity and reducing errors. Advances in robotics are propelling autonomous systems into space exploration, disaster response, and agriculture, demonstrating their versatility and adaptability. With ongoing innovations, robotics continues to evolve, creating opportunities for smarter and safer integration into daily life and industrial processes.",
    image: "/images/Robot-pic.jpg",
  },
  {
    id: "4",
    title: "Demystifying Machine Learning",
    description: "Machine learning (ML), a critical branch of artificial intelligence, empowers systems to analyze data, recognize patterns, and make decisions with minimal human intervention. By leveraging algorithms such as supervised, unsupervised, and reinforcement learning, ML models drive applications ranging from personalized marketing and recommendation systems to fraud detection and autonomous systems. In healthcare, ML enhances diagnostic accuracy and drug discovery, while in natural language processing, it powers tools like speech recognition and machine translation. The ability of ML to adapt and refine its performance over time underscores its transformative impact across diverse fields.",
    image: "/images/ML-pic.jpg",
  },
  {
    id: "5",
    title: "Cybersecurity: Defending the Digital",
    description: "Cybersecurity is a critical pillar in safeguarding digital infrastructure, protecting sensitive information from ever-evolving threats like phishing, malware, and ransomware attacks. Advanced technologies, including AI-driven threat detection, cryptographic protocols, and multi-factor authentication, ensure robust defenses against cyber threats. As businesses increasingly rely on cloud computing, remote work solutions, and online transactions, the demand for proactive security measures grows exponentially. Beyond corporate applications, cybersecurity also defends individuals from identity theft, fraud, and privacy breaches, fostering a safer digital ecosystem.",
    image: "/images/CS-pic.jpg",
  },
  {
    id: "6",
    title: "Cloud Computing: A Tech Revolution",
    description: "Cloud computing is a revolutionary technology that enables the delivery of computing services such as storage, processing power, and applications over the internet. By eliminating the need for physical hardware, businesses can scale operations seamlessly, reduce costs, and enhance collaboration. Cloud solutions are essential in areas like big data analytics, software development, and machine learning deployment. With the advent of hybrid and multi-cloud strategies, companies can optimize their IT resources while maintaining flexibility. The cloud's role in enabling remote work, disaster recovery, and real-time data processing underscores its pivotal place in the digital transformation journey.",
    image: "/images/CC-pic.jpg",
  },
  {
    id: "7",
    title: "Edge Computing: Next-Gen Data Solutions",
    description: "Edge computing revolutionizes data processing by decentralizing computational tasks to be performed near the data source rather than relying on centralized servers. This minimizes latency, reduces bandwidth usage, and improves the efficiency of Internet of Things (IoT) devices like smart thermostats, autonomous vehicles, and industrial sensors. Edge computing is instrumental in powering real-time applications, such as virtual reality and smart city infrastructures. By ensuring faster decision-making and enhanced security, it supports scalable solutions for industries embracing digital transformation.",
    image: "/images/EC-pic.jpg",
  },
  {
    id: "8",
    title: "Blockchain: Innovation Beyond Bitcoin",
    description: "Blockchain technology, initially recognized for its role in powering cryptocurrencies like Bitcoin, has evolved into a versatile tool with applications across industries. Its decentralized, transparent, and immutable ledger system enhances supply chain management, improves data security in healthcare, and facilitates efficient and secure smart contracts. By removing intermediaries, blockchain enables peer-to-peer transactions and ensures data integrity, making it a transformative force in finance, governance, and beyond.",
    image: "/images/BC-pic.jpg",
  },
  {
    id: "9",
    title: "NLP: Bridging Human-Machine Communication",
    description: "Natural Language Processing (NLP) enables machines to understand, interpret, and generate human language, bridging the gap between people and technology. From chatbots and virtual assistants like Alexa to sentiment analysis in social media and automated translation services, NLP drives intuitive communication tools. Its ability to analyze and synthesize text and speech is reshaping industries by making technology more accessible and user-centric.",
    image: "/images/NLP-pic.jpg",
  },
  {
    id: "10",
    title: "5G Technology: The Future of Connectivity",
    description: "5G technology is poised to revolutionize communication with its promise of ultra-fast internet speeds, reduced latency, and enhanced network capacity. Beyond improving mobile broadband, 5G facilitates innovative applications like IoT ecosystems, augmented reality experiences, and autonomous vehicle networks. Its rollout is transforming industries by enabling seamless connectivity, driving economic growth, and paving the way for smarter and more connected global societies.",
    image: "/images/G-pic.jpg",
  },
  {
    id: "11",
    title: "Augmented Reality: Redefining Experiences",
    description: "Augmented Reality (AR) overlays digital information onto the physical world, creating immersive and interactive experiences. By enhancing real-world environments with virtual elements, AR is revolutionizing retail through virtual try-ons, education with interactive lessons, and healthcare with advanced training simulations. AR’s ability to merge the physical and digital worlds positions it as a key technology in shaping future experiences.",
    image: "/images/Reality-pic.jpg",
  },
  {
    id: "12",
    title: "Quantum Computing: The Next Frontier",
    description: "Quantum computing leverages the principles of quantum mechanics to solve problems beyond the reach of classical computers. Its potential spans cryptography, climate modeling, complex optimization tasks, and pharmaceutical research. Although in its nascent stages, quantum computing represents a paradigm shift in computational capabilities, promising unprecedented breakthroughs that could redefine industries and advance scientific discovery.",
    image: "/images/QC-pic.webp",
  }
]

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
      </div>
    );
  }

  const renderParagraphs = (description: string) =>
    description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-5xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={800} // Adjust as needed
          height={600} // Adjust as needed
          className="rounded-md mt-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 cursor-pointer"
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer />
    </div>
  );
}
