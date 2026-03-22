export default function StatCard({ label, value, unit = "" }: { label: string; value: string | number; unit?: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate/5 p-6 text-center">
      <p className="text-3xl font-bold text-indigo mb-1">{value}{unit}</p>
      <p className="text-sm text-slate-light">{label}</p>
    </div>
  );
}
