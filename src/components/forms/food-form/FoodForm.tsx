import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const FormSchema = yup
   .object({
      selectedValue: yup.string().required(),
   })
   .required();

type FormData = {
   selectedValue: string;
};

export const FoodForm = () => {
   const [isHovered, setIsHovered] = useState<boolean>(false);
   // const [submittedData, setSubmittedData] = useState<string | null>(null);
   const {
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm({ resolver: yupResolver(FormSchema) });

   const onSubmit = (data: FormData) => {
      console.log(data);
      // if (Object.keys(errors).length === 0) {
      //    setSubmittedData(data.selectedValue);
      // } else {
      //    setSubmittedData(null);
      // }
   };

   const handleMouseEnter = () => {
      setIsHovered(true);
   };
   const handleMouseLeave = () => {
      setIsHovered(false);
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
            boxShadow: ' 0px 0px 0.2rem 0rem rgba(0, 0, 0, 0.1',
            borderRadius: '1rem',
            padding: '1rem 1.5rem 1rem 1.5rem',
         }}
      >
         <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: '0.5rem',
               width: '100%',
            }}
         >
            <div
               style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  gap: '1rem',
               }}
            >
               <fieldset style={{ border: 'none', position: 'relative' }}>
                  <label
                     htmlFor="select-food"
                     style={{ position: 'absolute', display: 'none' }}
                  >
                     Wybierz wartość
                  </label>

                  <select
                     name="food"
                     id="select-food"
                     style={{
                        width: '10rem',
                        minWidth: '7rem',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        border: '1px solid #dfdfdf',
                        backgroundColor: 'transparent',
                        borderRadius: '0.3rem',
                        fontSize: '1rem',
                        fontWeight: 500,
                     }}
                     onChange={e => {
                        setValue('selectedValue', e.target.value);
                     }}
                  >
                     <option value="">Wybierz</option>
                     <option value="vegetables">Warzywa</option>
                     <option value="fruits">Owoce</option>
                  </select>
               </fieldset>
               <div
                  style={{
                     height: '1.6rem',
                     padding: '0.1rem',
                     fontWeight: '500',
                  }}
               >
                  {errors.selectedValue?.message && (
                     <p style={{ color: 'rgb(219, 0, 0)' }}>Wybierz wartość</p>
                  )}
                  {/* {submittedData && (
                     <p style={{ color: 'rgb(0, 211, 0)' }}>
                        Pomyślnie wysłano
                     </p>
                  )} */}
               </div>
            </div>

            <button
               type="submit"
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
                  cursor: 'pointer',
                  letterSpacing: '0.2px',
                  transition: 'background-color 0.2s ease',
               }}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
            >
               Wyślij
            </button>
         </form>
      </div>
   );
};
