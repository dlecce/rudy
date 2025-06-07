import ImagePopup from "../ImagePopup";

export default function AriaCaldoSection() {
    return (
        <section id="aria-caldo">
            <h2>🌬 Aria & Caldo</h2>
            <ul>
                <li>Aprire le <b>finestre dei balconcini</b> per far circolare aria.</li>
                <li>Rudy può salire sul <ImagePopup imageUrl="/rudy/img/rudy-davanzale.jpg">davanzale con i vasi</ImagePopup>, tutto ok.</li>
                <li>Se fa troppo caldo, accendere il <b>condizionatore</b>:</li>
                <ul>
                    <li>Il telecomando di quello in soggiorno è sul mobile della TV.</li>
                    <li>Il telecomando di quello in camera da letto è sulla <ImagePopup imageUrl="/rudy/img/telecomando.jpg">testiera del letto</ImagePopup>.</li>
                    <li>⚠️ <u>Ricordarsi di spegnere i condizionatori quando si esce</u>.</li>
                </ul>
            </ul>
        </section>
    );
}
