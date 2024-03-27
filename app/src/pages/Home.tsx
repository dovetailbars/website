import { Navigate, Routes, Route, Link } from "react-router-dom";

export default function Home() {
    return (<>
        <section>
            <h2>BESPOKE PRIVACY</h2>
            <p>
                Nestled discretely away above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs.
                A joint venture with RedFarm, in a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment.
                The ultimate hideaway from London’s busy streets, the West End’s best kept secret.
            </p>
        </section>

        <section>
            <h2>THE PERFECT SPACE FOR YOUR<br/>PRIVATE HIRE</h2>
            <p>
                Nestled discretely away above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs.
                A joint venture with RedFarm, in a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment.
                The ultimate hideaway from London’s busy streets, the West End’s best kept secret.
            </p>
            <Link to="/private-hire">See the space</Link>
        </section>
    </>);
}
