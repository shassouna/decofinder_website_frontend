import {useState, useRef} from "react"

import styles from '../styles/Nouveautes.module.css'

import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";

const Nouveautes = () => {
    

    const TextsRefs = useRef()
    TextsRefs.current = []

    const [showVignetteText, setShowVignetteText] = useState(false)

    const handleAddToGreenTextsRef = (element) => {
        if(element && !TextsRefs.current.includes(element))
        TextsRefs.current.push(element)
      }

    const handleSetShowVignetteText = (event) => {
        console.log(event.target.parentNode)
        setShowVignetteText(true)
    }
    const handleSetHideVignetteText = () => {
        TextsRefs.current.forEach(tag => {
            tag.style.color="rgb(135, 168, 61)"
        })
        setShowVignetteText(false)  
    }

    return (
        <div className={styles.container}>
            <div className={styles.nouveauteswrapper}>
            <article className={styles.vignette} onMouseOver={handleSetShowVignetteText} onMouseLeave={handleSetHideVignetteText}>
                <div className={styles.vignetteTop}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                    </div>
                    <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                    width={220} height={220} placeholder="none">
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
  
                    <span className={styles.vignetteButtomTitleText2} ref={handleAddToGreenTextsRef}>Tissu d'ameublement</span>
                    <br/>
                    {
                        showVignetteText &&
                        <>
                            <span className={styles.vignetteButtomTitleText2} style={{color:"gray"}}>mongolia zibeline</span>
                            <br/>
                            <span className={styles.vignetteButtomTitleText2}
                            >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                            <br/>
                        </>
                    }
                    <span className={styles.vignetteButtomTitleText3}>350$</span>
                </div>
            </article>
            <article className={styles.vignette} onMouseOver={handleSetShowVignetteText} onMouseLeave={handleSetHideVignetteText}>
                <div className={styles.vignetteTop}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                    </div>
                    <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                    width={220} height={220} placeholder="none">
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
  
                    <span className={styles.vignetteButtomTitleText2} ref={handleAddToGreenTextsRef}>Tissu d'ameublement</span>
                    <br/>
                    {
                        showVignetteText &&
                        <>
                            <span className={styles.vignetteButtomTitleText2}>mongolia zibeline</span>
                            <br/>
                            <span className={styles.vignetteButtomTitleText2}
                            >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                            <br/>
                        </>
                    }
                    <span className={styles.vignetteButtomTitleText3}>350$</span>
                </div>
            </article>
            <article className={styles.vignette} onMouseOver={handleSetShowVignetteText} onMouseLeave={handleSetHideVignetteText}>
                <div className={styles.vignetteTop}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                    </div>
                    <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                    width={220} height={220} placeholder="none">
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
  
                    <span className={styles.vignetteButtomTitleText2} ref={handleAddToGreenTextsRef}>Tissu d'ameublement</span>
                    <br/>
                    {
                        showVignetteText &&
                        <>
                            <span className={styles.vignetteButtomTitleText2}>mongolia zibeline</span>
                            <br/>
                            <span className={styles.vignetteButtomTitleText2}
                            >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                            <br/>
                        </>
                    }
                    <span className={styles.vignetteButtomTitleText3}>350$</span>
                </div>
            </article>
            <article className={styles.vignette} onMouseOver={handleSetShowVignetteText} onMouseLeave={handleSetHideVignetteText}>
                <div className={styles.vignetteTop}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                    </div>
                    <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                    width={220} height={220} placeholder="none">
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
  
                    <span className={styles.vignetteButtomTitleText2} ref={handleAddToGreenTextsRef}>Tissu d'ameublement</span>
                    <br/>
                    {
                        showVignetteText &&
                        <>
                            <span className={styles.vignetteButtomTitleText2}>mongolia zibeline</span>
                            <br/>
                            <span className={styles.vignetteButtomTitleText2}
                            >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                            <br/>
                        </>
                    }
                    <span className={styles.vignetteButtomTitleText3}>350$</span>
                </div>
            </article>
            <article className={styles.vignette} onMouseOver={handleSetShowVignetteText} onMouseLeave={handleSetHideVignetteText}>
                <div className={styles.vignetteTop}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                    </div>
                    <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                    width={220} height={220} placeholder="none">
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
  
                    <span className={styles.vignetteButtomTitleText2} ref={handleAddToGreenTextsRef}>Tissu d'ameublement</span>
                    <br/>
                    {
                        showVignetteText &&
                        <>
                            <span className={styles.vignetteButtomTitleText2}>mongolia zibeline</span>
                            <br/>
                            <span className={styles.vignetteButtomTitleText2}
                            >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                            <br/>
                        </>
                    }
                    <span className={styles.vignetteButtomTitleText3}>350$</span>
                </div>
            </article>
            <article className={styles.vignette} onMouseOver={handleSetShowVignetteText} onMouseLeave={handleSetHideVignetteText}>
                <div className={styles.vignetteTop}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                    </div>
                    <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                    width={220} height={220} placeholder="none">
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
  
                    <span className={styles.vignetteButtomTitleText2} ref={handleAddToGreenTextsRef}>Tissu d'ameublement</span>
                    <br/>
                    {
                        showVignetteText &&
                        <>
                            <span className={styles.vignetteButtomTitleText2}>mongolia zibeline</span>
                            <br/>
                            <span className={styles.vignetteButtomTitleText2}
                            >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                            <br/>
                        </>
                    }
                    <span className={styles.vignetteButtomTitleText3}>350$</span>
                </div>
            </article>
            <article className={styles.vignette} onMouseOver={handleSetShowVignetteText} onMouseLeave={handleSetHideVignetteText}>
                <div className={styles.vignetteTop}>
                    <div className={styles.iconContainer}>
                        <div className={styles.icon}></div>
                    </div>
                    <Image src="https://s6.decofinder.com/0/0/new-home/vig/1456/1456326/Lit-Double-Rond.jpg" 
                    width={220} height={220} placeholder="none">
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
  
                    <span className={styles.vignetteButtomTitleText2} ref={handleAddToGreenTextsRef}>Tissu d'ameublement</span>
                    <br/>
                    {
                        showVignetteText &&
                        <>
                            <span className={styles.vignetteButtomTitleText2}>mongolia zibeline</span>
                            <br/>
                            <span className={styles.vignetteButtomTitleText2}
                            >Les bougies parfumées Loro Piana sont l'expression de l'engagement de la marque en faveur du ...</span>
                            <br/>
                        </>
                    }
                    <span className={styles.vignetteButtomTitleText3}>350$</span>
                </div>
            </article>
            </div>
        </div>
    )
}

export default Nouveautes

