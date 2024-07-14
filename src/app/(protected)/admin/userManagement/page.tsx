"use client"
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

interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const users: UserData[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234-567-8901",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234-567-8902",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "+1 234-567-8903",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    phone: "+1 234-567-8904",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    phone: "+1 234-567-8905",
  },
];



function LibrarianDashboard() {
  const handleDeleteUser = (userId: number) => {
 
    console.log(`Delete user with ID: ${userId}`);
  };
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:p-3 md:w-max md:h-max "
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
                <Link
                  href="/admin/userManagement"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:p-3 md:w-max md:h-max bg-slate-100"
                >
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
        <main className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
    </div>
  );
}

export default LibrarianDashboard;

