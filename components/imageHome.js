import styles from '../styles/ImageHome.module.css'

import Image from 'next/image'

const ImageHome = () => {
    return (
        <div className={styles.container} style={{background:'no-repeat url(/29803392.jpg)', backgroundSize:'cover'}}>
            <span
                className={styles.unProduitGo}
                title="Verrerie"
            >
                <h1 className={styles.panorama_title}>Verrerie</h1>
            </span>
            <span
                className={styles.unProduitGo_panorama}
                title="Verrerie"
            >
                Encore un verre
            </span>
        </div>
    )
}

export default ImageHome
