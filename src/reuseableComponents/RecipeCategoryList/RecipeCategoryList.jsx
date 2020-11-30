import React from 'react'
import RecipeItemCard from '../RecipeItemCard/RecipeItemCard';
import styles from './RecipeCategoryList.module.css';
import { Link } from "react-router-dom";

const RecipeCategory = ({ recipes, category }) => {
    return (
        <li className={styles.container}>
            <div className={styles.title}>
                <h3><Link to={{ pathname: `/category/${category}` }}>{category}</Link></h3>
                <p className={styles.viewMore}><Link to={{ pathname: `/category/${category}` }}>View More</Link></p>
            </div>
            <div className={styles.recipes}>
                {recipes.map((recipe, index) => (
                    index <= 3 ? <RecipeItemCard recipe={recipe} /> : null
                ))}
            </div>
        </li>
    )
};

export default RecipeCategory;