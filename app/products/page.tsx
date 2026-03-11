'use client';

import { useState } from 'react';
import { products, categories, type CategoryId } from '../data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<Set<number>>(new Set());

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.categories.includes(activeCategory as Exclude<CategoryId, 'all'>));

  function addToCart(id: number) {
    setCartItems((prev) => new Set(prev).add(id));
  }

  return (
    <main className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Page Header */}
      <section className="relative pt-36 pb-20 text-center overflow-hidden">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #b8944e40, transparent)' }} />

        {/* Background ornament */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, #b8944e 0%, transparent 60%)`,
          }}
        />

        <p
          className="text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: '#b8944e' }}
        >
          The Collection
        </p>
        <h1
          className="text-5xl md:text-7xl font-light tracking-wide mb-5"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Our Fragrances
        </h1>
        <p className="text-base max-w-md mx-auto leading-relaxed px-6" style={{ color: '#c4aa8a99' }}>
          Each bottle holds a story from the valley — crafted by hand, finished with care.
        </p>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px w-16" style={{ background: '#b8944e40' }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: '#b8944e' }} />
          <div className="h-px w-16" style={{ background: '#b8944e40' }} />
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="relative px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    border: `1px solid ${isActive ? '#b8944e' : '#b8944e30'}`,
                    background: isActive ? '#b8944e14' : 'transparent',
                    color: isActive ? '#d4ae72' : '#c4aa8a66',
                    letterSpacing: '0.15em',
                  }}
                >
                  {cat.label}
                  {isActive && (
                    <span
                      className="absolute inset-x-0 bottom-0 h-[1px]"
                      style={{ background: '#b8944e' }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Result count */}
          <p className="text-center mt-6 text-xs tracking-widest" style={{ color: '#c4aa8a44' }}>
            {filtered.length} {filtered.length === 1 ? 'fragrance' : 'fragrances'}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((product) => {
              const isHovered = hoveredId === product.id;
              const inCart = cartItems.has(product.id);

              return (
                <article
                  key={product.id}
                  className="relative flex flex-col transition-all duration-500 cursor-pointer group"
                  style={{
                    border: `1px solid ${isHovered ? '#b8944e60' : '#b8944e18'}`,
                    background: isHovered ? '#b8944e06' : '#0d0b0f',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div
                      className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] tracking-[0.2em] uppercase"
                      style={{
                        background:
                          product.badge === 'Limited Edition'
                            ? '#b8944e22'
                            : product.badge === 'New'
                            ? '#2a4a2a'
                            : '#1a2a3a',
                        border: `1px solid ${
                          product.badge === 'Limited Edition'
                            ? '#b8944e80'
                            : product.badge === 'New'
                            ? '#4a8a4a80'
                            : '#4a6a8a80'
                        }`,
                        color:
                          product.badge === 'Limited Edition'
                            ? '#d4ae72'
                            : product.badge === 'New'
                            ? '#8ab48a'
                            : '#8aaad4',
                      }}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Product image placeholder */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ height: '280px', background: product.gradient }}
                  >
                    {/* Central bottle silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Bottle shape */}
                      <div className="relative">
                        {/* Bottle neck */}
                        <div
                          className="mx-auto transition-all duration-500"
                          style={{
                            width: '24px',
                            height: '40px',
                            background: 'linear-gradient(180deg, #b8944e40 0%, #b8944e20 100%)',
                            border: '1px solid #b8944e50',
                            borderBottom: 'none',
                          }}
                        />
                        {/* Bottle stopper */}
                        <div
                          className="absolute -top-2 left-1/2 -translate-x-1/2"
                          style={{
                            width: '8px',
                            height: '8px',
                            background: '#b8944e80',
                            borderRadius: '50%',
                          }}
                        />
                        {/* Bottle body */}
                        <div
                          className="transition-all duration-500"
                          style={{
                            width: '70px',
                            height: '100px',
                            background: isHovered
                              ? 'linear-gradient(135deg, #b8944e30 0%, #b8944e18 50%, #b8944e28 100%)'
                              : 'linear-gradient(135deg, #b8944e20 0%, #b8944e10 50%, #b8944e18 100%)',
                            border: `1px solid ${isHovered ? '#b8944e60' : '#b8944e35'}`,
                            position: 'relative',
                          }}
                        >
                          {/* Label on bottle */}
                          <div
                            className="absolute inset-x-2 top-6 bottom-4 flex flex-col items-center justify-center gap-1"
                            style={{ borderTop: '1px solid #b8944e25', borderBottom: '1px solid #b8944e25' }}
                          >
                            <p
                              className="text-[7px] tracking-[0.15em] uppercase text-center leading-tight"
                              style={{ color: '#b8944e90', fontFamily: 'var(--font-serif)' }}
                            >
                              {product.name}
                            </p>
                            <p className="text-[6px] tracking-widest" style={{ color: '#b8944e50' }}>
                              EDP {product.ml}ml
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Shimmer overlay on hover */}
                    {isHovered && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(135deg, transparent 40%, #b8944e08 50%, transparent 60%)',
                          animation: 'shimmer 1.5s ease-in-out infinite',
                        }}
                      />
                    )}

                    {/* Corner ornaments */}
                    <div
                      className="absolute top-3 right-3 w-5 h-5 transition-opacity duration-300"
                      style={{
                        borderTop: '1px solid #b8944e40',
                        borderRight: '1px solid #b8944e40',
                        opacity: isHovered ? 1 : 0.4,
                      }}
                    />
                    <div
                      className="absolute bottom-3 left-3 w-5 h-5 transition-opacity duration-300"
                      style={{
                        borderBottom: '1px solid #b8944e40',
                        borderLeft: '1px solid #b8944e40',
                        opacity: isHovered ? 1 : 0.4,
                      }}
                    />
                  </div>

                  {/* Product info */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Name & tagline */}
                    <div className="mb-3">
                      <h2
                        className="text-xl font-light tracking-wide mb-1 transition-colors duration-300"
                        style={{
                          fontFamily: 'var(--font-serif)',
                          color: isHovered ? '#d4ae72' : 'var(--foreground)',
                        }}
                      >
                        {product.name}
                      </h2>
                      <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: '#b8944e80' }}>
                        {product.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: '#c4aa8a66' }}
                    >
                      {product.description}
                    </p>

                    {/* Notes — visible on hover */}
                    <div
                      className="mb-5 overflow-hidden transition-all duration-500"
                      style={{ maxHeight: isHovered ? '80px' : '0px', opacity: isHovered ? 1 : 0 }}
                    >
                      <div
                        className="py-3 px-4 text-[11px] space-y-1"
                        style={{ background: '#b8944e08', borderLeft: '1px solid #b8944e30' }}
                      >
                        <p style={{ color: '#b8944e' }}>
                          <span className="uppercase tracking-widest text-[9px] mr-2" style={{ color: '#b8944e60' }}>Top</span>
                          {product.topNotes.join(' · ')}
                        </p>
                        <p style={{ color: '#b8944e' }}>
                          <span className="uppercase tracking-widest text-[9px] mr-2" style={{ color: '#b8944e60' }}>Heart</span>
                          {product.heartNotes.join(' · ')}
                        </p>
                        <p style={{ color: '#b8944e' }}>
                          <span className="uppercase tracking-widest text-[9px] mr-2" style={{ color: '#b8944e60' }}>Base</span>
                          {product.baseNotes.join(' · ')}
                        </p>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-xl font-light"
                          style={{ color: '#d4ae72', fontFamily: 'var(--font-serif)' }}
                        >
                          ${product.price}
                        </p>
                        <p className="text-[10px] tracking-widest" style={{ color: '#c4aa8a44' }}>
                          {product.ml}ml EDP
                        </p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product.id);
                        }}
                        className="px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
                        style={{
                          background: inCart ? '#b8944e18' : 'transparent',
                          border: `1px solid ${inCart ? '#b8944e' : '#b8944e50'}`,
                          color: inCart ? '#d4ae72' : '#c4aa8a',
                        }}
                      >
                        {inCart ? 'Added ✓' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[1px] transition-all duration-500"
                    style={{
                      background: isHovered
                        ? 'linear-gradient(90deg, transparent, #b8944e, transparent)'
                        : 'transparent',
                    }}
                  />
                </article>
              );
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-sm tracking-widest" style={{ color: '#c4aa8a44' }}>
                No fragrances found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{ borderTop: '1px solid #b8944e15' }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #b8944e 0%, transparent 65%)' }}
        />
        <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8944e' }}>
          Not sure where to start?
        </p>
        <h2
          className="text-3xl md:text-4xl font-light mb-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Find Your Signature Scent
        </h2>
        <p className="text-sm mb-8 max-w-sm mx-auto" style={{ color: '#c4aa8a66' }}>
          Take our 60-second scent quiz and we'll match you with your perfect fragrance.
        </p>
        <button
          className="px-10 py-3.5 text-xs tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#b8944e18]"
          style={{
            border: '1px solid #b8944e',
            color: '#d4ae72',
          }}
        >
          Take the Quiz
        </button>
      </section>
    </main>
  );
}
