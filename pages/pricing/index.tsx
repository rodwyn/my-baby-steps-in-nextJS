import Link from "next/link";
import { MainLayout } from "@/layouts/MainLayout";

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.jsx</code>
      </p>
    </MainLayout>
  );
}
