import { FadeIn } from './AnimatedCounter';

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-navy-900';
  const descColor = light ? 'text-cream-200' : 'text-navy-600';
  const subtitleColor = light ? 'text-accent-400' : 'text-accent-600';

  return (
    <FadeIn className={`mb-12 md:mb-16 ${alignClass}`}>
      {subtitle && (
        <p className={`text-sm font-semibold uppercase tracking-widest ${subtitleColor} mb-3`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold ${titleColor} mb-4 text-balance`}>
        {title}
      </h2>
      <div className={`accent-divider ${align === 'left' ? 'mx-0' : ''} mb-6`} />
      {description && (
        <p className={`text-lg max-w-2xl ${descColor} ${align === 'center' ? 'mx-auto' : ''} text-balance`}>
          {description}
        </p>
      )}
    </FadeIn>
  );
}
