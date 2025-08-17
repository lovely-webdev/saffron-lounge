import { etarBellotaFont } from '../etarBellotaFont';

export default function ServicesPage() {
	return (
		<section className={`min-h-screen bg-[#111115] py-20 ${etarBellotaFont.variable}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-etar-bellota), sans-serif' }}>Our Services</h1>
          <div className="flex items-center justify-center text-[#bdbdbd] py-4">
            <a href="/" className="hover:text-[#e2b279] transition-colors duration-300">Home</a>
            <span className="mx-3">/</span>
            <span className="text-[#e2b279]">Services</span>
          </div>
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto">
            Discover the range of services we offer to enhance your dining experience
          </p>
        </div>
        
        <div className="bg-[#18181c] rounded-lg p-8 md:p-12 border border-[#23232a] max-w-4xl mx-auto">
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-6">
                <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Catering for Events</h3>
                <p className="text-[#bdbdbd]">
                  Let us cater your special events with our signature dishes and professional service.
                  We offer customized menus for weddings, corporate events, and private parties.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-6">
                <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Private Dining Experiences</h3>
                <p className="text-[#bdbdbd]">
                  Enjoy an intimate dining experience in our private rooms.
                  Perfect for business meetings, celebrations, or romantic dinners with personalized service.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e2b279] bg-opacity-10 flex items-center justify-center mr-6">
                <svg className="w-6 h-6 text-[#e2b279]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Chef's Tasting Menus</h3>
                <p className="text-[#bdbdbd]">
                  Experience our chef's creativity with our seasonal tasting menus.
                  A curated selection of our finest dishes, paired with premium wines.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
	);
}