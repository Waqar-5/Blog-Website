
export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left ml-12 animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
          Waqar Ali: Navigating the Secrets of Technology in tech blogs!
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
        Tech blogs serve as a gateway to unraveling complex concepts, keeping readers informed about the latest advancements, trends, and breakthroughs. Through insightful articles, these platforms demystify cutting-edge technologies, offering practical knowledge and inspiring curiosity.
        </p>

        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring our categories
          </h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
          {[
            'Technology',
            'Artificial Category',
            'HTML',
            'Virtual Reality',
            'Next Js',
            'Web Development',
          ].map((category, index) =>(
            <div key={index} className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600">
              <p className="text-center text-lg font-semibold">
                {category}
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out ">

              </div>

            </div>
          ))}
          </div>
        </div>
        <p className="text-sm md:text-base text-black mb-6 px-5 animate-fade-in-down delay-100 mt-10">
        Technology and Artificial Intelligence (AI)

Technology has revolutionized how we live, work, and interact. It encompasses tools, systems, and innovations that solve problems and improve efficiency. From the internet connecting people globally to advanced programming languages like HTML and frameworks like Next.js enabling seamless web development, technology fuels creativity and progress. Virtual reality (VR), an emerging frontier, blurs the line between the physical and digital worlds, offering immersive experiences in gaming, education, and training.

Artificial Intelligence, a pivotal category within technology, mimics human intelligence through machines. AI powers innovations like chatbots, recommendation systems, and predictive analytics. It is transforming industries by automating repetitive tasks, enhancing decision-making, and fostering personalized user experiences. For example, in web development, AI aids in code optimization and debugging, streamlining workflows for developers.

The synergy between AI and technologies like VR is creating groundbreaking possibilities, such as virtual simulations with real-time AI interactions. As AI continues to evolve, ethical considerations like data privacy and bias mitigation remain crucial. Nevertheless, its potential to reshape industries and improve lives is unparalleled. In this dynamic age, technology and AI together represent a powerful duo driving humanity toward a more connected, efficient, and innovative future.
        </p>
      </section>
    </div>
  );
}
