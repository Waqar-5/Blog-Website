
const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-5">
      {/* Heading Section */}
      <h1 className="text-5xl font-bold text-yellow-400 mb-6 animate-fade-in">
        About Dynamic Blog
      </h1>
      <p className="text-lg text-gray-300 mb-10 animate-slide-up max-w-3xl text-center">
        Welcome to <span className="text-yellow-400">Dynamic Blog</span>, your gateway to the latest trends, insights, and breakthroughs in the world of technology.  
        Our mission is to bring you well-curated, easy-to-understand content that inspires and informs.
      </p>

      {/* Mission Section */}
      <section className="mb-10 bg-gray-800 p-6 rounded-lg shadow-md animate-slide-up max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-300">
          To demystify the complexities of technology and present innovative ideas, tools, and frameworks in a way that is accessible and engaging for developers, enthusiasts, and tech professionals.
        </p>
      </section>

      {/* Topics We Cover */}
      <section className="mb-10 bg-gray-800 p-6 rounded-lg shadow-md animate-fade-in max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">What We Cover</h2>
        <ul className="text-lg text-gray-300 list-disc list-inside">
          <li>Programming trends, languages, and frameworks like React and Next.js</li>
          <li>AI and machine learning technologies</li>
          <li>Cloud computing, DevOps, and infrastructure</li>
          <li>Tech news, innovations, and product reviews</li>
        </ul>
      </section>

      {/* Vision Section */}
      <section className="mb-10 bg-gray-800 p-6 rounded-lg shadow-md animate-slide-up max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-300">
          To build a tech-centric blog that empowers readers to embrace technology, whether they are beginners or seasoned professionals.
        </p>
      </section>

      {/* Join Us Section */}
      <section className="bg-gray-800 p-6 rounded-lg shadow-md animate-fade-in max-w-4xl">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Join Us</h2>
        <p className="text-lg text-gray-300">
          Explore, learn, and grow with <span className="text-yellow-400">Dynamic Blog</span>. Stay connected to the evolving tech landscape through our insights and updates.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-gray-500">
        <p>© 2024 Dynamic Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

// TailwindCSS Animations
const styles = `
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
.animate-slide-up {
  animation: slideUp 1s ease-out;
}
`;

const AboutWithStyles = () => (
  <>
    <style>{styles}</style>
    <About />
  </>
);

export default AboutWithStyles;
