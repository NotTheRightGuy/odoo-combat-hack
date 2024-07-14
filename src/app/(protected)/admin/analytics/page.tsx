"use client";
"use client";
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
import * as React from "react";

import Link from "next/link";
import {
  HiOutlineChartBar,
  HiOutlineCollection,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { PanelLeft, Trash2, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Logo from "@/components/icons/Logo";
import { BarChart } from "@mui/x-charts/BarChart";

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

  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Books } from "@/types/index";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { colors } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

const size = {
  width: 400,
  height: 200,
};

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function UserAnalytics() {
  const [userData, setUserdata] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/books")
      .then((res) => res.json())
      .then((data) => {
        setUserdata(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-20 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base bg-white"
          >
            <Logo className="scale-105" />
            <span className="sr-only">Library</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild className="mt-10">
                <Link href="/admin/dashboard">
                  <HiOutlineCollection
                    strokeWidth={2}
                    className="text-slate-900 text-2xl"
                  />
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
                  href="/admin/analytics"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:p-3 md:w-max md:h-max bg-slate-100"
                >
                  <HiOutlineChartBar
                    strokeWidth={2}
                    className="text-slate-900 text-2xl"
                  />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/admin/userManagement">
                  <HiOutlineUserGroup
                    strokeWidth={2}
                    className="text-slate-900 text-2xl"
                  />
                  <span className="sr-only">User management</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">User management</TooltipContent>
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
                  <User className="text-2xl text-slate-900" />
                  <span className="sr-only">Profile</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-20">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base bg-white"
                >
                  <Logo className="scale-105" />
                  <span className="sr-only">Library</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5">
                  <HiOutlineCollection
                    strokeWidth={2.5}
                    className="text-slate-900 "
                  />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <HiOutlineChartBar
                    strokeWidth={2.5}
                    className="text-slate-900"
                  />
                  Analytics
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5">
                  <HiOutlineUserGroup
                    strokeWidth={2}
                    className="text-slate-900"
                    size={20}
                  />
                  User management
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="text-2xl font-semibold">User Management</div>
        </header>
        <div className="flex gap-2 w-full justify-center">
          <div className="bg-white border rounded-md p-4 w-1/2">
            <BarChart
              width={500}
              height={300}
              series={[{ data: pData }]}
              xAxis={[
                {
                  data: xLabels,
                  // data : userData.history.date
                  scaleType: "band",
                  disableTicks: true,
                  disableLine: true,
                },
              ]}
              yAxis={[
                {
                  data: pData,
                  // data: userData.history.borrowedBooks,
                  disableLine: true,
                  disableTicks: true,
                  scaleType: "linear",
                },
              ]}
              colors={["#DBEAFE"]}
              // change the color of the bar on click

              onItemClick={(e) => {
                // colors={['#3B82F6']}
                e.target.style.fill = "#3B82F6";
                setTimeout(() => {
                  e.target.style.fill = "#DBEAFE";
                }, 1000);
              }}
              borderRadius={16}
              disableAxisListener={true}
            />
          </div>
          <div className="bg-white border rounded-md flex flex-col p-4 w-1/2">
            <div>
              <h1 className="font-bold text-lg">Issued Book Categories</h1>
              <p className="text-sm text-gray-700">
                Type of books issued and diversification in distribution
              </p>
            </div>

            <PieChart series={[{ data, innerRadius: 50 }]} {...size}></PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}
