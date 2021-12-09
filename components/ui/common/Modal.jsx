import {motion} from 'framer-motion'
import {useModal} from "@components/providers/ModalProvider";

const Modal = ({children}) => {
  const {isModalOpen} = useModal()
  return isModalOpen && (
      <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.15, duration: 0.2}}}>
        <div
            className='fixed z-10 inset-0 overflow-y-auto'
            aria-labelledby='modal-title'
            role='dialog'
            aria-modal='true'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ariaHidden="true"></div>
            <span
                className='hidden sm:inline-block sm:align-middle sm:h-screen'
                aria-hidden='true'>
            &#8203;
          </span>
            {children}
          </div>
        </div>
      </motion.section>
  );
};

export default Modal;
