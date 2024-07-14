"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Badge } from "./badge";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Books } from "@/types/index";
import { useRouter } from "next/navigation";

function UserBooksTable() {
  const [books, setBooks] = useState<Books[]>();
  useEffect(() => {
    fetch("/api/books/")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center">
      <Table className="h-[500px] w-full">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden sm:table-cell">Author</TableHead>
            <TableHead className="hidden sm:table-cell">Genre</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-scroll">
          {books?.map((book, index) => (
            <TableRow key={index} className="h-10 overflow-hidden">
              <TableCell className="p-2">
                <div className="overflow-hidden rounded-sm w-full h-full">
                  <Image
                    alt={book.title}
                    width={70}
                    height={50}
                    className="hidden text-sm text-muted-foreground md:inline-block rounded-sm"
                    src={book.thumbnail}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  {book.title}
                </div>
              </TableCell>
              <TableCell>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  {book.authors}
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {book.categories.map((category) => (
                  <Badge
                    key={category}
                    className="bg-primary text-primary-foreground hover:bg-primary-100"
                  >
                    {category}
                  </Badge>
                ))}
              </TableCell>

              <TableCell onClick={() => redirect(`/book/${book.isbn}`)}>
                <div className="p-2 w-fit rounded-lg hover:bg-slate-100">
                  <ChevronRight className="text-slate-900" />
                </div>
              </TableCell>
            </TableRow>
          ))}
          {books?.map((book, index) => (
            <TableRow key={index} className="h-10 overflow-hidden">
              <TableCell className="p-2">
                <div className="overflow-hidden rounded-sm w-full h-full">
                  <Image
                    alt={book.title}
                    width={70}
                    height={50}
                    className="hidden text-sm text-muted-foreground md:inline-block rounded-sm"
                    src={book.thumbnail}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  {book.title}
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {book.isbn}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {book.quantity}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge
                  className={
                    book.available
                      ? "bg-green-100 text-green-700 hover:bg-green-100"
                      : "bg-red-100 text-red-700 hover:bg-red-100"
                  }
                >
                  {book.available ? "Available" : "Not Available"}
                </Badge>
              </TableCell>
              <TableCell className="p-0 flex items-center justify-center align-super">
                <div className="p-2 w-full rounded-lg  hover:bg-slate-100">
                  <ChevronRight className="text-slate-900" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserBooksTable;
