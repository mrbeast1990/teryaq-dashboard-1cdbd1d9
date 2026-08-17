# Redesign Teryaq Reports Center

The goal is to polish the UI/UX of the Reports Center (`/reports`) while preserving all existing logic and API contracts. The design will be RTL-first, mobile-optimized, and use the existing Cairo-based design system.

## Proposed Changes

### 1. Reports Selection Screen
- **Logical Grouping**: Organize the 8 report types into three visual categories: المالية (Financial), الحسابات (Accounts), and المخزون (Inventory).
- **Interactive UI**: Use `CompactListCard` for each report type. Highlight the currently selected report if a selection persists.
- **Immediate scannability**: No search bar needed for these 8 reports; focus on direct access.

### 2. Report Configuration (Filters)
- **Compact Controls**: Use `DateRangeControl` and `FilterBar` for period and status selection.
- **Mobile optimization**: Ensure inputs are large enough for touch but compact enough for high information density.
- **Immediate Preview**: Show the configuration panel clearly above the report results.

### 3. Report Preview & Results
- **Visual Hierarchy**: Clear titles, period indicators, and a summary section (KPIs) at the top of results.
- **Dense Tables**: Implement professional data tables with:
  - Graceful text wrapping for long names.
  - Consistent number alignment (RTL-aware).
  - Standardized currency formatting (`13.000 د.ل`).
- **State Management**: Polished `LoadingState`, `EmptyState`, and `ErrorState` components.

### 4. Print & A4 Design
- **Dedicated Print Styles**: A4-optimized CSS (RTL, Cairo font, clean margins).
- **Business Document Look**: Pharmacy branding (صيدلية الترياق الشافي), report title, period, and print date in the header.
- **Mobile Print Action**: Add a clear, professional print button (sticky/floating where appropriate).

## Technical Details
- **Route**: `/reports` (Source: `src/routes/reports.tsx`).
- **Components**: Reuse `PageHeader`, `SectionHeader`, `CompactListCard`, `KPIGrid`, `DateRangeControl`, `SearchInput`, `StatusBadge`.
- **Logic Preservation**:
  - No changes to API endpoints or fetch methods.
  - Paginated inventory browsing remains intact.
  - Trading/Profit reports sourced from existing `/api/trading-profit`.
  - Invoice drill-down functionality preserved.

## Validation Plan
- [ ] Build & Typecheck: Ensure `npm run build` passes.
- [ ] Functional Check: All 8 report types generate correctly.
- [ ] UX Check: Verify mobile RTL layout and responsiveness.
- [ ] Print Check: Verify A4 CSS in browser print preview.
