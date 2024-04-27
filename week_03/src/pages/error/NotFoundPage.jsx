import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi2';

export default function NotFoundPage() {
  return (
    <section className="flex h-96 flex-col items-center justify-center text-center">
      <FaExclamationTriangle className="mb-4 text-4xl text-yellow-400" />
      <h1 className="mb-4 text-6xl font-bold">404 Not Found</h1>
      <p className="my-5 text-xl">This page does not exist</p>

      <div className="mt-4 flex gap-4">
        <Link to="/" className="btn btn-primary flex items-center gap-2">
          <HiHome size={20} />
          <span>Go Home</span>
        </Link>
      </div>
    </section>
  );
}
