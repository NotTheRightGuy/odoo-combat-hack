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

function UserBooksTable({
  searchValue = "",
  filter = "title",
}: {
  searchValue: string;
  filter: string;
}) {
  const [books, setBooks] = useState<Books[]>();
  useEffect(() => {
    fetch(`/api/books/?${filter}=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, [searchValue, filter]);
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
            <TableHead className="hidden sm:table-cell">Status</TableHead>
            <TableHead className="hidden sm:table-cell">Year</TableHead>
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
              <TableCell className="hidden sm:table-cell">
                {book.authors}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {book?.categories ? (
                  book.categories.map((category) => (
                    <Badge key={category} className="mr-1">
                      {category}
                    </Badge>
                  ))
                ) : (
                  <Badge className="mr-1">
                    Not Specified
                  </Badge>
                )}
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
              <TableCell className="">
                <div
                  className="p-2 rounded-lg w-max hover:bg-slate-100"
                  onClick={() => router.push(`/user/book/${book.id}`)}
                  role="button"
                >
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
