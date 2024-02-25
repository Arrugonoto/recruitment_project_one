import { useState } from 'react';
import type { FruitTypes } from '../../lib/types/fruits';
import { Header } from './Header';
import { Content } from './Content';

// banany, pomarancze, wisnie, winogrono, truskawki, jagody
const fruitList: FruitTypes[] = [
   {
      id: 1,
      label: 'Jabłka',
      checked: false,
      price: null,
   },
   {
      id: 2,
      label: 'Banany',
      checked: false,
      price: null,
   },
   {
      id: 3,
      label: 'Pomarańcze',
      checked: false,
      price: null,
   },
   {
      id: 4,
      label: 'Wiśnie',
      checked: false,
      price: null,
   },
   {
      id: 5,
      label: 'Winogrono',
      checked: false,
      price: null,
   },
   {
      id: 6,
      label: 'Truskawki',
      checked: false,
      price: null,
   },
   {
      id: 7,
      label: 'Jagody',
      checked: false,
      price: null,
   },
];

type PriceTypes = {
   price: number | null;
   fruitId: number;
};

export const ListContainer = () => {
   const [fruits, setFruits] = useState<FruitTypes[]>(fruitList);
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [checkedFruits, setCheckedFruits] = useState<string[]>([]);
   const [prices, setPrices] = useState<PriceTypes[]>([]);
   const [isHovered, setIsHovered] = useState<boolean>(false);

   const handleMouseEnter = () => {
      setIsHovered(true);
   };
   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      fruitId: number,
      index: number
   ) => {
      const newPrices = [...prices];
      if (e.target.value) {
         newPrices[index] = {
            ...newPrices[index],
            fruitId: fruitId,
            price: parseInt(e.target.value),
         };
      }

      setPrices(newPrices);
   };

   const handleClick = () => {
      const newValues = fruits.map(fruit => {
         const foundPrice = prices.find(el => {
            if (el) return el.fruitId === fruit.id;
         });

         if (foundPrice) {
            return { ...fruit, price: foundPrice.price };
         }
         return fruit;
      });

      setFruits(newValues);
   };

   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            maxWidth: '28rem',
            width: '100%',
         }}
      >
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: '1rem',
               justifyContent: 'center',
               width: '100%',
               boxShadow: ' 0px 0px 0.2rem 0rem rgba(0, 0, 0, 0.1',
               borderRadius: '1rem',
               padding: '1rem 1.5rem 1rem 1.5rem',
               overflow: 'hidden',
            }}
         >
            <Header
               isVisible={isVisible}
               setIsVisible={setIsVisible}
               fruits={fruits}
               setFruits={setFruits}
               checkedFruits={checkedFruits}
               setCheckedFruits={setCheckedFruits}
            />
            <Content
               fruits={fruits}
               setFruits={setFruits}
               checkedFruits={checkedFruits}
               setCheckedFruits={setCheckedFruits}
               isVisible={isVisible}
            />
         </div>
         {checkedFruits.length > 0 && (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  alignItems: 'center',
                  padding: '1rem',
                  gap: '1rem',
               }}
            >
               {fruits.map((fruit, i) => {
                  if (fruit.checked) {
                     return (
                        <fieldset
                           key={fruit.id}
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              width: '100%',
                              border: 'none',
                           }}
                        >
                           <label htmlFor={`input${fruit.label}`}>
                              {fruit.label}
                           </label>
                           <input
                              type="number"
                              id={`input${fruit.label}`}
                              name={`input${fruit.label}`}
                              min="0"
                              placeholder={
                                 fruit.price ? `${fruit.price}` : 'Cena'
                              }
                              style={{
                                 padding: '0.5rem',
                                 borderRadius: '0.5rem',
                                 border: '1px solid #eeeeee',
                              }}
                              onChange={e => handleChange(e, fruit.id, i)}
                           />
                        </fieldset>
                     );
                  }
               })}
               <button
                  style={{
                     alignSelf: 'flex-start',
                     padding: '0.6rem 1.1rem',
                     backgroundColor: `${isHovered ? '#333333' : '#000'}`,
                     color: '#fafafa',
                     border: ' none',
                     borderRadius: '0.5rem',
                     fontFamily: 'Roboto',
                     fontSize: '1rem',
                     fontWeight: '400',
                     cursor: `${
                        prices.length === 0 ? 'not-allowed' : 'pointer'
                     }`,
                     letterSpacing: '0.1px',
                     opacity: `${prices.length === 0 ? '0.5' : '1'}`,
                  }}
                  onClick={() => handleClick()}
                  disabled={prices.length === 0}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
               >
                  Dodaj cenę
               </button>
            </div>
         )}
      </div>
   );
};
