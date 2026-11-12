"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ToastContext";
import { Lock, Mail, ArrowRight, ShieldCheck, ArrowLeft, KeyRound, CheckCircle2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [email, setEmail] = useState("admin@zuvansoftsol.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Check if already authenticated via token
  useEffect(() => {
    const token = localStorage.getItem("zuvan_admin_token");
    if (token) {
      router.push("/admin");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      showToast("Please enter the admin password.", "error");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Invalid admin credentials.");
      }

      localStorage.setItem("zuvan_admin_token", data.token || "admin-active");
      localStorage.setItem("zuvan_admin_email", email || "admin@zuvansoftsol.com");
      showToast("Signed in successfully! Redirecting to Dashboard...", "success");
      router.push("/admin");
    } catch (err: any) {
      showToast(err.message || "Failed to sign in. Check password.", "error");
    } finally {
      setLoading(false);
    }
  };

  const useDefaultPasscode = () => {
    setPassword("zuvan@admin2026");
    showToast("Default passcode filled! Click Sign In.", "info");
  };

  if (checkingAuth) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-slate-100 via-white to-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 text-xs font-semibold text-slate-500 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Public Website</span>
          </Link>

          <div className="relative h-12 w-48 mx-auto mb-4">
            <Image
              src="/assets/images/logo-main-transparent.png"
              alt="Zuvan"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Portal</span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Zuvan Careers Admin
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to post new job openings and review candidate applications.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@zuvansoftsol.com"
                  required
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Password / Passcode
                </label>
                <button
                  type="button"
                  onClick={useDefaultPasscode}
                  className="text-[11px] font-bold text-blue-600 hover:underline"
                >
                  Use default
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Admin Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Access Box */}
          <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-1.5">
            <div className="flex items-center gap-2 font-bold">
              <KeyRound className="w-4 h-4 text-blue-700 flex-shrink-0" />
              <span>Instant Master Passcode</span>
            </div>
            <p className="text-blue-800 text-[11px] leading-relaxed">
              Default admin password: <code className="bg-white px-2 py-0.5 rounded border border-blue-300 font-bold text-slate-900 font-mono">zuvan@admin2026</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
