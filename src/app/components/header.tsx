export default function Header() {
    return (<div className="bg-black">
        <header>
            <ul className="flex space-x-4 p-4 text-white">
                <li><a href="/home">Herois</a></li>
                <li><a href="/países">Países</a></li>
                <li><a href="/powers">Powers</a></li>
            </ul>
        </header>
    </div>);
}