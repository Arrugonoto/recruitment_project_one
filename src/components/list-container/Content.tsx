import React from 'react';
import { FruitTypes } from '../../lib/types/fruits';

export const Content = ({
   fruits,
   setFruits,
   checkedFruits,
   setCheckedFruits,
   isVisible,
}: {
   fruits: FruitTypes[];
   setFruits: React.Dispatch<React.SetStateAction<FruitTypes[]>>;
   checkedFruits: string[];
   setCheckedFruits: React.Dispatch<React.SetStateAction<string[]>>;
   isVisible: boolean;
}) => {
   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      id: number
   ) => {
      if (e.target.checked) {
         const newValues = fruits.map(fruit => {
            if (fruit.id === id) {
               return { ...fruit, checked: true };
            }
            return fruit;
         });

         setFruits(newValues);
         setCheckedFruits(prev => [...prev, e.target.name]);
      } else if (!e.target.checked) {
         const newValues = fruits.map(fruit => {
            if (fruit.id === id) {
               return { ...fruit, checked: false };
            }
            return fruit;
         });
         const filteredChecks = checkedFruits.filter(
            el => el !== e.target.name
         );

         setFruits(newValues);
         setCheckedFruits([...filteredChecks]);
      }
   };

   return (
      <div style={{ display: 'flex', width: '100%' }}>
         <ul
            style={{
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               padding: '0 1rem 0 1rem',
               overflowY: 'scroll',
               height: isVisible ? '20rem' : '0',
               transition: 'height 0.2s linear',
            }}
         >
            {fruits.map(fruit => (
               <li
                  key={fruit.id}
                  style={{
                     width: '100%',
                     borderBottom: '1px solid #eeeeee',
                     padding: '1rem',
                  }}
               >
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                     <div
                        style={{
                           display: 'flex',
                           gap: '1rem',
                           width: '60%',
                        }}
                     >
                        <input
                           style={{ cursor: 'pointer' }}
                           type="checkbox"
                           id={fruit.label}
                           name={fruit.label}
                           checked={fruit.checked}
                           onChange={e => handleChange(e, fruit.id)}
                        />
                        <label htmlFor={fruit.label}>{fruit.label}</label>
                     </div>
                     {fruit.price && <p>{fruit.price}</p>}
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};
