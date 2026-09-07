import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { marqueeItems } from '../data/marqueeData';

export function TechStackPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const techCategories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend & Runtime' },
    { id: 'cloud', label: 'Cloud & Azure' },
    { id: 'web', label: 'Web & Frontend' },
    { id: 'data', label: 'Data & Database' },
    { id: 'devops', label: 'DevOps & AI Tooling' }
  ];

  const technologies = [
    {
      id: 'csharp',
      category: 'backend',
      name: 'C# 12 & .NET 8/9',
      tagline: 'Modern, fast, cross-platform language runtime',
      description: 'Primary language for our workshops. Covers records, pattern matching, collection expressions, AOT native compilation, and low-latency performance designs.',
      features: ['Native AOT compilation', 'Modern pattern matching', 'High throughput Kestrel', 'Cross-platform Linux & Windows']
    },
    {
      id: 'aspnet',
      category: 'backend',
      name: 'ASP.NET Core',
      tagline: 'High-throughput web API & microservices framework',
      description: 'Used by enterprise companies in Nepal and worldwide to serve billions of requests with minimal memory overhead and built-in dependency injection.',
      features: ['Minimal APIs', 'Built-in OpenAPI / Swagger', 'Robust middleware pipeline', 'Native rate limiting']
    },
    {
      id: 'azure',
      category: 'cloud',
      name: 'Microsoft Azure',
      tagline: 'Cloud-native infrastructure and PaaS',
      description: 'From Azure App Service and Azure Functions serverless triggers to Azure Kubernetes Service (AKS) and Azure Container Apps.',
      features: ['Azure Container Apps', 'Azure Functions v4', 'Cosmos DB multi-region', 'Virtual Network isolation']
    },
    {
      id: 'sqlserver',
      category: 'data',
      name: 'SQL Server & EF Core 8',
      tagline: 'Relational data modelling & high-performance ORM',
      description: 'Data modelling, database migrations, raw SQL interop, complex query interceptors, and index performance tuning.',
      features: ['Compiled queries', 'JSON columns support', 'Temporal tables', 'Optimized connection pooling']
    },
    {
      id: 'blazor',
      category: 'web',
      name: 'Blazor (Server & WebAssembly)',
      tagline: 'Full-stack interactive web apps with C#',
      description: 'Write rich client-side SPAs or real-time server-rendered web applications using pure C# instead of context-switching to JavaScript.',
      features: ['Component-driven UI', 'WebAssembly streaming', 'Bi-directional SignalR', 'Code reuse with backend models']
    },
    {
      id: 'frontend',
      category: 'web',
      name: 'React & Angular Integration',
      tagline: 'Pairing modern SPA frontends with .NET APIs',
      description: 'Best practices for securing enterprise SPAs with OAuth2 / OpenID Connect, TypeScript typings generation from Swagger, and high-speed JSON serialization.',
      features: ['JWT & Refresh token flows', 'BFF (Backend-for-Frontend)', 'Strict TypeScript contracts', 'Brotli compression']
    },
    {
      id: 'umbraco',
      category: 'web',
      name: 'Umbraco CMS',
      tagline: 'The open-source .NET CMS loved worldwide',
      description: 'Featured in our popular workshops. Flexible content modelling, extensible backoffice, and headless delivery architecture on top of ASP.NET Core.',
      features: ['Clean content tree', 'Headless REST / GraphQL', 'Custom block editors', 'Azure Blob media storage']
    },
    {
      id: 'devops',
      category: 'devops',
      name: 'Azure DevOps & GitHub Actions',
      tagline: 'Continuous integration and continuous deployment',
      description: 'Automated test runners, vulnerability scanning, multi-stage Docker builds, and zero-downtime deployment slots.',
      features: ['GitHub Actions workflows', 'Pull request automation', 'Container registry publishing', 'Blue/Green deployments']
    },
    {
      id: 'copilot',
      category: 'devops',
      name: 'GitHub Copilot & AI Tooling',
      tagline: 'Next-generation AI-assisted developer velocity',
      description: 'Pairing AI with daily C# engineering — from unit test generation with xUnit to refactoring enterprise monolithic controllers into Clean Architecture.',
      features: ['Context-aware suggestions', 'Workspace slash commands', 'Automated test scaffold', 'Documentation generation']
    }
  ];

  const filteredTech = technologies.filter((t) => {
    if (selectedCategory === 'all') return true;
    return t.category === selectedCategory;
  });

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <div className="page-badge">
            <span className="page-badge-dot"></span>
            Tech Stack
          </div>
          <h1 className="page-title">The Microsoft &amp; .NET Technology Ecosystem</h1>
          <p className="page-lead">
            Every talk, workshop, and hands-on session at .NET Hub Kathmandu is centered around modern, production-grade tools used by top engineering teams worldwide.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/events" className="btn btn-primary">
              See Upcoming Workshops →
            </Link>
            <a
              href="https://github.com/NET-Hub-Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Browse Repositories on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Tech Categories */}
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="events-detailed-grid">
            {filteredTech.map((tech) => (
              <div key={tech.id} className="event-card-rich reveal-up">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="event-tag-badge">{tech.category}</span>
                </div>
                <h3 className="event-card-title">{tech.name}</h3>
                <p style={{ fontSize: '0.86rem', fontWeight: '600', color: 'var(--accent)', marginBottom: '10px' }}>
                  {tech.tagline}
                </p>
                <p className="event-card-desc">{tech.description}</p>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)', marginBottom: '10px' }}>
                    Key Capabilities
                  </p>
                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                    {tech.features.map((f, idx) => (
                      <li key={idx} style={{ marginBottom: '5px' }}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Blueprint Card */}
          <div
            style={{
              background: '#0d1117',
              color: '#ffffff',
              borderRadius: 'var(--radius)',
              padding: '44px 36px',
              marginTop: '56px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <span className="section-tag" style={{ color: '#58a6ff' }}>Community Architecture Standard</span>
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '12px' }}>
              How We Structure Enterprise .NET Applications
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#8b949e', maxWidth: '720px', marginBottom: '32px' }}>
              Our workshops emphasize Clean Architecture with clear boundaries: Domain Entities at the core, Use Cases in Application layer, Infrastructure adapters for databases and external APIs, and presentation via Minimal Endpoints or Blazor.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px'
              }}
            >
              <div style={{ background: '#161b22', padding: '20px', borderRadius: '8px', border: '1px solid #30363d' }}>
                <h4 style={{ color: '#79c0ff', fontSize: '0.98rem', marginBottom: '6px' }}>1. Domain</h4>
                <p style={{ fontSize: '0.82rem', color: '#8b949e', margin: 0 }}>Entities, Value Objects, Domain Events, Aggregate Roots</p>
              </div>
              <div style={{ background: '#161b22', padding: '20px', borderRadius: '8px', border: '1px solid #30363d' }}>
                <h4 style={{ color: '#d2a8ff', fontSize: '0.98rem', marginBottom: '6px' }}>2. Application</h4>
                <p style={{ fontSize: '0.82rem', color: '#8b949e', margin: 0 }}>Commands, Queries, MediatR Handlers, Validation, DTOs</p>
              </div>
              <div style={{ background: '#161b22', padding: '20px', borderRadius: '8px', border: '1px solid #30363d' }}>
                <h4 style={{ color: '#7ee787', fontSize: '0.98rem', marginBottom: '6px' }}>3. Infrastructure</h4>
                <p style={{ fontSize: '0.82rem', color: '#8b949e', margin: 0 }}>EF Core DbContext, SQL Migrations, Azure Blob, SendGrid</p>
              </div>
              <div style={{ background: '#161b22', padding: '20px', borderRadius: '8px', border: '1px solid #30363d' }}>
                <h4 style={{ color: '#ffa657', fontSize: '0.98rem', marginBottom: '6px' }}>4. Web API &amp; UI</h4>
                <p style={{ fontSize: '0.82rem', color: '#8b949e', margin: 0 }}>ASP.NET Minimal Endpoints, Swagger, React / Blazor frontends</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
