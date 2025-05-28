import Avatar from '../components/Avatar'

export default function Home() {
  const user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <Avatar name={user.name} />
      <h1 className="text-2xl">Hello World</h1>
    </div>
  )
}
