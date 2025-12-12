interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-base sm:mt-4 sm:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
