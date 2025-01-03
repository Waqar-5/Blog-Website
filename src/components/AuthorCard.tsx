import Image from "next/image";

const AuthorCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12 ">
      <div className="flex items-center animation-fadeIn">
        <Image
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500 "
          src="/images/image.jpg"
          alt="Author Image"
          height={100}
          width={100}
        />

        <div>
          <h3 className="text-xl font-bold ">Waqar Ali</h3>
          <p className="text-slate-500">
            Web Developer | expert in TypeScript, JavaScript, HTML, CSS & Next.js
          </p>
        </div>
      </div>

      <p className="mt-3 text-blue-500 leading-relaxed">
        Waqar Ali is a passionate web developer and expert in web development, mastering TypeScript, JavaScript, HTML, CSS, and Next.js. <br /> Constantly exploring new technologies to enhance web development skills.
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue transition duration-300"
        >
          Instagram
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue transition duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default AuthorCard;
