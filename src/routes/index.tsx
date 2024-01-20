import { FileRoute } from '@tanstack/react-router';

const HomePage = () => {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
};

export const Route = new FileRoute('/').createRoute({
  component: HomePage
});
