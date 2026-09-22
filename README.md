# OrbitOps Micro-Frontend Dashboard

OrbitOps is a production-oriented React operations dashboard composed from independently maintained feature modules. It includes a shared application shell, lazy feature boundaries, authentication contracts, responsive navigation, API integration, isolated error handling, and consistent design tokens.

## Run locally

Requirements: Node.js 22.13 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production bundle with `npm run build` and run static analysis with `npm run lint`.

## Netlify deployment

Connect this repository from the Netlify dashboard. The included `netlify.toml` configures the production build, Node.js version, Next.js runtime, and publish output automatically. No manual publish-directory entry is required.

## Project structure

```text
app/                         Route entry, metadata, API endpoints
components/                  Application shell and error boundary
lib/                         Typed contracts, registry, shared event bus
modules/
  authentication/            Session and authorization contract
  dashboard/                 Overview and activity
  users/                     Searchable user-management table
  analytics/                 Performance and acquisition reporting
  notifications/             Alerts with read/empty-state behavior
public/                      Static assets
```

## Architecture

The shell-and-remotes design uses React `lazy()` and dynamic imports as a framework-native federation mechanism. Every feature compiles into a separate chunk, is loaded only on demand, and is isolated by `Suspense` plus an error boundary. React and UI dependencies remain shared in the shell, preventing duplicate runtimes. See [ARCHITECTURE.md](./ARCHITECTURE.md) for module contracts, communication, and the path to separately deployed Module Federation remotes.

Authentication is represented by a dedicated session boundary and role helpers. In the hosted environment, route access is protected by platform authentication; a conventional deployment can replace `modules/authentication/session.ts` with Auth.js, an OIDC provider, or a company gateway without changing feature modules.

## API and application states

`GET /api/dashboard` returns dashboard metrics and uses `stale-while-revalidate` caching. The overview makes an abortable request and falls back to cached display data on errors. The application includes route-level loading UI, module-level failure recovery, search empty states, notification empty states, and responsive mobile navigation.

## Production checklist

- Configure the real API base URL and server-side authorization.
- Replace the demo session adapter with the chosen identity provider.
- Add CSP, remote integrity/version checks, observability, and audit logging.
- Run build, lint, accessibility, component, and end-to-end checks in CI.
- Deploy each remote independently only after its manifest contract passes compatibility tests.

## Suggested five-day delivery plan

1. Foundation: shell, design tokens, routing, session contract.
2. Features: dashboard and user-management modules with APIs.
3. Reporting: analytics, notifications, module events, edge states.
4. Quality: responsive behavior, accessibility, performance, automated checks.
5. Release: integration verification, deployment, documentation, walkthrough.

## License

Internal evaluation project. Add the organization’s preferred license before public distribution.
