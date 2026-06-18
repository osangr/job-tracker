import { LoginForm } from './_components/login-form'

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-zinc-900">Job Tracker</h1>
        <p className="mt-1 text-sm text-zinc-500">Inicia sesión para continuar</p>
      </div>
      <LoginForm />
    </div>
  )
}
