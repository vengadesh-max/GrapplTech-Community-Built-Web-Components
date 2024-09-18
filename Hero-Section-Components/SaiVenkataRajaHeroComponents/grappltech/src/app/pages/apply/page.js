import Link from "next/link"
function apply() {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-4xl bg-white p-6  overflow-y-auto">
                <form className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800 text-center pt-10 border-">Application</h2>
                    <hr className="mb-6 border-t-2 border-gray-300 w-64 mx-auto" />
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-600">Name</label>
                        <input type="text" id="name" name="name" required
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-600">Email Address</label>
                        <input type="email" id="email" name="email" required
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="whatsapp" className="block mb-2 text-sm font-bold text-gray-600">Whatsapp Mobile Number</label>
                        <input id="whatsapp" name="whatsapp" required
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bootcamp" className="block mb-2 text-sm font-bold text-gray-600">Bootcamp Domain Name</label>
                        <select type="text" id="bootcamp" name="bootcamp" required
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none"> 
                            <option value="" disabled selected > Select a domain</option>
                            <option value="web-development">Web Development</option>
                            <option value="java-development">Java Development</option>
                            <option value="python-development">Python Development</option>
                            <option value="d&a-development">Data structures and algorithms </option>
                            <option value="frontend-development">FrontEnd Development</option>
                            <option value="backend-development">BackEnd Development</option>
                            <option value="ruby-development">Ruby Development</option>
                            <option value="devOps">DevOps</option>
                            <option value="c-programming">C Programming</option>
                            <option value="javascript-development">JavaScript Development</option>
                            <option value="c++development">C++ Development</option>
                            <option value="full-stack-development">Full Stack Development</option>
                            <option value="data-analyst">Data Analyst</option>
                            <option value="data-analyst">Data Analyst</option>
                            <option value="data-engineeing">Data engineeing</option>
                            <option value="qa-Development">QA Development</option>
                            <option value="software-testing">Software Testing</option>
                            
                            </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="college" className="block mb-2 text-sm font-bold text-gray-600">College Name</label>
                        <input type="text" id="college" name="college" required
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="referral" className="block mb-2 text-sm font-bold text-gray-600">Referral Id (if you have)</label>
                        <input type="text" id="referral" name="referral" required
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block mb-2 text-sm font-bold text-gray-600">Date</label>
                        <input type="date" id="date" name="date" required
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none" />
                    </div>

                    <div className="flex justify-center">
                            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-5 rounded-md text-lg font-medium transition-transform transform hover:scale-105">
                                Submit
                            </button>
                    </div>
                    <div className="text-center">
                        <p>See All Bootcamps ! <Link href="/pages/browse" className="text-blue-500 hover:text-red-500">Click Here</Link> </p>
                    </div>
                </form>
            </div>
        </div>

    )
} export default apply