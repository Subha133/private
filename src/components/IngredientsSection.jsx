import styles from './IngredientsSection.module.css';
import ingredientsImg from '../assets/ingredients.jpeg'; // We'll assume the user saves the image here

export default function IngredientsSection() {
    return (
        <section className={styles.section} id="ingredients">
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img
                        src={ingredientsImg}
                        alt="Private Knight Ingredients"
                        className={styles.ingredientImage}
                    />
                </div>
            </div>
        </section>
    );
}
