"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { IProduct } from "../utils/types/products";

interface TableProps {
  products: IProduct[];
}

function Tables({ products }: TableProps) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(products, "products");

  const handleDelete = () => {
    // Handle delete logic here
    setIsOpen(false);
  };
  return (
    <div className="my-6 text-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20%] text-[#001EB9] font-semibold">
              SKU
            </TableHead>
            <TableHead className="w-[20%] text-[#001EB9] font-semibold">
              IMAGE
            </TableHead>
            <TableHead className="w-[20%] text-[#001EB9] text-left font-semibold">
              PRODUCT NAME
            </TableHead>
            <TableHead className="w-[20%] text-[#001EB9] font-semibold">
              QUANTITY
            </TableHead>
            <TableHead className="w-[20%] text-[#001EB9] text-right font-semibold"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className="text-medium text-gray-500 font-semibold">
                {product.sku}
              </TableCell>
              <TableCell>
                <img
                  src={product.mainImage}
                  alt={product.name}
                  width={66}
                  height={66}
                  className="rounded-lg"
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-3">
                  <button
                    className="text-blue-600"
                    onClick={() => setIsOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                  <button className="text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  <button className="text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* modal */}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} backdrop="blur">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            ARE YOU SURE?
          </ModalHeader>
          <ModalBody>
            <p>You will not be able to undo this action if you proceed!</p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="default"
              variant="bordered"
              onPress={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button color="primary" onPress={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Tables;
