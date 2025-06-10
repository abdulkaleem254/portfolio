'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import logo from "../assets/logo.png"

// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function ModalOverlay({ ...props }) {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        props.onClose();
    }

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white pt-5 pb-4 sm:p-6 sm:pb-4  md:h-[100%]">
                            <div className="sm:flex sm:items-start">
                                {/* <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                                </div> */}
                                <div className="mt-3 text-center sm:mt-0 sm:ml sm:text-left sm:h-[300px] md:h-[400px] ">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        {props.title}
                                    </DialogTitle>
                                    <div className="mt-2">
                                        {/* <p className="text-sm text-gray-500">
                                            Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                            This action cannot be undone.
                                        </p> */}
                                        <img src={props.image} alt={props.title} className='h-[100%]'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                            <button
                                type="button"
                                data-autofocus
                                onClick={handleClose}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Close
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
