"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowLeft, FileText, User, Mail, Phone, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const mockApplicant = {
  id: "lead_123",
  name: "Rahul Sharma",
  email: "rahul@example.com",
  phone: "+91 9876543210",
  course: "B.Tech CSE",
  status: "PENDING",
  date: "2026-06-01",
  documents: [
    { name: "Aadhaar Card", status: "PENDING", url: "/file.svg" },
    { name: "10th Marksheet", status: "VERIFIED", url: "/file.svg" },
    { name: "12th Marksheet", status: "PENDING", url: "/file.svg" }
  ]
};

export default function ApplicationDetail() {
  const params = useParams();
  const router = useRouter();
  const [applicant, setApplicant] = useState(mockApplicant);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApprove = async () => {
    setIsProcessing(true);
    // Mock API call
    setTimeout(() => {
      setApplicant({ ...applicant, status: "DOCUMENT_VERIFIED" });
      toast.success("Applicant documents verified successfully!");
      setIsProcessing(false);
    }, 800);
  };

  const handleReject = async () => {
    setIsProcessing(true);
    // Mock API call
    setTimeout(() => {
      setApplicant({ ...applicant, status: "REJECTED" });
      toast.error("Application rejected.");
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.push('/admin/applications')} className="text-muted-foreground hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Button>
        <h2 className="text-2xl font-bold tracking-tight text-white">Application Details</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Applicant Details Panel */}
        <div className="space-y-6 lg:col-span-1">
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{applicant.name}</h3>
                  <p className="text-sm text-muted-foreground">ID: {applicant.id}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-200">{applicant.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-200">{applicant.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-200">{applicant.course}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">Actions</CardTitle>
              <CardDescription className="text-gray-400">Current Status: {applicant.status}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={handleApprove} 
                disabled={isProcessing || applicant.status === 'DOCUMENT_VERIFIED'}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/20"
              >
                <CheckCircle className="h-4 w-4 mr-2" /> Approve Documents
              </Button>
              <Button 
                onClick={handleReject} 
                disabled={isProcessing || applicant.status === 'REJECTED'}
                variant="destructive" 
                className="w-full shadow-lg shadow-red-900/20"
              >
                <XCircle className="h-4 w-4 mr-2" /> Reject Application
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Document Viewer Panel */}
        <div className="lg:col-span-2">
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg h-full">
            <CardHeader>
              <CardTitle className="text-white">Submitted Documents</CardTitle>
              <CardDescription className="text-gray-400">Review documents before approving the application.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {applicant.documents.map((doc, idx) => (
                  <div key={idx} className="border border-white/10 rounded-lg p-4 bg-black/20 hover:bg-black/40 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <span className="font-medium text-white">{doc.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full border ${doc.status === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30' : 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'}`}>
                        {doc.status}
                      </span>
                    </div>
                    {/* Mock Document Preview */}
                    <div className="h-40 bg-white/5 rounded flex items-center justify-center border border-dashed border-white/20">
                      <p className="text-muted-foreground text-sm">Preview not available in mock</p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="w-full bg-white/5 border-white/10 hover:bg-white/10">View Full</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
