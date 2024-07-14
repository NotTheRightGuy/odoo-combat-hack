"use client"
// "use client";
// import { useEffect } from "react"
// import Box from '@mui/material/Box';
// import { BarChart } from '@mui/x-charts/BarChart';

// export default function UserAnalytics({ params }: { params: { userId: string } }) {

//     useEffect(() => {
//         fetch("http://localhost:3000/api/userAnalytics/" + params.userId)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [params.userId])

//     const sample = [1, 10, 30, 50, 70, 90, 100];

//     return (
//         <Box sx={{ width: '100%', maxWidth: 500, display: 'flex', fontSize : 20 }}>
//             <BarChart
//                 series={[
//                     { data: [3, 4, 1, 6, 5], label: 'Series A1' },
//                 ]}
//                 width={600}
//                 height={350}
//                 borderRadius={16}
//                 // xAxis={[{ scaleType: 'band'}]}
//                 yAxis={[{ scaleType: 'linear', tickLabelStyle : {fontSize: 15, } }]}
//                 // xAxis={[{ scaleType: 'band' }]}

//             />
//         </Box>
//     );
// }
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
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
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { colors } from '@mui/material';

const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
];

const size = {
    width: 400,
    height: 200,
};

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function UserAnalytics() {

    const [userData, setUserdata] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3000/api/books")
            .then((res) => res.json())
            .then((data) => {
                setUserdata(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='w-screen flex bg-slate-50'>
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
            <div className='p-5'>
                <h1> Analytics </h1>
                <div className='flex gap-2 w-full justify-center'>
                    <div className='bg-white border rounded-md p-4 w-1/2'>

                        <BarChart
                            width={500}
                            height={300}
                            series={[
                                { data: pData },
                            ]}
                            xAxis={[{
                                data: xLabels,
                                // data : userData.history.date 
                                scaleType: 'band', disableTicks: true, disableLine: true
                            }]}
                            yAxis={[{
                                data: pData,
                                // data: userData.history.borrowedBooks,
                                disableLine: true, disableTicks: true, scaleType: 'linear'
                            }]}
                            colors={['#DBEAFE']}
                            // change the color of the bar on click

                            onItemClick={(e) => {
                                // colors={['#3B82F6']}
                                e.target.style.fill = '#3B82F6'
                                setTimeout(() => {
                                    e.target.style.fill = '#DBEAFE'
                                }, 1000)
                                
                            }}

                            borderRadius={16}
                            disableAxisListener={true}

                        />
                    </div>
                    <div className='bg-white border rounded-md flex flex-col p-4 w-1/2'>
                        <div>
                            <h1 className='font-bold text-lg'>
                                Issued Book Categories
                            </h1>
                            <p className='text-sm text-gray-700'>Type of books issued and diversification in distribution</p>
                        </div>

                        <PieChart series={[{ data, innerRadius: 50 }]} {...size}>

                        </PieChart>
                    </div>

                </div>
            </div>
        </div>
    );
}
