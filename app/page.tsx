import Image from 'next/image';

export default async function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section id="home" className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">EduVista by Dr. Maria Norman</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Building Confident Learners. Creating Future Leaders. We believe every student deserves the right guidance to discover their strengths and build a successful future.
        </p>
        <a href="#packages" className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
          View Packages
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <Image src="/founder.jpg" alt="Dr. Maria Norman" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-primary">About Dr. Maria Norman</h2>
          <p className="text-slate-600 font-medium mb-4">
            MA (English), B.Ed., M.Sc. Psychology, D.Litt.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Dr. Maria Norman is an experienced educationist with over 30 years of leadership in reputed schools across India. She is a Principal, Career Counsellor, Educational Consultant and AI Navigator for Mentoria.
          </p>
          <p className="text-slate-700 leading-relaxed">
            She specialises in career guidance, curriculum planning, school administration and teacher development. Passionate about helping students discover their true potential, she has guided numerous schools in building excellence through innovative educational practices.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-3">Career Counselling</h3>
              <p className="text-slate-600">Helping students identify interests and aptitude to choose the right academic stream through scientific assessments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-3">Curriculum Design</h3>
              <p className="text-slate-600">Designing age-appropriate curriculum, lesson plans, and innovative teaching methodologies aligned with educational standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-3">Teacher Training Workshops</h3>
              <p className="text-slate-600">Professional development on innovative teaching strategies, classroom management, Bloom's Taxonomy, and NEP practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-3">Model United Nations (MUN)</h3>
              <p className="text-slate-600">Organising MUN conferences to enhance leadership, diplomacy, communication and global awareness.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-3">Personality Development</h3>
              <p className="text-slate-600">Developing confidence, communication, leadership, public speaking, interview skills and life skills for students.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-3">Educational Event Management</h3>
              <p className="text-slate-600">Organising Sports Day, Annual Day, Graduation, Cultural Festivals, School Tours, and educational trips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Mentoria Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((num) => (
            <div key={num} className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200 flex flex-col">
              <Image src={`/Mentoria${num}.png`} alt={`Package ${num}`} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-2">Package {num}</h3>
                  <p className="text-slate-600 mb-4">Comprehensive Mentoria career guidance and counseling to help you reach your goals.</p>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded font-medium hover:bg-secondary transition mt-4">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS & SUCCESS STORIES */}
      <section id="testimonials" className="bg-slate-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-primary">Success Stories</h2>
          <div className="bg-white p-8 rounded-lg shadow text-left">
            <ul className="list-disc pl-5 space-y-3 text-slate-700">
              <li>Successfully guided students in selecting suitable careers through psychometric assessments.</li>
              <li>Conducted career counselling programmes helping students make informed academic decisions.</li>
              <li>Organised major school events including Sports Day, Graduation Day, Cultural Festivals and Inter-School Competitions.</li>
              <li>Delivered teacher training workshops on innovative teaching methodologies.</li>
              <li>Conducted student workshops on English Literature, Time Management and Personality Development.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Contact Us</h2>
        <p className="text-lg mb-2 font-medium">Dr. Maria Norman</p>
        <p className="text-slate-600 mb-2">Email: mariya_nrmn@yahoo.co.in</p>
        <p className="text-slate-600 mb-6">Phone: 9597983359</p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="https://www.linkedin.com/in/maria-norman-maria-sayers-55ab1a15" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline">LinkedIn Profile</a>
          <a href="https://instagram.com/MARIA.NORMAN589" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline">Instagram @MARIA.NORMAN589</a>
        </div>
      </section>
    </div>
  );
}
