"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";
import ShareResultCard from "@/components/ShareResultCard";

// Renders the shareable result card off-screen and turns it into a
// downloadable PNG on click. html-to-image is dynamically imported so its
// cost is only paid the first time someone actually clicks the button, not
// on every page load of a calculator that has this feature.
//
// Save path prefers the native share sheet with the image file attached
// (works well on mobile — on iOS this lets a user share straight into
// Instagram Stories, not just save to Photos) and falls back to a plain
// Blob-URL download link, which covers desktop browsers and any mobile
// browser without Web Share's file support.
export default function DownloadResultCard({
  toolName,
  label,
  value,
  caption,
  fileName = "studycalc-result",
  className = "",
}) {
  const cardRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | working | done | error

  async function handleDownload() {
    if (!cardRef.current || status === "working") return;
    setStatus("working");

    try {
      const { toBlob } = await import("html-to-image");
      const blob = await toBlob(cardRef.current, { pixelRatio: 3 });
      if (!blob) throw new Error("Could not generate image.");

      const file = new File([blob], `${fileName}.png`, { type: "image/png" });

      if (
        typeof navigator !== "undefined" &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        try {
          await navigator.share({ files: [file], title: "StudyCalc Result" });
          setStatus("done");
          setTimeout(() => setStatus("idle"), 2000);
          return;
        } catch {
          // User cancelled the share sheet — fall through to a direct
          // download so the button still does something useful.
        }
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1000);

      setStatus("done");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  return (
    <>
      <Button
        variant="secondary"
        onClick={handleDownload}
        disabled={status === "working"}
        className={className}
      >
        {status === "working"
          ? "Preparing..."
          : status === "done"
          ? "Downloaded!"
          : status === "error"
          ? "Try Again"
          : "Download Card"}
      </Button>

      <div
        style={{ position: "fixed", top: 0, left: "-9999px", pointerEvents: "none" }}
        aria-hidden="true"
      >
        <ShareResultCard ref={cardRef} toolName={toolName} label={label} value={value} caption={caption} />
      </div>
    </>
  );
}
