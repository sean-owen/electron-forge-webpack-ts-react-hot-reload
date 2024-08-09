import { createRoot } from 'react-dom/client';

// const root = createRoot(document.body);
// root.render(<h2>Hello from React! another what a weird bug</h2>);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <h2>Hello from React! test sean</h2>
);