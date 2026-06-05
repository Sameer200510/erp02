"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle, Clock, XCircle, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StatusPage() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsLoading(true);
    // Mock API lookup
    setTimeout(() => {
      // Simulate finding an application
      setStatus({
        id: trackingId,
        name: "Rahul Sharma",
        course: "B.Tech CSE",
        currentStatus: "DOCUMENT_VERIFIED", // PENDING, DOCUMENT_VERIFIED, PAYMENT_PENDING, ADMITTED
        dateApplied: "05-06-2026",
      });
      setIsLoading(false);
    }, 1000);
  };

  const getStatusIcon = (currentStatus: string) => {
    switch (currentStatus) {
      case 'ADMITTED': return <CheckCircle className="h-16 w-16 text-emerald-500" />;
      case 'REJECTED': return <XCircle className="h-16 w-16 text-red-500" />;
      default: return <Clock className="h-16 w-16 text-blue-500" />;
    }
  };

  const getStatusMessage = (currentStatus: string) => {
    switch (currentStatus) {
      case 'PENDING': return "Your application is currently under review by our admissions team.";
      case 'DOCUMENT_VERIFIED': return "Your documents have been verified! Please proceed to pay the admission fee.";
      case 'ADMITTED': return "Congratulations! Your admission is confirmed. Check your email for login credentials.";
      case 'REJECTED': return "Unfortunately, we could not proceed with your application at this time.";
      default: return "Processing...";
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] mix-blend-screen animate-blob" />
      </div>

      <div className="z-10 w-full max-w-xl">
        <div className="mb-8 text-center">
          <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Antigravity University
          </Link>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl text-white">Track Your Application</CardTitle>
            <CardDescription className="text-gray-400">
              Enter your tracking ID to see the real-time status of your admission.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-3 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Enter Tracking ID (e.g. APP123456)" 
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white focus-visible:ring-primary h-12"
                  required
                />
              </div>
              <Button type="submit" disabled={isLoading} className="h-12 px-6 bg-primary hover:bg-primary/90">
                {isLoading ? "Searching..." : "Track"}
              </Button>
            </form>

            {status && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-6 border-t border-white/10"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10">
                    {getStatusIcon(status.currentStatus)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {status.currentStatus.replace('_', ' ')}
                    </h3>
                    <p className="text-muted-foreground">
                      {getStatusMessage(status.currentStatus)}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Applicant Name</p>
                    <p className="text-sm font-medium text-white">{status.name}</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Course Applied</p>
                    <p className="text-sm font-medium text-white">{status.course}</p>
                  </div>
                </div>

                {status.currentStatus === 'DOCUMENT_VERIFIED' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
                    <Button className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/20">
                      Proceed to Pay Admission Fee <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
