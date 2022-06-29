import styles from '../styles/Links.module.css'

const Links = () => {
    return (
        <div className={styles.container}>
            <div className={styles.linkswrapper}>
                <div className={styles.linkswrapperItem}>
                    <span className={styles.linkswrapperItemContent}>Toutes les sélections du Jury</span>
                </div>
                <div className={styles.linkswrapperItem}>
                    <span className={styles.linkswrapperItemContent}>Tous les coups de coeur</span>
                </div>
                <div className={styles.linkswrapperItem}>
                    <span className={styles.linkswrapperItemContent}>Tous les achats en ligne</span>
                </div>
                <div className={styles.linkswrapperItem}>
                    <span className={styles.linkswrapperItemContent}>Toutes les promotions</span>
                </div>
            </div>
        </div>

    )
}

export default Links
