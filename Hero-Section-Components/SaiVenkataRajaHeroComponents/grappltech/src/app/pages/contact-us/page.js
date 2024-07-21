import Link from "next/link"
function contact () {
    return (
        <div className="flex justify-center">
           
        <div className="w-full lg:w-1/2 p-6 ">
        <h1 className="text-blue-500 font-bold text-5xl p-8 text-center">Contact Us</h1>
            <form className="bg-white p-6 ">
                <div className="mb-4">
                    <label for="firstName" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label for="lastName" class="block text-gray-700 font-semibold mb-2">Email address</label>
                    <input
                        type="text"
                    
                        placeholder="Enter Your Email address"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label for="lastName" class="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                        type="text"
                       
                        placeholder="Enter your Message"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Send Mail</button>
                </div>
                </form>
                <div className="pl-6 text-center">
                    <p>Register for BootCamp ? <Link href="/pages/apply" className="text-blue-500 hover:text-red-500">Click here </Link></p>
                </div>
                </div>
                
                </div>
    )
} export default contact