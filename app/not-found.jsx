import Link from 'next/link'
import { Button } from '@/components/ui/button'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-8xl font-bold gradient-title mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/">
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Return Home
        </Button>
      </Link>
    </div>
  )
}