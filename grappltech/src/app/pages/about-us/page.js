function aboutUs() {
    return (
        <div>
            <div className="p-8">
                <h1 className="text-center font-bold text-4xl text-blue-500">About Us</h1>
                <h2 className="text-center font-bold text-3xl pt-10">Welcome to GrapplTech</h2>
                <div className="flex justify-center">
                    <img src="https://stemettes.org/zine/wp-content/uploads/sites/3/2021/12/custom-erp-software-development.gif" width={600} />
                </div>
            </div>
            <div className="p-10">
                <h2 className="p-5 text-center text-2xl font-bold text-blue-500">Our Story</h2>
                <p className="px-56">At GrapplTech, we're passionate about connecting students and companies. Our journey began with a simple idea: to bridge the gap between aspiring students seeking internships and companies searching for bright talent.<br />

                    Founded in 2022, we've since grown into a trusted platform that has helped thousands of students kickstart their careers and hundreds of companies find their next star employee.<br />

                    Join us in our mission to make the job search process easier, more efficient, and more rewarding for students and employers alike.</p>
            </div>
            <div className="container  p-6">
                <h2 className="text-center text-2xl font-bold mb-6">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Education First</h3>
                        <p>We believe in the power of education and strive to create opportunities for learning and growth.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
                        <p>Our community is our strength. We foster collaboration and inclusivity.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Innovation Hub</h3>
                        <p>We embrace innovation and creativity to continuously improve our platform.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Customer-Centric</h3>
                        <p>Our customers' success is our success. We go the extra mile to meet their needs.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Ownership and Responsibility</h3>
                        <p>We take ownership of our work and hold ourselves accountable for delivering results.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Diversity and Inclusion</h3>
                        <p>We celebrate diversity and promote an inclusive environment where everyone's voice is heard.</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-5 rounded-md text-lg font-medium transition-transform transform hover:scale-105">Join Us Today</button>
                </div>
            </div>

        </div>
    )
} export default aboutUs