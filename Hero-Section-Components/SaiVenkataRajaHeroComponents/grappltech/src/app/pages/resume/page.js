function Resume() {
    return (
        <div>
            <div className="p-10">
                <h1 className="font-bold text-center text-4xl p-5 text-blue-600">GrapplTech's Resume Maker</h1>
                <div className=" flex justify-center">
                    <img src="https://cdn.dribbble.com/users/125056/screenshots/1476165/99miles-resume-builder-icon-ios.gif" className="justify-center" wid />
                </div>
            </div>
            <div>
                <h2 className="text-blue-600 text-2xl text-center">Crafting Effortless and ATS-Friendly Resumes</h2>
                <p className="text-lg px-20 text-center">GrapplTech offers a cutting-edge Resume Maker feature on their website, revolutionizing the way individuals create their resumes. Here are three advantages of using this tool:</p>
            </div>
            <div className="container mx-auto pt-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                    <div className="bg-white p-6 ">
                        <h2 className="font-bold text-center text-xl text-blue-500 mb-4">Diverse Template Selection (Coming Soon)</h2>
                        <p className="text-center text-gray-700">Users can access a wide array of professionally designed templates, with more continually being added. These templates cover various industries and design preferences, ensuring there's something for everyone. Even with a constantly expanding library, all templates are ATS-friendly.</p>
                    </div>
                    <div className="bg-white p-6 ">
                        <h2 className="font-bold text-center text-xl text-blue-500 mb-4">Streamlined Editing Process</h2>
                        <p className="text-center text-gray-700">This Resume Maker simplifies the cumbersome process of creating a resume. Users can directly click on their chosen template, update the sections with their information, and customize it according to their needs. Unlike the traditional method of downloading a template, converting it into a Word document, and aligning content (which can be time-consuming and often leads to formatting issues), this tool offers a hassle-free, intuitive editing experience.</p>
                    </div>
                    <div className="bg-white p-6 ">
                        <h2 className="font-bold text-center text-xl text-blue-500 mb-4">Seamless Printing</h2>
                        <p className="text-center text-gray-700">Once the resume is customized, users can seamlessly print their resume. Easily print your resume directly from our interface, ensuring that your document maintains its layout, formatting, and professional appearance. Whether for an interview or physical submission, our printing feature ensures your resume looks exceptional on paper.</p>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h1 class="text-center pt-16 font-bold text-4xl text-green-600">Build Your Resume</h1>
                <div class="flex flex-col lg:flex-row gap-6 mt-10">

                    <div class="w-full lg:w-1/2 bg-black p-6 rounded-lg shadow-lg">
                        <form class="bg-white p-6 rounded-lg shadow-lg bg-black">
                            <div class="mb-4">
                                <label for="firstName" class="block text-gray-700 font-semibold mb-2">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter Your First Name"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div class="mb-4">
                                <label for="lastName" class="block text-gray-700 font-semibold mb-2">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter Your Last Name"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div class="mb-4">
                                <label for="phone" class="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter Your Phone number"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-gray-700 font-semibold mb-2">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email address"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div class="mb-4">
                                <label for="linkedin" class="block text-gray-700 font-semibold mb-2">LinkedIn</label>
                                <input
                                    type="text"
                                    id="linkedin"
                                    name="linkedin"
                                    placeholder="http://example.com"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div class="mb-4">
                                <label for="github" class="block text-gray-700 font-semibold mb-2">GitHub</label>
                                <input
                                    type="text"
                                    id="github"
                                    placeholder="http://example.com"
                                    name="github"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div class="mb-4">
                                <label for="portfolio" class="block text-gray-700 font-semibold mb-2">Portfolio or Website</label>
                                <input
                                    type="text"
                                    id="portfolio"
                                    name="portfolio"
                                    placeholder="http://example.com"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div class="text-center">
                                <button
                                    type="submit"
                                    class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="w-full lg:w-1/2 bg-black p-6 rounded-lg shadow-lg text-center py-20">
                        <h2 class="text-xl font-bold text-white mb-4">SUMMARY</h2>
                        <h2 class="text-xl font-bold text-white mb-4">SKILLS</h2>
                        <h2 class="text-xl font-bold text-white mb-4">EDUCATION</h2>
                        <div class="flex justify-center gap-4 mt-6">
                            <button class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-not-allowed">
                                Create New
                            </button>
                            <button class="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-not-allowed">
                                Print this Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
} export default Resume