import PlanPage from "@/components/billing/plans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

const Plans = () => <PlanPage />;

export default Plans;
