import { CourseList } from "@components/index";
import { getAllCourses } from "content/courses/getCourses";
import OrderModal from "@components/ui/order/OrderModal";
import { useModal } from "@components/providers/ModalProvider";
import { useProducts } from "@components/providers/ProductsContext";
import { useWalletInfo } from "@components/hooks/web3";
import Card from "@components/ui/course/Single/Card";
import MarketHeader from "@components/ui/marketplace/MarketHeader";

export default function MarketPlace() {
  const { products: courses, selectProduct } = useProducts();
  const { toggleModalState } = useModal();
  const { allowPurchases } = useWalletInfo();

  const selectProductAndOpenModal = (e, product) => {
    selectProduct(product);
    toggleModalState(e);
  };

  return (
    <div className="fit-page-shell">
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="fit">
            <MarketHeader />
            <CourseList products={courses}>
              {(product) => (
                <Card
                  key={product.id}
                  product={product}
                  disabled={!allowPurchases}
                  actions={() => (
                    <button
                      disabled={!allowPurchases}
                      onClick={(event) =>
                        selectProductAndOpenModal(event, product)
                      }
                      className={`${
                        !allowPurchases
                          ? "bg-blue-200 hover:bg-blue-200"
                          : "bg-blue-400 hover:bg-purple-900"
                      } "transform transition-all p-3  shadow-lg rounded-md text-white font-semibold"`}
                    >
                      Buy This Course
                    </button>
                  )}
                />
              )}
            </CourseList>
            <OrderModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export function getStaticProps(ctx) {
  const { data } = getAllCourses();
  return {
    props: { courses: data },
  };
}
