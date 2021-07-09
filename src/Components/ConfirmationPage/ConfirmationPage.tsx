import React, { Fragment, ReactElement } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";
import Button from "./Button";

interface Props {
  title?: string;
  children?: ReactElement;
  buttonText1: string;
  buttonText2: string;
  open?: boolean;
  onClose: (open: boolean) => void;
}

const ConfirmationPage: React.FC<Props> = ({
  title,
  children,
  buttonText1,
  buttonText2,
  open,
  onClose: onOpen,
}) => {
  const closing = () => onOpen(false);
  const opening = () => onOpen(true);
  return (
    <>
      <div className="fixed inset-x-0 flex items-center justify-center top-16">
        <button
          onClick={opening}
          className="px-4 py-2 text-lg font-medium bg-green-300 rounded-lg focus:outline-none hover:bg-green-400"
        >
          Click To Earn 10 Bitcoins
        </button>
      </div>

      <Transition.Root appear show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0" onClose={closing}>
          <div className="px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-in duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-out duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-400" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition-trasform duration-300"
              enterFrom="-translate-y-full opacity-10"
              enterTo="translate-y-0 opacity-100"
              leave="transition-trasform duration-300"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="-translate-y-36 opacity-0"
            >
              <div className="z-20 h-80">
                <div className="inline-block max-w-md p-8 my-8 text-center align-middle transition-all transform bg-white rounded-lg shadow-lg">
                  <XIcon
                    className="absolute right-0 h-5 mr-3 font-bold cursor-pointer"
                    onClick={closing}
                  />
                  <ExclamationIcon className="mx-auto text-yellow-400 h-28" />
                  <Dialog.Title
                    as="h3"
                    className="mt-8 text-3xl font-semibold leading-6 tracking-wider text-gray-600"
                  >
                    {title}
                  </Dialog.Title>
                  {children && (
                    <Dialog.Description>
                      <div className="mt-5">
                        <p className="text-sm text-gray-400">{children}</p>
                      </div>
                    </Dialog.Description>
                  )}

                  <div className="mt-10 text-center">
                    <Button
                      buttonText={buttonText1}
                      clickFunction={closing}
                      className="text-white bg-gray-500 hover:bg-gray-600"
                    />
                    <Button
                      buttonText={buttonText2}
                      clickFunction={closing}
                      className="ml-5 text-white bg-red-500 hover:bg-red-600"
                    />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
  // return (
  //   <div className="text-gray-300 ">
  //     <div className="fixed inset-0 flex items-center justify-center">
  //       <button
  //         onClick={openDialog}
  //         className="text-xl italic font-bold text-gray-900 focus:outline-none hover:underline"
  //       >
  //         Click To Earn 10 Bitcoins
  //       </button>
  //     </div>
  //     <Transition.Root appear show={isDialogOpen} as={Fragment}>
  //       <Dialog
  //         className="fixed inset-0 z-10 overflow-y-auto"
  //         as="div"
  //         onClose={closeDialog}
  //       >
  //         <div className="min-h-screen px-4 text-center">
  //           <Transition.Child
  //             as={Fragment}
  //             enter="ease-out duration-300"
  //             enterFrom="opacity-0"
  //             enterTo="opacity-100"
  //             leave="ease-in duration-200"
  //             leaveFrom="opacity-100"
  //             leaveTo="opacity-0"
  //           >
  //             <Dialog.Overlay className="fixed inset-0" />
  //           </Transition.Child>

  //           <Transition.Child
  //             as={Fragment}
  //             enter="ease-out duration-300"
  //             enterFrom="opacity-0 scale-95"
  //             enterTo="opacity-100 scale-100"
  //             leave="ease-in duration-200"
  //             leaveFrom="opacity-100 scale-100"
  //             leaveTo="opacity-0 scale-95"
  //           >
  //             <div className="align-middle bg-red-300 rounded-2xl">
  //               {/* <XIcon className="h-4" /> */}
  //               <div>
  //                 {/* <ExclamationIcon className="mx-auto h-14" /> */}
  //                 <Dialog.Title as="h3">{title}</Dialog.Title>
  //                 <Dialog.Description as="div">{children}</Dialog.Description>
  //               </div>

  //               <div>
  //                 <button type="button" onClick={closeDialog}>
  //                   {buttonText1}
  //                 </button>
  //                 <button type="button" onClick={closeDialog}>
  //                   {buttonText2}
  //                 </button>
  //               </div>
  //             </div>
  //           </Transition.Child>
  //         </div>
  //       </Dialog>
  //     </Transition.Root>
  //   </div>
  // );
};

ConfirmationPage.defaultProps = {
  title: "Are you sure?",
  buttonText1: "Delete",
  buttonText2: "Cancel",
  open: true,
};

export default React.memo(ConfirmationPage);
