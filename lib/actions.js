'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function issInvalidText(text ) {
    return !text || text.trim() === '';
}

export async function shareMeal(prevState,formData) {
    
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };
    if(issInvalidText(meal.title) || issInvalidText(meal.summary) || issInvalidText(meal.instructions) || issInvalidText(meal.creator) || issInvalidText(meal.creator_email) || !meal.creator_email.includes('@') || !meal.image || meal.image.size === 0) {
        // throw new Error('Invalid input');
        return {message: 'Please fill in all fields'};
        // return alert('Please fill in all fields');
    }
    await saveMeal(meal);
    revalidatePath('/meals','layout');
    redirect('/meals');

}