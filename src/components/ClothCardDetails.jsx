import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const ClothCardDetails = ({ isOpen, closeModal, name, img, price, desc }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full grid mx-auto max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-3xl capitalize font-bold leading-6 text-gray-900"
                >
                  {name}
                </Dialog.Title>
                <div className="mt-4 align-middle flex items-center justify-center">
                  <img src={img} alt={name} className="w-44 h- object-cover" />
                  <div className="grid gap-4 text-2xl font-bold">
                    <p className="text-sm text-gray-500">{desc}</p>
                    <p className="text-4xl">${price}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ClothCardDetails;
