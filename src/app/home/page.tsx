import Image from 'next/image';

export default function Home() {
  return (
    <main>
    <div
      className='relative flex h-screen w-full content-between items-center pl-[100px] -z-10'
    >
    
      <Image
        src='/Frontpic.jpg'
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className='relative text-blue-50 text-5xl '>
        <h1>
          Hello, I'm <br /><span className='text-7xl font-bold'>Waqar Aslam</span>
        </h1>
        <h2 className='text-3xl font-medium pt-7'>I am Full Stack Web-Developer</h2>
      </div>
    </div>
    </main>
  );
};
