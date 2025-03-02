"use client"
import * as React from "react";
import Link from "next/link";
import {
  HiOutlineCollection,
} from "react-icons/hi";
import {
  History,
  PanelLeft,
  Search,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import RoleRoute from "@/components/RoleRoute";
import Logo from "@/components/icons/Logo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserBooksTable from "@/components/ui/UserBooksTable";
import { debounce } from "lodash";

function UserDashboard() {
  const [Filter, setFilter] = React.useState("");
  const [search, setSearch] = React.useState("");
  const handleSearchChange = debounce((e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }, 800);
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
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:p-3 md:w-max md:h-max bg-slate-100"
                >
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
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:p-3 md:w-max md:h-max "
                >
                  <History
                    strokeWidth={2}
                    className="text-slate-900 text-2xl"
                  />
                  <span className="sr-only">History</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">History</TooltipContent>
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
  
                <Link href="#" className="flex items-center gap-4 px-2.5">
                  <History
                    strokeWidth={2}
                    className="text-slate-900"
                    size={20}
                  />
                  History
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="text-2xl font-semibold">Users Dashboard</div>
        </header>
        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="relative flex-1 md:grow-0 flex items-end justify-start gap-2 w-full">
            <div className="w-2/3">
              <div className="text-slate-800 font-medium text-sm mb-2">
                Search for books
              </div>
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-full lg:w-full "
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="h-max">
              <div className="text-slate-800 font-medium text-sm mb-2">
                Filter books
              </div>
              <Select onValueChange={(value) => (
                  console.log(value), setFilter(value)
                )}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Filter by</SelectLabel>
                    <SelectItem value="title">Title</SelectItem>
                    <SelectItem value="author">Author</SelectItem>
                    <SelectItem value="genre">Genre</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"></div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <div className="text-slate-900 font-semibold text-xl ">
                  Recommended books for you
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardContent className="mt-10 overflow-y-scroll">
                    <UserBooksTable searchValue={search} filter={Filter} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
export default UserDashboard;
