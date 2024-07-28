export default function Input({placeholder, value, onChange}: {placeholder: string; value: string; onChange: Function}) {
    return <div>
        <input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
}