/**
 * External dependencies.
 */
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    progress: {
        delay: 1,
        color: '#e26040',
        includeCSS: true,
    },
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.jsx`,
            import.meta.glob('./pages/**/*.jsx')
        ),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
