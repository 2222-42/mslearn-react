import './index.css'
import React from 'react';
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList';
import InstructionList from './InstructionList';
// TODO: Import IngredientList


function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potates',
        feedback: {
            rating: 4.8,
            reviews: 20,
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        instructions: [
            { summary: '濃い塩水が入った鍋に、カットしたジャガイモを加えます。' },
            { summary: '鍋を沸騰させます。' },
            { summary: 'フォークを刺せるくらいの柔らかさまでジャガイモを茹でます (約 15-20 分)。' },
            { summary: 'ジャガイモをざるにあけます。' },
            { summary: 'ジャガイモを鍋に戻します。' },
            { summary: 'バター、クリーム、塩、こしょうを加えて好みの味にします。' },
            { summary: 'ジャガイモをマッシュします。' },
            { summary: '必要に応じて味を調え、バターとクリームを追加します。' },
        ]
    }

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            {/* TODO: Add InstructionList component */}
            <InstructionList instructions={recipe.instructions} />
        </article>
    )
}

export default App;
