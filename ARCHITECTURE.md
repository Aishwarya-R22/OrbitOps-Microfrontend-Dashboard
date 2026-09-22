# OrbitOps architecture

The application uses a shell-and-remotes micro-frontend model. The shell owns the page frame, protected navigation, authentication context, module loading, and error containment. Business capabilities live in independent `modules/*` folders and expose one default React boundary.

## Runtime composition

```text
Browser
  └─ Application shell
      ├─ Authentication session + role checks
      ├─ Shared navigation and design tokens
      ├─ Module registry and route contract
      └─ Lazy module boundary
          ├─ Dashboard
          ├─ User Management
          ├─ Analytics
          └─ Notifications
```

The current repository uses build-time federation via dynamic `import()` boundaries, producing separate browser chunks while sharing React, Lucide, and shell state. Each boundary is compatible with migration to Webpack/Rspack Module Federation: replace the matching registry loader with a remote import and keep the `ModuleProps` contract unchanged.

## Communication

- Shell-to-module: typed `ModuleProps`, including navigation commands.
- Module-to-module: published semantic events through `lib/module-contract.ts`; modules never import each other.
- Server state: HTTP API endpoints with cache headers and abortable client requests.
- Shared client state: session and navigation remain in the shell; feature-local state stays inside each module.
- Failures: `Suspense` owns loading states and `ModuleErrorBoundary` isolates remote failures.

## Deployment evolution

For separate repositories, publish each module as a versioned remote, expose its `index.tsx`, configure allowed origins and integrity checks, then update only its registry loader. Keep shared package versions pinned and enforce the manifest contract in CI.
