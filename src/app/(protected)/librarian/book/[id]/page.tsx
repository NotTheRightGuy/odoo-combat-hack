"use client"
import React, { useEffect } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
} from "lucide-react";
import Link from "next/link";
import { Books } from "@/types/index";
import { Button } from "@/components/ui/button";
import { DataGrid } from '@mui/x-data-grid';
// import { useRouter } from "next/router";


interface BookData {
    id: number;
    name: string;
    email: string;
    date_of_borrowing: string;
    expected_return_date: string;
    date_of_return: string;
    late_charge: number;
}

export default function BookDetails({ params }: { params: { id: number } }) {
    const [book, setBook] = React.useState<Books>();

    // const router = useRouter();


    const [bookHistory, setBookHistory] = React.useState<BookData[]>();

    const getBook = async () => {
        const res = await fetch("http://localhost:3000/api/books/history?id=" + params.id);
        const data = await res.json();
        setBookHistory(data);
        console.log(data, "dataaaaa")
    }

    useEffect(() => {
        fetch("http://localhost:3000/api/books?id=" + params.id)
            .then((res) => res.json())
            .then((data) => {
                setBook(data[0])
                getBook()
                console.log(data)
                console.log(bookHistory, "bookHistory")
            })
            .catch((err) => console.error(err));
    }, [params.id]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 90 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'date_of_borrowing', headerName: 'Borrow Date', width: 150 },
        { field: 'expected_return_date', headerName: 'Expected Return Date', width: 150 },
        { field: 'date_of_return', headerName: 'Return Date', width: 150 },
        { field: 'late_charge', headerName: 'Late Charge', width: 150 },
      ];

    const rows =
    bookHistory?.map((book : any)=>{
            return(
                {
                    id:book.id,
                    name:book.name,
                    email:book.email,
                    date_of_borrowing:book.date_of_borrowing,
                    expected_return_date:book.expected_return_date,
                    date_of_return:book.date_of_return,
                    late_charge:book.late_charge

                }
            )
        })
    
    return (
        <div>
            {
                !book ? <div> Book doesn't exist</div> : 
            
        <div className="flex w-screen">
            <aside className="inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Home className="h-5 w-5" />
                                    <span className="sr-only">Dashboard</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Dashboard</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    <span className="sr-only">Orders</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Orders</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Package className="h-5 w-5" />
                                    <span className="sr-only">Products</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Products</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Users2 className="h-5 w-5" />
                                    <span className="sr-only">Customers</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Customers</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <LineChart className="h-5 w-5" />
                                    <span className="sr-only">Analytics</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Analytics</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Settings className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
            <div className="p-8 flex flex-col gap-8 w-full">
                <h1 className="font-bold text-xl">Book detail & checkout </h1>
                <div className="flex justify-between w-full">
                    <div className="flex gap-2">

                        <img src={book?.thumbnail} alt="" className="rounded-xl h-40 w-28 object-none" />
                        <div className="flex justify-between flex-col p-2">
                            <h1 className="font-bold text-xl">
                                {book?.title}
                            </h1>
                            <div className="grid grid-cols-2 gap-3 gap-x-4 [&>*]:font-medium text-sm text-[#475579]">
                                <p> Categories : {book?.categories[0]} </p>
                                <p> ISBN : {book?.isbn} </p>
                                <p> Pages : {book?.pageCount} </p>
                                <p> Publishe Date : {book?.publishedDate} </p>
                                <p> Authors : {book?.authors.map((author) => { return author })} </p>
                                <p> Quantity : {book?.quantity} </p>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <Button className="bg-green-100 text-green-700"> Available </Button>
                        <Button onClick={
                            () => {
                                // router.push(`/librarian/book/analytics/${params.id}`)
                                window.location.href = `/librarian/analytics/${params.id}`
                            }
                        }> Analytics </Button>
                        <Button> Lend Book </Button>
                    </div>
                </div>
                <div>
                    <h1>
                        Description
                    </h1>
                    <p>
                        {book?.description}
                    </p>
                </div>
                <DataGrid rows={rows} columns={columns} />

            </div>

        </div>
        }
        </div>
        
    )
}