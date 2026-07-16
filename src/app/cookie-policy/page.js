import PageHeader from "@/components/PageHeader";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <PageHeader 
          title="Cookie Policy" 
          description="Last updated: 2026" 
        />

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10 space-y-6 text-slate-300 leading-relaxed">
          
          <h2 className="text-2xl font-bold text-white">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device (computer or mobile) when you visit websites. They help us make your browsing experience smoother, remember your preferences, and analyze how our visitors use the site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Cookies</h2>
          <p>
            We use cookies to improve your experience on StudyCalc. Specifically, cookies may be used for:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-slate-400">
            <li>Remembering your settings or input data on our calculators temporarily.</li>
            <li>Analyzing site performance and traffic via analytics platforms.</li>
            <li>Delivering relevant advertisements (such as Google AdSense) that match your interests.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">3. Managing Your Cookies</h2>
          <p>
            You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, please note that disabling cookies may affect the full functionality of some calculators or components.
          </p>

          <p className="pt-4 border-t border-slate-800 text-slate-400">
            For any further queries regarding our use of cookies, please contact us.
          </p>

        </div>
      </div>
    </main>
  );
}