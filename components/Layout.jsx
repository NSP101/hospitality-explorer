export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">Hospitality Explorer</h1>
      </header>
      <main className="max-w-7xl mx-auto p-4">{children}</main>
      <footer className="text-center text-xs text-gray-500 mt-8">
        © 2025 Naveenkumar – Hospitality Explorer
      </footer>
    </div>
  );
}
