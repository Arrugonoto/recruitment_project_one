import { ListContainer } from './components/list-container/ListContainer';

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
               padding: '1rem',
            }}
         >
            Punkt 1
         </section>
         <section
            style={{
               display: 'flex',
               width: '100%',
               justifyContent: 'center',
               padding: '1rem',
               marginTop: '5rem',
            }}
         >
            <ListContainer />
         </section>
      </main>
   );
}

export default App;
