import './countryFlag.css'

export default function CountryFlag( {countryCode}: {countryCode: string} ) {
  return (
    <span className={`countryFlag fi fi-${countryCode.toLowerCase()}`}></span>
  )
}
