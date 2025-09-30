export default function Loader(): JSX.Element {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-green-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-green-300 border-b-transparent animate-spin-slow"></div>
      </div>
    </div>
  );
}
