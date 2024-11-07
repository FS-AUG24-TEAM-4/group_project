// import { useState } from 'react';
// import styles from './styles.module.scss';
// import { products } from './obj';

// export const ModalWindow = () => {
//   const quantity = 2;
//   const [cartItems, setCartItems] = useState(products);
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const totalAmount = 2232;

//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem('cartItems');
//   };

//   const handleConfirm = () => {
//     clearCart();
//     setIsModalOpen(false);
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <>
//       {isModalOpen && (
//         <div className={styles.modal}>
//           <div className={styles.modal__content}>
//             <h2 className={styles.modal__title}>{'checkoutConfirm'}</h2>
//             <div className={styles.modal__tableContainer}>
//               <table className={styles.modal__table}>
//                 <thead>
//                   <tr>
//                     <th>{'product'}</th>
//                     <th>{'quantity'}</th>
//                     <th>{'price'}</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartItems.map(cartItem => (
//                     <tr key={cartItem.id.toString()}>
//                       <td>{cartItem.name}</td>
//                       <td>{quantity}</td>
//                       <td>
//                         $
//                         {cartItem.priceDiscount
//                           ? (cartItem.priceDiscount * quantity).toFixed(2)
//                           : 0}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className={styles.modal__total}>
//               <span>{'totalPrice'}:</span>
//               <span>${totalAmount.toFixed(2)}</span>
//             </div>
//             <div className={styles.modal__actions}>
//               <button className={styles.confirm} onClick={handleConfirm}>
//                 {'confirm'}
//               </button>

//               <button className={styles.cancel} onClick={toggleModal}>
//                 {'cancel'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
