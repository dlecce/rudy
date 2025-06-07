import ImagePopup from "../ImagePopup";

export default function PeloSection() {
    return (
        <section id="pelo">
            <h2>🧼 Pelo</h2>
            <ul>
                <li>Rudy perde molti peli → spazzolarlo se volete.</li>
                <li><b>Spazzole</b> sulla <ImagePopup imageUrl="/rudy/img/spazzole.jpg">mensola della libreria</ImagePopup> in soggiorno:</li>
                <ul>
                    <li>Manico azzurro: per Rudy.</li>
                    <li>Adesiva: per vestiti.</li>
                    <li>Bianca grande: per letto/divano.</li>
                </ul>
                <li><b>Coperte</b> su letto e divano: servono nel caso vomiti (palle di pelo).</li>
            </ul>
        </section>
    );
}
