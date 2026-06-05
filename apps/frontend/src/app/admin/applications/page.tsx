"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Eye } from "lucide-react";

const mockApplications = [
  { id: "lead_123", name: "Rahul Sharma", email: "rahul@example.com", course: "B.Tech CSE", status: "PENDING", date: "2026-06-01" },
  { id: "lead_124", name: "Priya Patel", email: "priya@example.com", course: "BBA", status: "DOCUMENT_VERIFIED", date: "2026-06-02" },
  { id: "lead_125", name: "Amit Kumar", email: "amit@example.com", course: "MBA", status: "PAYMENT_VERIFIED", date: "2026-06-03" },
  { id: "lead_126", name: "Neha Singh", email: "neha@example.com", course: "B.Tech ECE", status: "ADMITTED", date: "2026-06-04" },
  { id: "lead_127", name: "Vikram Mehta", email: "vikram@example.com", course: "BCA", status: "REJECTED", date: "2026-06-05" },
];

export default function ApplicationsPage() {
  const [search, setSearch] = useState("");

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'PENDING': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'DOCUMENT_VERIFIED': return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
      case 'PAYMENT_VERIFIED': return 'bg-purple-500/20 text-purple-500 border-purple-500/30';
      case 'ADMITTED': return 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30';
      case 'REJECTED': return 'bg-red-500/20 text-red-500 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Manage Applications</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search applicants..."
              className="pl-8 w-[250px] bg-white/5 border-white/10 text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
        </div>
      </div>

      <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-white">Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-white/10 overflow-hidden">
            <Table>
              <TableHeader className="bg-black/20 hover:bg-black/20">
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="text-gray-400">ID</TableHead>
                  <TableHead className="text-gray-400">Applicant Name</TableHead>
                  <TableHead className="text-gray-400">Course</TableHead>
                  <TableHead className="text-gray-400">Date Applied</TableHead>
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-right text-gray-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockApplications.map((app) => (
                  <TableRow key={app.id} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell className="font-medium text-gray-300">{app.id}</TableCell>
                    <TableCell>
                      <div className="font-medium text-white">{app.name}</div>
                      <div className="text-xs text-muted-foreground">{app.email}</div>
                    </TableCell>
                    <TableCell className="text-gray-300">{app.course}</TableCell>
                    <TableCell className="text-gray-300">{app.date}</TableCell>
                    <TableCell>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(app.status)}`}>
                        {app.status.replace('_', ' ')}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/admin/applications/${app.id}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/20">
                          <Eye className="h-4 w-4 mr-2" /> View
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
