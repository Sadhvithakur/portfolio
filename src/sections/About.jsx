import ProfileCard from '../components/profile/ProfileCard';

export default function About() {
    return (
        <section id="about" className="py-20 bg-transparent text-white min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6">
                {/* Large About Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
                        {'ABOUT'.split('').map((char, i) => (
                            <span
                                key={i}
                                className="decrypt-text"
                                style={{ '--delay': `${i * 0.2}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-xl md:text-xl leading-relaxed text-white">
                                Hi, I'm <span className="text-purple-400 font-bold text-2xl">Sadhvi</span>, a{" "}
                                <span className="text-purple-400 font-semibold">
                                    Bangalore-based Web Developer & Python enthusiast
                                </span>{" "}
                                who loves turning ideas into seamless digital experiences.
                            </p>

                            <p className="text-xl md:text-xl leading-relaxed text-gray-300">
                                I enjoy blending logic with creativity — writing clean code, designing
                                intuitive interfaces, and building applications that make an impact.
                            </p>

                            <p className="text-xl md:text-xl leading-relaxed text-gray-300">
                                I'm always curious, always learning, and always excited to explore new
                                technologies. My goal is to grow as a{" "}
                                <span className="text-purple-400 font-semibold">full-stack developer</span>,
                                collaborate with inspiring people, and create solutions that combine
                                innovation with simplicity.
                            </p>
                        </div>

                        <div className="pt-6 space-y-6">
                            {/* Resume Download Button */}
                            <div className="flex items-center">
                                <a
                                    href="/images/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    Download Resume
                                </a>
                            </div>

                            {/* Let's Connect Text */}
                            <p className="text-xl font-medium text-white">
                                🚀{" "}
                                <a
                                    href="#contact"
                                    className="text-purple-400 hover:text-purple-300 hover:underline transition-colors duration-300 font-semibold"
                                >
                                    Let's connect and build something meaningful together!
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Profile Card */}
                    <div className="flex justify-center lg:justify-end px-8">
                        <ProfileCard
                            avatarUrl="/images/photo.jpeg"
                            name="Sadhvi Thakur"
                            title="Web Developer"
                            handle="sadhvithakur"
                            status="Available for Work"
                            contactText="Contact Me"
                            onContactClick={() => {
                                const contactSection = document.querySelector('#contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
