import { Calculator } from "@/components/calculator"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-semibold text-white mb-8 tracking-tight">
        Calculator
      </h1>
      <Calculator />
      <p className="text-zinc-600 text-sm mt-8">
        Built with React & Tailwind CSS
      </p>
    </main>
  )
}
