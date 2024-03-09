// pages/AddRecipe.tsx

import AddRecipeForm from '../components/AddRecipe';
import Navigation from '../components/Navigation';

const AddRecipePage = () => {
  return (
     <div>
     <Navigation />
     <div className="container mx-auto px-4 py-8">
       <AddRecipeForm />
     </div>
     </div>
  );
};

export default AddRecipePage;
