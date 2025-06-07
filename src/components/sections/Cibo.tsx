import ImagePopup from "../ImagePopup";

export default function CiboSection() {
    return (
        <section id="cibo">
            <h2>🥣 Cibo</h2>
            <ul>
                <li>
                    <b>Croccantini e pappa umida</b>: nella <ImagePopup imageUrl="/img/credenza.jpg">credenza in soggiorno</ImagePopup> (porta scorrevole in basso a destra).
                </li>
                <li>
                    <b>Croccantini</b>: ci pensa il distributore automatico.
                    <br />
                    Se sono finiti:
                    <ul>
                        <li>Potete ricaricarli con quelli nella credenza.</li>
                        <li>Per ricaricare il distributore <ImagePopup imageUrl="/img/distributore.jpg">aprire il coperchio</ImagePopup> nella parte superiore.</li>
                    </ul>
                </li>
                <li>
                    <b>Pappa umida</b>:
                    <ul>
                        <li>Rudy ne mangia <b>1 bustina al giorno</b>, ma <b>mettere solo metà per volta</b>.</li>
                        <li>La busta avanzata a metà io di solito la chiudo con una molletta e la metto nella <ImagePopup imageUrl="/img/scatolina.jpg">scatolina sopra al frigorifero</ImagePopup>.</li>
                        <li>A volte, soprattutto quando fa caldo, <b>potrebbe non mangiarla subito</b> o <b>non mangiarla affatto</b>: è normale.</li>
                        <li>Se la pappa rimane nella ciotola per più di un giorno, <b>buttarla via</b>.</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}
