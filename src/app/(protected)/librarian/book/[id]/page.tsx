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
import UserBookDetail from "@/components/user/book";

export default function BookDetails({ params }: { params: { isbn: number } }) {
    const [book, setBook] = React.useState<Books>();
    // const [crimeHistory,setCrimeHistory]=useState<any[]>([])
    // const [temp, setTemp] = useState<any[]>([]);

    const getBookHistory = (id: number) => {
        fetch("http://localhost:3000/api/books/history/" + id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.error(err));
    }


    useEffect(() => {
        // fetch("http://localhost:3000/api/books/search")
        fetch("http://localhost:3000/api/books?isbn=" + params.isbn)
            .then((res) => res.json())
            .then((data) => {
                setBook(data[0])
                
                getBookHistory(data[0].id)
                console.log(data)
            })
            .catch((err) => console.error(err));
        

            // fetch('/api/crimeCRUD/fetchCrimeHistory')
            // .then((res) => res.json())
            // .then((data) => {
            //     setCrimeHistory(data.data);
            //     console.log(data);
            //     console.log(data.data)
            // })
            // .catch((err) => console.log(err));
    
            // for(let i=0;i<crimeHistory.length;i++){
            //     setTemp([...temp,crimeHistory[i]])
            // }
    }, [params.isbn]);

    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 90 },
    //     { field: 'C_DATE', headerName: 'Date', width: 150 },
    //     { field: 'C_DESC', headerName: 'Description', width: 150 },
    //     { field: 'C_LATITUDE', headerName: 'Latitude', width: 150 },
    //     { field: 'C_LONGITUDE', headerName: 'Longitude', width: 150 },
    //     { field: 'C_NAME', headerName: 'Name', width: 150 },
    //     { field: 'C_STATUS', headerName: 'Status', width: 150 },
    //     { field: 'C_TIME', headerName: 'Time', width: 150 },
    //     { field: 'C_TYPE', headerName: 'Type', width: 150 },
    //   ];

    // const rows =
    // crimeHistory.map((crime)=>{
    //         return(
    //             {
    //                 id:crime.C_ID,
    //                 C_DATE:crime.C_DATE,
    //                 C_DESC:crime.C_DESC,
    //                 C_LATITUDE:crime.C_LATITUDE,
    //                 C_LONGITUDE:crime.C_LONGITUDE,
    //                 C_NAME:crime.C_NAME,
    //                 C_STATUS:crime.C_STATUS,
    //                 C_TIME:crime.C_TIME,
    //                 C_TYPE:crime.C_TYPE
    //             }
    //         )
    //     })

    return (
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

            </div>

        </div>
    )
}