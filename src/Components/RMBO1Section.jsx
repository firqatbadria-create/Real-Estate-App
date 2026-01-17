import React from "react";
import Mo1 from "../Components//images/mo1.avif";
import Mo2 from "../Components//images/mo2.avif";

const cn = (...c) => c.filter(Boolean).join(" ");

const posts = [
  {
    id: 1,
    tag: "Software",
    title: "Scaling Your Business with SaaS: Guide Growth and Flexibility",
    img: { Mo1 },
  },
  {
    id: 2,
    tag: "Software",
    title: "How SaaS Solutions Are Transforming Business Efficiency in 2024",
    img: { Mo2 },
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-semibold text-slate-800">
      {children}
    </span>
  );
}

function BlogCard({ post }) {
  return (
    <article
      className={cn(
        "group relative grid grid-cols-[240px_1fr] items-center gap-6",
        "rounded-2xl border border-slate-200 bg-white p-4 sm:p-5",
        "transition-all duration-300",
        "hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300",
        "hover:-translate-y-1"
      )}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl bg-slate-50">
        <img
          src={Mo1}
          alt={post.title}
          className={cn(
            "h-[190px] w-full object-cover",
            "transition-transform duration-300 ease-out",
            // "come near" on hover:
            "group-hover:scale-110"
          )}
        />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <Pill>{post.tag}</Pill>

        <h3
          className={cn(
            "mt-4 text-xl sm:text-2xl font-bold text-slate-900 leading-snug",
            "transition-colors duration-300",
            "group-hover:text-slate-950"
          )}
        >
          {post.title}
        </h3>

        {/* Optional: small hint line */}
        <p className="mt-3 text-slate-600">
          Read the full article and learn best practices for modern SaaS teams.
        </p>

        {/* Optional button */}
      </div>

      {/* Extra “visibility” overlay glow on hover */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl",
          "ring-0 ring-sky-300/0 transition duration-300",
          "group-hover:ring-2 group-hover:ring-sky-300/40"
        )}
      />
    </article>
  );
}

export default function BlogInsightSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="text-center">
          <Pill>Blog Insight</Pill>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            SaaS is Revolutionizing Modern <br className="hidden sm:block" />
            Business Operations
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
