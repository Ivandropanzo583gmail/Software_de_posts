import { Suspense } from "react";
import RedirectPage from "./RedirectPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RedirectPage />
    </Suspense>
  );
}
