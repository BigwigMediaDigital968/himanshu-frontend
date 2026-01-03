"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Cookies from "js-cookie";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ADMIN_EMAIL = "himanshu@gmail.com";
  const ADMIN_PASSWORD = "Himanshu@123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        Cookies.set("adminAuth", "true", {
          expires: 1, // 1 day
          sameSite: "strict",
        });
        router.push("/admin");
      } else {
        setError("Invalid email or password");
      }

      setLoading(false);
    }, 700);
  };

  return (
    <div>
      <Nav />
      <section className="   bg-[var(--med-light)]">
        {/* Decorative background */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--med-primary)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--med-primary)]/10 rounded-full blur-3xl" />

        <div className="relative z-10 py-10 flex items-center justify-center px-4">
          <div
            className="
            w-full max-w-5xl
            grid grid-cols-1 md:grid-cols-2
            bg-white/70 backdrop-blur-xl
            border border-[var(--med-border)]
            rounded-3xl
            shadow-2xl
            overflow-hidden
          "
          >
            {/* LEFT PANEL */}
            <div className="hidden md:flex flex-col justify-center p-12 bg-[var(--med-primary)] text-white">
              <h2 className="text-3xl font-bold mb-4">Admin Control Panel</h2>
              <p className="text-white/90 leading-relaxed max-w-sm">
                Secure access to manage content, users, and system settings.
                Only authorized administrators are allowed beyond this point.
              </p>

              <div className="mt-10 space-y-3 text-sm text-white/80">
                <p>✔ Secure admin-only access</p>
                <p>✔ Centralized management</p>
                <p>✔ Protected dashboard</p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[var(--med-primary)]">
                  Admin Login
                </h1>
                <p className="text-gray-600 text-sm mt-2">
                  Sign in to continue
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="abc@yourdomain.com"
                      className="
                      w-full pl-11 pr-4 py-3 rounded-xl
                      border border-gray-300
                      focus:ring-2 focus:ring-[var(--med-primary)]
                      focus:outline-none
                    "
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="
        w-full pl-11 pr-12 py-3 rounded-xl
        border border-gray-300
        focus:ring-2 focus:ring-[var(--med-primary)]
        focus:outline-none
      "
                    />

                    {/* Show / Hide */}
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading || !email || !password}
                  className="
                  w-full py-3 rounded-xl
                  bg-[var(--med-primary)]
                  text-white font-semibold
                  hover:bg-[var(--med-primary-dark)]
                  transition-all
                  disabled:opacity-70
                "
                >
                  {loading ? "Authenticating..." : "Login to Dashboard"}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-8">
                © {new Date().getFullYear()} Admin Panel • Secure Access
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
