export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyBrand</h1>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Banner */}
      <header className="bg-blue-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold">Welcome to Our Landing Page</h2>
        <p className="mt-4">The best place to showcase your product</p>
        <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded-lg font-bold hover:bg-gray-100">Get Started</button>
      </header>

      {/* Body Section */}
      <section id="features" className="container mx-auto py-16 px-4 text-center">
        <h3 className="text-3xl font-semibold">Our Features</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border rounded-lg shadow">
            <h4 className="text-xl font-bold">Feature 1</h4>
            <p>Short description of feature 1.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h4 className="text-xl font-bold">Feature 2</h4>
            <p>Short description of feature 2.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h4 className="text-xl font-bold">Feature 3</h4>
            <p>Short description of feature 3.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 text-center">
        <h3 className="text-3xl font-semibold">Contact Us</h3>
        <form className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-4" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded mb-4"></textarea>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}
