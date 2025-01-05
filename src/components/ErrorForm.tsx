
export default function ErrorForm({children}: {children: React.ReactNode}) {
  return (
    <p className="text-red-600">{ children }</p>
  )
}
