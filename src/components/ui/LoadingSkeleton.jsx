export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-cream-200 p-6 animate-pulse">
      <div className="w-14 h-14 bg-cream-200 rounded-lg mb-5" />
      <div className="h-5 bg-cream-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-cream-100 rounded w-full mb-2" />
      <div className="h-4 bg-cream-100 rounded w-2/3" />
    </div>
  );
}

export function BlogSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-cream-200 overflow-hidden animate-pulse">
      <div className="h-48 bg-cream-200" />
      <div className="p-6">
        <div className="h-4 bg-cream-200 rounded w-1/4 mb-3" />
        <div className="h-6 bg-cream-200 rounded w-3/4 mb-3" />
        <div className="h-4 bg-cream-100 rounded w-full mb-2" />
        <div className="h-4 bg-cream-100 rounded w-2/3" />
      </div>
    </div>
  );
}
