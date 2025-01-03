

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-yellow-400 mb-6 animate-fade-in">
        Contact Us
      </h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-3xl animate-slide-up">
        Have questions or feedback? We would love to hear from you. Fill out the form below, and we will get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form
        className="bg-gray-800 p-6 rounded-lg shadow-md max-w-lg w-full animate-slide-up"
        method="POST"
        action="#"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
        >
          Send Message
        </button>
      </form>

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

const ContactWithStyles = () => (
  <>
    <style>{styles}</style>
    <Contact />
  </>
);

export default ContactWithStyles;
