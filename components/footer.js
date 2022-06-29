import styles from '../styles/Footer.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer_newsletter}>
                <span className={styles.footer_newsletter_titre}>INSCRIVEZ-VOUS à NOTRE NEWSLETTER</span>
                <form
                    className={styles.footer_newsletter_form}
                    id="formFooterNewsletter"
                    action="/index.cfm/abonnementnewsletter"
                    method="post"
                    >
                    <input
                        className={styles.footer_newsletter_mail}
                        id="emailNewsletter"
                        type="email"
                        name="newsletter_email"
                        placeholder="Merci de renseigner votre adresse email"
                        title="Merci de renseigner votre adresse email"
                        required=""
                    />
                    <input className={styles.footer_newsletter_send} type="submit" value="OK" />
                </form>
                <div className={styles.footer_newsletter_rs}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        style={{ fontSize: 25, color: "rgb(10, 10, 10)"}}
                    />
                    <FontAwesomeIcon
                        icon={faHeart}
                        style={{ fontSize: 25, color: "rgb(10, 10, 10)"}}
                    />
                    <FontAwesomeIcon
                        icon={faHeart}
                        style={{ fontSize: 25, color: "rgb(10, 10, 10)"}}
                    />
                    <FontAwesomeIcon
                        icon={faHeart}
                        style={{ fontSize: 25, color: "rgb(10, 10, 10)"}}
                    />
                </div>
            </div>
            <div className={styles.footer_cta}>
                <div className={styles.footer_cta_left}>
                    <span
                        className={styles.btn_unProduitGo}
                        title="RÉFÉRENCEZ VOS PRODUITS"
                    >
                        RÉFÉRENCEZ VOS PRODUITS | ACCÈS DECOPRO
                    </span>
                </div>
                <div className={styles.footer_cta_right}>
                    <span
                        className={styles.btn_unProduitGo}
                        title="ENREGISTREZ VOTRE ENTREPRISE"
                    >
                        ENREGISTREZ VOTRE ENTREPRISE
                    </span>
                </div>
            </div>
            <div className={styles.footer_menu}>
                <div className={styles.footer_menu_un_bloc}>
                <span className={styles.footer_menu_titre}>A propos</span>

                <div className={styles.footer_menu_line}></div>

                <ul className={styles.footer_menu_liste}>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/presentation" title="A propos">
                        A propos
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/qui_sommes_nous" title="L'équipe">
                        L'équipe
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/audience" title="Audience et Visitorat">
                        Audience et Visitorat
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/revuedepresse" title="Revue de presse">
                        Revue de presse
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/opinionway" title="Sondage Opinion Way">
                        Sondage Opinion Way
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/contacts" title="Contact">
                        Contact
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/recrutement" title="Recrutement">
                        Recrutement
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/mentions_legales" title="Mentions légales">
                        Mentions légales
                    </a>
                    </li>
                </ul>
                </div>
                <div className={styles.footer_menu_un_bloc}>
                <span className={styles.footer_menu_titre}>A propos</span>

                <div className={styles.footer_menu_line}></div>
                <ul className={styles.footer_menu_liste}>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/presentation" title="A propos">
                        A propos
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/qui_sommes_nous" title="L'équipe">
                        L'équipe
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/audience" title="Audience et Visitorat">
                        Audience et Visitorat
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/revuedepresse" title="Revue de presse">
                        Revue de presse
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/opinionway" title="Sondage Opinion Way">
                        Sondage Opinion Way
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/contacts" title="Contact">
                        Contact
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/recrutement" title="Recrutement">
                        Recrutement
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/mentions_legales" title="Mentions légales">
                        Mentions légales
                    </a>
                    </li>
                </ul>
                </div>
                <div className={styles.footer_menu_un_bloc}>
                <span className={styles.footer_menu_titre}>A propos</span>

                <div className={styles.footer_menu_line}></div>
                <ul className={styles.footer_menu_liste}>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/presentation" title="A propos">
                        A propos
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/qui_sommes_nous" title="L'équipe">
                        L'équipe
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/audience" title="Audience et Visitorat">
                        Audience et Visitorat
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/revuedepresse" title="Revue de presse">
                        Revue de presse
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/opinionway" title="Sondage Opinion Way">
                        Sondage Opinion Way
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/contacts" title="Contact">
                        Contact
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/recrutement" title="Recrutement">
                        Recrutement
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/mentions_legales" title="Mentions légales">
                        Mentions légales
                    </a>
                    </li>
                </ul>
                </div>
                <div className={styles.footer_menu_un_bloc}>
                <span className={styles.footer_menu_titre}>A propos</span>

                <div className={styles.footer_menu_line}></div>
                <ul className={styles.footer_menu_liste}>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/presentation" title="A propos">
                        A propos
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/qui_sommes_nous" title="L'équipe">
                        L'équipe
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/audience" title="Audience et Visitorat">
                        Audience et Visitorat
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/revuedepresse" title="Revue de presse">
                        Revue de presse
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/opinionway" title="Sondage Opinion Way">
                        Sondage Opinion Way
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/contacts" title="Contact">
                        Contact
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/recrutement" title="Recrutement">
                        Recrutement
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/mentions_legales" title="Mentions légales">
                        Mentions légales
                    </a>
                    </li>
                </ul>
                </div>
                <div className={styles.footer_menu_un_bloc}>
                <span className={styles.footer_menu_titre}>A propos</span>

                <div className={styles.footer_menu_line}></div>
                <ul className={styles.footer_menu_liste}>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/presentation" title="A propos">
                        A propos
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/qui_sommes_nous" title="L'équipe">
                        L'équipe
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/audience" title="Audience et Visitorat">
                        Audience et Visitorat
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/revuedepresse" title="Revue de presse">
                        Revue de presse
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/opinionway" title="Sondage Opinion Way">
                        Sondage Opinion Way
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/contacts" title="Contact">
                        Contact
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/recrutement" title="Recrutement">
                        Recrutement
                    </a>
                    </li>
                    <li>

                    <a className={styles.li} href="/index.cfm/statique/mentions_legales" title="Mentions légales">
                        Mentions légales
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer