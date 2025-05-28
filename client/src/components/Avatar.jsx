export default function Avatar({ name }) {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()
    return (
      <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
        {initials}
      </div>
    )
  }
  