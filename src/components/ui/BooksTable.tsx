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

function BooksTable() {
  const [books, setBooks] = useState<Books[]>();
  useEffect(() => {
    fetch("http://localhost:3000/api/books/search")
      .then((response) => response.json())
      .then((data) =>{ 
        setBooks(data)
        console.log(data)
    })
        .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden sm:table-cell">ISBN</TableHead>
            <TableHead className="hidden sm:table-cell">Quantity</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {books.map((book, index) => (
            <TableRow key={index}>
              <TableCell>
                <Image
                  alt={book[0].title}
                  className="hidden text-sm text-muted-foreground md:inline"
                  src={book[0].thumbnail}
                >
                  {book.isbn}
                </Image>
              </TableCell>
              <TableCell>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  {book[0].title}
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {book[0].isbn}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {book[0].quantity}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge className="text-xs">{book[0].available}</Badge>
              </TableCell>
              <TableCell className="" onClick={() => redirect(`/book/${book[0].isbn}`)}>
                <div className="p-2 w-fit rounded-lg hover:bg-slate-100">
                  <ChevronRight className="text-slate-900" />
                </div>
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
}

export default BooksTable;
