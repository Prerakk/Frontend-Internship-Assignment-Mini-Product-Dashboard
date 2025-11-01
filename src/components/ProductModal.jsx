
export default function ProductModal({ product, onClose }) {
           return (
             <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
               <div className="bg-white p-6 rounded-lg max-w-md">
                 <button className="float-right text-red-500 text-2xl font-bold w-8 h-8" onClick={onClose}>×</button>
                 <img src={product.image} alt={product.title} className="h-48 mx-auto object-contain" />
                 <h2 className="text-xl font-semibold mt-3">{product.title}</h2>
                 <p className="text-gray-600">{product.description}</p>
                 <p className="font-bold mt-2">${product.price}</p>
               </div>
             </div>
           );
         }
         