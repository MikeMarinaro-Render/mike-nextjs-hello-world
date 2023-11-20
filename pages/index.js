import Link from 'next/link'
const Index = () => (
  <div>
    Mike's Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
