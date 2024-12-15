import { CompaniesGrid } from "../../components/companies-grid";

export function Home() {
  return (
    <main className="container p-4">
      <h1 className="text-gray-800 mb-4">Industry Catalog</h1>
      <CompaniesGrid />
    </main>
  );
}