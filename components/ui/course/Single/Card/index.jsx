import Link from "next/link";
import Image from "next/image";

export default function Card({ product, disabled, actions }) {
  return (
    <Link href={`/products/${product.id}`} key={product.id} passHref>
      <div className="flex items-center cursor-pointer group p-4 transform transition-all bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 hover:-translate-y-1 hover:shadow-lg hover:text-white hover:bg-blue-600">
        <div className="relative w-full h-full rounded-md border-2 border-gray-300">
          <Image
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className={`${disabled && "filter grayscale"}`}
            src={product.coverImage}
          />
        </div>
        <div id="body" className="flex flex-col ml-5">
          <h4 id="name" className="text-xl font-semibold mb-2">
            {product.title}
          </h4>
          <p id="job" className="text-gray-800 group-hover:text-white  mt-2">
            {product.description}
          </p>
          <div className="flex flex-row mt-5 justify-between w-full">
            <div className="relative flex items-center">
              <Image
                alt="avatar"
                width="23"
                height="23"
                className="rounded-full border-2 border-gray-300"
                src="https://picsum.photos/seed/picsum/200"
              />
              <p className="ml-3">{product.author}</p>
            </div>
            {actions && actions()}
          </div>
        </div>
      </div>
    </Link>
  );
}
