import { Fragment, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutDuration = 120;

  const triggerRef = useRef();
  const timeOutRef = useRef();

  const handleEnter = (isOpen) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  return (
    <header>
      <nav
        className="container mx-auto flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="hover:rotate-6 transition-all" onClick={() => toggleMenu(false)}>
            <Image src="/logo.svg" alt="Logo" width={75} height={75} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-4">
          <Link
            href="#"
            className="font-semibold leading-6 text-royal-yellow p-4"
          >
            Hem
          </Link>

          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter(open)}
                onMouseLeave={() => handleLeave(open)}
              >
                <Popover.Button className="flex items-center gap-x-1 transition-all font-semibold leading-6 text-royal-yellow hover:text-black hover:bg-royal-yellow p-4 rounded-md">
                  Festivalen
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-royal-yellow"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-0 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-md bg-white shadow-md">
                    <div className="p-2">
                      <div className="flex-auto">
                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Om Festivalen
                        </Link>

                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Schema
                        </Link>

                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Karta
                        </Link>

                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Mat på området
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter(open)}
                onMouseLeave={() => handleLeave(open)}
              >
                <Popover.Button className="flex items-center gap-x-1 font-semibold leading-6 text-royal-yellow hover:text-black hover:bg-royal-yellow p-4 rounded-md">
                  Balkester
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-royal-yellow"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-0 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-md bg-white shadow-md">
                    <div className="p-2">
                      <div className="flex-auto">
                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Information
                        </Link>

                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Balkestrar som kommer
                        </Link>

                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Anmälan
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter(open)}
                onMouseLeave={() => handleLeave(open)}
              >
                <Popover.Button className="flex items-center gap-x-1 font-semibold leading-6 text-royal-yellow hover:text-black hover:bg-royal-yellow p-4 rounded-md">
                  Kårtege
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-royal-yellow"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-0 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-md bg-white shadow-md">
                    <div className="p-2">
                      <div className="flex-auto">
                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Om Kårtegen
                        </Link>

                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Kårtegeordning
                        </Link>

                        <Link
                          href="/festivalen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Kårtegens väg
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>

          <Link
            href="/jobba"
            className="font-semibold leading-6 text-royal-yellow p-4"
          >
            Jobba på SOF
          </Link>
          <Link
            href="/fragor-svar"
            className="font-semibold leading-6 text-royal-yellow p-4"
          >
            Frågor & Svar
          </Link>
          <Link
            href="/kontakta-oss"
            className="font-semibold leading-6 text-royal-yellow p-4"
          >
            Kontakta oss
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        etst
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-royal-yellow hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-royal-yellow hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-royal-yellow hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
