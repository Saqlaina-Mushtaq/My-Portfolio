export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">Contact Me</h2>
        <p className="mt-4 text-lg">
          Let's connect! Feel free to reach out for work opportunities or any questions.
        </p>

        <div className="mt-10">
          <form className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-left font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-left font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-left font-semibold">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10">
          <p className="text-lg">Or reach me via:</p>
          <p className="mt-2 text-gray-700 font-semibold">
            📧 Email: <a href="emailt:saqlainamushtaq1913@gmail.com" className="text-blue-600">Saqlaina Muhtaq</a>
          </p>
          <p className="mt-1 text-gray-700 font-semibold">
            🔗 LinkedIn: <a href="https://www.linkedin.com/in/saqlaina-mushtaq-a506061a6/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Saqlaina Mushtaq</a>
          </p>
        </div>
      </div>
    </section>
  );
}
