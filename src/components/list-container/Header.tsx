import React, { useState, useEffect } from 'react';
import { arrowIcons } from '../../lib/constants/icons';
import { FruitTypes } from '../../lib/types/fruits';

export const Header = ({
   isVisible,
   setIsVisible,
   fruits,
   setFruits,
   checkedFruits,
   setCheckedFruits,
}: {
   isVisible: boolean;
   setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
   fruits: FruitTypes[];
   setFruits: React.Dispatch<React.SetStateAction<FruitTypes[]>>;
   checkedFruits: string[];
   setCheckedFruits: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
   const [isChecked, setIsChecked] = useState<boolean>(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(prev => !prev);
      if (e.target.checked) {
         const newValues = fruits.map(fruit => {
            return { ...fruit, checked: true };
         });

         const filteredChecks = fruits.map(fruit => {
            if (!checkedFruits.includes(fruit.label)) {
               return fruit.label;
            }
         });

         setFruits(newValues);
         if (filteredChecks.length > 0) {
            setCheckedFruits(filteredChecks);
         }
      } else if (!e.target.checked) {
         const newValues = fruits.map(fruit => {
            return { ...fruit, checked: false };
         });

         setFruits(newValues);
         setCheckedFruits([]);
      }
   };

   useEffect(() => {
      if (checkedFruits.length === 0) {
         setIsChecked(false);
      }
   }, [checkedFruits]);

   return (
      <div
         style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            borderBottom: '2px solid #eeeeee',
            padding: '0.2rem',
         }}
      >
         <input
            style={{ cursor: 'pointer' }}
            type="checkbox"
            id="fruits"
            name="fruits"
            checked={isChecked}
            onChange={handleChange}
         />
         <p>Owoce</p>
         <button
            style={{
               backgroundColor: 'transparent',
               border: 'none',
               cursor: 'pointer',
               padding: '0',
            }}
            onClick={() => setIsVisible(prev => !prev)}
         >
            <arrowIcons.arrowBottom
               style={{
                  fontSize: '1rem',
                  transform: `rotateX(${isVisible ? '180deg' : '0deg'})`,
                  transition: 'all 0.2s linear',
               }}
            />
         </button>
      </div>
   );
};
