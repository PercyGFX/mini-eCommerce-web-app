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
import Link from "next/link";
import { requestDeleteProduct } from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import alertSVG from "@/public/alert.svg";
import deleteSVG from "@/public/delete-icon.svg";
import editSVG from "@/public/edit-icon.svg";
import filledStarSVG from "@/public/starred.svg";
import starSVG from "@/public/star.svg";
import Image from "next/image";
import {
  toggleFavorite,
  requestFavorites,
} from "../store/slices/favourites.slice";

interface TableProps {
  products: IProduct[];
}

function Tables({ products }: TableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<string>("");

  const favorites = useSelector((state: any) => state.favourites);

  console.log(favorites, "favorites");

  // delete
  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(requestDeleteProduct(selectedId as any));
    setSelectedId("");
    setIsOpen(false);
  };

  // modal open
  const handleOpenModal = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedId(id);
    setIsOpen(true);
  };

  // toggle fav

  const handleToggleFavorite = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    dispatch(toggleFavorite(productId));
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
            <TableRow
              key={product._id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => (window.location.href = `/product/${product._id}`)}
            >
              <TableCell className="text-medium text-gray-500 font-semibold">
                {product.sku}
              </TableCell>
              <TableCell>
                <img
                  src={
                    `${process.env.NEXT_PUBLIC_BACKEND_API}/uploads/${product.mainImage}` ||
                    "/placeholder.png"
                  }
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
                    onClick={(e) => handleOpenModal(e, product._id)}
                  >
                    <Image
                      alt="delete"
                      src={deleteSVG}
                      className="h-5 w-5 min-w-[20px] min-h-[20px]"
                    />
                  </button>
                  <Link
                    href={`/edit/${product._id}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      alt="edit"
                      src={editSVG}
                      className="h-5 w-5 min-w-[20px] min-h-[20px]"
                    />
                  </Link>
                  <button
                    onClick={(e) => handleToggleFavorite(e, product._id)}
                    className="transition-transform hover:scale-110"
                  >
                    <Image
                      alt="star"
                      src={
                        favorites?.favorites?.includes(product._id)
                          ? filledStarSVG
                          : starSVG
                      }
                      className="h-5 w-5 min-w-[20px] min-h-[20px]"
                    />
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
          <ModalHeader className="flex flex-col items-center gap-1">
            <Image alt="alert" src={alertSVG} className="h-10 w-10" />
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
            <Button color="primary" onClick={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Tables;
