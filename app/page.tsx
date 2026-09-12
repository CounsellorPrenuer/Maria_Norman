import Image from 'next/image';

export default async function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section id="home" className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Education & Lifelong Learning</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Dedicated to nurturing learners, empowering educators, and guiding institutions.
        </p>
        <a href="#packages" className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
          View Packages
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <Image src="/founder.jpg" alt="Maria Norman" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-primary">About Maria Norman</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            With over 30 years of experience in education, Maria Norman has dedicated her life to nurturing learners, empowering educators, and guiding educational institutions across India. Her journey has taken her from the hills to the plains and the beaches of the country.
          </p>
          <p className="text-slate-700 leading-relaxed">
            She works as a Principal in Goa and is contributing to the ICSE Board to affiliate more schools through her experience and expertise.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-3">Career Guidance</h3>
              <p className="text-slate-600">Helping individuals make informed decisions about their future paths.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-3">Workshops & Seminars</h3>
              <p className="text-slate-600">Engaging sessions designed for students, parents, and professionals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-3">Admission Guidance</h3>
              <p className="text-slate-600">Assisting with educational placements and institutional planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Mentoria Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((num) => (
            <div key={num} className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200">
              <Image src={`/Mentoria${num}.png`} alt={`Package ${num}`} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Package {num}</h3>
                <p className="text-slate-600 mb-4">Comprehensive guidance to help you reach your goals.</p>
                <button className="w-full bg-primary text-white py-2 rounded font-medium hover:bg-secondary transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-slate-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-primary">Testimonials</h2>
          <div className="bg-white p-8 rounded-lg shadow">
            <p className="italic text-slate-700 mb-4">
              "Maria's guidance completely transformed my approach to career planning. Her deep experience shines through in every session."
            </p>
            <p className="font-bold">- A Grateful Parent</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Contact Us</h2>
        <p className="text-lg mb-2">Email: mariya_nrmn@yahoo.co.in</p>
        <p className="text-lg mb-6">Phone: 9597983359</p>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/maria-norman-maria-sayers-55ab1a15" target="_blank" rel="noreferrer" className="text-primary hover:underline">LinkedIn</a>
          <a href="#" className="text-primary hover:underline">Instagram</a>
        </div>
      </section>
    </div>
  );
}
