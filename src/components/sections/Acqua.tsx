import ImagePopup from "../ImagePopup";

export default function AcquaSection() {
    return (
        <section id="acqua">
            <h2>💧 Acqua</h2>
            <ul>
                <li>Fontanella <b>sempre accesa</b>.</li>
                <li>Ricaricarla <b>ogni 2-3 giorni</b> <ImagePopup imageUrl="/img/fontanella.jpg">versando acqua direttamente nella fontana</ImagePopup>.</li>
                <li>Bottiglie d'acqua in <b>frigo</b> → usatele per mantenerla fresca.</li>
                <li>Quando le bottiglie in frigo sono finite ce ne sono altre di scorta <ImagePopup imageUrl="/img/acqua.jpg">nel mobile sotto la TV</ImagePopup>.</li>
            </ul>
        </section>
    );
}
