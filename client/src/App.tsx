import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { Link, useLocation } from "wouter";
import { MessageCircle, Sparkles } from "lucide-react";
import { lazy, Suspense } from "react";
import BackToTopButton from "./components/BackToTopButton";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const AssistantPage = lazy(() => import("./pages/Assistant"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/:slug" component={Home} />
      <Route path="/partenaires" component={Home} />
      <Route path="/contact" component={Home} />
      <Route path="/mon-espace" component={Home} />
      <Route path="/assistant" component={LazyAssistant} />
      <Route path="/connexion" component={Home} />
      <Route path="/inscription" component={Home} />
      <Route path="/mot-de-passe-oublie" component={Home} />
      <Route path="/verification-email" component={Home} />
      <Route path="/confidentialite" component={Home} />
      <Route path="/mentions-legales" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function LazyAssistant() {
  return (
    <Suspense
      fallback={
        <main className="grid min-h-[100dvh] place-items-center bg-background px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Chargement de l’assistant…
          </p>
        </main>
      }
    >
      <AssistantPage />
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
          <BackToTopButton />
          <AssistantBubble />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

function AssistantBubble() {
  const [location] = useLocation();
  if (location === "/assistant") return null;
  return (
    <Link
      href="/assistant"
      aria-label="Ouvrir Global Impact Intelligence"
      className="assistant-bubble group fixed bottom-4 right-4 z-[90] flex size-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#202a25]/95 p-0 text-white shadow-2xl shadow-black/25 backdrop-blur-xl transition hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
    >
      <span className="relative grid size-7 shrink-0 place-items-center rounded-xl bg-amber-300/15 text-amber-200">
        <Sparkles className="size-4" />
        <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-emerald-400 ring-2 ring-[#202a25]" />
      </span>
      <span className="sr-only">
        <span className="block text-xs font-bold tracking-[0.08em]">
          Global Impact Intelligence
        </span>
        <span className="mt-0.5 block truncate text-[10px] text-slate-400">
          Ouvrir l’assistant
        </span>
      </span>
      <MessageCircle className="hidden size-4 text-amber-200" />
      <span className="sr-only">Ouvrir Global Impact Intelligence</span>
    </Link>
  );
}

export default App;
