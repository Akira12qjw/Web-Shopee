import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center '>
      <h1 className='text-9xl font-extrabold text-gray-500 tracking-widest'>404</h1>
      <div className='bg-orange px-2 text-sm text-white rounded rotate-12 absolute'>Page Not Found</div>
      <button className='mt-5'>
        <Link
          to='/'
          className='relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring'
        >
          <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-orange group-hover:translate-y-0 group-hover:translate-x-0' />
          <span className='relative block px-8 py-3  border border-current'>
            <span>Go Home</span>
          </span>
        </Link>
      </button>
    </main>
  )
}
