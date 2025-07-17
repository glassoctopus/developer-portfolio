export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Have a project in mind? Let's make it happen!
          </p>
        </div>

        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-md bg-primary-dark border border-primary-light focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-md bg-primary-dark border border-primary-light focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 rounded-md bg-primary-dark border border-primary-light focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}