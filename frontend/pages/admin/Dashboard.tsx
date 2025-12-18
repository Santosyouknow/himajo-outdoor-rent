import { useEffect, useState } from "react";

type Stats = {
  products: number;
  faqs: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [p, q] = await Promise.all([
          fetch("/api/admin/products", authInit()).then((r) => r.json()),
          fetch("/api/admin/faqs", authInit()).then((r) => r.json()),
        ]);
        setStats({ products: p.length || 0, faqs: q.length || 0 });
      } catch (err) {
        setStats({ products: 0, faqs: 0 });
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="space-y-4">
      <div className="text-2xl font-semibold">Dashboard</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-2">
          <StatCard title="Products" value={stats?.products ?? 0} />
          <StatCard title="FAQ" value={stats?.faqs ?? 0} />
        </div>
      )}
    </div>
  );
}

function authInit(): RequestInit {
  const token = localStorage.getItem("admin_token");
  return { headers: { Authorization: token ? `Bearer ${token}` : "" } };
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
