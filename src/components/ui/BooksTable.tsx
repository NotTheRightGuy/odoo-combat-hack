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

function BooksTable({role}: {role: string}) {
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
  const path = role === "admin" ? "/admin/book/" : "/librarian/book/";
  return (
    <div>
      <Table className="h-[500px]">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden sm:table-cell">ISBN</TableHead>
            <TableHead className="hidden sm:table-cell">Quantity</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell">Year</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-scroll h-">
          {books?.map((book, index) => (
            <TableRow
              key={index}
              className="h-10 overflow-hidden cursor-pointer"
              onClick={() => {
                window.location.href = `${path}${book.id}`;
              }}
            >
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
              <TableCell className="hidden sm:table-cell">
                {book.publishedDate}
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
              <TableCell>
                <div className="p-2 w-fit rounded-lg hover:bg-slate-100">
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

export default BooksTable;
