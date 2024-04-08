import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Home() {
  const {user} = useAuth()
  return (
    <div className='border-2'>
      {/* <div>
        <img src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div> */}
      <div className="hero min-h-[calc(100vh-150px)]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            <p className="mb-5 ">
              We Provide Service For you Money Management
            </p>
            {
              user ? <Link to={"/dashboard"} className="btn btn-success text-white">Get Started</Link> :
              <Link to={"/login"} className="btn btn-success text-white">Get Started</Link>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
