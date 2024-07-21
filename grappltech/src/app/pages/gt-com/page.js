import Head from 'next/head';

export default function GTcom() {
  return (
   
      <div className="font-sans p-8">
        <div className="text-center bg-white p-8  mb-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-500 font-bold ">LEGO for Web Developers: Build Anything with Grabbit & Go</h1>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-full max-w-xs">
              <img src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148298375.jpg?w=1060&t=st=1721116967~exp=1721117567~hmac=2f72eb6c887ed836894ae1b220797dfe1cbe26f7a5e72b6ed0c9823b6f7d3807" alt="Image 1" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full max-w-xs">
              <img src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148310437.jpg?w=1060&t=st=1721116996~exp=1721117596~hmac=138021fd47622b6b66f7215d7e0990a95c1917f79d74d39761cd4cb47bb57b66" alt="Image 2" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full max-w-xs">
              <img src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_23-2148250583.jpg?t=st=1721116987~exp=1721120587~hmac=b303e6400cf9114b7e6b67ef8b0b9118175188206b43a6952004137bb6cba309&w=1060" alt="Image 3" className="rounded-lg shadow-lg" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Grapplers Unite! Discover Powerful Web Components Created by Your Peers.</h2>
          <p>Tired of building websites from scratch? Feeling like a hamster on a wheel of code? Introducing Grabbit & Go, your one-stop shop for web components built by the awesome GrapplTech community! Stop reinventing the wheel (or the dropdown menu) and unleash your inner Picasso (of web design, that is). With Grabbit & Go, you can:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-building-columns text-3xl mb-4"></i>
              <h4 className="text-lg font-semibold mb-2">Mix and match like a coding fashionista</h4>
              <p>Forget monolithic libraries, pick the exact components you need to build your dream website.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-code text-3xl mb-4"></i>
              <h4 className="text-lg font-semibold mb-2">Stop writing the same code over and over (and over)</h4>
              <p>Why waste time when the GrapplTech community has already done the heavy lifting? Snag those pre-built components and focus on what matters - making your website epic.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-coffee text-3xl mb-4"></i>
              <h4 className="text-lg font-semibold mb-2">Channel your inner couch potato coder</h4>
              <p>Building websites shouldn't be a chore. Grab a cup of chai (or your beverage of choice) and browse our curated selection of web components.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h1 className="text-3xl font-bold mb-4">Fresh Out the Oven: Community-Cooked Web Component Templates (Coming Soon!)</h1>
            <p>Our amazing Grappler community isn't just building awesome components, they're whipping up some incredible web component templates too! Get ready to level up your development workflow with pre-built solutions you can easily customize. Stay tuned, these tasty templates will be served up soon!</p>
          </div>
          <div className="flex justify-center mb-8">
            <img src="https://datasciences.ca/wp-content/uploads/2023/12/Blog-DE-Image-2.jpeg" alt="Image 4" className="w-1/2 rounded-lg shadow-lg" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Join Us in Building the Future: Contribute to GrapplTech!</h2>
            <p>We welcome your passion and creativity! Please fill out the application form below so that our team can reach out to you. By participating in this initiative, you will gain valuable experience, and we will recognize your efforts with a certificate that you can proudly add to your resume and coursework.<br />The main advantage of this contribution is that it is considered as an internship experience, allowing you to receive a certificate upon completion. This certificate can be a valuable addition to your resume and coursework, showcasing your skills and dedication. Ready to make an impact? Apply now and become a part of the GrapplTech community!</p>
          </div>
          <div className="text-center mb-8">
            <button className="bg-gradient-to-r from-green-500 to-green-400 text-white py-3 px-6 rounded-lg text-lg font-medium transition-transform transform hover:scale-105">
              Click here to apply
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-newspaper text-3xl mb-4"></i>
              <h4 className="text-lg font-semibold mb-2">Fill out the application form</h4>
              <p>Provide your personal details, resume, and explain your motivation for contributing to GrapplTech.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-eye text-3xl mb-4"></i>
              <h4 className="text-lg font-semibold mb-2">Review process</h4>
              <p>Our team will carefully review your application and resume. You will be notified of the outcome within 1 week.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-medal text-3xl mb-4"></i>
              <h4 className="text-lg font-semibold mb-2">Certificate issuance</h4>
              <p>Upon successful review and completion of your contribution, we will issue a certificate of appreciation. This will serve as an internship experience, enhancing your professional credentials.</p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
