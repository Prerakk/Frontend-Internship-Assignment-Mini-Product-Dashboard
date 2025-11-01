export default function ProductCard({ product, onClick }) {
           return (
             <div
               className="border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer"
               onClick={onClick}
             >
               <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
               <h3 className="font-semibold text-sm mt-2">{product.title}</h3>
               <p className="text-gray-600 text-sm">${product.price}</p>
             </div>
           );
         }
         