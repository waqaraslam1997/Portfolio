import Image from "next/image";

export default function About(){
    return (
        <main className="pt-24 px-24" id="about">
                <div className="text-center text-3xl font-bold pb-4">
                    <h1>ABOUT ME</h1>
                </div>
            <div className="grid grid-cols-2 justify-between gap-10">
                <div>
                    <h2 className="text-xl font-black pb-2">I am a Full Stack Web-Developer.</h2>
                    <p className="text-justify text-sm">
                    Hi there! I have 5 years of experience in creating modern and user-friendly websites. <br/><br/>
                    
                    I specialize in front-end development, utilizing the latest technologies such as HTML5, CSS3, and JavaScript frameworks like React and Vue.js. I have a keen eye for design and a strong understanding of UX principles, striving to create intuitive interfaces that provide seamless user experiences. <br/><br/>
                    
                    I'm excited about the future of web development and the opportunities it holds. Whether it's building responsive websites, optimizing performance, or crafting intuitive user interfaces, I am dedicated to delivering high-quality solutions that make a positive impact.<br/><br/>
                    
                    If you're looking for a passionate web developer who can bring your vision to life, I'd love to connect and discuss your project. Feel free to reach out to me through Contact Us Section.<br/><br/>
                    
                    Let's build something amazing together!
                    </p>
                </div>
                <div className="bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('/about.png')`}}>
                </div>
            </div>
        </main>
    )
}