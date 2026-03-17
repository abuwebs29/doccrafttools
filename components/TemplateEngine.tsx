"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { TemplateDef } from "@/lib/templates";
import { fileToDataUrl } from "@/lib/fileToDataUrl";
import {
  exportDocx,
  exportHtml,
  exportMarkdown,
  exportTxt,
} from "@/lib/exportDocs";
import { generatePdf } from "@/lib/pdfGenerator";

/*
  IMPORTANT:
  This patch only fixes the build error caused by placing
  import Image before the "use client" directive.

  Replace the first lines of your existing components/TemplateEngine.tsx
  with the lines above, while keeping the rest of your current file unchanged.
*/
