"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Laptop, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-60 mix-blend-screen animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] opacity-60 mix-blend-screen animate-blob animation-delay-2000" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6 border-b border-white/5 bg-background/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Antigravity University
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Programs</Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Campus</Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">About Us</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:bg-white/10">Staff Login</Button>
          </Link>
          <Link href="/apply">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Apply Now</Button>
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center py-32 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Admissions for 2026-27 are now open
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Shape Your Future at <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-accent">
              Antigravity University
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience world-class education, state-of-the-art facilities, and a global community. 
            Begin your journey towards excellence today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/apply">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all w-full sm:w-auto">
                Start Application <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/status">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/5 border-white/10 text-white hover:bg-white/10 w-full sm:w-auto">
                Check Status
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-6xl w-full">
          {[
            { icon: Laptop, title: "Modern Campus", desc: "Equipped with the latest technology and learning labs." },
            { icon: Users, title: "Expert Faculty", desc: "Learn from industry leaders and experienced professors." },
            { icon: GraduationCap, title: "100% Placement", desc: "Guaranteed placement assistance for all top graduates." }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
