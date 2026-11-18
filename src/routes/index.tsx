import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/site-page";

export const Route = createFileRoute("/")({ component: SitePage });
