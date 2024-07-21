
import Image from "next/image";
import FAQ from "./faq";
export default function Home() {
  return (
    
    <main className="flex flex-col items-center justify-between p-24"> 
        <div > {/* main*/}
          <div className="flex flex-row ">
            <div className="pb-6">
              <div className="font-sans">
                <h1 className="text-8xl py-4 text-blue-700">Grappl & Grow</h1>
                <h2 className="text-4xl font-Sans text-green-700">Connect with the tech talent you need,<br></br> when you need it.</h2>
                <p className=" py-4">Skill up,Hire up,Tech up</p>
                <div className="">
                  <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded hover:scale-105 hover:shadow-lg transition duration-300">Explore Now</button>
                </div>
              </div>
            </div>
            <div className="px-10 ">
              <img className=" rounded-lg shadow-lg" src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_23-2148250583.jpg?t=st=1721116987~exp=1721120587~hmac=b303e6400cf9114b7e6b67ef8b0b9118175188206b43a6952004137bb6cba309&w=1060" width={500} />
            </div>
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center">
          <div className=" text-center py-12">
            <h1 className="text-6xl mb-4 text-blue-700 font-bold">GrapplTech</h1>
            <h2 className="text-3xl mb-4 text-red-600">Your way to Landing Perfect Bootcamps!</h2>
            <p>GrapplTech is the ultimate platform for students and recent graduates to find bootcamps across a wide range of industries. Our platform connects aspiring grapplers with top companies, offering them invaluable experience, skills, and contacts to jumpstart their careers.</p>
          </div>
        </div>
        <div class="container mx-auto px-4 py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
              <div class="p-6 flex-1">
                <h2 class="text-xl font-bold mb-2 hover:text-gray-900">Grappler Chowdown</h2>
                <p class="text-gray-700 leading-relaxed">At GrappiTech, we believe in creating a community of top-performing grapplers who are passionate about learning and growing.</p>
              </div>
              <img class="w-full h-48 object-cover object-center rounded-b-lg shadow-lg" src="https://media.istockphoto.com/id/1500380376/vector/developers-working.jpg?s=612x612&w=0&k=20&c=7UFwRLVrvJEN7EpLu_-jUU8KYAoB8xc8pyNlprtc9i8=" alt="GrapplTech" width={150} />
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
              <div class="p-6 flex-1">
                <h2 class="text-xl font-bold mb-2 hover:text-gray-900">Virtual Mode</h2>
                <p class="text-gray-700 leading-relaxed">GrapplTech's virtual mode feature allows students and recent graduates to gain valuable experience and skills from the comfort of their own homes.</p>
              </div>
              <img class="w-full h-48 object-cover object-center rounded-b-lg shadow-lg" src="https://www.shutterstock.com/shutterstock/videos/1095060811/thumb/7.jpg?ip=x480" alt="GrapplTech" width={150} />
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
              <div class="p-6 flex-1">
                <h2 class="text-xl font-bold mb-2 hover:text-gray-900">Dedicated Mentor</h2>
                <p class="text-gray-700 leading-relaxed">GrapplTech's one-to-one mentorship feature connects students and recent graduates with experienced mentors who can provide guidance, support, and valuable industry insights.</p>
              </div>
              <img class="w-full h-48 object-cover object-center rounded-b-lg shadow-lg" src="https://devsquad-website.s3.us-east-1.amazonaws.com/blog/senior-software-engineer/devsquad_blogheader_what-to-look-for-in-a-software-engineer_v1.jpg" alt="GrapplTech" width={150} />
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
              <div class="p-6 flex-1">
                <h2 class="text-xl font-bold mb-2 hover:text-gray-900">Client Projects</h2>
                <p class="text-gray-700 leading-relaxed">GrapplTech's client project feature provides students and recent graduates with the opportunity to work on real-world projects for top companies.</p>
              </div>
              <img class="w-full h-48 object-cover object-center rounded-b-lg shadow-lg" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221123132725/Top-Software-Engineering-Projects-Ideas.png" alt="GrapplTech" width={150} />
            </div>
          </div>
        </div>
        <div className="container mx-auto flex border-t border-gray-500 pt-10">
          <div className="w-1/2">
            <img
              src="https://cdn.prod.website-files.com/634681057b887c6f4830fae2/6367ddbb892c1121704116e2_6259f9083b0e477629ac4f4b_zoom_integration.png"
              className=" shadow-lg position:fixed"
              alt="PixelBrew" width={550} />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl p-9 justify-items-center text-right">PixelBrew</h1>
            <h2 className="text-2xl p-4 text-right">Where Coffee Runs and Learning Happens!</h2>
            <p className="text-lg text-right">At GrapplTech, we know that coffee runs are an essential part of any bootcamp experience. And while you're sipping on that latte, why not also gain some valuable skills and experience in your chosen industry? We promise we won't judge you if you spill your coffee during a video call with your boss, but we will encourage you to keep learning and growing in your career. Join us today and let's make your coffee-fueled career dreams a reality!</p>
          </div>
        </div>
        <div className="p-5"><button className="bg-blue-500 text-white rounded py-2 px-4 font-bold hover:scale-105 hover:shadow-lg transition duration-300"> Apply for a Latte-tude of opportunities! </button></div>
        <div className="border-t border-gray-500">
          <div className="w-full">
            <h1 className="text-5xl pt-10 text-center font-mono font-bold text-blue-500">GrapplTech Xperience</h1>
            <h3 className="text-2xl pt-5 text-center text-yellow-500">Revolutionizing the Bootcamp Experience with Unparalleled Features for Your Success</h3>
            <p className="text-center pt-2 text-black-600">Immerse yourself in an unparalleled learning journey with GrapplTech's unique features. Engage in live classes, work on real client projects, receive guidance from dedicated mentors, earn valuable certificates, explore multiple domains, and savor the camaraderie of team lunches. Prepare to level up your skills and create unforgettable memories as you embark on a transformative bootcamp experience</p>
          </div>
        </div>
        <div className="container pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
              <img src="https://www.shutterstock.com/image-vector/student-man-studying-online-watching-260nw-2193807563.jpg" alt="Live classes img" className="shadow-lg pt-12" />
              <h3 className="pt-5 justify-items-center text-center font-bold text-lg text-green-500">Live Classes</h3>
              <div className="pt-3 border-b border-gray-300 pb-2 "> <p className="font-bold "> Live Learning:</p> Enhancing Your Bootcamp Experience with Interactive Classes</div>
              < p className=" text-opacity-100"> At GrapplTech, we understand the importance of offering live classes as a part of our bootcamp program. Live classes provide our grapplers with the opportunity to learn directly from experienced industry professionals and receive real-time feedback, making the learning experience more interactive and engaging. With live classes, our grapplers can develop practical skills that are essential to succeed in their chosen field, helping them gain a competitive edge in the job market. We believe that live classes are a crucial aspect of our bootcamp program and are committed to providing our grapplers with the best possible learning experience.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96">
              <img src="https://darvideo.tv/wp-content/uploads/2021/10/Animation-project-management-1.webp" alt="client project img" className="shadow-lg" />
              <h3 className="pt-5 text-center font-bold text-lg text-green-500">Real Client Projects</h3>
              <div className="pt-3 border-b border-gray-300 pb-2 "><p className="font-bold">Real-World Experience: </p>Developing Professional Skills with Real Client Projects in Bootcamps</div>
              <p>GrapplTech offers our grapplers the opportunity to work on real client projects as part of our bootcamp program. This provides valuable real-world experience and allows grapplers to develop professional skills that are essential for their career growth. Working on real client projects gives grapplers the chance to experience the challenges and pressures of a real work environment, preparing them for the demands of the job market. By participating in these projects, our grapplers can develop technical, analytical, and communication skills, as well as gain experience working in a team and managing project timelines. Overall, real client projects play an important role in our bootcamp program as they offer a practical learning experience that prepares our grapplers for the challenges of the workforce.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
              <img src="https://www.shutterstock.com/image-vector/employees-giving-hands-helping-colleagues-260nw-1697387011.jpg" className="shadow-lg" />
              <h3 className="font-bold text-green-500 text-lg text-center">Dedicated Mentors</h3>
              <div className="pt-3 border-b border-gray-300 pb-2"><p className="font-bold">Personalized Guidance:</p> Dedicated Mentors at GrapplTech</div>
              <p>At GrapplTech, we believe that a mentor's guidance can make all the difference in an grappler's journey. That's why we provide dedicated mentors to each grappler, who offer personalized guidance, support, and feedback. Our mentors have years of experience in the industry and are committed to helping grapplers achieve their career goals. Join us for an bootcamp experience that puts your growth first!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
              <img src="https://www.jobspikr.com/wp-content/uploads/2022/02/19362653-scaled-1.jpg" className="shadow-lg" />
              <h3 className="text-green-500 text-lg font-bold text-center pt-5">Multiple Domains</h3>
              <div className="pt-3 border-b border-gray-300 pb-2"><p className="font-bold">Diverse Learning Opportunities:</p> Multiple Technologies at GrapplTech</div>
              <p>GrapplTech offers exposure to a wide range of technologies, ensuring that our grapplers receive a diverse learning experience. Our program covers popular technologies such as Java, Python, React, and more, providing hands-on experience and the opportunity to build a portfolio. Join us to expand your knowledge and skills in the tech industry!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
              <img src="https://media.istockphoto.com/id/1342378440/video/graduation-animation-with-redhead-woman-graduated.jpg?s=640x640&k=20&c=mTbZnQ0MtWbZJtbKxs4QcwqOfZ4c0lTCQyiKMV4KpCE=" className="shadow-lg pt-8" />
              <h3 className="text-green-500 text-lg font-bold text-center pt-5">Bootcamp Program Certificates</h3>
              <div className="pt-3 border-b border-gray-300 pb-2"><p className="font-bold">Recognizing Your Accomplishments:</p> Three Levels of Certificate at GrapplTech</div>
              <p>At GrapplTech, we believe in recognizing our grapplers' hard work and accomplishments. That's why we provide three levels of certificates - Beginner, Intermediate, and Advanced - to acknowledge the skills and knowledge gained during the bootcamp. These certificates can help boost your resume and showcase your achievements to potential employers. Join us for an bootcamp experience that rewards your dedication!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
              <img src="https://img.freepik.com/free-vector/employees-brainstorming-coffee-break-cartoon-illustration_74855-14357.jpg" className="shadow-lg" />
              <h3 className="text-green-500 text-lg font-bold text-center pt-5">Bonding Over Lunch</h3>
              <div className="pt-3 border-b border-gray-300 pb-2" ><p className="font-bold">Bonding Over Lunch:</p> Team Lunches at GrapplTech</div>
              <p>At GrapplTech, we believe in fostering a supportive and collaborative work environment. That's why we provide team lunches during the bootcamp, where grapplers can bond over food and conversation. These team lunches create opportunities for networking, mentorship, and skill-sharing, while also promoting a positive and inclusive workplace culture. Join us for an bootcamp experience that values teamwork and community building!</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-blue font-bold text-center pt-10 text-blue-600 text-5xl">Our Active Client Engagement</h1>
          <p className="text-center p-5 border-b-4 border-gray-500">Welcome to our showcase of ongoing client projects! Explore our dynamic portfolio, where innovation meets dedication. Discover how we collaborate, create, and deliver tailored solutions that drive success. From concept to completion, witness the journey of our diverse range of projects across industries, exemplifying our commitment to excellence and client satisfaction. Dive into our world of ongoing endeavors, each representing our passion for innovation and quality service.</p>
        </div>
        <div className="container flex py-10">
          <div className="w-1/2">
            <h1 className="font-bold text-5xl text-blue-600 pt-10">Remote Outsourcing: Coming Soon at GrapplTech!</h1>
            <p className="py-6">At GrapplTech, we're excited to announce our upcoming Remote Outsourcing service. This new feature will connect businesses with top-tier remote developers from around the globe, ensuring you have the best talent to drive your projects forward. With our streamlined process, you'll gain access to skilled professionals who are ready to tackle your challenges and deliver exceptional results, all while reducing overhead costs and increasing flexibility. Stay tuned for more details on how GrapplTech's Remote Outsourcing can elevate your business to new heights!</p>
            <p>Timer</p>
          </div>
          <div className="w-1/2">
            <img src="https://unicheck.com/blog/wp-content/uploads/2020/06/Preparing-to-Switch-to-Online-Classes-770x508.png" className="shadow-2xl" />
          </div>
        </div>
        <div>
          <div className="pt-28">
            <h1 className="text-center font-bold text-4xl pb-2 text-blue-600">GrapplTech's Trailblazing Path</h1>
            <h3 className="text-center text-yellow-500 text-3xl">Trending and Upcoming Bootcamps for Tomorrow's Innovators</h3>
            <p className="text-center">Unleash your potential with GrapplTech's curated collection of trending and upcoming bootcamps. Elevate your skills, embrace cutting-edge industries, and embark on a transformative career journey that paves the way for future innovation.</p>
          </div>
          <div className="container col-3 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
                <img src="https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg" />
                <h3 className="text-blue-500 font-bold text-lg text-center py-4 pt-3 border-b border-blue-500 pb-2">Data Science Explorer: Unleashing Insights Through Bootcamp</h3>
                <p className="py-8 text-center">Launch Date: Coming Soon<br />

                  Introducing the Most Awaited Bootcamp on Data Science: Unleash Your Potential!</p>
                <p>Are you ready to dive into the exciting world of data science? Get ready, because we are thrilled to announce the launch of the most awaited bootcamp on data science! This is your golden opportunity to gain hands-on experience, unlock valuable insights, and embark on a transformative journey in the realm of data analytics. As businesses increasingly rely on data-driven decision-making, the demand for skilled data scientists is skyrocketing. With our cutting-edge bootcamp program, you'll acquire the essential knowledge and skills to tackle complex data challenges and become a sought-after professional in this rapidly evolving field.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
                <img src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp" />
                <h3 className="text-blue-500 font-bold text-lg text-center py-4 pt-3 border-b border-blue-500 pb-2">MERN Stack Maestro: Embark on an Bootcamp Journey of Full-Stack Web Development</h3>
                <p className="py-8 text-center">Launch Date: Coming Soon

                  Introducing the Most Awaited MERN Stack Bootcamp: Unlock the Power of Full-Stack Web Development!</p>
                <p>Get ready to elevate your web development skills to new heights because the moment you've been waiting for has arrived! We are thrilled to announce the upcoming launch of the most awaited bootcamp on MERN Stack. This is your golden opportunity to immerse yourself in the world of full-stack web development, master cutting-edge technologies, and unlock the potential to create dynamic and interactive web applications.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
                <img src="https://www.freecodecamp.org/news/content/images/2023/09/javacrash.png" />
                <h3 className="text-blue-500 font-bold text-lg text-center py-4 pt-3 border-b border-blue-500 pb-2">Java Mastery: Ignite Your Career with a Core Java Bootcamp</h3>
                <p className="py-8 text-center"> Launch Date: 15-08-2024

                  Launching the Most Awaited Java Bootcamp: Ignite Your Coding Journey!</p>
                <p>Are you ready to dive into the world of Java programming? Brace yourself, because we are excited to announce the upcoming launch of the most awaited bootcamp on Java! This is your chance to immerse yourself in the power of Java, master the fundamentals, and embark on a transformative coding journey that will set the stage for a successful career in software development.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
                <img src="https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960" />
                <h3 className="text-blue-500 font-bold text-lg text-center py-4 pt-3 border-b border-blue-500 pb-2">DevOps Dynamo: Unleash Your Potential with a Core DevOps Bootcamp</h3>
                <p className="py-8 text-center">Launch Date: Coming Soon

                  Introducing the Most Awaited DevOps Bootcamp: Empower Your Journey of Continuous Integration and Delivery!</p>
                <p>Are you ready to revolutionize software development practices and enhance collaboration between development and operations teams? Get ready, because the moment you've been waiting for is almost here! We are thrilled to announce the upcoming launch of the most awaited bootcamp on DevOps. This is your golden opportunity to immerse yourself in the world of DevOps, master cutting-edge tools and methodologies, and pave the way for seamless and efficient software delivery.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
                <img src="https://www.testim.io/wp-content/uploads/2019/11/Automated-Testing.jpg" />
                <h3 className="text-blue-500 font-bold text-lg text-center py-4 pt-3 border-b border-blue-500 pb-2">Testing Trailblazer: Embark on a Core Software Testing Bootcamp Adventure</h3>
                <p className="py-8 text-center"> Launch Date: Coming Soon

                  Introducing the Most Awaited Software Testing Bootcamp: Unleash Your Testing Prowess!</p>
                <p>Are you passionate about ensuring software quality and delivering flawless user experiences? Brace yourself, because the moment you've been eagerly anticipating is just around the corner! We are thrilled to announce the upcoming launch of the most awaited bootcamp on software testing. This is your golden opportunity to immerse yourself in the world of testing, master industry-leading methodologies, and pave the way for a successful career in ensuring software reliability.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg overflow-y-auto h-[75vh] h-96 ">
                <img src="https://gsb.hse.ru/pubs/share/direct/408305373.png" />
                <h3 className="text-blue-500 font-bold text-lg text-center py-4 pt-3 border-b border-blue-500 pb-2">Interview Success Navigator: Empowering You with a Comprehensive Interview Preparation Guide Bootcamp</h3>
                <p className="py-8 text-center">Launch Date: Coming Soon

                  Introducing the Most Awaited Interview Guidance Bootcamp: Unlock Your Potential and Ace Your Next Interview!</p>
                <p>Are you ready to conquer your interview fears, impress recruiters, and land your dream job? Get ready, because the moment you've been waiting for is just around the corner! We are thrilled to announce the upcoming launch of the most awaited bootcamp on interview guidance. This is your golden opportunity to immerse yourself in the world of interview preparation, master essential techniques, and gain the confidence to excel in any interview scenario.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-center pt-28 font-bold text-2xl pb-5">Voices of Success</h2>
            <p className="text-center">At GrapplTech, success stories are not just anecdotes; they're testaments to the transformative power of meaningful bootcamps. Hear directly from students whose careers were launched through our platform. These success stories are just a glimpse of the countless students whose lives have been positively impacted by GrapplTech. Join our community and be the next success story in your career journey!</p>
          </div>
          <div className="text-center bg-white p-4 rounded-lg shadow-lg">
            <div className="p-2 border border-gray-300 rounded-lg">
              <p>Sai Venkata Raja</p>
              <p>Python is a versatile language, and GrapplTech's Python bootcamp was a great learning opportunity for me.</p>
              <p>Rating : 4.5/5</p>
              <p>Location : Hyderabad</p>
            </div>
          </div>
        </div>
        <div>
          <FAQ/>
        </div>
    </main>
    
  );
}
