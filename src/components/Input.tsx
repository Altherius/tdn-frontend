export default function Input({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (value: string) => void }) {
  return <input className="input" type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />;
}
