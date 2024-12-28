import Link from 'next/link';

function Patner() {
    return (
        <div className="px-52">
            <h1 className="text-4xl p-10 font-bold text-blue-600 text-center">GrapplTech Partner Program</h1>
            <div className="flex justify-center">
                <img src="https://cdn.dribbble.com/users/1195555/screenshots/10739184/media/b1c7ee2733e393410a589bb6604ec711.gif" width={600} />
            </div>
            <div>
                <h1 className="text-center font-bold py-5 text-2xl text-blue-600">Why Join as a Partner at GrapplTech?</h1>
                <p className="text-center">Becoming a GrapplTech Partner means joining a community of passionate educators, tech enthusiasts, and entrepreneurs who are committed to empowering learners worldwide. Our mission is to provide top-notch, accessible tech education, and we need your help to reach even more aspiring programmers, designers, and developers. As a GrapplTech Partner, you will have the opportunity to promote our high-quality bootcamps and courses, helping students achieve their goals while earning commissions for each successful referral. Our bootcamps cover in-demand skills such as C++, UI/UX design, software development, and more, ensuring that you are offering valuable and relevant content to your audience.</p>
            </div>
            <div className="pt-8">
                <h1 className="text-blue-600 font-bold py-5 text-center text-2xl ">Benefits of Being a GrapplTech Partner</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-48">
                    <div>
                        <h2 className="font-semibold text-xl">Lucrative Commission Structure</h2>
                        <p>Earn competitive commissions for each student you refer who enrolls in our bootcamps. The more students you bring in, the higher your earnings.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl">High-Quality Live Bootcamps And Courses</h2>
                        <p>Promote courses that are meticulously designed by industry experts and cater to a wide range of tech enthusiasts, from beginners to advanced learners.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl">Extensive Marketing Support</h2>
                        <p>Access a wealth of marketing materials, including banners, social media content, and promotional videos, to help you effectively market our bootcamps.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl">Dedicated Partner Portal</h2>
                        <p>Use our intuitive partner portal to track your referrals, monitor your earnings, and access exclusive resources designed to help you succeed.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl">Exclusive Partner Discounts And Goodies</h2>
                        <p>Receive discounts on our courses and bootcamps for your personal growth and development. We even provide goodies for partners.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl">Community and Networking Opportunities</h2>
                        <p>Join a vibrant community of like-minded partners, share insights, and collaborate on initiatives to drive success.</p>
                    </div>
                </div>
                <p className="text-center p-10">Partnering with GrapplTech is not just about earning commissions; it’s about making a difference in the tech education landscape. If you are passionate about education and want to help others while growing your own business, the GrapplTech Partner Program is the perfect opportunity for you.</p>
            </div>

            <div className="flex justify-center">
                <div className="w-full lg:w-1/2 p-6 rounded-lg shadow-lg">
                    <form className="bg-white p-6 rounded-lg shadow-lg bg-black">
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Full Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Email address</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter Your Email address"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Why do you want to be a partner for GrapplTech?</label>
                            <textarea
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Enter your Message"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Apply Now</button>
                        </div>
                    </form>
                </div>
            </div>
            <p className="text-center p-8">Register for an Internship? <Link href="/pages/apply" className='text-blue-500 hover:text-red-500'>Click here</Link></p>
        </div>
    );
}

export default Patner;
