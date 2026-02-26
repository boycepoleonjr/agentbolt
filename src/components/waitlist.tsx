"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      await addDoc(collection(db, "waitlist"), {
        email: email.trim().toLowerCase(),
        source: "website",
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Waitlist error:", err);
      setErrorMsg("Something went wrong. Try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-[#a3a3a3]">
        <Check size={16} className="text-white" />
        <span>You&apos;re on the list. We&apos;ll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 bg-[#111111] border border-[#1a1a1a] rounded-md px-4 py-2.5 text-sm text-white placeholder:text-[#525252] focus:outline-none focus:border-[#333] transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? (
          <Loader2 size={14} className="animate-spin" />
        ) : (
          <>
            Join the Waitlist <ArrowRight size={14} />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 sm:absolute sm:mt-12">{errorMsg}</p>
      )}
    </form>
  );
}
