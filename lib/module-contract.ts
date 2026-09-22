export type ModuleId = 'dashboard' | 'users' | 'analytics' | 'notifications';
export type ModuleProps = { onNavigate: (module: ModuleId) => void };
export const moduleEvents = new EventTarget();
export function publish<T>(name: string, detail: T) { moduleEvents.dispatchEvent(new CustomEvent(name, { detail })); }
