import { ListContainer } from './components/list-container/ListContainer';
import { FoodForm } from './components/forms/food-form/FoodForm';

function App() {
   return (
      <main
         style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
         <section
            style={{
               display: 'flex',
               width: '100%',
               justifyContent: 'center',
               padding: '4rem 1rem 0 1rem',
            }}
         >
            <FoodForm />
         </section>
         <section
            style={{
               display: 'flex',
               width: '100%',
               justifyContent: 'center',
               padding: '1rem',
               marginTop: '1rem',
            }}
         >
            <ListContainer />
         </section>
      </main>
   );
}

export default App;
