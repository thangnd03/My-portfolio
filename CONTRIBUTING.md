# Contributing Guide

Thank you for your interest in contributing to `My-portfolio`. This guide explains how to get started and the development rules for this project.

## Requirements
- Node.js 18+ (LTS recommended)
- npm 9+
- Git 2.40+

## Quick Start
1. Fork and clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Verify production build:
   ```bash
   npm run build
   npm run preview
   ```

## Branch Strategy
- Default branch: `main`
- Features: `feat/<short-description>`
- Fixes: `fix/<short-description>`
- Docs only: `docs/<short-description>`
- Refactors: `refactor/<short-description>`

Open small, focused PRs with a single clear purpose.

## Commit Convention (Conventional Commits)
Use the following format:
```
<type>(optional scope): <subject>

[optional body]
[optional footer]
```
Allowed `type` values:
- `feat:` add a new feature
- `fix:` bug fix
- `docs:` docs only changes
- `style:` formatting (no logic changes)
- `refactor:` refactor without changing behavior
- `perf:` performance improvements
- `test:` tests (if/when added)
- `chore:` build/tools/config changes

Examples:
```
feat: add portfolio filtering
fix: resolve focus trap in MobileHeader
style: tidy Tailwind spacing in Sidebar
```

## Code Style & Linting
- Run ESLint before committing:
  ```bash
  npm run lint
  ```
- Do not leave warnings (`--max-warnings 0`).
- Do not keep `console.log` in production code.
- Avoid hardcoded values: prefer constants, props, or `src/data/`.
- Remove unused imports and variables.

## React Development Rules
- Use React functional components with hooks.
- Do not use `useEffect`/`useLayoutEffect` inside components in `src/components` or `src/pages`.
  - Side effects (timers, event listeners, external state sync) must live in custom hooks under `src/hooks/` (or `src/data/` where applicable).
- Prefer declarative data fetching hooks (e.g., SWR/React Query). Components should consume results only.
- Router is the source of truth for URLs; components should consume derived values only.
- Keep components under 150 lines; destructure props; ensure clear TS types (or PropTypes if applicable).

## Tailwind CSS Rules
- Use Tailwind only (minimize custom CSS).
- Mobile-first: `base`, then `sm:`, `md:`, `lg:`, `xl:`.
- Follow a 4px spacing grid (e.g., `p-4`, `m-4`, `gap-4`).
- Include `hover` and `focus` states for interactive elements.
- Maintain at least 4.5:1 color contrast.

## Accessibility (A11y)
- Use semantic HTML: `header`, `nav`, `main`, `section`, etc.
- Provide `alt` text for all images.
- Use appropriate `aria-*` attributes for complex interactions.
- Support full keyboard navigation (focus order, skip links when relevant).

## Performance
- Lazy-load images; prefer WebP.
- Consider `React.memo()` for frequently updated components.
- Keep bundle sizes minimal; use code splitting when needed.
- Always provide loading states for async operations.

## Error Handling
- Provide fallback UI for error states.
- Validate user inputs with clear error messages.
- Use Error Boundaries where appropriate.

## File Structure Guidelines
- Components: PascalCase (e.g., `HeaderSection.tsx`)
- Pages: PascalCase (e.g., `HomePage.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Directories to use: `src/components`, `src/pages`, `src/assets`, `src/utils`, `src/hooks`, `src/data`

## PR Checklist
Before submitting a PR, confirm:
- [ ] Single, clear purpose with focused changes
- [ ] Include UI screenshots/video if visual changes
- [ ] Describe accessibility considerations (keyboard, screen reader)
- [ ] Include loading and error states for async work
- [ ] Remove `console.log` and hardcoded values
- [ ] ESLint passes: `npm run lint`
- [ ] Conventional Commit messages used

## Issue Guidelines
When opening an issue, please include:
- Actual vs expected behavior
- Steps to reproduce (with minimal snippet/screenshot if possible)
- Environment details (browser/OS)
- Relevant logs/console errors (summarized if lengthy)

## License
This project is licensed under the terms in the repository's `LICENSE`. By contributing, you agree to those terms.

---
Questions or suggestions? Please open an Issue or start a Discussion. Thank you!

