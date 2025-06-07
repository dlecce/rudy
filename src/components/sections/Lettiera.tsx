import ImagePopup from "../ImagePopup";

export default function LettieraSection() {
    return (
        <section id="lettiera">
            <h2>🧻 Lettiera</h2>
            <ul>
                <li><b>Sacchettini</b>: nella <ImagePopup imageUrl="/rudy/img/sacchetti.jpg">scatola sopra al WC</ImagePopup> in bagno soggiorno.</li>
                <li><b>Paletta</b>: sul <ImagePopup imageUrl="/rudy/img/paletta.jpg">davanzale esterno</ImagePopup> (finestra bagno soggiorno).</li>
                <li><b>Sabbietta</b>:</li>
                <ul>
                    <li>Di fianco alla lettiera.</li>
                    <li>Scorta nella <ImagePopup imageUrl="/rudy/img/credenza-sabbietta.jpg">credenza</ImagePopup> vicino a pappa/croccantini.</li>
                </ul>
                <li><b>Pulizia</b>:</li>
                <ul>
                    <li>Cercare possibilmente di pulire ogni giorno.</li>
                    <li>I sacchettini pieni vanno buttati nei <b>bidoncini sul balconcino della camera da letto</b> o comunque nell'<b>indifferenziato</b>.</li>
                    <li>Usare l'<ImagePopup imageUrl="/rudy/img/aspirapolvere.jpg">aspirapolvere portatile</ImagePopup> (a sinistra del frigo, appeso al muro) per pulire la sabbietta sparsa in giro.</li>
                </ul>
            </ul>
        </section>
    );
}
