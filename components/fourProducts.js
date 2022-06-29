import styles from '../styles/FourProducts.module.css'

import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";

const Nouveautes = () => {
    

    return (
        <div className={styles.container}>
            <div className={styles.nouveauteswrapper}>
                <article className={styles.vignette}>
                    <div className={styles.vignetteTop}>
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}></div>
                        </div>
                        <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                        width={350} height={260} placeholder="none">
                        </Image>
                    </div>
                    <div className={styles.vignetteButtom}>
                        <div className={styles.vignetteButtomTitle}>
                        <span className={styles.vignetteButtomTitleText}>ITALY DREAM DESIGN</span>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ fontSize: 25, color: "rgb(10, 10, 10)"}}
                        />
                        </div>
    
                        <span className={styles.vignetteButtomTitleText2}>Tissu d'ameublement</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText2} style={{color:"gray"}}>mongolia zibeline</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText2}
                        >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText3}>350$</span>
                    </div>
                </article>
                <article className={styles.vignette}>
                    <div className={styles.vignetteTop}>
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}></div>
                        </div>
                        <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                        width={350} height={260} placeholder="none">
                        </Image>
                    </div>
                    <div className={styles.vignetteButtom}>
                        <div className={styles.vignetteButtomTitle}>
                        <span className={styles.vignetteButtomTitleText}>ITALY DREAM DESIGN</span>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ fontSize: 25, color: "rgb(10, 10, 10)"}}
                        />
                        </div>
    
                        <span className={styles.vignetteButtomTitleText2}>Tissu d'ameublement</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText2} style={{color:"gray"}}>mongolia zibeline</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText2}
                        >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText3}>350$</span>
                    </div>
                </article>
                <article className={styles.vignette}>
                    <div className={styles.vignetteTop}>
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}></div>
                        </div>
                        <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                        width={350} height={260} placeholder="none">
                        </Image>
                    </div>
                    <div className={styles.vignetteButtom}>
                        <div className={styles.vignetteButtomTitle}>
                        <span className={styles.vignetteButtomTitleText}>ITALY DREAM DESIGN</span>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ fontSize: 25, color: "rgb(10, 10, 10)"}}
                        />
                        </div>
    
                        <span className={styles.vignetteButtomTitleText2}>Tissu d'ameublement</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText2} style={{color:"gray"}}>mongolia zibeline</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText2}
                        >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText3}>350$</span>
                    </div>
                </article>
                <article className={styles.vignette}>
                    <div className={styles.vignetteTop}>
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}></div>
                        </div>
                        <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                        width={350} height={260} placeholder="none">
                        </Image>
                    </div>
                    <div className={styles.vignetteButtom}>
                        <div className={styles.vignetteButtomTitle}>
                        <span className={styles.vignetteButtomTitleText}>ITALY DREAM DESIGN</span>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ fontSize: 25, color: "rgb(10, 10, 10)"}}
                        />
                        </div>
    
                        <span className={styles.vignetteButtomTitleText2}>Tissu d'ameublement</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText2} style={{color:"gray"}}>mongolia zibeline</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText2}
                        >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                        <br/>
                        <span className={styles.vignetteButtomTitleText3}>350$</span>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Nouveautes

