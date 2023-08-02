"use client";
import { Popover } from "@headlessui/react";

export function Example() {
  return (
    <div className="p-8">
      <Popover as="div" className="relative">
        <Popover.Button className="bg-black text-white p-4 rounded-md">
          Toggle Popover
        </Popover.Button>
        <Popover.Panel className="bg-blue-500 text-white p-4 rounded-md absolute top-full mt-4 left-0 h-64 w-64">
          Popover contents
        </Popover.Panel>
      </Popover>
    </div>
  );
}
