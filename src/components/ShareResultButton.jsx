"use client";

import { useState } from "react";
import Button from "@/components/Button";

// No share/clipboard utility exists elsewhere in the codebase — this is the
// first one. Prefers the native share sheet where available, otherwise
// copies the summary text to the clipboard.
export default function ShareResultButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // User cancelled the share sheet — fall through to clipboard so the
        // button still does something useful.
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied — nothing more we can do silently.
    }
  }

  return (
    <Button variant="secondary" onClick={handleShare} className={className}>
      {copied ? "Copied!" : "Share Result"}
    </Button>
  );
}
