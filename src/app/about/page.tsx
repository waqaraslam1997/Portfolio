import Image from "next/image";

export default function About() {
    return (
        <main id="about">
            <div className="flex place-items-center justify-center h-screen px-16 pt-16">
                <div className="bg-gray-800 w-screen max-h-80 flex flex-row place-items-center rounded-xl">
                    <div className="bg-cover bg-center bg-no-repeat h-[450px] w-80 p-10 mx-10 rounded-2xl" style={{ backgroundImage: "url('/about.png')" }}>
                    </div>
                    <div className="h-64 px-8 overflow-y-auto text-justify text-sm text-white rounded-2xl w-[720px]">
                        <h1 className="text-3xl font-bold pb-4">About Me</h1>
                        <div className="absolute opacity-10 bg-cover ml-10 bg-no-repeat h-40 w-40" style={{ backgroundImage: "url('/quote.png')" }}>
                        </div>
                        <p>
                            Hi there! I have 5 years of experience in creating modern and user-friendly websites. <br /><br />

                            I specialize in Web-Development & AI, utilizing the latest technologies such as Python, TypeScript, Tailwind CSS and JavaScript frameworks like Next.js I have a keen eye for design and a strong understanding of UX principles, striving to create intuitive interfaces that provide seamless user experiences. <br /><br />

                            I'm excited about the future of web development and the opportunities it holds. Whether it's building responsive websites, optimizing performance, or crafting intuitive user interfaces, I am dedicated to delivering high-quality solutions that make a positive impact.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}