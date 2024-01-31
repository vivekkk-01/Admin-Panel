import Sidebar from "@/components/Sidebar";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main className="flex w-screen h-screen">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
