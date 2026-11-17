import fs from "fs";

const files = fs.readdirSync("content").filter((f) => f.endsWith(".mdx"));
const suffix = " | StudyCalc";
let issues = 0;

for (const f of files) {
  const slug = f.replace(/\.mdx$/, "");
  const src = fs.readFileSync("content/" + f, "utf8");
  const fmMatch = src.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) {
    console.log("NO FRONTMATTER:", f);
    issues++;
    continue;
  }
  const fm = fmMatch[1];
  const titleM = fm.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
  const descM = fm.match(/description:\s*"((?:[^"\\]|\\.)*)"/);
  const slugM = fm.match(/slug:\s*"([^"]*)"/);
  const title = titleM ? titleM[1] : null;
  const desc = descM ? descM[1] : null;
  const fmSlug = slugM ? slugM[1] : null;
  const rendered = title ? title.length + suffix.length : null;
  const flags = [];
  if (!title) flags.push("NO TITLE");
  else if (rendered > 60) flags.push(`TITLE TOO LONG (${rendered})`);
  else if (rendered < 35) flags.push(`TITLE TOO SHORT (${rendered})`);
  if (!desc) flags.push("NO DESC");
  else if (desc.length < 140 || desc.length > 160) flags.push(`DESC LEN ${desc.length}`);
  if (fmSlug && fmSlug !== slug) flags.push(`SLUG MISMATCH fm="${fmSlug}" file="${slug}"`);
  if (flags.length) {
    console.log(slug, "->", flags.join("; "));
    issues++;
  } else {
    console.log(slug, "-> OK", `(title ${rendered}, desc ${desc.length})`);
  }
}
console.log("\nTotal files:", files.length, "| Issues:", issues);
