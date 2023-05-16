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
        <div className="flex ml-2 lg:ml-0 lg:flex-1">
          <Link
            href="/"
            className="hover:rotate-6 transition-all"
            onClick={() => toggleMenu(false)}
          >
            <Image src="/logo.svg" alt="Logo" width={75} height={75} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 bg-royal-yellow mr-2 text-black"
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
                          href="/festivalen/schema"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Schema
                        </Link>

                        <Link
                          href="/festivalen/karta"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Karta
                        </Link>

                        <Link
                          href="/festivalen/mat"
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
                          href="/balkester"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Allmänt
                        </Link>

                        <Link
                            href="/balkester/intern-info"
                            className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Balkesterinformation
                        </Link>

                        <Link
                          href="/balkester/anmalda-balkestrar"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Balkestrar som kommer
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
                          href="/kartegen"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Om Kårtegen
                        </Link>

                        <Link
                          href="/kartegen/kartegeordning"
                          className="block font-semibold text-black p-2 hover:no-underline hover:bg-royal-yellow rounded-md"
                        >
                          Kårtegeordning
                        </Link>

                        <Link
                          href="/kartegen/vag"
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
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-wallpaper">
          <div className="px-2 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="hover:rotate-6 transition-all"
                onClick={() => toggleMenu(false)}
              >
                <Image src="/logo.svg" alt="Logo" width={75} height={75} />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 bg-royal-yellow text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 bg-gray-50">
                          Festivalen
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-2 bg-gray-50 -mt-2 pt-2 rounded-b-md pb-2">
                          <a
                            href="/festivalen"
                            className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Om Festivalen
                          </a>

                          <a
                            href="/festivalen/schema"
                            className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Schema
                          </a>

                          <a
                            href="/festivalen/karta"
                            className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Karta
                          </a>

                          <a
                            href="/festivalen/mat"
                            className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Mat på området
                          </a>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 bg-gray-50">
                          Balkester
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-2 bg-gray-50 -mt-2 pt-2 rounded-b-md pb-2">
                          <a
                            href="/balkester"
                            className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Allmänt
                          </a>

                          <a
                              href="/balkester/intern-info"
                              className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Balkesterinformation
                          </a>

                          <a
                            href="/balkester/anmalda-balkestrar"
                            className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Balkestrar som kommer
                          </a>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 bg-gray-50">
                          Kårtege
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-2 bg-gray-50 -mt-2 pt-2 rounded-b-md pb-2">
                          <a
                            href="/kartegen"
                            className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Om Kårtegen
                          </a>
                          <a
                            href="/kartegen/kartegeordning"
                            className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Kårtegeordning
                          </a>
                          <a
                            href="/kartegen/vag"
                            className="block font-semibold text-black p-1 pl-3 hover:no-underline hover:bg-royal-yellow"
                          >
                            Kårtegens väg
                          </a>{" "}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="/jobba"
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 bg-gray-50"
                  >
                    Jobba på SOF
                  </a>
                  <a
                    href="/fragor-svar"
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 bg-gray-50"
                  >
                    Frågor & Svar
                  </a>
                  <a
                    href="/kontakta-oss"
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 bg-gray-50"
                  >
                    Kontakta oss
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
