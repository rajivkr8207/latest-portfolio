import { Link } from "react-router-dom"


const Error = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-4xl font-semibold text-white md:text-5xl">404 Page Not Found</h1>
      <Link
        to="/"
        className="px-5 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Go back to Home
      </Link>
    </div>
    </>
  )
}

export default Error
