import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen '>
      <h1>THE SIMPLE SUM</h1>
      <p className='text-big'>Hello</p>
      <p className='text-normal'>Hello</p>
      <p className='text-small'>Hello</p>

      <div className='p-8 bg-primary text-primary'>
        <p className='bg-primary-high'>Hellnaw</p>
      </div>
    </div>
  );
}
